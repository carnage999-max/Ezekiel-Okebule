// Single source of truth for CV-derived content. Keeping this separate from
// the components means the resume PDF and the site can never silently drift
// apart — update it here once.

export const profile = {
  name: "Ezekiel Okebule",
  title: "Software Engineer & Technical Lead",
  tagline: "Backend engineering · distributed systems · cloud infrastructure",
  summary:
    "Software Engineer and Technical Lead with 5+ years of programming experience, specialising in backend engineering, distributed systems, and cloud infrastructure. Experienced in leading development teams, architecting scalable systems, and delivering production web and mobile applications.",
  location: "Lagos, Nigeria",
  email: "jamesezekiel039@gmail.com",
  phone: "+2349159167551",
  phoneDisplay: "+234 9159167551",
  domain: "ezekielokebule.com",
  github: "https://github.com/carnage999-max",
  linkedin: "https://linkedin.com/in/ezekiel-okebule",
  x: "https://X.com/Ezekiel11011",
  resumeHref: "/resume/ezekiel-okebule-resume.pdf",
};

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Olabisi Onabanjo University",
  location: "Ago-Iwoye, Ogun State, Nigeria",
  dates: "2021 – 2025",
  grade: "4.44 / 5.00",
  project:
    "Accreditation management system (Django + PostgreSQL) — compliance tracking system with document analytics and reporting dashboards.",
  honor: "Best Graduating Student — Computer Science Department, 2025",
};

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  place: string;
  dateShort: string; // for the timeline rail
  dateFull: string; // for the detail panel
  current: boolean;
  bullets: string[];
};

// Oldest first — the timeline reads left-to-right as a career, not a feed.
export const experience: ExperienceEntry[] = [
  {
    id: "zuri",
    role: "Software Developer Intern",
    company: "Zuri Team",
    place: "Remote",
    dateShort: "Feb – Aug 2020",
    dateFull: "February 2020 – August 2020",
    current: false,
    bullets: [
      "Collaborated on backend API development and a CSV processing service within a remote engineering team.",
    ],
  },
  {
    id: "upwork",
    role: "Freelance Developer",
    company: "Upwork",
    place: "Remote",
    dateShort: "2021 – Dec 2025",
    dateFull: "2021 – December 2025",
    current: false,
    bullets: [
      "Delivered 12+ software projects across fintech, e-commerce, education, and business applications.",
      "Developed backend systems and payment integrations using Django, PostgreSQL, Stripe, Paystack, Flutterwave, and Monnify.",
    ],
  },
  {
    id: "goufer",
    role: "Backend Developer",
    company: "Goufer PLC",
    place: "Lekki, Lagos",
    dateShort: "May – Nov 2024",
    dateFull: "May 2024 – November 2024",
    current: false,
    bullets: [
      "Developed 15+ REST API endpoints supporting over 1,000 daily users and vendors.",
      "Implemented real-time messaging using Django Channels and WebSockets.",
      "Integrated Twilio phone verification, reducing fraudulent registrations by 40%.",
      "Optimised database queries and API performance, achieving a 35% improvement in response times.",
    ],
  },
  {
    id: "uma",
    role: "Lead Developer",
    company: "UltimateMobileApps",
    place: "Maine, US (Remote)",
    dateShort: "Sep 2025 – Present",
    dateFull: "September 2025 – Present",
    current: true,
    bullets: [
      "Lead a development team building and maintaining production full-stack web and mobile applications.",
      "Architect scalable backend systems using Python, Django REST Framework, PostgreSQL, and Redis.",
      "Manage remote physical server infrastructure hosting 70+ Dockerised services, overseeing deployments, security, monitoring, and system maintenance.",
      "Design and maintain CI/CD pipelines and cloud deployments across AWS ECS, App Runner, Amplify, S3, and CloudFront.",
      "Develop and integrate AI-powered features, including natural-language processing and personalised recommendation systems.",
      "Oversee architectural decisions, code reviews, and technical delivery across multiple projects.",
    ],
  },
  {
    id: "giggap",
    role: "Backend Developer",
    company: "GigGap Nigeria LTD",
    place: "Remote",
    dateShort: "Jan 2026 – Present",
    dateFull: "January 2026 – Present",
    current: true,
    bullets: [
      "Develop backend services for a skilled-professional marketplace using Python, Django, and Django REST Framework.",
      "Build and maintain RESTful APIs, database models, authentication flows, and business logic.",
      "Manage containerized infrastructure and cloud deployments using Docker and AWS.",
      "Collaborate with the engineering team on feature development, testing, debugging, and codebase maintenance.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  role?: string;
  dates: string;
  tech: string[];
  description: string;
  links: { label: string; href: string; kind: "web" | "app-store" | "play-store" | "github" }[];
  metric?: string;
  featured?: boolean;
  live?: boolean;
};

export const projects: Project[] = [
  {
    id: "nolimitflix",
    name: "NoLimitFlix",
    dates: "2025",
    tech: ["React Native", "Next.js", "PostgreSQL", "AWS"],
    description:
      "AI-powered, mood-based movie streaming platform built end-to-end. Users describe their mood in plain text and the app classifies that input via OpenRouter to surface matching films — designed as an MVP with a roadmap toward a watch-history learning model.",
    metric: "100+ downloads on Google Play",
    featured: true,
    live: true,
    links: [
      { label: "Web", href: "https://www.nolimitflix.com", kind: "web" },
      { label: "App Store", href: "https://apps.apple.com/sa/app/no-limit-flix/id6760540399", kind: "app-store" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.nolimitflix.app", kind: "play-store" },
    ],
  },
  {
    id: "bonfides",
    name: "Bonfides",
    role: "Founder & Software Engineer",
    dates: "2026 – Present",
    tech: ["Django REST Framework", "Next.js"],
    description:
      "API-first document execution and electronic signature platform. Designing document workflows, authentication, signing infrastructure, and developer-facing API integrations — architected for document security, auditability, and automation.",
    featured: true,
    live: false,
    links: [],
  },
  {
    id: "liberty-social",
    name: "Liberty Social",
    dates: "Oct 2025 – Present",
    tech: ["DRF", "Next.js", "AWS", "PostgreSQL", "Celery", "Redis", "Firebase"],
    description:
      "Full-stack social network with real-time messaging, social feeds, marketplaces, notifications, and media management. Asynchronous processing and WebSocket communication via Redis, Celery, and Django Channels.",
    live: true,
    links: [
      { label: "Web", href: "https://mylibertysocial.com", kind: "web" },
      { label: "App Store", href: "https://apps.apple.com/at/app/liberty-social/id1378315639", kind: "app-store" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.libertysocial.app", kind: "play-store" },
      { label: "GitHub", href: "https://github.com/carnage999-max/liberty-social", kind: "github" },
    ],
  },
  {
    id: "fractional",
    name: "Fractional",
    role: "Hedera Africa Hackathon",
    dates: "2025",
    tech: ["Hedera", "Next.js", "Smart Contracts", "Node.js"],
    description:
      "End-to-end Web3 platform where creators mint NFTs, issue fractional FT shares, and distribute dividends. Implements token association, on-chain rewards, and wallet-based payouts.",
    links: [
      { label: "Live Demo", href: "https://fractional-three.vercel.app", kind: "web" },
      { label: "GitHub", href: "https://github.com/carnage999-max/Fractional-", kind: "github" },
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Backend", items: ["Django", "Django REST Framework", "Celery", "Node.js", "Django Channels"] },
  { label: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"] },
  { label: "Databases & Caching", items: ["PostgreSQL", "MySQL", "Redis"] },
  { label: "Cloud Infrastructure", items: ["AWS", "GCP", "Docker", "Oracle Cloud"] },
  { label: "DevOps", items: ["GitHub Actions", "CI/CD", "Git", "Linux"] },
  { label: "AI Integration", items: ["LLM APIs", "OpenRouter", "NLP Integration"] },
  { label: "Testing", items: ["Pytest", "Postman", "API Testing"] },
];

export const researchInterests = [
  "Software Engineering",
  "Distributed Systems",
  "Cloud Computing",
  "Applied Artificial Intelligence",
  "Intelligent Software Systems",
];

export const stats = [
  { label: "Years building", value: "5+" },
  { label: "Projects shipped", value: "20+" },
  { label: "Dockerised services managed", value: "70+" },
];
