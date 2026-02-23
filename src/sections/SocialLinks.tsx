import { motion } from 'framer-motion';
import { 
  Github, PlayCircle, MessageCircle, Mail, Music2,
  type LucideIcon
} from 'lucide-react';
import { config } from '@/config';

// 图标映射
const iconMap: Record<string, LucideIcon> = {
  Github,
  PlayCircle,
  MessageCircle,
  Mail,
  Music2,
};

export function SocialLinks() {
  const { socialLinks } = config;

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-white/60 text-lg">在以下平台找到我</p>
        </motion.div>

        {/* 社交平台链接 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon] || MessageCircle;
            
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative gpu-layer"
              >
                {/* 主按钮 */}
                <div
                  className="glass-frosted w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:w-auto group-hover:px-4 group-hover:rounded-full"
                  style={{ '--glow-color': link.color } as React.CSSProperties}
                >
                  <div className="glow absolute inset-0 rounded-2xl group-hover:rounded-full transition-all duration-200" />
                  
                  <IconComponent
                    className="w-6 h-6 transition-colors duration-200 flex-shrink-0"
                    style={{ color: link.color }}
                  />
                  
                  {/* 展开内容 */}
                  <div className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-200 ease-out ml-0 group-hover:ml-3 whitespace-nowrap">
                    <div className="flex flex-col items-start">
                      <span className="text-white font-semibold text-sm">{link.name}</span>
                      {link.description && (
                        <span className="text-white/50 text-xs">{link.description}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
