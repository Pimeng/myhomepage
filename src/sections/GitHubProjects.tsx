import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Star, 
  GitFork, 
  CircleDot, 
  Code2, 
  ExternalLink,
  Loader2
} from 'lucide-react';
import { config } from '@/config';

interface RepoData {
  name: string;
  description: string;
  stars: number;
  forks: number;
  openIssues: number;
  language: string;
  license: string | null;
  url: string;
}

interface GitHubProjectsProps {
  customProjects?: { owner: string; repo: string; customDescription?: string }[];
}

export function GitHubProjects({ customProjects }: GitHubProjectsProps) {
  const projects = customProjects || config.githubProjects;
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoDataPromises = projects.map(async (project) => {
          const response = await fetch(
            `https://api.github.com/repos/${project.owner}/${project.repo}`
          );
          
          if (!response.ok) {
            throw new Error(`Failed to fetch ${project.repo}`);
          }

          const data = await response.json();
          
          return {
            name: data.name,
            description: project.customDescription || data.description || '暂无描述',
            stars: data.stargazers_count,
            forks: data.forks_count,
            openIssues: data.open_issues_count,
            language: data.language,
            license: data.license?.name || null,
            url: data.html_url,
          };
        });

        const repoData = await Promise.all(repoDataPromises);
        setRepos(repoData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  // 语言颜色映射
  const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
      TypeScript: '#3178C6',
      JavaScript: '#F7DF1E',
      Python: '#3776AB',
      Go: '#00ADD8',
      Rust: '#DEA584',
      Java: '#007396',
      'C++': '#00599C',
      C: '#A8B9CC',
      'C#': '#239120',
      PHP: '#777BB4',
      Ruby: '#CC342D',
      Swift: '#FA7343',
      Kotlin: '#7F52FF',
      HTML: '#E34F26',
      CSS: '#1572B6',
      Shell: '#89E051',
      Vue: '#4FC08D',
      React: '#61DAFB',
    };
    return colors[language] || '#8B8B8B';
  };

  if (loading) {
    return (
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-white/50 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Github className="w-12 h-12 text-white/30 mx-auto mb-4" />
          <p className="text-white/50">无法加载项目数据</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">开源项目</span>
          </h2>
          <p className="text-white/60 text-lg">我在 GitHub 上的项目</p>
        </motion.div>

        {/* 项目卡片网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {repos.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group glass-card p-6 block gpu-layer"
            >
              {/* 头部 */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#333] flex items-center justify-center">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
                    {repo.name}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors duration-200" />
              </div>

              {/* 描述 */}
              <p className="text-white/60 text-sm mb-6 line-clamp-2 leading-relaxed">
                {repo.description}
              </p>

              {/* 统计信息 */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                {/* 编程语言 */}
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <Code2 
                      className="w-4 h-4" 
                      style={{ color: getLanguageColor(repo.language) }}
                    />
                    <span className="text-white/60">{repo.language}</span>
                  </div>
                )}

                {/* Stars */}
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/60">
                    {repo.stars >= 1000 
                      ? `${(repo.stars / 1000).toFixed(1)}k` 
                      : repo.stars}
                  </span>
                </div>

                {/* Forks */}
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4 text-blue-400" />
                  <span className="text-white/60">
                    {repo.forks >= 1000 
                      ? `${(repo.forks / 1000).toFixed(1)}k` 
                      : repo.forks}
                  </span>
                </div>

                {/* Issues */}
                <div className="flex items-center gap-1.5">
                  <CircleDot className="w-4 h-4 text-green-400" />
                  <span className="text-white/60">{repo.openIssues}</span>
                </div>
              </div>

              {/* 许可证 */}
              {repo.license && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-white/40 text-xs">{repo.license}</span>
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* 查看更多 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/${config.profile.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-frosted px-6 py-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 gpu-layer"
          >
            <Github className="w-5 h-5" />
            <span>查看更多项目</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
