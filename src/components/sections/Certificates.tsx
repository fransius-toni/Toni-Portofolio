import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';
import type { Certificate } from '../../types';

// ─── Helper ───────────────────────────────────────────────────────────────────

/** Returns true only when a certificate contains real, non-placeholder data. */
function isRealCertificate(cert: Certificate): boolean {
  return (
    Boolean(cert.title) &&
    !cert.title.toLowerCase().includes('add certificate') &&
    cert.year !== 'YYYY' &&
    Boolean(cert.issuer) &&
    !cert.issuer.toLowerCase().includes('issuing organization')
  );
}

/** Exported so Navbar can conditionally show the Certificates nav item. */
export function hasRealCertificates(): boolean {
  return portfolioData.certificates.some(isRealCertificate);
}

// ─── Certificate Card ─────────────────────────────────────────────────────────
interface CertificateCardProps {
  cert: Certificate;
  index: number;
}

function CertificateCard({ cert, index }: CertificateCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="card border border-navy-600/40 hover:border-accent-cyan/30 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
      aria-label={`Certificate: ${cert.title}`}
    >
      {/* Image */}
      <div className="h-36 bg-navy-900/80 relative overflow-hidden flex items-center justify-center">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`${cert.title} certificate preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 border border-accent-cyan/20 flex items-center justify-center">
            <Award size={22} className="text-accent-cyan" aria-hidden="true" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan/15 to-accent-blue/10 border border-accent-cyan/20 flex items-center justify-center">
            <Award size={14} className="text-accent-cyan" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text-primary leading-snug">{cert.title}</h3>
            <p className="text-xs text-text-muted mt-0.5">{cert.issuer} · {cert.year}</p>
          </div>
        </div>
        {cert.credential && (
          <a
            href={cert.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:text-accent-light transition-colors"
            aria-label={`View ${cert.title} credential (opens in new tab)`}
          >
            <ExternalLink size={11} aria-hidden="true" />
            View Credential
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Certificates() {
  const realCerts = portfolioData.certificates.filter(isRealCertificate);

  // Hidden completely when no real certificates exist
  if (realCerts.length === 0) return null;

  return (
    <section
      id="certificates"
      className="py-20 bg-navy-900/40 relative"
      aria-label="Certificates and achievements"
    >
      <div className="divider-glow mb-0" />
      <div className="section-container pt-8">
        <SectionHeader
          eyebrow="Achievements"
          title="Certificates &"
          titleHighlight="Credentials"
          subtitle="Professional certifications and achievements."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {realCerts.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
