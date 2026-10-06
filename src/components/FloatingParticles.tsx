import { useMemo } from 'react';

interface Particle {
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

function FloatingParticles({ count = 15 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 4 + Math.random() * 8,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-diwali-gold-300 animate-float-up"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: '0 0 10px rgba(255,206,74,0.8), 0 0 20px rgba(245,158,11,0.4)',
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;
