'use client';
import { useScroll, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="scroll-stem" style={{ position: 'fixed', left: 20, top: 0, width: 2, height: '100vh', background: 'rgba(255,255,255,0.05)', zIndex: 100 }}>
      <motion.div
        style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, #C9A84C, #D4A0A0)', transformOrigin: 'top', scaleY: scrollYProgress, borderRadius: 1 }}
      />
      {/* Flower at top of stem */}
      <motion.div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)' }}>
        <svg width="14" height="14" viewBox="0 0 14 14">
          {[0,1,2,3,4].map(i => (
            <ellipse key={i} cx="7" cy="7" rx="2" ry="5"
              fill="none" stroke="#C9A84C" strokeWidth="0.8"
              transform={`rotate(${i*36} 7 7) translate(0,-2)`}
              style={{ transformOrigin: '7px 7px' }} />
          ))}
          <circle cx="7" cy="7" r="2" fill="#C9A84C" />
        </svg>
      </motion.div>
    </div>
  );
}
