/* ------------------------------------------------------------------ */
/*  All editable content lives here — text, links, projects, timeline. */
/*  Change this file and the whole site updates.                       */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Rami Abdul Hamid",
  role: "Flutter / Mobile Developer",
  tagline: "Software Engineering graduate · 2+ years shipping mobile apps",
  email: "rami.abd.alhamed.333@gmail.com",
  phone: "+963 988 795 032",
  github: "https://github.com/rami0988",
  linkedin: "https://www.linkedin.com/in/rami-abd-alhamed-442986204",
  cv: "/Rami_Abdul_Hamid_CV.pdf",
  location: "Open to international & European mobile roles — remote, hybrid, or relocation",
};

/* Rotating words in the hero headline. */
export const HERO_WORDS = ["ship", "scale", "feel native", "last"];

export const ABOUT = {
  bio: [
    "I'm a software engineer who builds mobile products end to end — from architecture decisions to the last pixel of polish. Flutter is my home turf: Clean Architecture, Bloc/GetX state management, and REST/Firebase backends, shipped to both stores from one codebase.",
    "Beyond mobile I work with Vue.js and NestJS, and I've been integrating AI/LLM features into products. I care about code that's still easy to change six months later, and interfaces that feel effortless to the person holding the phone.",
  ],
  highlights: [
    "Clean Architecture & SOLID, applied on every project",
    "Bloc, GetX, Provider & Riverpod state management",
    "REST APIs, Firebase & real-time backend integration",
    "Hardware integrations — NFC, QR, camera & sensors",
    "Vue.js + NestJS for web dashboards and APIs",
    "AI / LLM feature integration",
  ],
  stats: [
    { value: "2+", label: "Years of experience" },
    { value: "7", label: "Apps built & shipped" },
    { value: "4", label: "Industries served" },
  ],
};

/* Grouped skills — icon names map to lucide-react components in Skills.jsx. */
export const SKILL_GROUPS = [
  {
    title: "Mobile",
    icon: "Smartphone",
    blurb: "My core craft — production Flutter apps for iOS & Android.",
    skills: [
      "Flutter", "Dart", "Clean Architecture", "Bloc / GetX",
      "Provider / Riverpod", "SQLite & Hive", "NFC & QR", "Animations & Custom Painters",
    ],
  },
  {
    title: "Backend & Web",
    icon: "Server",
    blurb: "The services and dashboards behind the apps.",
    skills: [
      "REST APIs (Dio)", "Firebase — Auth / Firestore / FCM", "NestJS",
      "Vue.js", "AI / LLM integration", "Push notifications",
    ],
  },
  {
    title: "Tools & Practices",
    icon: "Wrench",
    blurb: "How the work stays reliable and maintainable.",
    skills: [
      "Git & GitHub", "SOLID principles", "Postman", "Figma → UI",
      "Agile teamwork", "Play Store / App Store releases",
    ],
  },
];

/* Featured case studies — rendered as cards, expanded in a modal. */
export const FEATURED_PROJECTS = [
  {
    id: "logico",
    name: "Logico",
    kind: "HR Management App",
    tagline: "One app for a company's entire HR day-to-day.",
    tags: ["Flutter", "Bloc", "Clean Architecture", "REST API", "FCM"],
    gradient: "from-lime-400/80 to-emerald-600/80",
    icon: "Briefcase",
    problem:
      "HR teams were coordinating attendance, leave requests, and employee records across spreadsheets and chat threads — slow for managers and opaque for employees.",
    solution:
      "A Flutter app with role-based experiences for employees and managers: attendance check-in, leave workflows with approvals, employee directory, and push notifications for every request state — built on Clean Architecture with Bloc so features ship without regressions.",
    results: [
      "Replaced the spreadsheet workflow with a single source of truth",
      "One codebase shipped to both Android and iOS",
      "Approval flows that used to take days now resolve in-app the same day",
    ],
    links: { github: null, demo: null }, // client project — add links if/when public
    private: true,
  },
  {
    id: "alhdara",
    name: "Alhdara",
    kind: "Solar Energy App",
    tagline: "NFC + QR field operations for solar installations.",
    tags: ["Flutter", "NFC", "QR", "GetX", "Firebase"],
    gradient: "from-amber-400/80 to-orange-600/80",
    icon: "Sun",
    problem:
      "Technicians and customers had no fast way to identify and manage individual solar units in the field — unit lookups meant paperwork and phone calls.",
    solution:
      "A Flutter app where a physical tap (NFC) or scan (QR) resolves straight to a unit's profile: status, history, and service actions. Firebase keeps unit data live across the team, and the flows were designed for gloved hands in sunlight.",
    results: [
      "Unit identification went from paperwork to a single tap or scan",
      "Field data is captured on the spot instead of transcribed later",
      "Hardware integration (NFC/QR) proven in real outdoor conditions",
    ],
    links: { github: null, demo: null },
    private: true,
  },
  {
    id: "forsa",
    name: "Forsa",
    kind: "Job-Matching App",
    tagline: "Matching candidates and employers, with video profiles.",
    tags: ["Flutter", "Bloc", "REST API", "Video", "Clean Architecture"],
    gradient: "from-sky-400/80 to-indigo-600/80",
    icon: "UserSearch",
    problem:
      "Job seekers get lost in text-only listings, and employers can't gauge a candidate before scheduling a call — matching was slow on both sides.",
    solution:
      "A job-matching platform with advanced search and filtering, application tracking, and a video-profile feature that lets candidates present themselves in 60 seconds. Built with Bloc and Clean Architecture alongside a backend team for a secure, scalable delivery.",
    results: [
      "Video profiles give employers signal before the first call",
      "Advanced filters cut irrelevant listings out of the search",
      "Application tracking keeps candidates informed at every stage",
    ],
    links: {
      github: "https://github.com/rami0988/jobly-app.git",
      demo: "https://drive.google.com/drive/folders/16DL0Go2ZNStLitU2OfgovxViJNRub8KY?usp=sharing",
    },
    private: false,
  },
];

/* Earlier builds — compact grid below the case studies. */
export const MORE_PROJECTS = [
  {
    name: "AquaStore",
    desc: "Water-delivery e-commerce with cart, ordering, vendor management, and delivery tracking.",
    tags: ["Flutter", "REST API", "E-Commerce"],
    github: "https://github.com/rami0988/water_appfront.git",
    demo: "https://drive.google.com/drive/folders/1xJ-kbxId5j0MqE7aM-DZLbHlZftZe4iH?usp=sharing",
  },
  {
    name: "Fatora",
    desc: "Digital invoicing that replaces paper receipts using QR scanning and NFC tap-to-receive.",
    tags: ["Flutter", "NFC", "QR", "Firebase"],
    github: "https://github.com/rami0988/fatora.git",
    demo: null,
  },
  {
    name: "E-Library",
    desc: "Digital library with full catalog search, in-app reading, bookmarks, and progress tracking.",
    tags: ["Flutter", "SQLite", "Clean Architecture"],
    github: null,
    demo: "https://drive.google.com/drive/folders/1TsPQv22XdwXv6Dlyx9BTZNtQVAPX-pyq?usp=sharing",
  },
];

export const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Flutter Developer",
    org: "Freelance & Contract",
    points: [
      "Delivered Logico (HR management) and Alhdara (solar energy, NFC/QR) end to end for client teams",
      "Owned architecture, state management, API integration, and store releases",
      "Integrated AI/LLM features and push-notification pipelines into production apps",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Mobile Developer",
    org: "Project work & team collaborations",
    points: [
      "Built Forsa, a job-matching platform with video profiles, alongside a backend team",
      "Shipped AquaStore (e-commerce) and Fatora (NFC/QR digital invoicing)",
      "Practiced Clean Architecture, Bloc, and code review in multi-developer repos",
    ],
  },
  {
    period: "Graduated",
    role: "B.Sc. Software Engineering",
    org: "Damascus University",
    points: [
      "Strong foundation in algorithms, data structures, and system design",
      "Graduation and course projects focused on mobile and full-stack development",
    ],
  },
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
