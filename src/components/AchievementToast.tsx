import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Award, Sparkles, X } from 'lucide-react';

export const AchievementToast: React.FC = () => {
  const { recentAchievementUnlock, clearRecentAchievement } = useGame();

  useEffect(() => {
    if (recentAchievementUnlock) {
      const timer = setTimeout(() => {
        clearRecentAchievement();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [recentAchievementUnlock, clearRecentAchievement]);

  if (!recentAchievementUnlock) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 glass-panel p-4 rounded-2xl border border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.4)] max-w-sm animate-bounce no-print">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> ACHIEVEMENT UNLOCKED!
            </span>
            <button onClick={clearRecentAchievement} className="text-slate-400 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <h4 className="text-xs font-bold text-white font-mono">{recentAchievementUnlock.title}</h4>
          <p className="text-[11px] text-slate-300 font-sans mt-0.5">{recentAchievementUnlock.description}</p>
          <span className="text-[10px] font-mono text-emerald-400 font-bold mt-1 inline-block">
            +{recentAchievementUnlock.xpReward} XP GAINED
          </span>
        </div>
      </div>
    </div>
  );
};
