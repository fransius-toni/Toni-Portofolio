import type { PortfolioData } from '../types';

// ─── Portfolio Content ────────────────────────────────────────────────────────
// Edit this file to update all content across the portfolio.
//
// IMAGE PATHS — place your screenshots under public/images/projects/:
//   public/images/projects/ecoroute-dashboard.png
//   public/images/projects/ecoroute-chatbot.png
//   public/images/projects/ecoroute-armada.png
//   public/images/projects/ecoroute-routing.png
//   public/images/projects/dvd-dashboard.png
//   public/images/projects/amelia-film.png
//
// CERTIFICATE IMAGES — place under public/images/certificates/:
//   public/images/certificates/<filename>.png
//
// CV — replace public/cv.pdf with your latest CV before deployment.

const portfolioData: PortfolioData = {
  // ── Personal Info ──────────────────────────────────────────────────────────
  personal: {
    name:      'Fransius Toni Gabriel Tamba',
    firstName: 'Fransius',
    title:     'Data Science, Machine Learning & AI Enthusiast',
    subtitle:  'Computer Science Student · President University',
    intro:
      'I build data-driven applications, machine learning models, and AI assistants to support better decision-making.',
    email:    'fransiustonigabriel@gmail.com',
    location: 'Jakarta, Indonesia',
    github:   'https://github.com/fransius-toni',
    linkedin: 'https://www.linkedin.com/in/fransius-toni/',
    whatsapp: 'https://wa.me/628128354234',
    whatsappDisplay: '0812-8354-234',
    cvUrl:    '/cv.pdf',
    avatar:   '/images/profile.jpeg',
  },

  // ── About ──────────────────────────────────────────────────────────────────
  about: {
    paragraphs: [
      'I am a sixth-semester Computer Science student at President University with a strong interest in Data Science, Machine Learning, Data Analytics, and AI chatbot development.',
      'I have experience building end-to-end applications using Python, SQL, machine learning, Streamlit, PostgreSQL, and LLM integration.',
      'My main project is EcoRoute AI — an intelligent waste management decision support system that combines waste-volume prediction, fleet requirement calculation, route optimization, and an AI assistant.',
    ],
    stats: [
      { label: 'GPA',                 value: '3.59' },
      { label: 'Semester',            value: '6th' },
      { label: 'Main Projects',       value: '3' },
      { label: 'Expected Graduation', value: '2027' },
    ],
  },

  // ── Skills ─────────────────────────────────────────────────────────────────
  skillCategories: [
    {
      id:    'ds-ml',
      title: 'Data Science & Machine Learning',
      icon:  'Brain',
      color: 'cyan',
      skills: [
        { name: 'Python' },
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'Scikit-learn' },
        { name: 'XGBoost' },
        { name: 'Random Forest' },
        { name: 'Logistic Regression' },
        { name: 'Ensemble Learning' },
        { name: 'Google Colab' },
        { name: 'Jupyter Notebook' },
      ],
    },
    {
      id:    'analytics',
      title: 'Data Analytics & Visualization',
      icon:  'BarChart2',
      color: 'blue',
      skills: [
        { name: 'Streamlit' },
        { name: 'Plotly' },
        { name: 'Exploratory Data Analysis' },
        { name: 'Orange Data Mining' },
      ],
    },
    {
      id:    'database',
      title: 'Database & Data Engineering',
      icon:  'Database',
      color: 'sky',
      skills: [
        { name: 'SQL' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'Firebase' },
        { name: 'ETL Fundamentals' },
      ],
    },
    {
      id:    'ai-tools',
      title: 'AI & Development Tools',
      icon:  'Cpu',
      color: 'teal',
      skills: [
        { name: 'Groq API' },
        { name: 'Llama 3.1' },
        { name: 'Gemini AI' },
        { name: 'Prompt Engineering' },
        { name: 'Knowledge Retrieval' },
        { name: 'AI Chatbot Development' },
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'OpenStreetMap' },
        { name: 'OSRM' },
        { name: 'Folium' },
        { name: 'Java' },
      ],
    },
  ],

  // ── Projects ───────────────────────────────────────────────────────────────
  projects: [
    {
      id:       'ecoroute-ai',
      title:    'EcoRoute AI',
      subtitle: 'Intelligent Waste Management Decision Support System',
      description:
        'A data-driven waste management system that combines machine learning, waste-volume prediction, fleet requirement calculation, route optimization, and an AI assistant. The system uses XGBoost, Random Forest, and ensemble learning to predict daily waste volume and calculate the required number of trucks for operational planning.',
      contribution:
        'Machine learning integration, AI chatbot development, fleet requirement calculation, testing, reasoning architecture, and Streamlit dashboard integration.',
      technologies: [
        'Python',
        'Scikit-learn',
        'XGBoost',
        'Random Forest',
        'Ensemble Learning',
        'Streamlit',
        'Groq API',
        'OpenStreetMap',
        'OSRM',
        'Folium',
      ],
      // ── Current system notes (honest limitations) ───────────────────────
      notes: [
        'Fleet data currently depends on Streamlit session state.',
        'Weather inputs currently use controlled assumptions.',
        'Vehicle tracking is not yet based on real-time GPS.',
      ],
      images: [
        // Place screenshots in public/images/projects/ and update paths below
        { src: '/images/projects/ecoroute-dashboard.png', alt: 'EcoRoute AI — Main Dashboard' },
        { src: '/images/projects/ecoroute-chatbot.png',   alt: 'EcoRoute AI — AI Chatbot' },
        { src: '/images/projects/ecoroute-armada.png',    alt: 'EcoRoute AI — Fleet Management' },
        { src: '/images/projects/ecoroute-routing.png',   alt: 'EcoRoute AI — Route Optimization' },
      ],
      github:   'https://github.com/fransius-toni',  // TODO: update to repo URL
      demo:     '',
      featured: true,
    },
    {
      id:       'dvd-rental-analytics',
      title:    'Intelligent DVD Rental Analytics Dashboard',
      subtitle: 'Full-Stack Data Analytics & AI Application',
      description:
        'A PostgreSQL and Streamlit analytics dashboard that transforms rental transaction data into actionable business insights. It includes a machine learning demand-prediction model and a Llama 3.1 AI assistant through Groq API for natural-language business analytics.',
      contribution:
        'Data pipeline development, database integration, analytics dashboard, prediction model integration, and AI assistant development.',
      technologies: [
        'Python',
        'PostgreSQL',
        'Streamlit',
        'Machine Learning',
        'Groq API',
        'Llama 3.1',
      ],
      notes: [],
      images: [
        { src: '/images/projects/dvd-dashboard.png', alt: 'DVD Rental Analytics — Dashboard Overview' },
      ],
      github:   'https://github.com/fransius-toni',  // TODO: update to repo URL
      demo:     '',
      featured: true,
    },
    {
      id:       'amelia-ai-film',
      title:    'Amelia Interactive AI Short Film',
      subtitle: 'Safe Net Cyberbullying Campaign',
      description:
        'An interactive short film about cyberbullying with AI-generated scenes, branching storylines, and two alternative endings designed to raise awareness through creative storytelling.',
      contribution:
        'AI scene generation, prompt engineering, video production, editing, and narrative development.',
      technologies: [
        'Gemini AI',
        'Prompt Engineering',
        'Video Editing',
        'Interactive Storytelling',
      ],
      notes: [],
      images: [
        { src: '/images/projects/amelia-film.png', alt: 'Amelia Short Film — Scene Overview' },
      ],
      github:   'https://github.com/fransius-toni',  // TODO: update to repo URL
      demo:     '',
      featured: true,
    },
  ],

  // ── Experience ─────────────────────────────────────────────────────────────
  experiences: [
    {
      id:          'jakarta-mengabdi',
      role:        'Talent Development Staff',
      org:         'Jakarta Mengabdi — Human Capital Division',
      period:      'February 2026 – February 2027',
      description: 'Designed and supported capacity-building programs, role qualifications, and performance-evaluation criteria for organizational members.',
      type:        'work',
    },
    {
      id:          'pucatso-pm',
      role:        'Project Manager',
      org:         'Pucatso RetRet Event — President University',
      period:      'February 2026 – July 2026',
      description: 'Built and led the organizing committee, created the project timeline, coordinated team activities, and directed campus promotion.',
      type:        'leadership',
    },
    {
      id:          'cetakamu-ops',
      role:        'Operations Manager',
      org:         'PT Cetakamu',
      period:      'September 2024 – May 2025',
      description: 'Managed end-to-end printing operations including design, production, logistics coordination, quality control, and client satisfaction.',
      type:        'work',
    },
  ],

  // ── Education ──────────────────────────────────────────────────────────────
  education: {
    institution:    'President University',
    degree:         'Bachelor of Computer Science',
    field:          'Computer Science',
    location:       'Cikarang, Bekasi',
    gpa:            '3.59 / 4.00',
    semester:       '6th Semester',
    // Use plain year — components handle "Expected" label separately
    graduationYear: '2027',
    logo:           '', // Set to '/images/president-university-logo.png' when available
  },

  // ── Certificates ───────────────────────────────────────────────────────────
  // Add real certificate objects here when available.
  // When this array is empty (or contains only placeholder entries),
  // the Certificates section and nav item are automatically hidden.
  //
  // Example of a real certificate:
  // {
  //   id: 'cert-aws-2025',
  //   title: 'AWS Cloud Practitioner',
  //   issuer: 'Amazon Web Services',
  //   year: '2025',
  //   credential: 'https://aws.amazon.com/verification/...',
  //   image: '/images/certificates/aws-cloud.png',
  // },
  certificates: [
    // ← Add real certificate objects here
  ],
};

export default portfolioData;
