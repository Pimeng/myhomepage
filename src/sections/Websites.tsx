import { motion } from 'framer-motion';
import { 
  BookOpen, Wrench, Briefcase, FileText, ArrowUpRight,
  type LucideIcon
} from 'lucide-react';
import { config } from '@/config';

// 图标映射
const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Wrench,
  Briefcase,
  FileText,
};

export function Websites() {
  const { websites } = config;

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
            <span className="gradient-text">我的网站</span>
          </h2>
          <p className="text-white/60 text-lg">探索我构建的项目</p>
        </motion.div>

        {/* 网站卡片网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {websites.map((site) => {
            const IconComponent = iconMap[site.icon] || Briefcase;
            
            return (
              <motion.a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group glass-card p-6 block gpu-layer"
                style={{ '--glow-color': site.color } as React.CSSProperties}
              >
                <div className="glow">
                  <div className="flex items-start justify-between mb-4">
                    {/* 图标 */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                      style={{ backgroundColor: `${site.color}20` }}
                    >
                      <IconComponent
                        className="w-7 h-7"
                        style={{ color: site.color }}
                      />
                    </div>

                    {/* 箭头 */}
                    <div className="w-10 h-10 rounded-full glass-frosted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-white/70" />
                    </div>
                  </div>

                  {/* 内容 */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-200">
                    {site.name}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                    {site.description}
                  </p>

                  {/* 底部装饰线 */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-b-2xl"
                    style={{ backgroundColor: site.color }}
                  />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
