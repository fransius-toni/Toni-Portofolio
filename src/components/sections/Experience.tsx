import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';
import type { Experience } from '../../types';

// Icon by experience type
const TYPE_ICON: Record<Experience['type'], React.ElementType> = {
  work:       Briefcase,
  leadership: Users,
  volunteer:  Users,
};

const TYPE_COLOR: Record<Experience['type'], string> = {
  work:       'from-accent-cyan/20 to-accent-blue/10 border-accent-cyan/25 text-accent-cyan',
  leadership: 'from-accent-blue/20 to-accent-sky/10 border-accent-blue/25 text-accent-sky',
  volunteer:  'from-accent-teal/20 to-accent-cyan/10 border-accent-teal/25 text-accent-teal',
};

const TYPE_LABEL: Record<Experience['type'], string> = {
  work:       'Work',
  leadership: 'Leadership',
  volunteer:  'Volunteer',
};

interface TimelineItemProps {
  exp: Experience;
  index: number;
  isLast: boolean;
}

function TimelineItem({ exp, index, isLast }: TimelineItemProps) {
  const Icon = TYPE_ICON[exp.type];
  const colorClass = TYPE_COLOR[exp.type];
  const label = TYPE_LABEL[exp.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      className="relative pl-12"
    >
      {/* Vertical connector line */}
      {!isLast && (
        <div className="absolute left-4 top-10 bottom-0 w-px bg-gradient-to-b from-accent-cyan/30 to-transparent" aria-hidden="true" />
      )}

      {/* Circle node */}
      <div
        className={`absolute left-0 top-3 w-8 h-8 rounded-xl bg-gradient-to-br ${colorClass} border flex items-center justify-center shadow-glow-cyan`}
        aria-hidden="true"
      >
        <Icon size={14} />
      </div>

      {/* Card */}
      <div className="card-hover p-5 mb-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-text-primary text-sm">{exp.role}</h3>
            <p className="text-accent-cyan text-xs font-medium mt-0.5">{exp.org}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs px-2 py-0.5 rounded-full border bg-navy-700 text-text-muted`}>
              {label}
            </span>
          </div>
        </div>

        {/* Period */}
        <div className="flex items-center gap-1.5 text-text-muted text-xs mb-3">
          <Calendar size={11} className="text-accent-cyan/60" />
          {exp.period}
        </div>

        {/* Description */}
        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-navy-900/40 relative" aria-label="Experience and leadership">
      <div className="divider-glow mb-0" />

      <div className="section-container pt-8">
        <SectionHeader
          eyebrow="Experience"
          title="Experience &"
          titleHighlight="Leadership"
          subtitle="Roles where I have applied project management, organizational development, and operational skills."
        />

        <div className="mt-10 max-w-2xl">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
