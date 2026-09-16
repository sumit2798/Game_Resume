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

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentChapterId, setCurrentChapterId] = useState<string>('landing');
  const [playerXP, setPlayerXP] = useState<number>(150);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectMission | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [transitionActive, setTransitionActive] = useState<boolean>(false);
  const [transitionTarget, setTransitionTarget] = useState<string | null>(null);
  const [recentAchievementUnlock, setRecentAchievementUnlock] = useState<AchievementItem | null>(null);

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
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <GameContext.Provider value={{
      currentChapterId,
      setCurrentChapterId,
      playerXP,
      playerLevel,
      unlockedAchievements,
      unlockAchievement,
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
