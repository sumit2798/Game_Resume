import React from 'react';
import { useGame } from '../context/GameContext';
import { chaptersData } from '../data/chaptersData';
import { soundController } from '../utils/SoundController';
import { Compass, ArrowRight, Shield, Zap, Flame, Award, CheckCircle2 } from 'lucide-react';

export const CareerMap: React.FC = () => {
  const { triggerChapterTransition, unlockedAchievements } = useGame();

  const getChapterIcon = (id: string) => {
    switch (id) {
      case 'tcs': return Shield;
      case 'oracle': return Zap;
      case 'shutdown': return Flame;
      case 'deloitte': return Award;
      default: return Compass;
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Compass className="w-4 h-4 text-emerald-400" />
          Interactive World Map
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          CAREER <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">CHAPTERS</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
          Navigate through Sumit Patnaik's professional evolution from early enterprise beginnings at TCS to Oracle platform engineering and Deloitte Public Sector architecture.
        </p>
      </div>

      {/* Chapter Nodes Flow */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
        
        {/* Connecting Cable Line for Desktop */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-indigo-500 via-red-500 via-slate-600 to-emerald-500 -translate-y-1/2 z-0 opacity-40 rounded-full" />

        {chaptersData.map((chapter, index) => {
          const Icon = getChapterIcon(chapter.id);
          const isUnlocked = unlockedAchievements.includes(`chapter-${chapter.chapterNumber}-unlocked`);
          
          return (
            <div 
              key={chapter.id}
              className="relative z-10 flex flex-col group cursor-pointer"
              onClick={() => {
                soundController.playWarp();
                triggerChapterTransition(chapter.id);
              }}
            >
              {/* Card Container */}
              <div className={`h-full glass-panel rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                chapter.isShutdown
                  ? 'border-slate-700/60 hover:border-amber-500/50 bg-slate-950/80 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                  : 'border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]'
              }`}>
                
                {/* Node Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-lg bg-gradient-to-br ${chapter.badgeColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      CH. 0{chapter.chapterNumber}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {chapter.company}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-medium mb-3">
                    {chapter.role}
                  </div>

                  {/* Tagline */}
                  <p className="text-xs text-slate-300 line-clamp-3 mb-4 font-sans">
                    {chapter.shortSummary}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400">
                    {chapter.period}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Enter <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Bottom Guidance */}
      <div className="mt-12 text-center text-xs font-mono text-slate-500">
        Click any chapter above to enter its narrative, accomplishments, and tech stack details.
      </div>
    </div>
  );
};
