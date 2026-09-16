export interface CareerChapterData {
  id: string;
  chapterNumber: number;
  title: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badgeColor: string;
  themeColor: string;
  tagline: string;
  shortSummary: string;
  narrative: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
  isShutdown?: boolean;
}

export const chaptersData: CareerChapterData[] = [
  {
    id: "tcs",
    chapterNumber: 1,
    title: "The Genesis: Enterprise Foundation",
    company: "TCS",
    role: "System Engineer / Developer",
    period: "Early Career",
    location: "India",
    badgeColor: "from-indigo-500 to-blue-600",
    themeColor: "#6366F1",
    tagline: "Building core domain expertise in Telecom & Siebel CRM",
    shortSummary: "Initiated professional trajectory in large-scale telecom systems, specializing in Siebel CRM configurations and enterprise business components.",
    narrative: "My enterprise technology journey began at Tata Consultancy Services (TCS), diving headfirst into complex telecom business operations. Here, I mastered Siebel CRM configuration, Open UI customization, Business Components, and workflows while executing high-volume customer care and order management flows.",
    responsibilities: [
      "Configured Siebel Business Components, Applets, Business Services, and Integration Objects for major telecom clients.",
      "Developed Open UI JavaScript enhancements to modernize legacy CRM interface workflows.",
      "Analyzed business requirements for Order Management and Service Request management domains.",
      "Collaborated on backend integration interfaces via REST APIs and Web Services."
    ],
    keyAchievements: [
      "Successfully configured high-volume telecom order processing flows with zero defect leakages.",
      "Earned early career recognition for rapid mastery of Siebel Open UI and scripting."
    ],
    technologies: ["Siebel CRM", "Siebel Open UI", "JavaScript", "SQL", "PL/SQL", "Telecom CRM"]
  },
  {
    id: "oracle",
    chapterNumber: 2,
    title: "The Enterprise Core: Siebel & Cloud Mastery",
    company: "Oracle",
    role: "Applications Developer / Software Engineer",
    period: "Mid-Career Milestone",
    location: "India",
    badgeColor: "from-red-500 to-amber-600",
    themeColor: "#EF4444",
    tagline: "Deepening core platform capabilities at the source",
    shortSummary: "A major career milestone working directly within Oracle's ecosystem, advancing Siebel CRM capabilities and cloud integrations.",
    narrative: "Transitioning to Oracle marked a pivotal milestone in my engineering evolution. Working directly with core Oracle technologies, I contributed to enterprise CX solutions, high-performance database queries, RESTful microservice bridges, and complex CRM feature sets. This phase cemented my deep technical expertise in enterprise system scalability.",
    responsibilities: [
      "Engineered core Siebel business services, workflows, and high-performance SQL/PLSQL integration queries.",
      "Built resilient integration bridges connecting Siebel CRM to modern RESTful web APIs and Cloud Infrastructure.",
      "Optimized enterprise data processing pipelines handling large-scale asset management records.",
      "Participated in architectural design reviews for Oracle CX and cloud integration paradigms."
    ],
    keyAchievements: [
      "Recognized for deep technical contributions in Siebel Open UI and performance optimization.",
      "Achieved multiple professional Oracle certifications during tenure."
    ],
    technologies: ["Siebel CRM", "Oracle CX", "OCI", "Java", "SQL", "PL/SQL", "REST APIs", "Order Management"]
  },
  {
    id: "shutdown",
    chapterNumber: 3,
    title: "The Intermission: Re-alignment & Growth",
    company: "Transition",
    role: "System Pause & Resurgence",
    period: "Career Pivot",
    location: "Global",
    badgeColor: "from-slate-600 to-slate-800",
    themeColor: "#64748B",
    tagline: "Every career has unexpected transitions",
    shortSummary: "A quiet moment of reflection, skill acceleration, and strategic pivot towards next-generation Cloud & GenAI architectures.",
    narrative: "When unexpected corporate restructuring led to an abrupt departure from Oracle, I treated the event not as a setback, but as an operational reset. I used this intermission to double down on modern engineering pillars—upskilling in GenAI, OCI Data Science, Kafka stream processing, Vector databases, and Golang.",
    responsibilities: [
      "Completed 4 advanced certifications in OCI Generative AI, Java SE 17, Redwood Applications, and Data Science.",
      "Architected innovative proof-of-concepts, including a Golang file-based database engine and GenAI HLD generator.",
      "Refined architecture methodologies for scalable, cloud-native enterprise systems."
    ],
    keyAchievements: [
      "Attained 4 cloud & AI certifications during the transition period.",
      "Expanded engineering stack to include Python, Golang, Vector DBs, and Kafka."
    ],
    technologies: ["GenAI", "Vector DBs", "OCI AI", "Golang", "Kafka", "Python", "Java SE 17"],
    isShutdown: true
  },
  {
    id: "deloitte",
    chapterNumber: 4,
    title: "The Modern Horizon: Public Sector Architecture",
    company: "Deloitte",
    role: "Consultant — Deloitte India",
    period: "Current Role",
    location: "India / Canada Projects",
    badgeColor: "from-emerald-500 to-teal-600",
    themeColor: "#00E676",
    tagline: "Driving large-scale Public Sector transformation & Case Management",
    shortSummary: "Leading complex Siebel CRM implementations and Case Management solutions for Canadian Public Sector initiatives.",
    narrative: "Arriving at Deloitte India as a Consultant, I now lead enterprise CRM delivery for Public Sector case management solutions in Canada. Blending deep Siebel expertise with modern cloud-native architectures, I guide clients through public infrastructure modernization, citizen service automation, and high-volume data integrations.",
    responsibilities: [
      "Direct technical configuration and customization of Siebel Public Sector Case Management frameworks.",
      "Architect end-to-end integration workflows connecting legacy government repositories with modern service interfaces.",
      "Deliver high-reliability solutions for Canadian public sector clients adhering to strict compliance standards.",
      "Mentor cross-functional technical teams in enterprise CRM best practices and modern cloud paradigms."
    ],
    keyAchievements: [
      "Key contributor to Canadian Public Sector Case Management solution deployment.",
      "Spearheaded optimization of approval management and citizen service workflows."
    ],
    technologies: ["Siebel CRM", "Public Sector Case Management", "Approval Management", "REST APIs", "Docker", "OCI", "Enterprise Architecture"]
  }
];
