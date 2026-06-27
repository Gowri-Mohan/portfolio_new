export interface Contact {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  link?: string;
  details?: string[];
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  details: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  date: string;
  location?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
}

export interface ExtraCurricular {
  title: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  subtitle: string;
  profile: string;
  contact: Contact;
  skills: SkillCategory[];
  projects: Project[];
  organizations: Experience[];
  education: Education[];
  volunteering: Volunteering[];
  certificates: Certificate[];
  languages: string[];
  extraCurriculars: ExtraCurricular[];
}

export const portfolioData: PortfolioData = {
  name: "Gowri Mohan",
  subtitle: "Full Stack Engineer | Electronics & Computer Engineering Student",
  profile: "Determined student with an interest in problem-solving and exploring technologies based on curiosity, seeking growth in a dynamic tech environment.",
  contact: {
    email: "gowrimohankrishnan@gmail.com",
    phone: "+91 6282085183",
    github: "https://github.com/Gowri-Mohan",
    linkedin: "https://www.linkedin.com/in/gowri-mohan-079010234/",
    portfolio: "https://gowri-mohan.github.io/portfolio_new"
  },
  skills: [
    {
      title: "Programming Languages",
      icon: "fa-code",
      skills: ["Python (Comfortable)", "C", "C++", "HTML"]
    },
    {
      title: "Web Development & Architecture",
      icon: "fa-laptop-code",
      skills: ["Django", "React", "MVC Architecture", "REST APIs"]
    },
    {
      title: "Databases & Caching",
      icon: "fa-database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
      title: "Cloud, DevOps & Tools",
      icon: "fa-cloud",
      skills: ["AWS", "Azure", "Docker", "Git/Bitbucket", "Jira", "Metabase"]
    },
    {
      title: "AI & Data Science",
      icon: "fa-brain",
      skills: ["Machine Learning", "Deep Learning", "Large Language Models (LLMs)"]
    },
    {
      title: "Soft Skills & Methodologies",
      icon: "fa-users-gear",
      skills: ["Agile/Scrum Framework", "Cross-functional Collaboration", "Mentorship-Driven Development", "Rapid Upskilling"]
    }
  ],
  projects: [
    {
      title: "OfflineStudy: A Self-Contained, On-Device AI Pipeline for Privacy-Preserving Document Analysis and Comprehension",
      date: "2025",
      description: "A native iOS app performing fully on-device document analysis using VisionKit OCR and a mobile-optimized CNN trained via transfer learning. Deployed with Core ML to classify Math vs. Text, dynamically routing content to offline summarization and arithmetic reasoning modules for real-time, privacy-preserving inference. (Hosted locally on iPhone).",
      tags: ["iOS", "VisionKit OCR", "CNN", "Core ML", "On-Device AI"]
    },
    {
      title: "NavAI: A Unified Intelligent Framework for Voice-Driven Multimodal Navigation and Safety Assistance",
      date: "2025",
      description: "Engineered a voice-first multimodal navigation assistant by fine-tuning a conversational LLM and designing a RAG-inspired contextual memory pipeline combining user preferences, location context, and external map APIs to generate real-time navigation responses from text, voice, and image-derived inputs.",
      tags: ["LLM Fine-Tuning", "RAG", "Contextual Memory", "Multimodal API"]
    },
    {
      title: "Full Stack Web App for Gut Health Tracking",
      date: "2024",
      description: "Built a full-stack gut health tracking web application with Google Gemini AI integration for personalized diet analysis. Implemented JWT authentication, RESTful APIs, and a responsive UI using Tailwind CSS. Containerized via Docker and deployed on Railway.",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Gemini AI", "Docker", "Railway", "Tailwind CSS"],
      link: "https://guthealth-ai-tracker-9b5a.up.railway.app"
    }
  ],
  organizations: [
    {
      company: "Efficient Capital Labs",
      role: "Full Stack Intern",
      date: "03/2026 – Present",
      location: "Bangalore, India",
      description: "Under the guidance of a senior mentor, spearheaded the transition to an event-driven architecture by introducing ECL's first Pub/Sub model using AWS SNS, Redis, and Celery, establishing a scalable data pipeline that seamlessly synced real-time engineering data for multiple downstream tasks. Optimized system latency and maintainability by migrating hardcoded configuration prompts into a PostgreSQL database, successfully resolving complex caching bottlenecks and significantly enhancing runtime configuration flexibility. Beyond these initial foundational tasks, actively contributed to the end-to-end development of the internal Lending Management System, gaining deep, hands-on domain knowledge of fintech operations, credit workflows, and financial data structures. Collaborated daily in an Agile environment to deliver these milestones alongside ongoing core contributions—participating in daily scrums, sprint planning, writing clean code, running CI/CD pipelines, and maintaining strict code quality standards within Bitbucket while continuously upskilling and expanding technical capabilities."
    },
    {
      company: "Experion Technologies",
      role: "Intern in Web Dev",
      date: "08/2024 – 09/2024",
      location: "Trivandrum, India",
      description: "Developed a .NET web application that was containerized using Docker and deployed on Azure, providing hands-on cloud experience. The project helped refine problem-solving skills, strengthen time management, and enhance teamwork and communication through regular collaboration with cross-functional teams."
    }
  ],
  education: [
    {
      institution: "Amrita School of Engineering",
      degree: "Electronics and Computer Engineering",
      details: "CGPA: 7.68/10 (Expected 08/2026)"
    },
    {
      institution: "The School of The Good Shepherd",
      degree: "12th Grade",
      details: "Grade 12 (Distinction under CBSE | 05/2022)"
    },
    {
      institution: "Sri Sri Ravishankar Vidya Mandir",
      degree: "10th Grade",
      details: "Grade 10 (92.6% under CBSE | 05/2020)"
    }
  ],
  volunteering: [
    {
      role: "Volunteering: AI In Healthcare class for 10th grade students",
      organization: "SSR Project",
      date: "Ongoing"
    },
    {
      role: "Intern for Upcycle event",
      organization: "Team Everest NGO",
      date: "10/2024"
    },
    {
      role: "Cyber Volunteer",
      organization: "Ministry of Home Affairs, India",
      date: "10/2023 – 11/2023"
    },
    {
      role: "Junior Red Cross Cadet",
      organization: "Junior Red Cross",
      date: "2018 – 2020",
      location: "Trivandrum, Kerala"
    }
  ],
  certificates: [
    {
      title: "Merit Certificate in English (Ranked in top 0.1% of students in Grade 10 public exam)",
      issuer: "CBSE"
    },
    {
      title: "HTML, CSS and Javascript for Web Developers",
      issuer: "Johns Hopkins University via Coursera"
    },
    {
      title: "Jupyter Notebook for Beginners",
      issuer: "Udemy"
    }
  ],
  languages: [
    "English (Fluent)",
    "Malayalam (Fluent)"
  ],
  extraCurriculars: [
    {
      title: "Creative Writing",
      description: "Consistent first-place awards at school level and Kerala Child Welfare Youth Fest."
    },
    {
      title: "Classical Music",
      description: "Trained in Carnatic music since age 5; awards in CBSE Youth Festival."
    },
    {
      title: "Classical Dance",
      description: "7 years of training in Bharatanatyam, Mohiniyattam, and Kuchipudi; awards/participation in district-level events."
    }
  ]
};