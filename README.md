# Sumit Patnaik — "The Architect's Journey: A Career RPG"

An interactive, game-based personal career resume website built for **Sumit Patnaik** (Consultant at Deloitte India).

Visitors explore Sumit's professional evolution across enterprise technology, including roles at **TCS**, **Oracle**, and **Deloitte**, along with 8 verified certifications, an interactive skill constellation, mission-based project schematics, and lightweight sci-fi RPG game mechanics.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Run

1. Clone or navigate to the repository directory:
   ```bash
   cd /home/sumit/Documents/Game_Resume
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:3000`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## 🎮 Key Features & Game Mechanics

- **Interactive Career Map & Chapters**:
  - **Chapter 1 — TCS**: Beginning of enterprise technology journey & Telecom CRM.
  - **Chapter 2 — Oracle**: Enterprise expansion, Siebel core, OCI, and high-volume data performance.
  - **Chapter 3 — The Unexpected Shutdown**: Respectful, polished interactive power-down and quiet reflection sequence communicating resilience and continuous learning.
  - **Chapter 4 — Deloitte**: Modern technology hub activation, Consultant role at Deloitte India, Canadian Public Sector Case Management.
- **Leveling & XP Engine**:
  - Gain XP by navigating chapters, unlocking certifications, exploring skills, and viewing project blueprints.
  - Real-time HUD gauge tracking progress toward higher Architect levels.
- **Interactive Skill Constellation**:
  - HTML5 canvas graph depicting connected nodes (Siebel, Oracle CX, Java, Python, Golang, Kafka, OpenSearch, Vector DBs, GenAI, OCI, Kubernetes).
  - Category filters and clickable skill detail drawer.
- **Mission-Based Project Showcase**:
  - 9 initial enterprise projects (Siebel Health Probe, Kafka Bulk Ordering Pipeline, GenAI HLD Generator, OpenSearch Chatbot, 1M+ Asset Optimization, OCI AI Use Cases, Golang File Database, Dynamic Pricing Engine).
  - Interactive architecture flow schematics and impact metrics.
- **Certification Vault**:
  - 8 unlockable badges with rarity glows (Oracle Siebel Associate/Professional, OCI Data Science 2023, Redwood Application 2023, OCP Java SE 17, OCI GenAI 2024, OCI AI Foundations 2024, TM Forum Foundation).
- **Audio FX Synthesizer**:
  - Web Audio API sci-fi sound effects (clicks, chimes, warp portals, power down FX) with a HUD mute toggle.
- **Developer CLI Terminal (Easter Egg)**:
  - Press `~` or click the CLI icon in the top header to launch `sumit@architect-os:~$`. Commands: `help`, `whoami`, `skills`, `projects`, `certs`, `layoff`, `deloitte`, `contact`, `clear`.
- **ATS Resume PDF Download**:
  - One-click print/save PDF window formatted with print CSS media queries.

---

## 📂 Project Architecture

```
Game_Resume/
├── index.html                  # HTML5 Entry Template with Google Fonts
├── vite.config.ts              # Vite + @tailwindcss/vite Configuration
├── tsconfig.json               # TypeScript Configuration
├── package.json                # Dependencies and scripts
├── src/
│   ├── main.tsx                # Application Entrypoint
│   ├── App.tsx                 # Main layout & router
│   ├── index.css               # Global Tailwind CSS & cyber glassmorphism
│   ├── context/
│   │   └── GameContext.tsx     # Global RPG Game State, XP, level, sound, transition context
│   ├── data/                   # Modular & Editable Data Layer
│   │   ├── profileData.ts      # Sumit Patnaik profile info & social links
│   │   ├── chaptersData.ts     # Chapter narratives (TCS, Oracle, Shutdown, Deloitte)
│   │   ├── certificationsData.ts # 8 certifications
│   │   ├── skillsData.ts       # Skills & canvas node coordinates
│   │   ├── projectsData.ts     # 9 mission projects & architecture schematics
│   │   └── achievementsData.ts # Game achievements
│   ├── utils/
│   │   └── SoundController.ts  # Web Audio API sci-fi synthesizer
│   └── components/             # React UI Components
│       ├── HUDNavbar.tsx       # Persistent top bar (Level, XP gauge, audio toggle, CLI, Resume)
│       ├── LandingPage.tsx     # Hero section with particle backdrop grid
│       ├── CareerMap.tsx       # Interactive career timeline & chapter selector
│       ├── CareerChapter.tsx   # Company chapter narrative & accomplishment view
│       ├── ShutdownSequence.tsx# Respectful Chapter 3 transition sequence
│       ├── CompanyTransition.tsx # Fullscreen space-warp portal overlay
│       ├── SkillConstellation.tsx# Interactive canvas skill node network
│       ├── ProjectMissions.tsx # Project cards & architecture flow schematics
│       ├── AchievementGallery.tsx # Holographic certification badges
│       ├── ContactSection.tsx  # Direct messaging console & social links
│       ├── ResumeModal.tsx     # Print/PDF ATS resume modal
│       ├── TerminalOverlay.tsx # Easter egg developer CLI
│       ├── AchievementToast.tsx# HUD popup notifications
│       └── SocialIcons.tsx     # Clean SVG brand icons
```

---

## ✏️ How to Edit Content

All personal content is stored in decoupled TypeScript files under `src/data/`:
- Edit **[src/data/profileData.ts](file:///home/sumit/Documents/Game_Resume/src/data/profileData.ts)** to update your role, location, career goals, or social links.
- Edit **[src/data/chaptersData.ts](file:///home/sumit/Documents/Game_Resume/src/data/chaptersData.ts)** to update company roles, responsibilities, or narratives.
- Edit **[src/data/certificationsData.ts](file:///home/sumit/Documents/Game_Resume/src/data/certificationsData.ts)** to modify certification names, issuers, credential IDs, or years.
- Edit **[src/data/projectsData.ts](file:///home/sumit/Documents/Game_Resume/src/data/projectsData.ts)** to update project metrics, technical contributions, or architecture diagrams.
