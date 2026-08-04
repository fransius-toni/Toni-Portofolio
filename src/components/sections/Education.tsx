import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Calendar } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative" aria-label="Education">
      <div className="divider-glow mb-0" />

      <div className="section-container pt-8">
        <SectionHeader
          eyebrow="Academic Background"
          title="My"
          titleHighlight="Education"
          subtitle="Formal academic training that underpins my interest in data science and technology."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-10 max-w-3xl"
        >
          <div className="card border border-accent-cyan/20 p-6 sm:p-8 hover:border-accent-cyan/35 hover:shadow-card-hover transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-6">

              {/* Logo / icon */}
              <div className="flex-shrink-0">
                {education.logo ? (
                  <img
                    src={education.logo}
                    alt={`${education.institution} logo`}
                    className="w-16 h-16 object-contain rounded-xl"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 border border-accent-cyan/30 flex items-center justify-center shadow-glow-cyan">
                    <GraduationCap size={28} className="text-accent-cyan" aria-hidden="true" />
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-text-primary text-xl sm:text-2xl">
                  {education.institution}
                </h3>
                <p className="text-accent-cyan font-semibold text-sm mt-1">
                  {education.degree}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                  <div className="flex items-center gap-1.5 text-text-muted text-xs">
                    <MapPin size={12} className="text-accent-cyan/70" aria-hidden="true" />
                    {education.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted text-xs">
                    <Award size={12} className="text-accent-cyan/70" aria-hidden="true" />
                    GPA {education.gpa}
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted text-xs">
                    <Calendar size={12} className="text-accent-cyan/70" aria-hidden="true" />
                    {/* graduationYear is a plain year string — "Expected Graduation" label added here */}
                    Expected Graduation: {education.graduationYear}
                  </div>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-navy-700/60">
                  {[
                    { label: 'GPA',      value: '3.59' },
                    { label: 'Semester', value: '7th'  },
                    { label: 'Grad.',    value: '2027' },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <p className="font-display text-2xl font-extrabold gradient-text">{value}</p>
                      <p className="text-xs text-text-muted mt-0.5 uppercase tracking-wider">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Relevant areas */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/15"
          >
            <p className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2">
              Relevant Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Data Science', 'Machine Learning', 'Artificial Intelligence',
                'Database Systems', 'Software Engineering', 'Algorithms',
                'Statistics', 'Object-Oriented Programming',
              ].map((area) => (
                <span
                  key={area}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-navy-700 border border-navy-600/50 text-text-secondary"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
