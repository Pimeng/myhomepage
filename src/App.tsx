import { motion } from 'framer-motion';
import { Hero } from '@/sections/Hero';
import { TechStack } from '@/sections/TechStack';
import { SocialLinks } from '@/sections/SocialLinks';
import { Websites } from '@/sections/Websites';
import { GitHubContributions } from '@/sections/GitHubContributions';
import { GitHubProjects } from '@/sections/GitHubProjects';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* 简化背景 - 静态渐变 + 少量动画 */}
      <div className="fixed inset-0 -z-10">
        {/* 基础渐变背景 */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          }}
        />
        
        {/* 简化光晕 - 减少动画复杂度 */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 60%)',
            filter: 'blur(80px)',
            transform: 'translateZ(0)',
          }}
        />
        
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 60%)',
            filter: 'blur(80px)',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* 主内容 */}
      <main className="relative z-10">
        {/* Hero 区域 */}
        <Hero />

        {/* 技术栈 */}
        <TechStack />

        {/* GitHub 贡献图 */}
        <GitHubContributions />

        {/* GitHub 项目 */}
        <GitHubProjects />

        {/* 我的网站 */}
        <Websites />

        {/* 社交链接 */}
        <SocialLinks />

        {/* 页脚 */}
        <Footer />
      </main>
    </motion.div>
  );
}

export default App;
