/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark navy base palette
        navy: {
          950: '#020b18',
          900: '#040f1e',
          800: '#071428',
          700: '#0a1a35',
          600: '#0d2044',
          500: '#112654',
        },
        // Blue-cyan accent palette
        accent: {
          blue:    '#2563eb',
          sky:     '#0ea5e9',
          cyan:    '#06b6d4',
          teal:    '#0d9488',
          light:   '#67e8f9',
        },
        // Text
        text: {
          primary:   '#f0f4ff',
          secondary: '#94a3b8',
          muted:     '#64748b',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'radial-gradient(ellipse at 60% 40%, rgba(6,182,212,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(37,99,235,0.10) 0%, transparent 55%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(7,20,40,0.9) 0%, rgba(4,15,30,0.95) 100%)',
      },
      boxShadow: {
        'glow-cyan':  '0 0 20px rgba(6,182,212,0.25), 0 0 40px rgba(6,182,212,0.08)',
        'glow-blue':  '0 0 20px rgba(37,99,235,0.30), 0 0 40px rgba(37,99,235,0.10)',
        'card':       '0 4px 24px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(6,182,212,0.15), 0 4px 16px rgba(0,0,0,0.5)',
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(6,182,212,0.2)' },
          '50%':      { boxShadow: '0 0 24px rgba(6,182,212,0.45)' },
        },
      },
      screens: {
        xs: '480px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
