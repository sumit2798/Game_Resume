import React from 'react';
import { useGame } from '../context/GameContext';
import { chaptersData } from '../data/chaptersData';
import { soundController } from '../utils/SoundController';
import { ShutdownSequence } from './ShutdownSequence';
import { ArrowRight, ArrowLeft, CheckCircle2, Shield, Zap, Award, MapPin, Calendar, Briefcase, Cpu } from 'lucide-react';

interface CareerChapterProps {
  chapterId: string;
}

export const CareerChapter: React.FC<CareerChapterProps> = ({ chapterId }) => {
  const { triggerChapterTransition } = useGame();

  const chapter = chaptersData.find(c => c.id === chapterId) || chaptersData[0];

  // If this is the shutdown chapter, render the custom interactive sequence
  if (chapter.isShutdown) {
    return <ShutdownSequence />;
  }

  const nextChapterIndex = (chapter.chapterNumber % chaptersData.length);
  const nextChapter = chaptersData[nextChapterIndex];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 max-w-5xl mx-auto">
      
      {/* Top Back Nav */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => {
            soundController.playClick();
            triggerChapterTransition('map');
          }}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to World Map
        </button>

        <span className="text-xs font-mono px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">
          CHAPTER 0{chapter.chapterNumber} / 04
        </span>
      </div>

      {/* Main Chapter Header */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-800 mb-8 relative overflow-hidden">
        
        {/* Glow accent */}
        <div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: chapter.themeColor }}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-md font-mono text-xs font-bold text-white bg-gradient-to-r ${chapter.badgeColor}`}>
                {chapter.company}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> {chapter.location}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" /> {chapter.period}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
              {chapter.title}
            </h1>
            <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium">
              {chapter.role}
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => {
                soundController.playWarp();
                triggerChapterTransition(nextChapter.id);
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all"
            >
              Next Chapter: {nextChapter.company} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Story Narrative Box */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm leading-relaxed font-sans mb-6">
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" /> Executive Mission Brief
          </div>
          {chapter.narrative}
        </div>

        {/* Responsibilities & Achievements Dual Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Core Responsibilities */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold font-mono text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" /> Key Responsibilities
            </h3>
            <ul className="space-y-3">
              {chapter.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Achievements */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold font-mono text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" /> Key Achievements
            </h3>
            <ul className="space-y-3">
              {chapter.keyAchievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Technologies Used */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Core Technologies Employed
          </div>
          <div className="flex flex-wrap gap-2">
            {chapter.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700/60 text-xs text-cyan-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
