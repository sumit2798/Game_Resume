export interface Profile {
  name: string;
  title: string;
  currentCompany: string;
  location: string;
  experienceYears: number;
  primaryExpertise: string[];
  careerPath: string[];
  careerGoal: string;
  bio: string;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const profileData: Profile = {
  name: "Sumit Patnaik",
  title: "Consultant — Enterprise Systems & Architecture",
  currentCompany: "Deloitte India",
  location: "India",
  experienceYears: 5,
  primaryExpertise: [
    "Siebel CRM",
    "Oracle CX",
    "Telecom Sector",
    "Public Sector Case Management"
  ],
  careerPath: ["TCS", "Oracle", "Deloitte"],
  careerGoal: "Technical consultant and architect working with scalable enterprise systems, cloud, data engineering, and AI.",
  bio: "Senior technical consultant specializing in enterprise CRM, cloud solutions, scalable integrations, and AI integration. Proven track record across TCS, Oracle, and Deloitte delivering mission-critical platforms in Telecom and Public Sector domains.",
  stats: [
    { label: "Years Experience", value: "5+", icon: "Briefcase" },
    { label: "Certifications", value: "8", icon: "Award" },
    { label: "Enterprise Projects", value: "9+", icon: "Cpu" },
    { label: "Career Chapters", value: "4", icon: "Compass" }
  ],
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/sumit-patnaik", icon: "Linkedin" },
    { platform: "GitHub", url: "https://github.com/sumitpatnaik", icon: "Github" },
    { platform: "Email", url: "mailto:sumit.patnaik@example.com", icon: "Mail" }
  ]
};
