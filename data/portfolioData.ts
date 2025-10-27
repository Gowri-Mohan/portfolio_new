export interface Contact {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
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

// FIX: Added 'CommunityItem' interface to be used in the 'Community' component.
export interface CommunityItem {
  name: string;
  date: string;
  role: string;
  location?: string;
}

export interface PortfolioData {
  name: string;
  profile: string;
  contact: Contact;
  skills: {
    technical: SkillCategory;
    soft: SkillCategory;
  };
  projects: Project[];
  organizations: Experience[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  name: "Gowri Mohan",
  profile: "Determined student with an interest in problem-solving and exploring technologies based on curiosity, seeking growth in a dynamic tech environment.",
  contact: {
    email: "gowrimohankrishnan@gmail.com",
    phone: "+91 6282085183",
    github: "https://github.com/Gowri-Mohan", // TODO: Replace with actual Github link
    linkedin: "https://www.linkedin.com/in/gowri-mohan-079010234/" // TODO: Replace with actual LinkedIn link
  },
  skills: {
    technical: {
      title: "Technical Skills",
      skills: [
        "Python, C, C++, HTML",
        "Data Science, Feature Engineering, Machine Learning, Deep Learning, LLMs",
        "MySQL",
        "Linux shell scripting, GitHub version control",
        "Docker, Railway deployment"
      ]
    },
    soft: {
      title: "Soft Skills",
      skills: [
        "Teamwork and collaboration",
        "Effective communication",
        "Logical and solution-oriented thinking",
        "Creative and innovative problem-solving"
      ]
    }
  },
  projects: [
    {
      title: "Projects in Web Dev",
      date: "2024 - present",
      description: "",
      details: [
          "Built a full-stack gut health tracking web application using React, TypeScript, Node.js, Express, and PostgreSQL, with Google Gemini AI integration for personalized diet analysis. Deployed on Railway with Docker containerization, implementing JWT authentication, RESTful APIs, and responsive UI with Tailwind CSS. (https://guthealth-ai-tracker-9b5a.up.railway.app)",
          "A simple chatbot built with a Flask backend and React frontend using Ollama. (https://simple-cute-chatbot-experiment-production.up.railway.app)"
      ]
    },
    {
      title: "NavAI: A Unified Intelligent Framework for Voice-Driven Multimodal Navigation and Safety Assistance",
      date: "2025",
      description: "Engineered NavAI, an intelligent navigation assistant, by fine-tuning a Large Language Model (LLM) and implementing a Retrieval-Augmented Generation (RAG) framework to deliver a unified, personalized experience through voice and image queries."
    },
    {
      title: "Haptic navigation Belt for the Visually Impaired",
      date: "12/2024",
      description: "Developed an Arduino-based haptic navigation belt for the visually impaired, integrating ultrasonic sensors and vibratory feedback to provide real-time obstacle detection and guidance, enhancing mobility and spatial awareness."
    },
    {
        title: "FPGA Based DSP Operations with ADC Interface",
        date: "12/2024",
        description: "Implemented a real-time DSP system on an FPGA, integrating an ADC for signal acquisition and a 3-tap FIR filter for processing, achieving significantly lower latency compared to a software implementation."
    }
  ],
  organizations: [
    {
      company: "experion Technologies",
      role: "Intern in Web Dev",
      date: "08/2024 - 09/2024",
      location: "Trivandrum, India",
      description: "Developed a .NET web application that was containerized using Docker and deployed on Azure, providing hands-on cloud experience. The project helped refine problem-solving skills, strengthen time management, and enhance teamwork and communication through regular collaboration with cross-functional teams."
    },
    {
      company: "bios Hardware",
      role: "Content Writing, Trainee - OT Forensics",
      date: "11/2022 - 11/2023",
      location: "Amritapuri, India",
      description: "Served as the content writer for the club and as a trainee in OT Forensics during the first year of college. Gained valuable technical experience in cybersecurity, with a particular focus on forensics, and attended training sessions to become a cyber volunteer under the Ministry of Home Affairs."
    }
  ],
  education: [
    {
        institution: "Amrita School of Engineering",
        degree: "Electronics and Computer Engineering",
        details: "CGPA: 7.54/10"
    },
    {
        institution: "The School of The Good Shepherd",
        degree: "12th grade",
        details: "Passed with distinction under the Central Board of Secondary Education"
    },
    {
        institution: "Sri Sri Ravishankar Vidya Mandir",
        degree: "10th grade",
        details: "Passed with 92.6% under the Central Board of Secodary Education"
    }
  ]
};