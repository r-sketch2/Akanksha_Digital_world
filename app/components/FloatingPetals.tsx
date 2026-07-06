'use client';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      size: 8 + Math.random() * 14,
      rotate: Math.random() * 360,
    })));
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50, overflow: 'hidden' }}>
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.x}%`,
            top: -40,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg width={p.size} height={p.size * 1.6} viewBox="0 0 10 16">
            <ellipse cx="5" cy="8" rx="4" ry="7"
              fill="rgba(212,160,160,0.25)"
              stroke="rgba(242,196,196,0.2)"
              strokeWidth="0.5"
              transform={`rotate(${p.rotate} 5 8)`}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
