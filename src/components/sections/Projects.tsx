import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, ExternalLink, ChevronDown, ChevronUp,
  ImageIcon, Wrench, ChevronLeft, ChevronRight, Users,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';
import type { Project, ProjectImage } from '../../types';

// ─── Image with fallback ──────────────────────────────────────────────────────
function ProjectImg({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-navy-900/80 ${className}`}
      role="img"
      aria-label={alt}
    >
      <ImageIcon size={26} className="text-navy-600" aria-hidden="true" />
      <p className="text-xs text-center px-3 leading-snug text-navy-500">{alt}</p>
    </div>
  );
}

// ─── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({ images }: { images: ProjectImage[] }) {
  const [current, setCurrent] = useState(0);
  const count = images.length;

  // respect prefers-reduced-motion — skip animation when requested
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % count);
  }, [count]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  };

  // Single image — no carousel needed
  if (count <= 1) {
    return (
      <div className="relative h-44 sm:h-48 bg-navy-900 overflow-hidden">
        <ProjectImg
          src={images[0]?.src ?? ''}
          alt={images[0]?.alt ?? 'Project screenshot'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className="relative h-44 sm:h-48 bg-navy-900 overflow-hidden group/carousel"
      role="region"
      aria-label="Project image carousel"
      onKeyDown={handleKey}
      tabIndex={0}
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <ProjectImg
            src={images[current].src}
            alt={images[current].alt}
            className="transition-transform duration-500 group-hover/carousel:scale-105 motion-reduce:group-hover/carousel:scale-100"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent pointer-events-none" />

      {/* Prev / Next buttons — visible on hover */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                   w-7 h-7 rounded-full glass border border-navy-600/50 flex items-center justify-center
                   text-text-muted hover:text-accent-cyan transition-all duration-200
                   opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100"
      >
        <ChevronLeft size={14} aria-hidden="true" />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                   w-7 h-7 rounded-full glass border border-navy-600/50 flex items-center justify-center
                   text-text-muted hover:text-accent-cyan transition-all duration-200
                   opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100"
      >
        <ChevronRight size={14} aria-hidden="true" />
      </button>

      {/* Navigation dots */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5"
        role="tablist"
        aria-label="Image navigation"
      >
        {images.map((img, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`View image ${i + 1}: ${img.alt}`}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? 'w-4 h-1.5 bg-accent-cyan'
                : 'w-1.5 h-1.5 bg-text-muted/50 hover:bg-text-muted'
            }`}
          />
        ))}
      </div>

      {/* Alt text label at bottom-left */}
      <div className="absolute bottom-6 left-3 right-12 z-10 pointer-events-none">
        <p className="text-xs text-text-muted/70 truncate leading-none">
          {images[current].alt}
        </p>
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const extraImages = project.images.slice(1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="card border border-navy-600/40 hover:border-accent-cyan/25 transition-all duration-300 hover:shadow-card-hover overflow-hidden group"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image carousel */}
      <ImageCarousel images={project.images} />

      {/* Content */}
      <div className="p-5">
        {/* Title + subtitle + team badge */}
        <div className="mb-3">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-display font-bold text-text-primary text-base leading-snug">
              {project.title}
            </h3>
            {project.teamProject && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-accent-blue/15 border border-accent-blue/30 text-accent-sky flex-shrink-0">
                <Users size={10} aria-hidden="true" />
                Team Project
              </span>
            )}
          </div>
          <p className="text-accent-cyan text-xs font-medium mt-0.5">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full bg-navy-700 border border-navy-600/50 text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons — GitHub hidden when empty, Demo shown when available */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-1.5 px-3"
              aria-label={`${project.title} GitHub repository (opens in new tab)`}
            >
              <Github size={13} aria-hidden="true" /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-1.5 px-3"
              aria-label={`${project.title} live demo (opens in new tab)`}
            >
              <ExternalLink size={13} aria-hidden="true" /> Live Demo
            </a>
          )}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="btn-ghost text-xs py-1.5 px-3 ml-auto"
            aria-expanded={expanded}
            aria-controls={`details-${project.id}`}
            aria-label={expanded ? 'Hide project details' : 'Show project details'}
          >
            {expanded
              ? <><ChevronUp size={13} aria-hidden="true" /> Less</>
              : <><ChevronDown size={13} aria-hidden="true" /> Details</>
            }
          </button>
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`details-${project.id}`}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-navy-700/50 space-y-4">
                {/* Contribution */}
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Wrench size={12} className="text-accent-cyan" aria-hidden="true" />
                    <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">
                      My Contribution
                    </span>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Extra images */}
                {extraImages.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Previews
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {extraImages.map((img, i) => (
                        <div
                          key={i}
                          className="h-24 rounded-xl overflow-hidden border border-navy-700/50"
                        >
                          <ProjectImg src={img.src} alt={img.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Demo button repeated in expanded section */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-1.5 px-3 inline-flex"
                    aria-label={`${project.title} live demo (opens in new tab)`}
                  >
                    <ExternalLink size={13} aria-hidden="true" /> View Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────
export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative" aria-label="Featured projects">
      <div className="divider-glow mb-0" />

      <div className="section-container pt-8">
        <SectionHeader
          eyebrow="Featured Work"
          title="My"
          titleHighlight="Projects"
          subtitle="End-to-end data science and AI applications built from data collection to deployment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
