import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { certificationsData, Certification } from '../data/certificationsData';
import { soundController } from '../utils/SoundController';
import { Award, ShieldCheck, Database, Layout, Code, Brain, Sparkles, Globe, X, CheckCircle2, Unlock } from 'lucide-react';

export const AchievementGallery: React.FC = () => {
  const { unlockAchievement } = useGame();
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Award': return Award;
      case 'Database': return Database;
      case 'Layout': return Layout;
      case 'Code': return Code;
      case 'Brain': return Brain;
      case 'Sparkles': return Sparkles;
      case 'Globe': return Globe;
      default: return Award;
    }
  };

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'Legendary':
        return { color: 'text-amber-400 bg-amber-500/10 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]', label: 'LEGENDARY' };
      case 'Epic':
        return { color: 'text-purple-400 bg-purple-500/10 border-purple-500/30 shadow-[0_0_12px_rgba(139,92,246,0.3)]', label: 'EPIC' };
      case 'Rare':
        return { color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.3)]', label: 'RARE' };
      default:
        return { color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', label: 'COMMON' };
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Award className="w-4 h-4 text-amber-400" />
          Unlockable Achievement Badges
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          CERTIFICATION <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400">VAULT</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Explore 8 verified Oracle, Cloud Infrastructure, Java, and TM Forum certifications earned across Sumit Patnaik's enterprise career.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {certificationsData.map((cert) => {
          const Icon = getBadgeIcon(cert.badgeIcon);
          const rarity = getRarityBadge(cert.rarity);

          return (
            <div
              key={cert.id}
              onClick={() => {
                soundController.playChime();
                setActiveCert(cert);
                unlockAchievement('all-certs-unlocked');
              }}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 cursor-pointer text-center group relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Rarity Tag */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border font-bold ${rarity.color}`}>
                    {rarity.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {cert.year}
                  </span>
                </div>

                {/* Holographic Badge Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Name & Issuer */}
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono mb-1 line-clamp-2">
                  {cert.name}
                </h3>
                <div className="text-[11px] font-mono text-slate-400 mb-3">
                  {cert.issuer}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center justify-center gap-1">
                <Unlock className="w-3 h-3" /> View Credential
              </div>
            </div>
          );
        })}
      </div>

      {/* Certification Unlock Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-lg p-6 rounded-3xl border border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.3)] animate-scale-in">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  VERIFIED CREDENTIAL UNLOCKED
                </span>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Badge Icon & Name */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mx-auto mb-3 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                {React.createElement(getBadgeIcon(activeCert.badgeIcon), { className: 'w-10 h-10' })}
              </div>
              <h3 className="text-xl font-bold text-white font-mono mb-1">{activeCert.name}</h3>
              <div className="text-xs font-mono text-cyan-400">
                Issued by {activeCert.issuer} ({activeCert.year})
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              {activeCert.description}
            </p>

            {/* Skills Verified */}
            <div className="mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Skills Verified</div>
              <div className="flex flex-wrap gap-2">
                {activeCert.skillsVerified.map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential ID Placeholder */}
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center text-xs font-mono text-slate-500 mb-6">
              ID Placeholder: <span className="text-slate-300">{activeCert.credentialIdPlaceholder}</span>
            </div>

            <button
              onClick={() => setActiveCert(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs hover:bg-slate-700 transition-colors"
            >
              Close Achievement Modal
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
