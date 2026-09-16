import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { chaptersData } from '../data/chaptersData';
import { soundController } from '../utils/SoundController';
import { Flame, ArrowRight, ShieldCheck, RefreshCw, Sparkles, Compass } from 'lucide-react';

export const ShutdownSequence: React.FC = () => {
  const { triggerChapterTransition, unlockAchievement } = useGame();
  const [step, setStep] = useState<number>(1); // 1: Active Power Down, 2: Quiet Reflection, 3: Resurgence Discovery

  const shutdownData = chaptersData.find(c => c.id === 'shutdown') || chaptersData[2];

  useEffect(() => {
    // Unlock Chapter 3 Achievement on mount
    unlockAchievement('chapter-3-unlocked');
  }, [unlockAchievement]);

  const advanceSequence = () => {
    if (step === 1) {
      soundController.playPowerDown();
      setStep(2);
    } else if (step === 2) {
      soundController.playChime();
      setStep(3);
    } else if (step === 3) {
      soundController.playWarp();
      triggerChapterTransition('deloitte');
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
      
      {/* STEP 1: Power Down Sequence */}
      {step === 1 && (
        <div className="w-full max-w-2xl glass-panel p-8 rounded-3xl border border-slate-700/80 shadow-[0_0_30px_rgba(0,0,0,0.8)] animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-6">
            <Flame className="w-8 h-8 animate-pulse" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            CHAPTER 03 — UNEXPECTED TRANSITION
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            The Unexpected Shutdown
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans max-w-xl mx-auto">
            {shutdownData.shortSummary}
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left mb-8">
            <div className="text-xs font-mono text-slate-400 mb-2">SYSTEM TELEMETRY LOG:</div>
            <p className="text-xs font-mono text-slate-300 leading-relaxed">
              [SYSTEM_NOTICE]: Corporate realignment event detected.<br />
              [ACTION]: Decommissioning Oracle active portal session.<br />
              [STATUS]: Preserving core technical artifacts, certifications, and domain expertise.
            </p>
          </div>

          <button
            onClick={advanceSequence}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Initiate Power Down <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2: Quiet Reflection Environment */}
      {step === 2 && (
        <div className="w-full max-w-2xl bg-[#070A10]/95 p-10 rounded-3xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-fade-in">
          <div className="text-cyan-400/40 text-xs font-mono uppercase tracking-widest mb-6">
            // INTERMISSION & REFLECTION
          </div>

          <blockquote className="text-xl sm:text-2xl font-mono text-slate-200 leading-relaxed mb-6 italic">
            "Every career has unexpected transitions."
          </blockquote>

          <p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto mb-8 font-sans">
            {shutdownData.narrative}
          </p>

          {/* Upskilling Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
            {shutdownData.keyAchievements.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={advanceSequence}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Discover New Beacon <Compass className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 3: Deloitte Resurgence & Arrival */}
      {step === 3 && (
        <div className="w-full max-w-2xl glass-panel p-8 rounded-3xl border border-emerald-500/40 shadow-[0_0_40px_rgba(0,230,118,0.2)] animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 mb-4 inline-block">
            BEACON DETECTED — DELOITTE INDIA
          </span>

          <h2 className="text-3xl font-extrabold text-white mb-3">
            A Hopeful Path Forward
          </h2>

          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
            The transition led directly to a new career zenith at Deloitte India, architecting Public Sector Case Management platforms for major international initiatives.
          </p>

          <button
            onClick={advanceSequence}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold text-sm hover:shadow-[0_0_30px_rgba(0,230,118,0.6)] transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Enter Deloitte Chapter <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
