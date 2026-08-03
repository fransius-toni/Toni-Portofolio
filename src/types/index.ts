// ─── Portfolio Data Types ─────────────────────────────────────────────────────

export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  /** Lucide icon name string */
  icon: string;
  color: string;
  skills: Skill[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  contribution: string;
  technologies: string[];
  /** Honest project notes / known limitations */
  notes: string[];
  images: ProjectImage[];
  /** GitHub repository URL — omit or leave empty to hide the GitHub button */
  github?: string;
  /** Live demo URL — omit or leave empty to hide the Live Demo button */
  demo?: string;
  featured?: boolean;
  /** Set to true to display a "Team Project" badge on the card */
  teamProject?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  type: 'work' | 'leadership' | 'volunteer';
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  gpa: string;
  semester: string;
  /** Plain graduation year — the word "Expected" is added by the component */
  graduationYear: string;
  logo?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credential?: string;
  image?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  /** Lucide icon name */
  icon: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  subtitle: string;
  intro: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  /** Human-readable WhatsApp number for display */
  whatsappDisplay: string;
  cvUrl: string;
  avatar?: string;
}

export interface TechUsage {
  technology: string;
  /** Number of featured projects that use this technology */
  projects: number;
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: {
    paragraphs: string[];
    stats: { label: string; value: string }[];
  };
  skillCategories: SkillCategory[];
  /** Technology-usage data for the Project Insights chart */
  projectTechnologyUsage: TechUsage[];
  projects: Project[];
  experiences: Experience[];
  education: Education;
  certificates: Certificate[];
}
