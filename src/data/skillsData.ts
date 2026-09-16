export interface SkillNode {
  id: string;
  name: string;
  category: "CRM & Enterprise" | "Oracle Ecosystem" | "Programming" | "Data & AI" | "Engineering & Cloud";
  proficiency: number; // 1-100
  levelLabel: string;
  x: number; // 0 - 100 percentage for graph placement
  y: number; // 0 - 100 percentage for graph placement
  icon: string;
  description: string;
  connections: string[]; // IDs of connected skills
}

export const skillsData: SkillNode[] = [
  // CRM & Enterprise
  {
    id: "siebel-crm",
    name: "Siebel CRM",
    category: "CRM & Enterprise",
    proficiency: 95,
    levelLabel: "Master Architect",
    x: 25,
    y: 35,
    icon: "Layers",
    description: "Deep configuration expertise across Business Components, Business Objects, Business Services, Workflows, Integration Objects, REST APIs, Order Management, Service Requests, Field Service, Loyalty, and Approval Management.",
    connections: ["oracle-cx", "sql-plsql", "rest-apis", "telecom-crm"]
  },
  {
    id: "oracle-cx",
    name: "Oracle CX",
    category: "Oracle Ecosystem",
    proficiency: 90,
    levelLabel: "Expert",
    x: 45,
    y: 25,
    icon: "Cpu",
    description: "Enterprise customer experience suite configuration, integration, and cloud-hybrid data sync.",
    connections: ["siebel-crm", "oci", "rest-apis"]
  },
  {
    id: "oci",
    name: "Oracle Cloud (OCI)",
    category: "Oracle Ecosystem",
    proficiency: 85,
    levelLabel: "Certified Specialist",
    x: 65,
    y: 20,
    icon: "Cloud",
    description: "OCI Data Science, OCI AI Services (Vision, Speech, GenAI), object storage, and compute infrastructure.",
    connections: ["oracle-cx", "genai", "vector-db", "kubernetes"]
  },
  
  // Programming
  {
    id: "java",
    name: "Java (SE 17)",
    category: "Programming",
    proficiency: 90,
    levelLabel: "OCP Certified",
    x: 30,
    y: 60,
    icon: "Code",
    description: "Core Java 17 development, Spring/microservices paradigms, concurrency, health probe agents, and enterprise integrations.",
    connections: ["siebel-crm", "kafka", "rest-apis", "docker"]
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    proficiency: 85,
    levelLabel: "Advanced Specialist",
    x: 50,
    y: 55,
    icon: "Terminal",
    description: "Data processing pipelines, RAG implementations, vector embeddings, GenAI microservices, and AI scripting.",
    connections: ["genai", "vector-db", "opensearch", "kafka"]
  },
  {
    id: "golang",
    name: "Golang",
    category: "Programming",
    proficiency: 80,
    levelLabel: "Practitioner",
    x: 75,
    y: 65,
    icon: "Zap",
    description: "High-concurrency systems development, lightweight microservices, and custom file-based database engines.",
    connections: ["docker", "kubernetes", "rest-apis"]
  },
  {
    id: "sql-plsql",
    name: "SQL & PL/SQL",
    category: "Programming",
    proficiency: 92,
    levelLabel: "Expert Analyst",
    x: 15,
    y: 50,
    icon: "Database",
    description: "Complex query optimization, database triggers, stored procedures, high-volume asset data transformations.",
    connections: ["siebel-crm", "oracle-cx", "opensearch"]
  },

  // Data & AI
  {
    id: "kafka",
    name: "Apache Kafka",
    category: "Data & AI",
    proficiency: 85,
    levelLabel: "Stream Engineer",
    x: 40,
    y: 75,
    icon: "Activity",
    description: "Event-driven stream processing, high-volume bulk ordering pipelines, topic partitioning, and message queuing.",
    connections: ["java", "python", "high-volume"]
  },
  {
    id: "opensearch",
    name: "OpenSearch",
    category: "Data & AI",
    proficiency: 82,
    levelLabel: "Search Specialist",
    x: 60,
    y: 75,
    icon: "Search",
    description: "Full-text indexing, vector search, conversational chatbot backend integrations with CRM repositories.",
    connections: ["python", "genai", "vector-db"]
  },
  {
    id: "vector-db",
    name: "Vector DBs & Embeddings",
    category: "Data & AI",
    proficiency: 85,
    levelLabel: "AI Architect",
    x: 75,
    y: 40,
    icon: "Compass",
    description: "Semantic search indexing, document embeddings for architecture generation, and RAG pipelines.",
    connections: ["genai", "opensearch", "oci"]
  },
  {
    id: "genai",
    name: "GenAI & LLMs",
    category: "Data & AI",
    proficiency: 88,
    levelLabel: "Certified Professional",
    x: 85,
    y: 30,
    icon: "Brain",
    description: "OCI GenAI certified professional. Design of automated High-Level Design (HLD) generators and intelligent CRM assistants.",
    connections: ["vector-db", "python", "oci"]
  },

  // Engineering & Cloud
  {
    id: "rest-apis",
    name: "REST APIs & Integration",
    category: "Engineering & Cloud",
    proficiency: 92,
    levelLabel: "Architect",
    x: 35,
    y: 45,
    icon: "Share2",
    description: "Designing enterprise RESTful interfaces, OpenAPI schemas, microservice webhooks, and EAI integration objects.",
    connections: ["siebel-crm", "java", "golang"]
  },
  {
    id: "docker",
    name: "Docker & Containers",
    category: "Engineering & Cloud",
    proficiency: 85,
    levelLabel: "Practitioner",
    x: 65,
    y: 80,
    icon: "Box",
    description: "Containerizing enterprise applications, multi-stage builds, microservice orchestration, and dev environments.",
    connections: ["kubernetes", "golang", "java"]
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Engineering & Cloud",
    proficiency: 78,
    levelLabel: "Practitioner",
    x: 85,
    y: 80,
    icon: "Server",
    description: "Deployment manifests, service networking, horizontal scaling, and cloud-native application operations.",
    connections: ["docker", "oci"]
  },
  {
    id: "telecom-crm",
    name: "Telecom & Public Sector Domain",
    category: "CRM & Enterprise",
    proficiency: 90,
    levelLabel: "Domain Lead",
    x: 10,
    y: 25,
    icon: "Shield",
    description: "Deep domain knowledge in TM Forum Frameworx, Telecom order processing, and Canadian Public Sector Case Management.",
    connections: ["siebel-crm"]
  },
  {
    id: "high-volume",
    name: "High-Volume Data Processing",
    category: "Engineering & Cloud",
    proficiency: 88,
    levelLabel: "Specialist",
    x: 20,
    y: 80,
    icon: "BarChart3",
    description: "Processing 1M+ asset records, optimizing database indexing, batch processing, and low-latency response tuning.",
    connections: ["kafka", "sql-plsql"]
  }
];
