import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { certificationsData } from '../data/certificationsData';
import { soundController } from '../utils/SoundController';
import { X, Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export const TerminalOverlay: React.FC = () => {
  const { terminalOpen, setTerminalOpen, triggerChapterTransition } = useGame();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Architect-OS v2.4 (x86_64-architect-linux)',
    'Type "help" to list available commands.',
    '---------------------------------------------------'
  ]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!terminalOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundController.playClick();
    const newLogs = [...history, `sumit@architect-os:~$ ${input}`];

    switch (cmd) {
      case 'help':
        newLogs.push(
          'AVAILABLE COMMANDS:',
          '  whoami     - Display Sumit Patnaik profile & current role',
          '  skills     - List technical skill stack',
          '  projects   - List 9 mission projects',
          '  certs      - Display 8 verified certifications',
          '  layoff     - Navigate to Chapter 3 Unexpected Shutdown transition',
          '  deloitte   - Jump directly to Chapter 4 Deloitte',
          '  contact    - Display direct contact coordinates',
          '  clear      - Clear terminal screen',
          '  exit       - Close terminal CLI'
        );
        break;
      case 'whoami':
        newLogs.push(
          `User: ${profileData.name}`,
          `Role: ${profileData.title}`,
          `Location: ${profileData.location}`,
          `Career Path: TCS -> Oracle -> Deloitte`
        );
        break;
      case 'skills':
        newLogs.push(
          'SKILL STACK: Siebel CRM, Oracle CX, Java SE 17, Python, Golang, Kafka, OpenSearch, OCI AI, GenAI, Docker, Kubernetes, REST APIs.'
        );
        break;
      case 'projects':
        projectsData.forEach(p => {
          newLogs.push(` [${p.missionCode}] ${p.title} - ${p.companyAssociation}`);
        });
        break;
      case 'certs':
        certificationsData.forEach(c => {
          newLogs.push(` * [${c.year}] ${c.name} (${c.issuer})`);
        });
        break;
      case 'layoff':
        triggerChapterTransition('shutdown');
        setTerminalOpen(false);
        break;
      case 'deloitte':
        triggerChapterTransition('deloitte');
        setTerminalOpen(false);
        break;
      case 'contact':
        newLogs.push('Email: sumit.patnaik@example.com | LinkedIn: sumit-patnaik | Location: India');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setTerminalOpen(false);
        break;
      default:
        newLogs.push(`Command not recognized: "${cmd}". Type "help" for command list.`);
    }

    setHistory(newLogs);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#080C14] text-emerald-400 w-full max-w-2xl rounded-2xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)] overflow-hidden font-mono text-xs flex flex-col h-[500px]">
        
        {/* Terminal Titlebar */}
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400 text-xs">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span>sumit@architect-os:~ (Developer CLI)</span>
          </div>
          <button onClick={() => setTerminalOpen(false)} className="hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Console Body */}
        <div className="p-4 flex-1 overflow-y-auto space-y-1">
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap">{line}</div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">sumit@architect-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command..."
            className="flex-1 bg-transparent border-none outline-none text-emerald-300 font-mono text-xs focus:ring-0"
          />
        </form>

      </div>
    </div>
  );
};
