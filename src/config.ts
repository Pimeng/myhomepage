export interface Config {
  // 个人信息
  profile: {
    name: string;           // 显示名称
    username: string;       // GitHub 用户名（用于获取贡献数据）
    title: string;          // 职位/头衔
    bio: string;            // 个人简介
    avatar: string;         // 头像 URL（可使用随机图片 API）
    location: string;       // 所在地
    email: string;          // 邮箱地址
  };

  // 技术栈
  techStack: {
    name: string;           // 技术名称
    icon: string;           // 图标名称（Lucide 图标）
    color: string;          // 主题色
    level: number;          // 熟练度 1-100
  }[];

  // 社交平台链接
  socialLinks: {
    name: string;           // 平台名称
    url: string;            // 链接地址
    icon: string;           // 图标名称
    color: string;          // 品牌色
    description?: string;   // 描述（可选）
  }[];

  // 个人网站列表
  websites: {
    name: string;           // 网站名称
    url: string;            // 网站链接
    description: string;    // 网站描述
    icon: string;           // 图标
    color: string;          // 主题色
  }[];

  // GitHub 项目展示
  githubProjects: {
    owner: string;          // 仓库所有者
    repo: string;           // 仓库名称
    customDescription?: string; // 自定义描述（可选，覆盖 API 获取的描述）
  }[];

  // 主题配置
  theme: {
    primaryColor: string;   // 主色调
    backgroundGradient: string[]; // 背景渐变色
    glassEffect: 'frosted' | 'fluid' | 'both'; // 玻璃效果类型
  };
}

export const config: Config = {
  // 个人信息
  profile: {
    name: "𝓟𝓲𝓶𝓮𝓷𝓰",
    username: "pimeng",
    title: "全栈开发者 & 开源爱好者",
    bio: "热爱Vibe（划",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1470458485&s=640",
    location: "广东，中国",
    email: "i@pmya.xyz"
  },

  // 技术栈
  techStack: [
    { name: "TypeScript", icon: "Code2", color: "#3178C6", level: 34 },
    { name: "React", icon: "Atom", color: "#61DAFB", level: 9 },
    { name: "Vue.js", icon: "Layers", color: "#4FC08D", level: 1 },
    { name: "Node.js", icon: "Server", color: "#339933", level: 43 },
    { name: "Python", icon: "Terminal", color: "#3776AB", level: 51 },
    { name: "Go", icon: "Zap", color: "#00ADD8", level: 12 },
    { name: "Rust", icon: "Cog", color: "#DEA584", level: 7 },
    { name: "Docker", icon: "Container", color: "#2496ED", level: 15 },
    { name: "Git", icon: "GitBranch", color: "#F05032", level: 43 },
    { name: "Linux", icon: "Monitor", color: "#FCC624", level: 69 },
  ],

  // 社交平台链接
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Pimeng",
      icon: "Github",
      color: "#333333",
      description: "查看我的开源项目"
    },
    {
      name: "哔哩哔哩",
      url: "https://space.bilibili.com/36191664",
      icon: "PlayCircle",
      color: "#FB7299",
      description: "观看我的视频"
    },
    {
      name: "QQ",
      url: "https://qm.qq.com/cgi-bin/qm/qr?k=hsFXJNxXDUkOKvBdb_cQWN0FoPJI2mvZ&s=1",
      icon: "MessageCircle",
      color: "#12B7F5",
      description: "联系我"
    },
    {
      name: "邮箱",
      url: "mailto:i@pmya.xyz",
      icon: "Mail",
      color: "#EA4335",
      description: "发送邮件"
    },
    {
      name: "抖音",
      url: "https://www.douyin.com/user/MS4wLjABAAAA9kP9Z27bew4pCG-EMcXvt53Pn3h8tHJ0RzcJypRLpbpvptCwiQAy8OOM99_sqICl",
      icon: "Music2",
      color: "#FF6B6B",
      description: "关注我"
    },
  ],

  // 个人网站列表
  websites: [
    {
      name: "博客",
      url: "https://blog.pmnet.work",
      description: "随便写的内容（",
      icon: "BookOpen",
      color: "#FF6B6B"
    },
    {
      name: "ADMIN Phira",
      url: "https://admin.phira.link",
      description: "PhiraMP多人服务器后台",
      icon: "Wrench",
      color: "#4ECDC4"
    },
    {
      name: "监测站",
      url: "https://monitor.pmnet.work",
      description: "看看服务器死了没",
      icon: "Server",
      color: "#45B7D1"
    },
    {
      name: "CheckMP",
      url: "https://checkmp.phira.link",
      description: "一个多人服务器测活API",
      icon: "CheckCircle",
      color: "#96CEB4"
    },
  ],

  // GitHub 项目展示
  githubProjects: [
    { owner: "Pimeng", repo: "tphira-mp" },
    { owner: "Pimeng", repo: "gphira-mp" },
    { owner: "Pimeng", repo: "wordle-plugin" },
    { owner: "Pimeng", repo: "classtable" },
  ],

  // 主题配置
  theme: {
    primaryColor: "#7cb3eb",
    backgroundGradient: ["#1a1a2e", "#364b86ff", "#2f64a5ff"],
    glassEffect: "both"
  }
};

export default config;
