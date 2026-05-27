import {
  Smartphone, Code, Layers, Database,
  Wifi, Briefcase, GitBranch,
} from "lucide-react";

export const COLORS = {
  bg:            "#050B18",
  surface:       "#0D1B2E",
  primary:       "#00D4FF",
  secondary:     "#7C3AED",
  textPrimary:   "#F0F4F8",
  textSecondary: "#8892A4",
  border:        "rgba(0, 212, 255, 0.15)",
};

export const SKILLS = [
  { name: "Flutter",            icon: <Smartphone size={18} />, desc: "Cross-platform mobile development" },
  { name: "Dart",               icon: <Code size={18} />,       desc: "Language proficiency" },
  { name: "State Management",   icon: <Layers size={18} />,     desc: "BLoC, Provider, Riverpod" },
  { name: "Firebase",           icon: <Database size={18} />,   desc: "Auth, Firestore, Storage, FCM" },
  { name: "REST APIs & HTTP",   icon: <Wifi size={18} />,       desc: "Dio, http package" },
  { name: "Clean Architecture", icon: <Briefcase size={18} />,  desc: "SOLID principles" },
  { name: "Git & GitHub",       icon: <GitBranch size={18} />,  desc: "Version control" },
  { name: "UI/UX & Animations", icon: <Code size={18} />,       desc: "Custom painters, Hero, Lottie" },
  { name: "SQLite & Hive",      icon: <Database size={18} />,   desc: "Local databases" },
  { name: "QR Code & NFC",      icon: <Wifi size={18} />,       desc: "Hardware integrations" },
];

// [fromX, fromY, toX, toY, skillIdx] — right side: even indices, left side: odd
export const BRANCHES = [
  [350, 455, 605, 378, 0],
  [350, 355, 614, 276, 2],
  [350, 262, 605, 192, 4],
  [350, 182, 582, 128, 6],
  [350, 113, 550, 70,  8],
  [350, 428,  96, 353, 1],
  [350, 330,  86, 254, 3],
  [350, 242,  96, 172, 5],
  [350, 164, 118, 111, 7],
  [350, 102, 150,  62, 9],
];

export const PROJECTS = [
  {
    emoji: "💼",
    title: "Jobly — Job Hunting Platform",
    desc: "A full-featured job hunting platform that connects job seekers with employers.",
    bullets: [
      "Developed job search with advanced filtering and application tracking",
      "Built video profile feature for candidates to showcase themselves",
      "Designed responsive UI optimized for usability across all devices",
      "Collaborated with backend teams for secure, scalable delivery",
    ],
    tags: ["Flutter", "REST API", "BLoC", "Video Profile", "Clean Architecture"],
    github: "https://github.com/rami0988/jobly-app.git",
    drive: "https://drive.google.com/drive/folders/16DL0Go2ZNStLitU2OfgovxViJNRub8KY?usp=sharing",
    gradient: "linear-gradient(135deg, #00D4FF, #7C3AED)",
  },
  {
    emoji: "💧",
    title: "AquaStore — Water Delivery App",
    desc: "An e-commerce platform for ordering and delivering water products with real-time tracking.",
    bullets: [
      "Built product catalog with cart, ordering, and delivery tracking",
      "Implemented store management for vendors and delivery agents",
      "Designed clean, user-friendly UI for seamless shopping experience",
    ],
    tags: ["Flutter", "REST API", "State Management", "E-Commerce"],
    github: "https://github.com/rami0988/water_appfront.git",
    drive: "https://drive.google.com/drive/folders/1xJ-kbxId5j0MqE7aM-DZLbHlZftZe4iH?usp=sharing",
    gradient: "linear-gradient(135deg, #00D4FF, #0066CC)",
  },
  {
    emoji: "🧾",
    title: "Fatora — Digital Invoice App",
    desc: "Replaces paper receipts with smart digital invoices using QR Code and NFC technology.",
    bullets: [
      "Eliminated paper receipts by generating secure digital invoices",
      "Integrated QR Code scanning and NFC tap-to-pay/receive features",
      "Built real-time invoice history and management dashboard",
    ],
    tags: ["Flutter", "QR Code", "NFC", "Digital Invoicing", "Firebase"],
    github: "https://github.com/rami0988/fatora.git",
    drive: null,
    gradient: "linear-gradient(135deg, #7C3AED, #C026D3)",
  },
  {
    emoji: "📚",
    title: "E-Library — Digital Library App",
    desc: "A comprehensive digital library app for browsing, reading, and managing books electronically.",
    bullets: [
      "Built full book catalog with search, categories, and filters",
      "Implemented in-app reading experience with bookmarks and progress tracking",
      "Designed intuitive UI for a smooth reading journey",
    ],
    tags: ["Flutter", "SQLite", "Clean Architecture", "UI/UX"],
    github: null,
    drive: "https://drive.google.com/drive/folders/1TsPQv22XdwXv6Dlyx9BTZNtQVAPX-pyq?usp=sharing",
    gradient: "linear-gradient(135deg, #059669, #00D4FF)",
  },
];

export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];
export const NAV_IDS   = ["home", "about", "skills", "projects", "contact"];

export const TYPING_TITLES = [
  "Flutter Developer",
  "Mobile App Engineer",
  "Software Engineer",
  "UI/UX Enthusiast",
];
