import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { hasRealCertificates } from '../sections/Certificates';

// Base nav items — Certificates is added only when real data exists
const BASE_NAV = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

const CERT_NAV = { label: 'Certificates', href: '#certificates' };

export default function Navbar() {
  const showCerts = hasRealCertificates();
  const navItems  = showCerts
    ? [...BASE_NAV.slice(0, 4), CERT_NAV, BASE_NAV[4]]
    : BASE_NAV;

  const sectionIds = navItems.map((n) => n.href.replace('#', ''));

  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeId = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      // 80px offset accounts for the fixed navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 glass shadow-card border-b border-navy-600/30'
          : 'py-4 bg-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand / logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-blue transition-shadow duration-300">
            <Code2 size={16} className="text-white" aria-hidden="true" />
          </div>
          <span className="font-display font-bold text-sm text-text-primary hidden sm:block">
            Fransius<span className="gradient-text">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navItems.map(({ label, href }) => {
            const id = href.replace('#', '');
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`nav-link ${activeId === id ? 'active' : ''}`}
                  aria-current={activeId === id ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Download CV — desktop */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex btn-secondary text-xs py-2 px-4"
          aria-label="Download CV (PDF)"
        >
          Download CV
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-navy-700/50 transition-colors"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass border-t border-navy-600/30 px-4 py-4"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navItems.map(({ label, href }) => {
              const id = href.replace('#', '');
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeId === id
                        ? 'text-accent-cyan bg-accent-cyan/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-navy-700/50'
                    }`}
                    aria-current={activeId === id ? 'location' : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 border-t border-navy-600/30 mt-1">
              <a
                href="/cv.pdf"
                download
                className="btn-secondary w-full justify-center text-sm"
                aria-label="Download CV (PDF)"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
