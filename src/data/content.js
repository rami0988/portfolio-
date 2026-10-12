/* ------------------------------------------------------------------ */
/*  All editable content lives here — text, links, projects, timeline. */
/*  Change this file and the whole site updates.                       */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Rami Abdul Hamid",
  role: "Software Engineer · Mobile (Flutter) Developer",
  tagline: "B.Sc. Software Engineering · 3+ years shipping production apps",
  email: "rami.abd.alhamed.333@gmail.com",
  phone: "+963 988 795 032",
  github: "https://github.com/rami0988",
  linkedin: "https://www.linkedin.com/in/rami-abd-alhamed-442986204",
  cv: "/Rami_Abdul_Hamid_CV.pdf",
  location: "Damascus, Syria — open to relocation and international opportunities",
};

/* Rotating words in the hero headline. */
export const HERO_WORDS = ["ship", "scale", "feel native", "last"];

export const ABOUT = {
  bio: [
    "I'm a software engineer who builds mobile products end to end — from architecture decisions to the last pixel of polish. Flutter is my home turf: Clean Architecture, Bloc/Cubit and GetX state management, and REST/Firebase backends, shipped to both stores from one codebase.",
    "Over 3+ years I've shipped across HR, clean energy, recruitment, and event booking — most recently Enjo, an event ticketing app with native payment bridges for HyperPay, Apple Pay, and Google Pay. I care about code that's still easy to change six months later, and interfaces that feel effortless to the person holding the phone.",
  ],
  highlights: [
    "Clean Architecture & SOLID, applied on every project",
    "Bloc / Cubit and GetX state management",
    "Payment gateways — HyperPay, Apple Pay, Google Pay",
    "REST APIs, Firebase & push notifications (FCM)",
    "Hardware integrations — NFC, QR, camera & sensors",
    "Localization & full RTL, dark mode, multi-currency",
  ],
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "8", label: "Apps built & shipped" },
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
      "Flutter", "Dart", "Clean Architecture", "Bloc / Cubit",
      "GetX", "Localization & RTL", "NFC & QR", "Responsive UI",
    ],
  },
  {
    title: "Integrations & Backend",
    icon: "Server",
    blurb: "The services, payments, and platform plumbing behind the apps.",
    skills: [
      "HyperPay", "Apple Pay / Google Pay", "Native bridges (MethodChannels)",
      "Google & Apple sign-in", "RESTful APIs", "Firebase", "Push notifications (FCM)",
    ],
  },
  {
    title: "Tools & Practices",
    icon: "Wrench",
    blurb: "How the work stays reliable and maintainable.",
    skills: [
      "Git & GitHub", "Unit & widget testing", "Agile / Scrum", "Jira",
      "Postman", "Build flavors", "Play Store / App Store releases",
    ],
  },
];

/* Featured case studies — rendered as cards, expanded in a modal. */
export const FEATURED_PROJECTS = [
  {
    id: "enjo",
    name: "Enjo",
    kind: "Event Ticketing App",
    tagline: "Discover events, book tickets, pay in-app.",
    tags: ["Flutter", "Bloc / Cubit", "HyperPay", "Apple & Google Pay", "FCM"],
    gradient: "from-fuchsia-400/80 to-violet-600/80",
    icon: "Ticket",
    problem:
      "Event-goers were juggling separate channels to find events, buy tickets, and prove entry at the door — and each payment method they actually use meant another dead end at checkout.",
    solution:
      "A consumer app covering the whole journey: browse events, check out with card, Apple Pay, or Google Pay through HyperPay via custom native Android/iOS bridges (Flutter MethodChannels), then hold a QR ticket that's cached for offline access at the gate. Google & Apple sign-in plus guest mode, FCM notifications, Arabic/English with full RTL, dark mode, and multi-currency pricing — built on Clean Architecture with Bloc/Cubit, dependency injection, build flavors, and unit/widget tests.",
    results: [
      "Submitted to Google Play and the App Store — currently in store review",
      "Card, Apple Pay, and Google Pay checkout through one HyperPay integration",
      "QR tickets, PDF receipts, and paginated order history with filtering",
    ],
    links: { github: null, demo: null },
    private: true,
  },
  {
    id: "qr-scanner",
    name: "QR Scanner",
    kind: "Ticket Validation App",
    tagline: "Door-side ticket validation for event staff.",
    tags: ["Flutter", "QR", "Bloc / Cubit", "REST API"],
    gradient: "from-cyan-400/80 to-blue-600/80",
    icon: "ScanLine",
    problem:
      "Enjo's tickets needed a counterpart at the venue: staff had to validate every QR at the entrance, fast, without letting a ticket through twice.",
    solution:
      "A companion scanner app for event staff that reads a ticket's QR at the gate and resolves it against the backend in one pass — built as a focused, single-purpose tool so the scan-to-verdict loop stays quick under a queue.",
    results: [
      "Submitted to Google Play and the App Store — currently in store review",
      "Closes the loop between in-app ticket purchase and venue entry",
      "Designed for speed at the door — scan, verdict, next person",
    ],
    links: { github: null, demo: null },
    private: true,
  },
  {
    id: "logico",
    name: "Logico",
    kind: "HR Management App",
    tagline: "One app for a company's entire HR day-to-day.",
    tags: ["Flutter", "Bloc", "GetX", "Clean Architecture", "REST API"],
    gradient: "from-lime-400/80 to-emerald-600/80",
    icon: "Briefcase",
    problem:
      "HR teams were coordinating employee records and internal workflows across spreadsheets and chat threads — slow for managers and opaque for employees.",
    solution:
      "A Flutter HR management system with modules for employee data and internal workflows, built on Clean Architecture with Bloc/GetX so the codebase stays scalable and features ship without regressions. Delivered in step with cross-functional stakeholders to keep each module aligned with how the business actually operates.",
    results: [
      "Replaced the spreadsheet workflow with a single source of truth",
      "One codebase shipped to both Android and iOS",
      "A module structure the team can extend without rewrites",
    ],
    links: { github: null, demo: null }, // client project — add links if/when public
    private: true,
  },
  {
    id: "alhdara",
    name: "Alhdara",
    kind: "Solar Energy Platform",
    tagline: "NFC + QR field operations for solar installations.",
    tags: ["Flutter", "NFC", "QR", "GetX", "REST API"],
    gradient: "from-amber-400/80 to-orange-600/80",
    icon: "Sun",
    problem:
      "A solar energy company had no fast way to confirm that workshop and field jobs were actually completed — verification meant paperwork, phone calls, and trust.",
    solution:
      "A sales and service-request platform I owned end to end, from architecture through release. NFC and QR validation lets a technician confirm job completion with a tap or scan at the unit itself, and responsive, high-performance interfaces sit on RESTful backend APIs — designed for gloved hands in sunlight.",
    results: [
      "Manual verification effort cut by validating jobs on the spot",
      "Field data captured at the unit instead of transcribed later",
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
      "A job-matching platform with search and filtering tuned for usability, application tracking, and a video-profile feature that lets candidates present themselves in 60 seconds. Built alongside a backend team for a secure, scalable delivery.",
    results: [
      "Video profiles give employers signal before the first call",
      "Optimised search and filters cut irrelevant listings out",
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
    period: "Jun 2026 — Present",
    role: "Flutter Developer",
    org: "Innovatorz · Saudi Arabia (Remote)",
    points: [
      "Developed Enjo, a consumer app for discovering events, booking tickets, and paying online — submitted to Google Play and the App Store",
      "Integrated HyperPay checkout with card, Apple Pay, and Google Pay through custom native Android/iOS bridges (Flutter MethodChannels)",
      "Built the ticketing experience: offline-cached QR tickets, ticket and order PDF downloads, and order history with filtering and pagination",
      "Implemented Google & Apple sign-in, guest mode, FCM push notifications, Arabic/English with full RTL, dark mode, and multi-currency pricing",
      "Developed a companion QR Scanner app for validating event tickets at entry — also submitted to both stores",
      "Applied Clean Architecture with Bloc/Cubit, dependency injection, multiple build flavors, and unit/widget test coverage",
    ],
  },
  {
    period: "Sep 2025 — Apr 2026",
    role: "Flutter Developer",
    org: "Logico · Damascus, Syria",
    points: [
      "Developed an HR management system in Flutter, delivering modules for employee data and internal workflows",
      "Applied Clean Architecture and Bloc/GetX state management to keep the codebase scalable and maintainable",
      "Partnered with cross-functional stakeholders to align features with operational goals",
    ],
  },
  {
    period: "Sep 2024 — Sep 2025",
    role: "Flutter Developer",
    org: "Alhdara · Damascus, Syria",
    points: [
      "Owned end-to-end development of a solar energy sales and service request platform, from architecture through to release",
      "Engineered NFC and QR-based validation to confirm workshop and job completion in the field, reducing manual verification effort",
      "Delivered responsive, high-performance interfaces integrated with RESTful backend APIs",
    ],
  },
  {
    period: "Jan 2024 — Aug 2024",
    role: "Flutter Developer",
    org: "Forsa · Damascus, Syria",
    points: [
      "Built a job-matching platform with search, application tracking, and video-profile features",
      "Optimised search and filtering for usability, and collaborated with backend teams on secure, scalable delivery",
    ],
  },
  {
    period: "2020 — 2025",
    role: "B.Sc. Software Engineering",
    org: "University of Damascus",
    points: [
      "Coursework in data structures, algorithms, mobile app development, and software architecture",
      "Completed 8+ academic web and mobile projects",
    ],
  },
];

/* Certifications & languages — shown as a strip under the timeline. */
export const CREDENTIALS = {
  certifications: [
    "English Language Certificate — Level 5A, New Horizons Center",
    "Effective Business Website — HP LIFE",
    "Understanding Your Target Audience — HP LIFE",
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional working proficiency (Level 5A)" },
  ],
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
