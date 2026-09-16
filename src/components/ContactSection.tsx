import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { soundController } from '../utils/SoundController';
import { Mail, Send, CheckCircle2, MapPin, Briefcase, Compass } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    soundController.playChime();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Mail className="w-4 h-4 text-cyan-400" />
          Direct Signal Uplink
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          INITIATE <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">CONTACT</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Connect with Sumit Patnaik for enterprise consulting, Siebel CRM architecture, Cloud & GenAI integration opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Direct Info & Profile Card */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white font-mono mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" /> Architect Coordinates
            </h3>

            <div className="space-y-4 text-xs font-sans text-slate-300 mb-8">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Current Role</div>
                  <div className="font-bold text-slate-200">{profileData.title}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Location</div>
                  <div className="font-bold text-slate-200">{profileData.location}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <Compass className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Career Target</div>
                  <div className="font-bold text-slate-200">{profileData.careerGoal}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase mb-3">Direct Networks</div>
            <div className="flex gap-3">
              {profileData.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-all text-center flex items-center justify-center gap-2"
                >
                  {link.platform === 'LinkedIn' && <LinkedinIcon className="w-4 h-4 text-blue-400" />}
                  {link.platform === 'GitHub' && <GithubIcon className="w-4 h-4 text-slate-200" />}
                  {link.platform === 'Email' && <Mail className="w-4 h-4 text-cyan-400" />}
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Messaging Console Form */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800">
          <h3 className="text-lg font-bold text-white font-mono mb-4 flex items-center gap-2">
            <Send className="w-5 h-5 text-emerald-400" /> Messaging Console
          </h3>

          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white font-mono mb-1">Signal Transmitted</h4>
              <p className="text-xs text-slate-400 font-sans max-w-xs mx-auto">
                Thank you for reaching out! Your message has been dispatched to Sumit Patnaik's network channel.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1 uppercase">Email Signal</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@enterprise.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1 uppercase">Transmission Payload</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquire regarding consulting, architecture review, or project collaboration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold text-xs hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2"
              >
                Transmit Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
