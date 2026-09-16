import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { projectsData, ProjectMission } from '../data/projectsData';
import { soundController } from '../utils/SoundController';
import { Cpu, X, ArrowRight, CheckCircle2, Shield, Activity, BarChart2, Layers } from 'lucide-react';

export const ProjectMissions: React.FC = () => {
  const { unlockAchievement } = useGame();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMission, setActiveMission] = useState<ProjectMission | null>(null);

  const categories = ['All', 'Enterprise CRM', 'AI & GenAI', 'High-Volume Data', 'Cloud & Microservices'];

  const filteredMissions = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(m => m.category === selectedCategory);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Cpu className="w-4 h-4 text-emerald-400" />
          Mission-Based Technical Showcase
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          ENTERPRISE <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">MISSIONS</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Technical achievements across Siebel Health Monitoring, Kafka Pipelines, GenAI Architecture Generators, OpenSearch Chatbots, and High-Volume Data Systems.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundController.playClick();
              setSelectedCategory(cat);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredMissions.map((mission) => (
          <div
            key={mission.id}
            onClick={() => {
              soundController.playClick();
              setActiveMission(mission);
              unlockAchievement('mission-commander');
            }}
            className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                  {mission.missionCode}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {mission.companyAssociation}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 font-mono">
                {mission.title}
              </h3>

              <p className="text-xs text-slate-300 mb-4 line-clamp-3 font-sans">
                {mission.summary}
              </p>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {mission.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {mission.technologies.length > 3 && (
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-slate-400">
                    +{mission.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 truncate max-w-[180px]">
                  {mission.metricsPlaceholder}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Inspect <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mission Blueprint Detail Modal */}
      {activeMission && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-2xl p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.3)] max-h-[90vh] overflow-y-auto animate-scale-in">
            
            <div className="flex items-start justify-between mb-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {activeMission.missionCode}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeMission.companyAssociation}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-mono">{activeMission.title}</h3>
              </div>
              <button
                onClick={() => setActiveMission(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem Statement */}
            <div className="mb-4">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 font-bold">
                Problem Statement
              </h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {activeMission.problemStatement}
              </p>
            </div>

            {/* My Contribution */}
            <div className="mb-4">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 font-bold">
                Technical Contribution
              </h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {activeMission.myContribution}
              </p>
            </div>

            {/* Measurable Outcome */}
            <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-emerald-400 font-bold mb-0.5">Measurable Outcome / Impact</div>
                <div className="text-xs text-slate-200 font-sans">{activeMission.outcome}</div>
              </div>
            </div>

            {/* Architecture Node Diagram */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Architecture Flow Schematic
              </h4>
              <div className="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                {activeMission.architectureNodes.map((node, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm">
                      {node}
                    </div>
                    {idx < activeMission.architectureNodes.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {activeMission.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/60 text-xs text-slate-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveMission(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs hover:bg-slate-700 transition-colors"
            >
              Close Mission Brief
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
