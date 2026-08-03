import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, ChevronRight } from 'lucide-react';
import portfolioData from '../../data/portfolioData';

// ─── Inline SVG: Data Science / Analytics dashboard illustration ──────────────
// Replace this component with a personal photo:
//   <img src="/images/profile.jpg" alt="Fransius Toni Gabriel Tamba"
//        className="w-full h-full object-cover" />
function DataVisual() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EcoRoute AI data science dashboard illustration"
      role="img"
      className="w-full h-full"
    >
      {/* Background card */}
      <rect x="10" y="10" width="380" height="300" rx="16"
        fill="rgba(7,20,40,0.9)" stroke="rgba(6,182,212,0.25)" strokeWidth="1"/>

      {/* Top bar */}
      <rect x="10" y="10" width="380" height="44" rx="16" fill="rgba(6,182,212,0.06)"/>
      <rect x="10" y="38" width="380" height="6" fill="rgba(7,20,40,0.9)"/>
      <circle cx="38" cy="32" r="6" fill="rgba(255,80,80,0.6)"/>
      <circle cx="56" cy="32" r="6" fill="rgba(255,200,50,0.6)"/>
      <circle cx="74" cy="32" r="6" fill="rgba(50,200,100,0.6)"/>
      <text x="100" y="37" fill="rgba(148,163,184,0.7)" fontSize="11" fontFamily="monospace">
        EcoRoute AI — Dashboard
      </text>

      {/* Stat cards — no unverified accuracy percentages */}
      <rect x="24" y="66" width="80" height="50" rx="8"
        fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="1"/>
      <text x="34" y="84" fill="rgba(6,182,212,0.7)" fontSize="8" fontFamily="monospace">WASTE VOL</text>
      <text x="34" y="101" fill="#f0f4ff" fontSize="16" fontWeight="bold" fontFamily="monospace">3.2T</text>

      <rect x="114" y="66" width="80" height="50" rx="8"
        fill="rgba(37,99,235,0.08)" stroke="rgba(37,99,235,0.2)" strokeWidth="1"/>
      <text x="124" y="84" fill="rgba(37,99,235,0.8)" fontSize="8" fontFamily="monospace">TRUCKS</text>
      <text x="124" y="101" fill="#f0f4ff" fontSize="16" fontWeight="bold" fontFamily="monospace">12</text>

      <rect x="204" y="66" width="80" height="50" rx="8"
        fill="rgba(13,148,136,0.08)" stroke="rgba(13,148,136,0.2)" strokeWidth="1"/>
      <text x="214" y="84" fill="rgba(13,148,136,0.8)" fontSize="8" fontFamily="monospace">ML MODEL</text>
      <text x="214" y="101" fill="#f0f4ff" fontSize="13" fontWeight="bold" fontFamily="monospace">Ensemble</text>

      <rect x="294" y="66" width="80" height="50" rx="8"
        fill="rgba(14,165,233,0.08)" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
      <text x="304" y="84" fill="rgba(14,165,233,0.8)" fontSize="8" fontFamily="monospace">ROUTES</text>
      <text x="304" y="101" fill="#f0f4ff" fontSize="16" fontWeight="bold" fontFamily="monospace">8</text>

      {/* Bar chart */}
      <rect x="24" y="130" width="210" height="130" rx="8"
        fill="rgba(4,15,30,0.7)" stroke="rgba(6,182,212,0.12)" strokeWidth="1"/>
      <text x="36" y="148" fill="rgba(148,163,184,0.6)" fontSize="8" fontFamily="monospace">
        DAILY WASTE VOLUME PREDICTION
      </text>
      {/* Bars */}
      {[
        { x: 40,  h: 60, color: 'rgba(6,182,212,0.7)'  },
        { x: 62,  h: 45, color: 'rgba(6,182,212,0.5)'  },
        { x: 84,  h: 72, color: 'rgba(6,182,212,0.8)'  },
        { x: 106, h: 55, color: 'rgba(6,182,212,0.6)'  },
        { x: 128, h: 80, color: 'rgba(37,99,235,0.9)'  },
        { x: 150, h: 65, color: 'rgba(6,182,212,0.65)' },
        { x: 172, h: 50, color: 'rgba(6,182,212,0.5)'  },
        { x: 194, h: 68, color: 'rgba(6,182,212,0.7)'  },
      ].map(({ x, h, color }, i) => (
        <rect key={i} x={x} y={248 - h} width="16" height={h} rx="3" fill={color}/>
      ))}
      {/* Trend line */}
      <polyline
        points="48,220 70,232 92,215 114,224 136,205 158,218 180,228 202,212"
        stroke="rgba(103,232,249,0.8)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 2"
      />

      {/* Status panel — replaces unverified accuracy donut */}
      <rect x="248" y="130" width="130" height="130" rx="8"
        fill="rgba(4,15,30,0.7)" stroke="rgba(37,99,235,0.12)" strokeWidth="1"/>
      <text x="260" y="148" fill="rgba(148,163,184,0.6)" fontSize="8" fontFamily="monospace">
        SYSTEM STATUS
      </text>
      {/* Status items */}
      <circle cx="265" cy="168" r="4" fill="rgba(6,182,212,0.9)"/>
      <text x="276" y="172" fill="rgba(240,244,255,0.85)" fontSize="9" fontFamily="monospace">Prediction: Active</text>
      <circle cx="265" cy="188" r="4" fill="rgba(13,148,136,0.9)"/>
      <text x="276" y="192" fill="rgba(240,244,255,0.85)" fontSize="9" fontFamily="monospace">AI Assistant: On</text>
      <circle cx="265" cy="208" r="4" fill="rgba(37,99,235,0.9)"/>
      <text x="276" y="212" fill="rgba(240,244,255,0.85)" fontSize="9" fontFamily="monospace">Routing: Ready</text>
      <circle cx="265" cy="228" r="4" fill="rgba(14,165,233,0.9)"/>
      <text x="276" y="232" fill="rgba(240,244,255,0.85)" fontSize="9" fontFamily="monospace">Fleet: Calc.</text>

      {/* Route map sketch */}
      <rect x="24" y="272" width="354" height="24" rx="6"
        fill="rgba(4,15,30,0.6)" stroke="rgba(6,182,212,0.1)" strokeWidth="1"/>
      <circle cx="50"  cy="284" r="4" fill="rgba(6,182,212,0.8)"/>
      <circle cx="100" cy="284" r="3" fill="rgba(6,182,212,0.5)"/>
      <circle cx="160" cy="284" r="4" fill="rgba(37,99,235,0.8)"/>
      <circle cx="220" cy="284" r="3" fill="rgba(6,182,212,0.5)"/>
      <circle cx="290" cy="284" r="4" fill="rgba(13,148,136,0.8)"/>
      <circle cx="350" cy="284" r="3" fill="rgba(6,182,212,0.5)"/>
      <polyline
        points="50,284 100,284 160,284 220,284 290,284 350,284"
        stroke="rgba(6,182,212,0.35)" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
      <text x="200" y="290" textAnchor="middle"
        fill="rgba(148,163,184,0.4)" fontSize="7" fontFamily="monospace">
        Route Optimization — OSRM
      </text>
    </svg>
  );
}

// ─── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  const { personal } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Hero background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content ─────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5">
              <span className="dot-glow animate-pulse-slow" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent-cyan">
                Available for Internship
              </span>
            </motion.div>

            {/* Name — clear two-line layout */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold leading-tight mb-4"
            >
              <span className="block text-lg sm:text-xl text-text-secondary font-medium mb-1">
                Hello, I'm
              </span>
              <span className="block text-4xl sm:text-5xl xl:text-[3.4rem] gradient-text">
                Fransius Toni
              </span>
              <span className="block text-4xl sm:text-5xl xl:text-[3.4rem] text-text-primary">
                Gabriel Tamba
              </span>
            </motion.h1>

            {/* Professional title */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-medium text-accent-light mb-3"
            >
              {personal.title}
            </motion.p>

            {/* Short intro */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              {personal.intro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
                aria-label="Scroll to projects section"
              >
                View Projects <ChevronRight size={16} aria-hidden="true" />
              </button>
              <a
                href={personal.cvUrl}
                download
                className="btn-secondary"
                aria-label="Download my CV"
              >
                <Download size={15} aria-hidden="true" /> Download CV
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="GitHub profile (opens in new tab)"
              >
                <Github size={15} aria-hidden="true" /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <Linkedin size={15} aria-hidden="true" /> LinkedIn
              </a>
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-4 border-t border-navy-700/60"
            >
              {[
                { label: 'GPA',        value: '3.59 / 4.00' },
                { label: 'University', value: 'President University' },
                { label: 'Semester',   value: '6th Semester' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-text-primary mt-0.5">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Visual ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Glow halo */}
            <div
              className="absolute inset-8 rounded-3xl bg-accent-cyan/5 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Dashboard card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
              className="relative w-full max-w-[440px] rounded-3xl border border-accent-cyan/20 shadow-glow-cyan overflow-hidden"
            >
              <DataVisual />
            </motion.div>

            {/* Floating badge: ML stack — accurate, no percentage */}
            <motion.div
              className="absolute -top-3 -right-3 glass rounded-xl px-3 py-2 border border-navy-500/50 shadow-card"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
              aria-hidden="true"
            >
              <p className="text-xs text-text-muted">ML Model</p>
              <p className="text-sm font-bold text-accent-cyan">Ensemble</p>
            </motion.div>

            {/* Floating badge: primary stack */}
            <motion.div
              className="absolute -bottom-3 -left-3 glass rounded-xl px-3 py-2 border border-navy-500/50 shadow-card"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
              aria-hidden="true"
            >
              <p className="text-xs text-text-muted">Primary Stack</p>
              <p className="text-sm font-bold gradient-text">Python + AI</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1 text-text-muted hover:text-accent-cyan transition-colors duration-300"
          >
            <span className="text-xs tracking-widest uppercase select-none">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              aria-hidden="true"
            >
              <ArrowDown size={18} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
