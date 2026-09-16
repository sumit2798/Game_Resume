import React from 'react';
import { useGame } from '../context/GameContext';
import { profileData } from '../data/profileData';
import { chaptersData } from '../data/chaptersData';
import { certificationsData } from '../data/certificationsData';
import { soundController } from '../utils/SoundController';
import { X, Printer, Download, Mail, MapPin, Briefcase } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const ResumeModal: React.FC = () => {
  const { resumeModalOpen, setResumeModalOpen } = useGame();

  if (!resumeModalOpen) return null;

  const handlePrint = () => {
    soundController.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0D131F] text-slate-100 w-full max-w-4xl rounded-3xl border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Sumit Patnaik — Professional Resume
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF
            </button>
            <button
              onClick={() => setResumeModalOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 overflow-y-auto space-y-6 font-sans text-slate-200" id="resume-document">
          
          {/* Resume Header */}
          <div className="border-b border-slate-700/80 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white mb-1">{profileData.name}</h1>
              <p className="text-cyan-400 font-mono text-sm font-semibold">{profileData.title}</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">{profileData.bio}</p>
            </div>
            <div className="text-xs font-mono text-slate-400 space-y-1">
              <div>📍 Location: {profileData.location}</div>
              <div>📞 Phone: {profileData.phone}</div>
              <div>✉️ Email: {profileData.email}</div>
              <div>🔗 LinkedIn: linkedin.com/in/sumit2798</div>
              <div>💼 Experience: {profileData.experienceYears}+ Years</div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-2 border-b border-slate-800 pb-1">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-white">Siebel CRM & Oracle CX:</strong> Open UI, Business Components, Integration Objects, Workflows, REST APIs, Public Sector Case Management.</div>
              <div><strong className="text-white">Programming:</strong> Java (SE 17 Certified), Python, Golang, SQL, PL/SQL.</div>
              <div><strong className="text-white">Data & AI:</strong> Apache Kafka, OpenSearch, Vector DBs, Embeddings, GenAI, Data Engineering.</div>
              <div><strong className="text-white">Cloud & DevOps:</strong> Oracle Cloud Infrastructure (OCI), Docker, Kubernetes, Microservices.</div>
            </div>
          </div>

          {/* Career History */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-3 border-b border-slate-800 pb-1">
              Professional Career Progression
            </h2>

            <div className="space-y-4">
              {chaptersData.map((ch) => (
                <div key={ch.id} className="text-xs">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-white text-sm">{ch.role} — <span className="text-cyan-300">{ch.company}</span></span>
                    <span className="font-mono text-slate-400 text-[11px]">{ch.period} | {ch.location}</span>
                  </div>
                  <p className="text-slate-300 mb-2">{ch.shortSummary}</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {ch.responsibilities.slice(0, 3).map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications List */}
          <div>
            <h2 className="text-xs font-mono uppercase font-bold text-cyan-400 tracking-wider mb-2 border-b border-slate-800 pb-1">
              Verified Certifications (8)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-2 rounded bg-slate-900/60 border border-slate-800/80">
                  <div className="font-bold text-white">{cert.name}</div>
                  <div className="text-[10px] font-mono text-slate-400">{cert.issuer} ({cert.year})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
