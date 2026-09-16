import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { HUDNavbar } from './components/HUDNavbar';
import { LandingPage } from './components/LandingPage';
import { CareerMap } from './components/CareerMap';
import { CareerChapter } from './components/CareerChapter';
import { ShutdownSequence } from './components/ShutdownSequence';
import { SkillConstellation } from './components/SkillConstellation';
import { ProjectMissions } from './components/ProjectMissions';
import { AchievementGallery } from './components/AchievementGallery';
import { ContactSection } from './components/ContactSection';
import { CompanyTransition } from './components/CompanyTransition';
import { ResumeModal } from './components/ResumeModal';
import { TerminalOverlay } from './components/TerminalOverlay';
import { AchievementToast } from './components/AchievementToast';
import { Compass, Cpu, Award, Mail, Heart } from 'lucide-react';
import { soundController } from './utils/SoundController';

const MainContent: React.FC = () => {
  const { currentChapterId, triggerChapterTransition } = useGame();

  const renderActiveView = () => {
    switch (currentChapterId) {
      case 'landing':
        return <LandingPage />;
      case 'map':
        return <CareerMap />;
      case 'tcs':
        return <CareerChapter chapterId="tcs" />;
      case 'oracle':
        return <CareerChapter chapterId="oracle" />;
      case 'shutdown':
        return <ShutdownSequence />;
      case 'deloitte':
        return <CareerChapter chapterId="deloitte" />;
      case 'skills':
        return <SkillConstellation />;
      case 'missions':
        return <ProjectMissions />;
      case 'certs':
        return <AchievementGallery />;
      case 'contact':
        return <ContactSection />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0B0F17] text-slate-100">
      <HUDNavbar />
      <CompanyTransition />

      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* Global Sci-Fi Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90 py-6 px-4 text-center text-xs font-mono text-slate-500 no-print">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Sumit Patnaik © {new Date().getFullYear()} — <span className="text-cyan-400">The Architect's Journey</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                soundController.playClick();
                triggerChapterTransition('map');
              }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5" /> Career Map
            </button>
            <button
              onClick={() => {
                soundController.playClick();
                triggerChapterTransition('skills');
              }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Cpu className="w-3.5 h-3.5" /> Skills
            </button>
            <button
              onClick={() => {
                soundController.playClick();
                triggerChapterTransition('certs');
              }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5" /> Certifications
            </button>
            <button
              onClick={() => {
                soundController.playClick();
                triggerChapterTransition('contact');
              }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" /> Contact
            </button>
          </div>
        </div>
      </footer>

      {/* Modals & Toasts */}
      <ResumeModal />
      <TerminalOverlay />
      <AchievementToast />
    </div>
  );
};

export function App() {
  return (
    <GameProvider>
      <MainContent />
    </GameProvider>
  );
}

export default App;
