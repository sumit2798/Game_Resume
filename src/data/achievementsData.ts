export interface AchievementItem {
  id: string;
  title: string;
  category: "Career" | "Certifications" | "Skills" | "Secret";
  description: string;
  icon: string;
  xpReward: number;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "chapter-1-unlocked",
    title: "System Pioneer",
    category: "Career",
    description: "Explored Chapter 1 (TCS) & early telecom foundation.",
    icon: "Compass",
    xpReward: 250
  },
  {
    id: "chapter-2-unlocked",
    title: "Oracle Vanguard",
    category: "Career",
    description: "Discovered Chapter 2 (Oracle) enterprise milestone.",
    icon: "Shield",
    xpReward: 300
  },
  {
    id: "chapter-3-unlocked",
    title: "Phoenix Resurgence",
    category: "Career",
    description: "Completed Chapter 3 unexpected transition sequence.",
    icon: "Flame",
    xpReward: 500
  },
  {
    id: "chapter-4-unlocked",
    title: "Public Sector Architect",
    category: "Career",
    description: "Reached Chapter 4 (Deloitte India) and Canadian public sector delivery.",
    icon: "Award",
    xpReward: 450
  },
  {
    id: "all-certs-unlocked",
    title: "Master Certifier",
    category: "Certifications",
    description: "Unlocked all 8 Oracle & Industry certification credentials.",
    icon: "Unlock",
    xpReward: 600
  },
  {
    id: "constellation-explorer",
    title: "Constellation Explorer",
    category: "Skills",
    description: "Interacted with tech skills in the interactive constellation canvas.",
    icon: "Activity",
    xpReward: 350
  },
  {
    id: "mission-commander",
    title: "Mission Commander",
    category: "Secret",
    description: "Inspected enterprise project missions & architecture blueprints.",
    icon: "Cpu",
    xpReward: 400
  },
  {
    id: "terminal-hacker",
    title: "Terminal Hacker",
    category: "Secret",
    description: "Discovered the hidden Architect-OS CLI Developer Terminal.",
    icon: "Terminal",
    xpReward: 500
  }
];
