export interface Project {
  slug: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  image?: string;
  imageContain?: boolean;
  href?: string;
}

export const projects: Project[] = [
  {
    slug: "coup-online.live",
    title: "Coup Online",
    period: "Feb 2026 – present",
    description:
      "Browser-based real-time implementation of the social deduction card game Coup. Real-time multiplayer architecture built on Server-Sent Events, with Firebase-backed game state synchronization.",
    tags: ["Next.js", "Express", "Firebase", "SSE"],
  },
  {
    slug: "gute-dinge-ki.app",
    title: "Gute Dinge KI",
    period: "Nov 2025 – present",
    description:
      "AI-powered platform that matches charitable project ideas with suitable funding foundations via a guided chat and hybrid search. Developed within TUM Social AI in partnership with Kulturator (Gute-Dinge-Stiftung).",
    image: "/socialAi.png",
    imageContain: true,
    tags: ["Next.js", "MongoDB", "Node.js", "RAG", "Auth0"],
  },
  {
    slug: "movara.app",
    title: "Movara",
    period: "Apr – Aug 2025",
    description:
      "Multi-sided web platform enabling university sports departments to offer events and students to register — customizable event management, Stripe payments, and third-party API integration. Built in the SEBA course at TUM.",
    image: "/Movara.png",
    imageContain: true,
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
  },
  {
    slug: "online-ide.tum",
    title: "Online IDE @ TUM",
    period: "Oct 2024 – Jan 2025",
    description:
      "A web-based IDE developed for a university project at TUM, offering an interactive coding environment on a microservice architecture.",
    tags: ["Angular", "Spring Boot", "Microservices", "CI/CD"],
  },
  {
    slug: "bachelor-thesis.pdf",
    title: "Bachelor Thesis",
    period: "Mar – Aug 2024",
    description:
      "Semantic segmentation of forest maps using a custom deep learning model based on U-Net. Graded within a B.Sc. finished as third best graduate of the year.",
    image: "/bachelor.png",
    tags: ["Python", "PyTorch", "Deep Learning", "U-Net"],
    href: "/Julian_Sibbing_Bachelor_Thesis.pdf",
  },
  {
    slug: "faster-optimizers.py",
    title: "Faster Optimizers",
    period: "May – Jun 2024",
    description:
      "Tool for visualizing various gradient descent optimizers in real time — watch SGD, Momentum and Adam race across loss surfaces.",
    image: "/optimizer.png",
    tags: ["Python", "Machine Learning", "NumPy"],
  },
  {
    slug: "govlearn.app",
    title: "GovLearn",
    period: "Sep 2023 – Feb 2024",
    description:
      "Training recommendation platform that connects government employees with tailored training programs in the digital space, including a custom release pipeline via GitHub Actions.",
    tags: ["React", "Spring Boot", "PostgreSQL", "GitHub Actions"],
  },
  {
    slug: "portfolio.tsx",
    title: "This Website",
    period: "Ongoing",
    description:
      "The site you are looking at — a personal portfolio built with Next.js and Tailwind CSS, redesigned in a retro-Apple builder style.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export const featuredSlugs = ["gute-dinge-ki.app", "movara.app", "bachelor-thesis.pdf"];

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Pactos",
    role: "Backend Engineer",
    location: "Munich",
    period: "Oct 2025 – Jan 2026",
    bullets: [
      "Built backend components as part of the Software Engineering & Applied AI Practical Course (TUM x Center for Software Engineering Excellence)",
      "Developed MVP features and iterated them into stable backend services",
    ],
  },
  {
    company: "Check24 Vergleichsportal GmbH",
    role: "Working Student Software Engineer",
    location: "Munich",
    period: "Jan 2025 – Jan 2026",
    bullets: [
      "Developed microservices integrating external banking interfaces in a large-scale platform",
      "Designed and implemented REST APIs using Java and Spring Boot",
      "Worked with distributed services and production infrastructure (Kubernetes, CI/CD)",
    ],
  },
  {
    company: "best practice consulting AG",
    role: "Working Student in Software Development",
    location: "Münster",
    period: "Apr 2023 – Aug 2024",
    bullets: [
      "Contributed to the development of three enterprise software products in a consulting environment",
      "Collaborated directly with clients to understand requirements and translate them into technical solutions",
      "Led technical presentations and product demos for solutions I helped develop",
    ],
  },
  {
    company: "best practice consulting AG",
    role: "Intern in IT Consulting",
    location: "Münster",
    period: "Feb 2023 – Apr 2023",
    bullets: ["Designed and implemented an SAP Fiori app"],
  },
  {
    company: "University of Münster — Chair of Data Science",
    role: "Tutor, 'Mathematics for Economists'",
    location: "Münster",
    period: "Oct 2022 – Mar 2023",
    bullets: ["Led weekly tutorials", "Reviewed and discussed exercise sheets"],
  },
  {
    company: "University of Münster",
    role: "Teaching Assistant, Math Preparatory Course",
    location: "Münster",
    period: "Sep 2022",
    bullets: [
      "Presented mathematical content to over 30 participants as preparation for university studies",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string[];
}

export const education: EducationEntry[] = [
  {
    degree: "M.Sc. Computer Science (Exchange)",
    school: "Seoul National University",
    location: "Seoul, South Korea",
    period: "Mar 2026 – Jun 2026",
    details: [
      "Courses: Reinforcement Learning, Machine Learning in Bioinformatics, Korean Culture",
      "Exchange semester during M.Sc. Information Systems at TUM",
    ],
  },
  {
    degree: "M.Sc. Information Systems",
    school: "Technical University of Munich",
    location: "Munich",
    period: "Oct 2024 – present",
    details: ["Focus: Machine Learning, Software Engineering & Entrepreneurship"],
  },
  {
    degree: "B.Sc. Information Systems",
    school: "University of Münster",
    location: "Münster",
    period: "Oct 2021 – Sep 2024",
    details: ["GPA: 1.4 (German scale)", "Third best graduate of the year"],
  },
  {
    degree: "Abitur",
    school: "Alexander-Hegius-Gymnasium Ahaus",
    location: "Ahaus",
    period: "Aug 2013 – Jun 2021",
    details: ["GPA: 1.8 (German scale)", "Advanced courses: Mathematics and Computer Science"],
  },
];

export const achievements = [
  "START HACK Munich 2025 — Lio AI Procurement Challenge Winner (1st Place)",
];

export const volunteering = [
  "TUM SOCIAL AI Club — Project Member",
  "WI-Net (Information Systems Network Münster) — Active member since 2021",
  "TUM Minga — Supporting international students in Munich through a buddy/mentoring program since March 2025",
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Backend", items: ["Java", "Spring Boot", "REST APIs", "SQL"] },
  { label: "Architecture", items: ["Microservices", "Distributed Systems", "API Integrations"] },
  { label: "DevOps", items: ["Kubernetes", "Docker", "CI/CD", "Git"] },
  { label: "Frontend", items: ["JavaScript", "React", "Next.js", "Angular"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  {
    label: "Machine Learning",
    items: ["Neural Networks", "Reinforcement Learning", "PyTorch", "TensorFlow"],
  },
  { label: "Languages", items: ["German (native)", "English (C1, TOEFL 108/120)"] },
];

export const urls = {
  github: "https://github.com/Mrjulss",
  linkedin: "https://www.linkedin.com/in/julian-sibbing/",
  email: "mailto:juliansibbing@web.de",
  cv: "/Julian_Sibbing_CV.pdf",
};