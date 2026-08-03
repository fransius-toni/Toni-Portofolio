import { motion } from 'framer-motion';
import {
  Brain,
  BarChart2,
  Database,
  Cpu,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';
import type { SkillCategory } from '../../types';

// Map icon string → Lucide component
const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  BarChart2,
  Database,
  Cpu,
};

// Map color string → Tailwind classes
const COLOR_MAP: Record<string, { border: string; icon: string; tag: string; glow: string }> = {
  cyan:  {
    border: 'border-accent-cyan/30',
    icon:   'from-accent-cyan/20 to-accent-blue/10 border-accent-cyan/25 text-accent-cyan',
    tag:    'bg-accent-cyan/10 border-accent-cyan/20 text-accent-light',
    glow:   'group-hover:shadow-glow-cyan',
  },
  blue:  {
    border: 'border-accent-blue/30',
    icon:   'from-accent-blue/20 to-accent-sky/10 border-accent-blue/25 text-accent-sky',
    tag:    'bg-accent-blue/10 border-accent-blue/20 text-accent-sky',
    glow:   'group-hover:shadow-glow-blue',
  },
  sky:   {
    border: 'border-accent-sky/30',
    icon:   'from-accent-sky/20 to-accent-teal/10 border-accent-sky/25 text-accent-sky',
    tag:    'bg-accent-sky/10 border-accent-sky/20 text-accent-light',
    glow:   'group-hover:shadow-glow-cyan',
  },
  teal:  {
    border: 'border-accent-teal/30',
    icon:   'from-accent-teal/20 to-accent-cyan/10 border-accent-teal/25 text-accent-teal',
    tag:    'bg-accent-teal/10 border-accent-teal/20 text-accent-light',
    glow:   'group-hover:shadow-glow-cyan',
  },
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const Icon = ICON_MAP[category.icon] ?? Brain;
  const colors = COLOR_MAP[category.color] ?? COLOR_MAP.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`group card p-6 border ${colors.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${colors.glow}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.icon} border flex items-center justify-center flex-shrink-0`}>
          <Icon size={18} />
        </div>
        <h3 className="font-semibold text-text-primary text-sm leading-snug">{category.title}</h3>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map(({ name }) => (
          <span
            key={name}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-200 ${colors.tag}`}
          >
            {name}
          </span>
        ))}
      </div>

      {/* Count badge */}
      <div className="mt-4 pt-3 border-t border-navy-700/50 flex items-center justify-between">
        <span className="text-xs text-text-muted">{category.skills.length} technologies</span>
        <div className="flex gap-1">
          {Array.from({ length: Math.min(5, Math.ceil(category.skills.length / 2)) }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue transition-all`}
              style={{ width: `${12 + i * 4}px`, opacity: 0.3 + i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-navy-900/40 relative" aria-label="Skills and technologies">
      <div className="divider-glow mb-0" />

      <div className="section-container pt-8">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Skills &"
          titleHighlight="Technologies"
          subtitle="My core technical competencies, with a primary focus on Data Science and Machine Learning."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mt-10">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
