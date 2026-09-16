import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundController } from '../utils/SoundController';
import { achievementsData, AchievementItem } from '../data/achievementsData';
import { ProjectMission } from '../data/projectsData';
import { Certification } from '../data/certificationsData';
import { SkillNode } from '../data/skillsData';

interface GameContextType {
  currentChapterId: string;
  setCurrentChapterId: (id: string) => void;
  playerXP: number;
  playerLevel: number;
  unlockedAchievements: string[];
  unlockAchievement: (id: string) => void;
  resetSaveData: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  resumeModalOpen: boolean;
  setResumeModalOpen: (open: boolean) => void;
  selectedProject: ProjectMission | null;
  setSelectedProject: (proj: ProjectMission | null) => void;
  selectedCert: Certification | null;
  setSelectedCert: (cert: Certification | null) => void;
  selectedSkill: SkillNode | null;
  setSelectedSkill: (skill: SkillNode | null) => void;
  transitionActive: boolean;
  transitionTarget: string | null;
  triggerChapterTransition: (targetChapterId: string) => void;
  completeTransition: () => void;
  recentAchievementUnlock: AchievementItem | null;
  clearRecentAchievement: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const STORAGE_KEYS = {
  XP: 'architect_game_xp',
  ACHIEVEMENTS: 'architect_game_achievements',
  SOUND: 'architect_game_sound'
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentChapterId, setCurrentChapterId] = useState<string>('landing');
  
  // Load initial XP from localStorage or default to 150
  const [playerXP, setPlayerXP] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.XP);
      return saved ? parseInt(saved, 10) : 150;
    }
    return 150;
  });

  // Load initial Achievements from localStorage or default to []
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectMission | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [transitionActive, setTransitionActive] = useState<boolean>(false);
  const [transitionTarget, setTransitionTarget] = useState<string | null>(null);
  const [recentAchievementUnlock, setRecentAchievementUnlock] = useState<AchievementItem | null>(null);

  // Sync XP changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.XP, playerXP.toString());
    } catch {
      // Handles private browsing storage limits silently
    }
  }, [playerXP]);

  // Sync Achievements changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(unlockedAchievements));
    } catch {
      // Handles private browsing storage limits silently
    }
  }, [unlockedAchievements]);

  // Level calculation: Every 400 XP = +1 Level
  const playerLevel = Math.floor(playerXP / 400) + 1;

  const toggleSound = () => {
    const newState = soundController.toggleSound();
    setSoundEnabled(newState);
  };

  const unlockAchievement = (id: string) => {
    if (!unlockedAchievements.includes(id)) {
      setUnlockedAchievements(prev => [...prev, id]);
      const ach = achievementsData.find(a => a.id === id);
      if (ach) {
        setPlayerXP(prev => prev + ach.xpReward);
        setRecentAchievementUnlock(ach);
        soundController.playChime();
      }
    }
  };

  const resetSaveData = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.XP);
      localStorage.removeItem(STORAGE_KEYS.ACHIEVEMENTS);
    } catch {
      // Ignore
    }
    setPlayerXP(150);
    setUnlockedAchievements([]);
  };

  const clearRecentAchievement = () => {
    setRecentAchievementUnlock(null);
  };

  const triggerChapterTransition = (targetId: string) => {
    if (targetId === currentChapterId) return;
    soundController.playWarp();
    setTransitionTarget(targetId);
    setTransitionActive(true);
  };

  const completeTransition = () => {
    if (transitionTarget) {
      setCurrentChapterId(transitionTarget);
      
      // Auto unlock chapter achievements
      if (transitionTarget === 'tcs') unlockAchievement('chapter-1-unlocked');
      if (transitionTarget === 'oracle') unlockAchievement('chapter-2-unlocked');
      if (transitionTarget === 'shutdown') unlockAchievement('chapter-3-unlocked');
      if (transitionTarget === 'deloitte') unlockAchievement('chapter-4-unlocked');
    }
    setTransitionActive(false);
    setTransitionTarget(null);
  };

  // Keyboard shortcut '~' for Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
        if (!terminalOpen) unlockAchievement('terminal-hacker');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.addEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <GameContext.Provider value={{
      currentChapterId,
      setCurrentChapterId,
      playerXP,
      playerLevel,
      unlockedAchievements,
      unlockAchievement,
      resetSaveData,
      soundEnabled,
      toggleSound,
      terminalOpen,
      setTerminalOpen,
      resumeModalOpen,
      setResumeModalOpen,
      selectedProject,
      setSelectedProject,
      selectedCert,
      setSelectedCert,
      selectedSkill,
      setSelectedSkill,
      transitionActive,
      transitionTarget,
      triggerChapterTransition,
      completeTransition,
      recentAchievementUnlock,
      clearRecentAchievement
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
