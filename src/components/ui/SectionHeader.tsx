import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={centered ? 'text-center' : ''}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-accent-cyan mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="section-title mb-3">
        {title}{' '}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`section-subtitle max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-px w-16 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
