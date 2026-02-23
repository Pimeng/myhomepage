import { motion } from 'framer-motion';
import { 
  Code2, Atom, Layers, Server, Terminal, Zap, Cog, Container, GitBranch, Monitor,
  type LucideIcon
} from 'lucide-react';
import { config } from '@/config';

// 图标映射
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Atom,
  Layers,
  Server,
  Terminal,
  Zap,
  Cog,
  Container,
  GitBranch,
  Monitor,
};

export function TechStack() {
  const { techStack } = config;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  };

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
            <span className="gradient-text">技术栈</span>
          </h2>
          <p className="text-white/60 text-lg">都会点，但是不精（</p>
        </motion.div>

        {/* 技术卡片网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {techStack.map((tech) => {
            const IconComponent = iconMap[tech.icon] || Code2;
            
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="glass-card p-5 group cursor-pointer gpu-layer"
                style={{ '--glow-color': tech.color } as React.CSSProperties}
              >
                <div className="glow">
                  {/* 图标 */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: `${tech.color}20` }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: tech.color }}
                    />
                  </div>

                  {/* 名称 */}
                  <h3 className="text-white font-semibold text-center mb-2 text-sm md:text-base">
                    {tech.name}
                  </h3>

                  {/* 熟练度条 */}
                  <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                      style={{ 
                        backgroundColor: tech.color,
                        width: `${tech.level}%`,
                      }}
                    />
                  </div>
                  <p className="text-white/40 text-xs text-center mt-1.5">
                    {tech.level}%
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
