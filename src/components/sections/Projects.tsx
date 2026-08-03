import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, ImageIcon, Wrench } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';
import type { Project } from '../../types';

// ─── Image placeholder ────────────────────────────────────────────────────────
function ProjectImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-navy-900/80 text-text-muted ${className}`}
      role="img"
      aria-label={alt}
    >
      <ImageIcon size={28} className="text-navy-600" />
      <p className="text-xs text-center px-2 leading-snug text-navy-500">{alt}</p>
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
  const mainImage = project.images[0];
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
      {/* Image thumbnail */}
      <div className="relative h-44 sm:h-48 bg-navy-900 overflow-hidden">
        <ProjectImage
          src={mainImage?.src ?? ''}
          alt={mainImage?.alt ?? `${project.title} screenshot`}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent pointer-events-none" />

        {/* Thumbnail count badge */}
        {extraImages.length > 0 && (
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full glass text-xs text-text-muted">
            +{extraImages.length} more
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & subtitle */}
        <div className="mb-3">
          <h3 className="font-display font-bold text-text-primary text-base">{project.title}</h3>
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

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-1.5 px-3"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-1.5 px-3"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="btn-ghost text-xs py-1.5 px-3 ml-auto"
            aria-expanded={expanded}
            aria-label={expanded ? 'Hide project details' : 'Show project details'}
          >
            {expanded ? (
              <><ChevronUp size={13} /> Less</>
            ) : (
              <><ChevronDown size={13} /> Details</>
            )}
          </button>
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-navy-700/50">
                {/* Contribution */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Wrench size={12} className="text-accent-cyan" />
                    <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">My Contribution</span>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">{project.contribution}</p>
                </div>

                {/* Extra images grid */}
                {extraImages.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Previews</p>
                    <div className="grid grid-cols-2 gap-2">
                      {extraImages.map((img, i) => (
                        <div key={i} className="h-24 rounded-xl overflow-hidden border border-navy-700/50">
                          <ProjectImage src={img.src} alt={img.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
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
