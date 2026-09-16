import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { skillsData, SkillNode } from '../data/skillsData';
import { soundController } from '../utils/SoundController';
import { Cpu, X, Zap, Layers, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const SkillConstellation: React.FC = () => {
  const { unlockAchievement } = useGame();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const categories = ['All', 'CRM & Enterprise', 'Oracle Ecosystem', 'Programming', 'Data & AI', 'Engineering & Cloud'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  // Render HTML5 Canvas Node Network Graph
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 480);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = 480;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Connections between nodes
      skillsData.forEach(skill => {
        const px = (skill.x / 100) * width;
        const py = (skill.y / 100) * height;

        skill.connections.forEach(connId => {
          const target = skillsData.find(s => s.id === connId);
          if (target) {
            const tx = (target.x / 100) * width;
            const ty = (target.y / 100) * height;

            const isFiltered = (selectedCategory === 'All' || skill.category === selectedCategory || target.category === selectedCategory);

            ctx.strokeStyle = isFiltered ? 'rgba(6, 182, 212, 0.25)' : 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = isFiltered ? 1.5 : 0.5;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(tx, ty);
            ctx.stroke();
          }
        });
      });

      // Draw Nodes
      skillsData.forEach(skill => {
        const px = (skill.x / 100) * width;
        const py = (skill.y / 100) * height;
        const isSelected = activeSkill?.id === skill.id;
        const isMatch = selectedCategory === 'All' || skill.category === selectedCategory;

        // Outer Glow Ring
        if (isMatch || isSelected) {
          ctx.fillStyle = isSelected ? 'rgba(6, 182, 212, 0.3)' : 'rgba(16, 185, 129, 0.15)';
          ctx.beginPath();
          ctx.arc(px, py, isSelected ? 16 : 10, 0, Math.PI * 2);
          ctx.fill();
        }

        // Inner Core Node
        ctx.fillStyle = isMatch ? (isSelected ? '#06B6D4' : '#10B981') : '#475569';
        ctx.beginPath();
        ctx.arc(px, py, isSelected ? 8 : 5, 0, Math.PI * 2);
        ctx.fill();

        // Node Text Label
        ctx.fillStyle = isMatch ? '#F8FAFC' : '#64748B';
        ctx.font = isSelected ? 'bold 12px JetBrains Mono' : '11px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(skill.name, px, py + 20);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedCategory, activeSkill]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const width = canvas.width;
    const height = canvas.height;

    // Check if clicked near any node (25px threshold)
    const clickedNode = skillsData.find(skill => {
      const px = (skill.x / 100) * width;
      const py = (skill.y / 100) * height;
      const dist = Math.hypot(clickX - px, clickY - py);
      return dist <= 25;
    });

    if (clickedNode) {
      soundController.playClick();
      setActiveSkill(clickedNode);
      unlockAchievement('constellation-explorer');
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Cpu className="w-4 h-4 text-cyan-400" />
          Interactive Technology Constellation
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          SKILL <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">NETWORK</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Explore the interconnected stack of Siebel CRM, Oracle CX, Java, Python, Golang, OCI Cloud, Kafka, and GenAI vector technologies.
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

      {/* Canvas Constellation Area */}
      <div className="glass-panel p-4 rounded-3xl border border-slate-800 relative mb-8 overflow-hidden">
        <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between px-2">
          <span>CANVAS GRAPH: Click any node to view detailed experience</span>
          <span className="text-cyan-400 font-bold">{filteredSkills.length} Nodes Filtered</span>
        </div>

        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="w-full h-[480px] rounded-2xl bg-slate-950/90 cursor-pointer border border-slate-800/80"
        />
      </div>

      {/* Skill Cards Grid (Fallback / Mobile list) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSkills.map(skill => (
          <div
            key={skill.id}
            onClick={() => {
              soundController.playClick();
              setActiveSkill(skill);
              unlockAchievement('constellation-explorer');
            }}
            className={`glass-card p-4 rounded-xl border transition-all cursor-pointer ${
              activeSkill?.id === skill.id
                ? 'border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'border-slate-800 hover:border-cyan-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold text-white font-mono">{skill.name}</h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {skill.levelLabel}
              </span>
            </div>

            {/* Proficiency Bar */}
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-2 border border-slate-800">
              <div
                className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>

            <p className="text-xs text-slate-400 line-clamp-2">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Selected Skill Detail Modal */}
      {activeSkill && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-lg p-6 rounded-3xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-scale-in">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {activeSkill.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-mono mt-1">{activeSkill.name}</h3>
              </div>
              <button
                onClick={() => setActiveSkill(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Proficiency Metric</span>
                <span className="text-cyan-400 font-bold">{activeSkill.proficiency}% ({activeSkill.levelLabel})</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full"
                  style={{ width: `${activeSkill.proficiency}%` }}
                />
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
              {activeSkill.description}
            </p>

            <button
              onClick={() => setActiveSkill(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs hover:bg-slate-700 transition-colors"
            >
              Close Skill Node
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
