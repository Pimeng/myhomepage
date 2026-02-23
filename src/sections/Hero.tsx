import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { config } from '@/config';

export function Hero() {
  const { profile } = config;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
      {/* 简化背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        {/* 头像 */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div 
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: 'linear-gradient(135deg, #6366F1, #EC4899)',
              filter: 'blur(20px)',
              transform: 'translateZ(0)',
            }}
          />
          <div className="relative glass-fluid rounded-full p-2">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* 名称 */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        {/* 职位 */}
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          {profile.title}
        </motion.p>

        {/* 简介 */}
        <motion.p
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {profile.bio}
        </motion.p>

        {/* 位置和邮箱 */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-white/50"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <div className="flex items-center gap-2 glass-frosted px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{profile.location}</span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 glass-frosted px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">{profile.email}</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
