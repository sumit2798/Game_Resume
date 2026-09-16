export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  badgeIcon: string;
  category: "Oracle Core" | "Cloud & AI" | "Java & Dev" | "Industry Standard";
  description: string;
  skillsVerified: string[];
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  credentialIdPlaceholder: string;
}

export const certificationsData: Certification[] = [
  {
    id: "siebel-associate",
    name: "Oracle Siebel Associate Certified",
    issuer: "Oracle Corporation",
    year: "2020",
    badgeIcon: "ShieldCheck",
    category: "Oracle Core",
    description: "Validates foundational expertise in Siebel CRM architecture, Business Components, Applets, Data Model, and basic workflow execution.",
    skillsVerified: ["Siebel Architecture", "Business Objects", "Applets & Views", "Data Model"],
    rarity: "Common",
    credentialIdPlaceholder: "ORCL-SIEBEL-ASC-90210"
  },
  {
    id: "siebel-professional",
    name: "Oracle Siebel Professional Certified",
    issuer: "Oracle Corporation",
    year: "2021",
    badgeIcon: "Award",
    category: "Oracle Core",
    description: "Demonstrates advanced proficiency in Siebel Open UI customization, Business Services, Integration Objects, EAI, and Order Management workflows.",
    skillsVerified: ["Open UI Customization", "Business Services", "Integration Objects", "EAI & Web Services"],
    rarity: "Epic",
    credentialIdPlaceholder: "ORCL-SIEBEL-PRO-88412"
  },
  {
    id: "oci-data-science-2023",
    name: "Oracle Cloud Infrastructure 2023 Certified Data Science Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "2023",
    badgeIcon: "Database",
    category: "Cloud & AI",
    description: "Certifies practical skills in deploying ML models, data exploration, pipelines, AutoML, and OCI Data Science workspace configuration.",
    skillsVerified: ["OCI Data Science", "AutoML", "Machine Learning Pipelines", "Model Deployment"],
    rarity: "Epic",
    credentialIdPlaceholder: "OCI-DS-2023-77419"
  },
  {
    id: "oracle-redwood-2023",
    name: "Oracle Redwood Application 2023 Certified Developer Associate",
    issuer: "Oracle Corporation",
    year: "2023",
    badgeIcon: "Layout",
    category: "Java & Dev",
    description: "Validates knowledge of Oracle's flagship Redwood UX design patterns, Visual Builder Studio, and enterprise web UI component construction.",
    skillsVerified: ["Redwood Design System", "Visual Builder Studio", "Enterprise UX", "REST Integration"],
    rarity: "Rare",
    credentialIdPlaceholder: "ORCL-REDWOOD-2023-55102"
  },
  {
    id: "java-se-17",
    name: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle Corporation",
    year: "2023",
    badgeIcon: "Code",
    category: "Java & Dev",
    description: "Rigorous certification validating core Java language features, concurrency, object-oriented design, functional streams, and memory efficiency.",
    skillsVerified: ["Java 17 Core", "Concurrency & Streams", "OOP Architecture", "JVM Memory Management"],
    rarity: "Legendary",
    credentialIdPlaceholder: "OCP-JAVA-17-44910"
  },
  {
    id: "oci-genai-2024",
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    year: "2024",
    badgeIcon: "Brain",
    category: "Cloud & AI",
    description: "Demonstrates expertise in Large Language Models (LLMs), fine-tuning, RAG (Retrieval-Augmented Generation), vector databases, and OCI Generative AI Service integration.",
    skillsVerified: ["LLM Integration", "RAG & Vector Search", "Prompt Engineering", "OCI GenAI Service"],
    rarity: "Legendary",
    credentialIdPlaceholder: "OCI-GENAI-2024-99310"
  },
  {
    id: "oci-ai-foundations-2024",
    name: "Oracle Cloud Infrastructure 2024 AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2024",
    badgeIcon: "Sparkles",
    category: "Cloud & AI",
    description: "Covers fundamental concepts of artificial intelligence, machine learning, computer vision, speech transcription, and natural language processing in cloud computing.",
    skillsVerified: ["AI/ML Fundamentals", "OCI Vision & Speech", "NLP Principles", "Cloud AI Architecture"],
    rarity: "Common",
    credentialIdPlaceholder: "OCI-AIF-2024-11823"
  },
  {
    id: "tmf-foundation",
    name: "TM Forum Foundation Certification",
    issuer: "TM Forum",
    year: "2022",
    badgeIcon: "Globe",
    category: "Industry Standard",
    description: "Validates mastery of global telecom industry standards, Frameworx (eTOM, SID, TAM), and Open API architectural blueprints for digital service providers.",
    skillsVerified: ["eTOM Business Process", "SID Information Framework", "TAM Applications", "Open APIs"],
    rarity: "Rare",
    credentialIdPlaceholder: "TMF-CERT-66391"
  }
];
