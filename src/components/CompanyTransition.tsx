import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { chaptersData } from '../data/chaptersData';
import { Sparkles, Compass } from 'lucide-react';

export const CompanyTransition: React.FC = () => {
  const { transitionActive, transitionTarget, completeTransition } = useGame();

  useEffect(() => {
    if (transitionActive) {
      const timer = setTimeout(() => {
        completeTransition();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [transitionActive, completeTransition]);

  if (!transitionActive) return null;

  const targetChapter = chaptersData.find(c => c.id === transitionTarget);
  const titleText = targetChapter ? `${targetChapter.company} — ${targetChapter.title}` : (transitionTarget || 'Warp Destination');

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0F17] flex flex-col items-center justify-center text-center p-4 overflow-hidden no-print">
      
      {/* Warp Grid Speed Line Effect */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-blue-900/10 to-transparent animate-pulse" />

      {/* Center Holographic Ring */}
      <div className="relative z-10">
        <div className="w-24 h-24 rounded-full border-2 border-cyan-400/40 border-t-cyan-400 animate-spin flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(6,182,212,0.6)]">
          <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          WARP NAVIGATION ACTIVE
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight animate-bounce">
          {titleText}
        </h2>
      </div>

    </div>
  );
};
