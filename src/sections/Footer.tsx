import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
import { config } from '@/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-frosted rounded-2xl p-8 text-center gpu-layer"
        >
          {/* 装饰线 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
            <Code className="w-5 h-5 text-white/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* 版权信息 */}
          <p className="text-white/50 text-sm mb-2">
            &copy; {currentYear} {config.profile.name}. All rights reserved.
          </p>

          {/* 制作信息 */}
          <p className="text-white/30 text-xs flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using React & Tailwind CSS
          </p>

          {/* 备案信息 */}
          <p className="text-white/30 text-xs flex items-center justify-center gap-1">
            <a href="https://beian.miit.gov.cn">粤ICP备2025410684号-2</a><br />
          </p>
          <p className="text-white/30 text-xs flex items-center justify-center gap-1">
            <img src="/beian.png" alt="备案编号图标" className='w-3 h-3' /><a href="https://beian.mps.gov.cn/#/query/webSearch?code=44538102000130" rel="noreferrer" target="_blank">粤公网安备44538102000130号</a>
          </p>

          {/* 技术标签 */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs text-white/40 bg-white/5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
