import React from 'react';
import { useGame } from '../context/GameContext';
import { soundController } from '../utils/SoundController';
import { Volume2, VolumeX, Terminal, FileText, Compass, Award, Cpu, Sparkles } from 'lucide-react';

export const HUDNavbar: React.FC = () => {
  const {
    playerLevel,
    playerXP,
    soundEnabled,
    toggleSound,
    setTerminalOpen,
    setResumeModalOpen,
    currentChapterId,
    triggerChapterTransition
  } = useGame();

  const nextLevelXP = playerLevel * 400;
  const prevLevelXP = (playerLevel - 1) * 400;
  const currentLevelProgress = Math.min(100, Math.max(0, ((playerXP - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100));

  const navLinks = [
    { id: 'landing', label: 'Home', icon: Sparkles },
    { id: 'map', label: 'Career Map', icon: Compass },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'missions', label: 'Missions', icon: Cpu },
    { id: 'certs', label: 'Certifications', icon: Award }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F17]/85 backdrop-blur-md border-b border-cyan-500/20 px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Brand / Title & Level Badge */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              soundController.playClick();
              triggerChapterTransition('landing');
            }}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-[0_0_12px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all">
              <div className="w-full h-full bg-[#0B0F17] rounded-[7px] flex items-center justify-center text-cyan-400 font-mono font-bold text-lg">
                SP
              </div>
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Sumit Patnaik
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Architect
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Deloitte India Consultant
              </div>
            </div>
          </button>

          {/* Level & XP Gauge */}
          <div className="hidden sm:flex items-center gap-3 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/50">
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="text-cyan-400 font-bold">LVL {playerLevel}</span>
            </div>
            <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden p-[1px] border border-slate-700">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${currentLevelProgress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-slate-400">{playerXP} XP</span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentChapterId === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  soundController.playClick();
                  triggerChapterTransition(link.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Sound, Terminal CLI, Resume Download */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              soundController.playClick();
              toggleSound();
            }}
            title={soundEnabled ? 'Mute Audio FX' : 'Enable Audio FX'}
            className={`p-2 rounded-lg border transition-all ${
              soundEnabled
                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'
                : 'bg-slate-800/60 border-slate-700 text-slate-500 hover:text-slate-300'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal CLI Button */}
          <button
            onClick={() => {
              soundController.playClick();
              setTerminalOpen(true);
            }}
            title="Open Developer CLI (~)"
            className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-1 font-mono text-xs"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="hidden md:inline text-[11px]">CLI</span>
          </button>

          {/* Resume PDF Action */}
          <button
            onClick={() => {
              soundController.playClick();
              setResumeModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
};
