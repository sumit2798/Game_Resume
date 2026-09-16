export interface ProjectMission {
  id: string;
  missionCode: string;
  title: string;
  companyAssociation: string; // TCS | Oracle | Deloitte | Independent / Innovation
  category: "Enterprise CRM" | "AI & GenAI" | "High-Volume Data" | "Cloud & Microservices";
  summary: string;
  problemStatement: string;
  technologies: string[];
  myContribution: string;
  outcome: string;
  architectureNodes: string[]; // Steps for visual diagram
  metricsPlaceholder: string;
}

export const projectsData: ProjectMission[] = [
  {
    id: "siebel-health-probe",
    missionCode: "MSN-01",
    title: "Siebel Health Probe",
    companyAssociation: "Oracle / Enterprise",
    category: "Enterprise CRM",
    summary: "Java-based automated monitoring agent for real-time Siebel CRM component health diagnosis.",
    problemStatement: "Enterprise Siebel environments suffered from intermittent component degradation (Component Tasks, Object Managers) causing silent outages before sysadmins were alerted.",
    technologies: ["Java", "Siebel REST API", "Spring Boot", "OpenSearch", "Docker"],
    myContribution: "Designed and engineered a lightweight Java monitoring agent that periodically pings Siebel Server components via Server Manager CLI and REST APIs, raising proactive alerts before service impact.",
    outcome: "Reduced mean time to detect (MTTD) component failures by ~80%, providing real-time health telemetry across multi-node clusters.",
    architectureNodes: ["Siebel Server Component", "Java Probe Daemon", "Metrics Collector", "Alerting Gateway", "Admin Dashboard"],
    metricsPlaceholder: "80% Faster Failure Detection | 99.9% Uptime Visibility"
  },
  {
    id: "kafka-bulk-ordering",
    missionCode: "MSN-02",
    title: "Kafka Bulk Ordering Pipeline",
    companyAssociation: "TCS / Telecom",
    category: "High-Volume Data",
    summary: "High-throughput asynchronous event pipeline handling thousands of concurrent telecom order submissions.",
    problemStatement: "Legacy synchronous order submission endpoints choked during high-demand promotional spikes, causing thread starvation and dropped orders.",
    technologies: ["Apache Kafka", "Java", "Siebel EAI", "REST APIs", "SQL"],
    myContribution: "Architected an event-driven buffer pipeline using Apache Kafka. Submissions were ingested asynchronously into Kafka topics and consumed by worker threads into Siebel Order Management.",
    outcome: "Decoupled front-end order portals from backend CRM, eliminating order loss and handling spike loads effortlessly.",
    architectureNodes: ["Order Portal UI", "Kafka Ingestion Topic", "Parallel Worker Consumer", "Siebel EAI Service", "Database Commit"],
    metricsPlaceholder: "10,000+ Orders/Min | 0 Dropped Submissions"
  },
  {
    id: "siebel-dashboard",
    missionCode: "MSN-03",
    title: "Enterprise Siebel Dashboard",
    companyAssociation: "Deloitte / Public Sector",
    category: "Enterprise CRM",
    summary: "Modernized Open UI executive dashboard giving case workers real-time queue visibility.",
    problemStatement: "Case managers struggled with fragmented views and heavy multi-screen navigation to track critical application workflows.",
    technologies: ["Siebel Open UI", "JavaScript (ES6)", "CSS3 Glassmorphism", "REST APIs", "Oracle DB"],
    myContribution: "Created a responsive, interactive Open UI dashboard suite consolidating Service Requests, Approval Tasks, and Case Statuses into a unified single-pane interface.",
    outcome: "Accelerated case processing efficiency and drastically reduced click friction for case managers.",
    architectureNodes: ["Open UI Custom View", "Virtual Business Component", "Business Service Aggregator", "Oracle DB Query"],
    metricsPlaceholder: "45% Reduction in Case Click-Through Time"
  },
  {
    id: "genai-hld-generator",
    missionCode: "MSN-04",
    title: "GenAI HLD Architecture Generator",
    companyAssociation: "Innovation / R&D",
    category: "AI & GenAI",
    summary: "Automated architecture blueprint generator converting raw business requirements into High-Level Design (HLD) drafts.",
    problemStatement: "Creating standardized HLD documentation for enterprise integration projects required days of repetitive manual diagramming and boilerplate writing.",
    technologies: ["OCI GenAI", "Python", "Vector DB (Chroma/FAISS)", "LangChain", "Markdown Engine"],
    myContribution: "Developed a RAG-powered generator that indexes architectural patterns and standard templates, automatically synthesizing initial HLD markdown documents from user stories.",
    outcome: "Cut initial draft creation time from days to minutes while standardizing architectural compliance.",
    architectureNodes: ["User Story Input", "Vector Embedding Search", "OCI GenAI LLM", "HLD Template Renderer", "Markdown/PDF Output"],
    metricsPlaceholder: "90% Faster HLD Drafting | Standardized Blueprinting"
  },
  {
    id: "opensearch-chatbot",
    missionCode: "MSN-05",
    title: "OpenSearch Knowledge Chatbot",
    companyAssociation: "Deloitte / Innovation",
    category: "AI & GenAI",
    summary: "Conversational search agent enabling instant query resolution across millions of CRM knowledge documents.",
    problemStatement: "Support representatives spent excessive time searching through thousands of PDF manuals and historical resolution logs.",
    technologies: ["OpenSearch", "Python", "REST APIs", "Siebel Open UI", "Vector Search"],
    myContribution: "Built an integrated conversational search widget embedded directly into Siebel Open UI using OpenSearch vector KNN indexes.",
    outcome: "Delivered sub-second relevant answer retrieval directly within the active CRM context.",
    architectureNodes: ["Siebel Open UI Widget", "FastAPI Gateway", "OpenSearch KNN Index", "Re-ranking Engine", "Context Response"],
    metricsPlaceholder: "< 500ms Query Latency | Integrated CRM Search"
  },
  {
    id: "high-volume-asset-optimization",
    missionCode: "MSN-06",
    title: "1M+ High-Volume Asset Optimization",
    companyAssociation: "Oracle / Enterprise",
    category: "High-Volume Data",
    summary: "Database query and index optimization framework handling over 1 Million telecom asset records.",
    problemStatement: "Query performance degraded severely when fetching installed asset hierarchies exceeding 1M records, impacting customer service agents.",
    technologies: ["Oracle Database", "PL/SQL", "Siebel Data Model", "Performance Tuning"],
    myContribution: "Refactored underlying Business Component queries, implemented partitioned indexing, and optimized SQL execution plans.",
    outcome: "Reduced asset query response time from 15+ seconds down to under 800ms for over 1 Million asset records.",
    architectureNodes: ["Asset Inquiry Request", "Partitioned Index Resolver", "Optimized PL/SQL View", "Fast Buffer Cache", "Siebel Applet Render"],
    metricsPlaceholder: "1M+ Records Handled | 15s to < 800ms Latency Improvement"
  },
  {
    id: "oci-ai-use-cases",
    missionCode: "MSN-07",
    title: "OCI AI Document & Transcription Pipeline",
    companyAssociation: "Oracle / Cloud",
    category: "Cloud & Microservices",
    summary: "Automated OCR document extraction and audio transcription pipeline leveraging OCI Vision and OCI Speech.",
    problemStatement: "Manual data entry of scanned citizen application forms created bottlenecks in processing pipelines.",
    technologies: ["OCI Vision", "OCI Speech", "Python", "REST APIs", "OCI Object Storage"],
    myContribution: "Constructed automated microservice pipelines that ingest scanned PDFs and voice recordings, extracting key form fields directly into CRM data models.",
    outcome: "Streamlined document intake automation with over 95% field extraction accuracy.",
    architectureNodes: ["Document Upload", "OCI Object Storage Event", "OCI Vision OCR / Speech API", "Field Extractor", "CRM Payload Commit"],
    metricsPlaceholder: "95%+ OCR Accuracy | Automated Field Extraction"
  },
  {
    id: "golang-file-database",
    missionCode: "MSN-08",
    title: "File-Based Database Engine in Golang",
    companyAssociation: "Independent Engineering",
    category: "Cloud & Microservices",
    summary: "Lightweight, embedded file-oriented storage engine engineered for fast concurrent read/write operations.",
    problemStatement: "Need for an ultra-lightweight, zero-dependency persistence layer for embedded edge services and offline telemetry logging.",
    technologies: ["Golang", "File I/O", "Concurrency (Goroutines)", "JSON / Binary Protocol"],
    myContribution: "Engineered a custom file-based database from scratch in Golang utilizing thread-safe memory indexes, write-ahead logging (WAL), and file segment compaction.",
    outcome: "Achieved microsecond read latencies and robust crash recovery without requiring external DB engines.",
    architectureNodes: ["In-Memory Index Map", "Thread-Safe Mutex Lock", "Append-Only WAL", "Disk Segment Compactor", "File Storage"],
    metricsPlaceholder: "Sub-millisecond Reads | Zero External Dependencies"
  },
  {
    id: "dynamic-pricing-engine",
    missionCode: "MSN-09",
    title: "Enterprise Dynamic Pricing Engine",
    companyAssociation: "TCS / Telecom",
    category: "Enterprise CRM",
    summary: "Rules-driven pricing calculation engine integrated into Siebel Telecom Order Management.",
    problemStatement: "Complex promotional discounting rules required heavy manual overrides and caused frequent billing calculation errors.",
    technologies: ["Siebel Workflows", "Business Services", "PL/SQL", "Rules Engine"],
    myContribution: "Configured and optimized dynamic matrix-based pricing Business Services evaluating subscriber tier, contract duration, and bundled services in real time.",
    outcome: "Eliminated pricing calculation errors and enabled instant promotional discount application.",
    architectureNodes: ["Order Line Item Input", "Pricing Rule Evaluator", "PL/SQL Discount Matrix", "Final Price Calculator", "Line Item Update"],
    metricsPlaceholder: "100% Automated Price Rule Evaluation"
  }
];
