import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Lightbulb, User } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';

// ─── Profile Photo Card ───────────────────────────────────────────────────────
function ProfilePhoto() {
  const { personal, education } = portfolioData;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Photo frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative group"
        style={{ width: 'clamp(180px, 42vw, 320px)' }}
      >
        {/* Outer glow ring — animates on hover, respects reduced-motion */}
        <div
          aria-hidden="true"
          className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-accent-cyan/40 via-accent-blue/30 to-accent-sky/20
                     opacity-60 blur-sm transition-opacity duration-500
                     group-hover:opacity-100 motion-reduce:transition-none"
        />

        {/* Inner card */}
        <div
          className="relative rounded-3xl overflow-hidden border border-accent-cyan/30
                     bg-navy-800 shadow-glow-cyan
                     transition-transform duration-500 ease-out
                     group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
        >
          {/* Aspect ratio wrapper — 3:4 portrait */}
          <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
            {!imgError && personal.avatar ? (
              <img
                src={personal.avatar}
                alt="Fransius Toni Gabriel Tamba"
                onError={() => setImgError(true)}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            ) : (
              /* Fallback — shown if image path is wrong or file missing */
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900 gap-3">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 border border-accent-cyan/30 flex items-center justify-center">
                  <User size={36} className="text-accent-cyan/60" aria-hidden="true" />
                </div>
                <p className="text-xs text-text-muted text-center px-4">
                  Profile photo
                  <br />
                  <span className="text-accent-cyan/60">public/images/profile.jpeg</span>
                </p>
              </div>
            )}

            {/* Bottom gradient overlay for readability */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-20
                         bg-gradient-to-t from-navy-900/70 to-transparent pointer-events-none"
            />
          </div>
        </div>

        {/* Available badge — top-right corner */}
        <div
          aria-hidden="true"
          className="absolute -top-2 -right-2 flex items-center gap-1.5
                     glass rounded-full px-2.5 py-1 border border-accent-cyan/30 shadow-card text-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
          <span className="text-accent-cyan font-medium">Open to work</span>
        </div>
      </motion.div>

      {/* Name + identity strip below photo */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="text-center w-full"
        style={{ maxWidth: 'clamp(180px, 42vw, 320px)' }}
      >
        <h3 className="font-display font-bold text-text-primary text-base leading-snug">
          {personal.name}
        </h3>
        <p className="text-accent-cyan text-xs font-medium mt-1 leading-snug">
          {personal.title}
        </p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2">
          <span className="flex items-center gap-1 text-xs text-text-muted">
            <MapPin size={10} className="text-accent-cyan/70" aria-hidden="true" />
            {personal.location}
          </span>
          <span className="flex items-center gap-1 text-xs text-text-muted">
            <GraduationCap size={10} className="text-accent-cyan/70" aria-hidden="true" />
            {education.institution} · {education.semester}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Stat Cards ───────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

// ─── About Section ────────────────────────────────────────────────────────────
export default function About() {
  const { about, personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 relative" aria-label="About me">
      <div className="divider-glow mb-0" />

      <div className="section-container pt-8">
        {/* Section heading */}
        <SectionHeader
          eyebrow="About Me"
          title="Who"
          titleHighlight="I Am"
          subtitle="A Computer Science student passionate about turning data into actionable insights."
        />

        {/* ── Three-column layout: photo | bio | stats ──────────────────── */}
        {/* On mobile: stacked. Tablet: 2-col. Desktop: photo + wide right col */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 items-start">

          {/* ── Column 1: Profile photo ──────────────────────────────────── */}
          <div className="flex justify-center md:justify-start">
            <ProfilePhoto />
          </div>

          {/* ── Column 2: Bio + focus areas ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-5"
          >
            {/* Bio paragraphs */}
            <div className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Contact quick-links */}
            <div className="card p-4 border-l-4 border-accent-cyan/50">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                Contact
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted w-14 flex-shrink-0">Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs text-accent-cyan hover:text-accent-light transition-colors truncate"
                  >
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted w-14 flex-shrink-0">Location</span>
                  <span className="text-xs text-text-secondary">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Current focus tags */}
            <div className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={13} className="text-accent-cyan" aria-hidden="true" />
                <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">
                  Current Focus
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Data Science', 'Machine Learning', 'AI Chatbots', 'LLM Integration', 'Data Analytics'].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Column 3: Stats + education (desktop sidebar, stacks below on tablet/mobile) ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="flex flex-col gap-4 md:col-span-2 lg:col-span-1 lg:min-w-[220px]"
          >
            {/* Stat grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {about.stats.map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={cardVariants}
                  className="card-hover p-4 flex flex-col items-center justify-center text-center gap-1 min-h-[80px]"
                >
                  <span className="font-display text-2xl font-extrabold gradient-text">{value}</span>
                  <span className="text-xs text-text-muted font-medium uppercase tracking-wider leading-snug">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div variants={cardVariants} className="card p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 border border-accent-blue/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={16} className="text-accent-sky" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary text-xs leading-snug">
                    {education.institution}
                  </h4>
                  <p className="text-text-muted text-xs mt-0.5">{education.degree}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                    <span className="text-xs text-accent-cyan font-medium">GPA {education.gpa}</span>
                    <span className="text-xs text-text-muted">{education.semester}</span>
                    <span className="text-xs text-text-muted">Grad. {education.graduationYear}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
