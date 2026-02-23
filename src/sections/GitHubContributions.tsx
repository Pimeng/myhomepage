import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Calendar } from 'lucide-react';

export function GitHubContributions() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (imageError) {
    return (
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass-fluid rounded-3xl p-8 text-center">
            <Github className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <p className="text-white/50">无法加载贡献数据</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-fluid rounded-3xl p-6 md:p-8 gpu-layer"
        >
          {/* 头部 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#333] flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">GitHub 贡献</h3>
                <p className="text-white/50 text-sm">@Pimeng</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-white/50" />
              <span className="text-white/50 text-sm">过去一年</span>
            </div>
          </div>

          {/* 贡献图 */}
          <div className="overflow-x-auto">
            {!imageLoaded && (
              <div className="h-32 bg-white/5 rounded-xl animate-pulse" />
            )}
            <img
              src="https://ghchart.rshah.org/Pimeng"
              alt="GitHub Contributions"
              className={`w-full min-w-[600px] ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isDarkMode ? 'dark' : 'light'}`}
              style={{
                filter: isDarkMode
                  ? 'invert(90%) hue-rotate(180deg) brightness(0.8)'
                  : 'none'
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
