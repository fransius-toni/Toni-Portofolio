import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-navy-700/60 bg-navy-900/80 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-text-muted text-sm text-center sm:text-left">
          © 2026{' '}
          <span className="text-text-secondary font-medium">{personal.name}</span>.
          {' '}All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label={`Email ${personal.email}`}
            className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Tech stack */}
        <p className="text-text-muted text-xs text-center sm:text-right">
          Built with React, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
