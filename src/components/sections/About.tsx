import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Lightbulb } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function About() {
  const { about, personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 relative" aria-label="About me">
      {/* Top divider */}
      <div className="divider-glow mb-0" />

      <div className="section-container pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Identity card + bio ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SectionHeader
              eyebrow="About Me"
              title="Who"
              titleHighlight="I Am"
              subtitle="A Computer Science student passionate about turning data into actionable insights."
            />

            {/* Identity card */}
            <div className="card p-5 mt-8 mb-6 border-l-4 border-accent-cyan/60">
              <div className="flex items-start gap-4">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 border border-accent-cyan/30 flex items-center justify-center shadow-glow-cyan">
                  {personal.avatar ? (
                    <img
                      src={personal.avatar}
                      alt={`${personal.name} — profile photo`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <span className="font-display font-bold text-2xl gradient-text">
                      {personal.firstName.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-bold text-text-primary text-base leading-tight">
                    {personal.name}
                  </h3>
                  <p className="text-accent-cyan text-xs font-medium mt-0.5">{personal.title}</p>
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-text-muted">
                      <MapPin size={11} className="text-accent-cyan flex-shrink-0" />
                      {personal.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-text-muted">
                      <GraduationCap size={11} className="text-accent-cyan flex-shrink-0" />
                      {education.institution} · {education.semester}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Focus areas */}
            <div className="mt-8 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={14} className="text-accent-cyan" />
                <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">Current Focus</span>
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

          {/* ── Right: Stats cards ─────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-6"
          >
            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={cardVariants}
                  className="card-hover p-5 flex flex-col items-center justify-center text-center gap-1 min-h-[100px]"
                >
                  <span className="font-display text-3xl font-extrabold gradient-text">{value}</span>
                  <span className="text-xs text-text-muted font-medium uppercase tracking-wider">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Education highlight card */}
            <motion.div variants={cardVariants} className="card p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 border border-accent-blue/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-accent-sky" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary text-sm">{education.institution}</h4>
                  <p className="text-text-muted text-xs mt-0.5">{education.degree}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                    <span className="text-xs text-accent-cyan font-medium">GPA {education.gpa}</span>
                    <span className="text-xs text-text-muted">{education.semester}</span>
                    <span className="text-xs text-text-muted">Grad. {education.graduationYear}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact info card */}
            <motion.div variants={cardVariants} className="card p-5">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Contact</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted w-12 flex-shrink-0">Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs text-accent-cyan hover:text-accent-light transition-colors truncate"
                  >
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted w-12 flex-shrink-0">Location</span>
                  <span className="text-xs text-text-secondary">{personal.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
