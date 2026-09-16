import React, { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { profileData } from '../data/profileData';
import { soundController } from '../utils/SoundController';
import { Play, Compass, Cpu, Award, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const LandingPage: React.FC = () => {
  const { triggerChapterTransition, setResumeModalOpen } = useGame();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background Sci-Fi Starfield & Particle Grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: { x: number; y: number; size: number; speedY: number; opacity: number }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle background grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render Floating Particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Particle Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Top Sci-Fi Chapter Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6 animate-pulse-glow">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          System Status: Enterprise Career Online
        </div>

        {/* Main Title & Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
          THE ARCHITECT'S <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">JOURNEY</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 font-mono mb-2">
          {profileData.title}
        </p>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 font-sans">
          {profileData.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => {
              soundController.playWarp();
              triggerChapterTransition('map');
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105 transition-all"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            Start Career Journey
          </button>

          <button
            onClick={() => {
              soundController.playClick();
              triggerChapterTransition('skills');
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-slate-200 font-medium text-sm hover:border-cyan-400 hover:text-cyan-300 transition-all"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            Skill Constellation
          </button>

          <button
            onClick={() => {
              soundController.playClick();
              setResumeModalOpen(true);
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 font-medium text-sm hover:bg-slate-800 transition-all"
          >
            Quick Resume PDF
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl text-center border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Primary Expertise Pills */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-left max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal-400" /> Core Engineering Stack
            </h3>
            <span className="text-xs text-slate-400 font-mono">TCS → Oracle → Deloitte</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Siebel CRM (Master)',
              'Oracle CX',
              'Public Sector Case Management',
              'Java (SE 17 Certified)',
              'Python',
              'Golang',
              'Oracle Cloud (OCI AI)',
              'Apache Kafka',
              'OpenSearch',
              'Vector DBs & GenAI',
              'REST APIs',
              'Docker & Kubernetes'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Quick Links */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sumit2798"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/sumit2798"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="GitHub Portfolio"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            title="Email Direct"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
};
