import { useMemo } from 'react';

// Lightweight CSS-only particles — no canvas, no library.
// Particles are hidden on mobile via CSS (see index.css @media max-width 640px).
// The component also checks prefers-reduced-motion and renders no animated
// particles when the user has requested reduced motion.

function usePrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function ParticlesBackground() {
  const reducedMotion = usePrefersReducedMotion();

  // 20 particles — reduced from 28 for performance
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id:       i,
      x:        (i * 37 + 11) % 100,
      y:        (i * 53 + 7)  % 100,
      size:     [1, 1, 1.5, 2][i % 4],
      opacity:  [0.12, 0.16, 0.10, 0.14][i % 4],
      duration: 9 + (i % 6) * 2,
      delay:    -(i * 1.3),
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle ambient glow blobs */}
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-accent-cyan/[0.04] blur-3xl" />
      <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-accent-blue/[0.05] blur-3xl" />
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-accent-sky/[0.03] blur-3xl" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated dots — hidden on mobile via CSS, paused when reduced-motion */}
      {!reducedMotion && particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent-cyan"
          style={{
            left:    `${p.x}%`,
            top:     `${p.y}%`,
            width:   `${p.size}px`,
            height:  `${p.size}px`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
