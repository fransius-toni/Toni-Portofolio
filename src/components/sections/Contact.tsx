import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Github, Linkedin, MessageCircle,
  MapPin, Send, CheckCircle, AlertCircle,
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';

// ─── Form helpers ─────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMPTY: FormState = { name: '', email: '', subject: '', message: '' };

function validate(f: FormState): FieldErrors {
  const e: FieldErrors = {};
  if (!f.name.trim())                        e.name    = 'Name is required.';
  if (!f.email.trim())                       e.email   = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(f.email))   e.email   = 'Enter a valid email address.';
  if (!f.subject.trim())                     e.subject = 'Subject is required.';
  if (!f.message.trim())                     e.message = 'Message is required.';
  return e;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const { personal } = portfolioData;
  const [form,   setForm]   = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent,   setSent]   = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});

    const subj = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hello Fransius,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subj}&body=${body}`;
    setSent(true);
    setTimeout(() => { setSent(false); setForm(EMPTY); }, 6000);
  };

  const fieldClass = (err?: string) =>
    `form-input ${err ? 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/20' : ''}`;

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-6 border border-navy-600/40 hover:border-accent-cyan/20 transition-colors duration-300"
      aria-label="Contact form"
      noValidate
    >
      <h3 className="font-semibold text-text-primary text-sm mb-5">Send a Message</h3>

      {sent && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-accent-teal/10 border border-accent-teal/25 text-xs text-accent-teal leading-relaxed"
        >
          <CheckCircle size={14} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Your email application will open to send this message. If it did not open, email{' '}
            <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a> directly.
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="c-name" className="block text-xs text-text-muted mb-1.5 font-medium">
            Name <span className="text-accent-cyan" aria-hidden="true">*</span>
          </label>
          <input
            id="c-name" name="name" type="text" required autoComplete="name"
            placeholder="Your name" value={form.name} onChange={handleChange}
            aria-describedby={errors.name ? 'err-name' : undefined}
            aria-invalid={Boolean(errors.name)}
            className={fieldClass(errors.name)}
          />
          {errors.name && (
            <p id="err-name" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={11} aria-hidden="true" />{errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="c-email" className="block text-xs text-text-muted mb-1.5 font-medium">
            Email <span className="text-accent-cyan" aria-hidden="true">*</span>
          </label>
          <input
            id="c-email" name="email" type="email" required autoComplete="email"
            placeholder="your@email.com" value={form.email} onChange={handleChange}
            aria-describedby={errors.email ? 'err-email' : undefined}
            aria-invalid={Boolean(errors.email)}
            className={fieldClass(errors.email)}
          />
          {errors.email && (
            <p id="err-email" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={11} aria-hidden="true" />{errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="c-subject" className="block text-xs text-text-muted mb-1.5 font-medium">
          Subject <span className="text-accent-cyan" aria-hidden="true">*</span>
        </label>
        <input
          id="c-subject" name="subject" type="text" required
          placeholder="What is this about?" value={form.subject} onChange={handleChange}
          aria-describedby={errors.subject ? 'err-subject' : undefined}
          aria-invalid={Boolean(errors.subject)}
          className={fieldClass(errors.subject)}
        />
        {errors.subject && (
          <p id="err-subject" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={11} aria-hidden="true" />{errors.subject}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="c-message" className="block text-xs text-text-muted mb-1.5 font-medium">
          Message <span className="text-accent-cyan" aria-hidden="true">*</span>
        </label>
        <textarea
          id="c-message" name="message" required rows={5}
          placeholder="Tell me about your project or opportunity…"
          value={form.message} onChange={handleChange}
          aria-describedby={errors.message ? 'err-message' : undefined}
          aria-invalid={Boolean(errors.message)}
          className={`${fieldClass(errors.message)} resize-none`}
        />
        {errors.message && (
          <p id="err-message" role="alert" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={11} aria-hidden="true" />{errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full justify-center" aria-label="Send message via email application">
        {sent
          ? <><CheckCircle size={15} aria-hidden="true" /> Email Application Opened</>
          : <><Send size={15} aria-hidden="true" /> Send Message</>
        }
      </button>

      <p className="text-xs text-text-muted mt-3 text-center leading-relaxed">
        This opens your email application with the message pre-filled.
        Messages are not automatically delivered — your email app sends them.
      </p>
    </form>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Contact() {
  const { personal } = portfolioData;

  const links = [
    {
      label: 'Email',
      value: personal.email,
      href:  `mailto:${personal.email}`,
      icon:  Mail,
      color: 'from-accent-cyan/20 to-accent-blue/10 border-accent-cyan/25 text-accent-cyan',
      external: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/fransius-toni',
      href:  personal.github,
      icon:  Github,
      color: 'from-navy-700/50 to-navy-800/50 border-navy-600/40 text-text-secondary',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/fransius-toni',
      href:  personal.linkedin,
      icon:  Linkedin,
      color: 'from-accent-blue/15 to-navy-800/50 border-accent-blue/25 text-accent-sky',
      external: true,
    },
    {
      label: 'WhatsApp',
      value: personal.whatsappDisplay,
      href:  personal.whatsapp,
      icon:  MessageCircle,
      color: 'from-accent-teal/15 to-navy-800/50 border-accent-teal/25 text-accent-teal',
      external: true,
    },
    {
      label: 'Location',
      value: personal.location,
      href:  null as string | null,
      icon:  MapPin,
      color: 'from-navy-700/30 to-navy-800/50 border-navy-600/30 text-text-secondary',
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-20 relative" aria-label="Contact">
      <div className="divider-glow mb-0" />
      <div className="section-container pt-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's"
          titleHighlight="Connect"
          subtitle="Interested in working together or discussing data, machine learning, or AI projects? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              I am open to Data Science internship opportunities, collaboration on data and AI projects,
              or just a conversation about technology. The best way to reach me is via email.
            </p>

            <div className="space-y-3">
              {links.map(({ label, value, href, icon: Icon, color, external }) => {
                const Tag = href ? 'a' : 'div';
                const extraProps = href
                  ? {
                      href,
                      ...(external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {}),
                      'aria-label': external
                        ? `${label}: ${value} (opens in new tab)`
                        : `${label}: ${value}`,
                    }
                  : { 'aria-label': `${label}: ${value}` };

                return (
                  <Tag
                    key={label}
                    {...extraProps}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${color} border transition-all duration-300 ${href ? 'hover:-translate-x-1 cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${color} border flex items-center justify-center`}>
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-muted font-medium">{label}</p>
                      <p className="text-sm text-text-primary truncate">{value}</p>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
