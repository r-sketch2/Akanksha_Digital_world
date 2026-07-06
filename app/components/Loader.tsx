'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(() => setDone(true), 600); return 100; }
        return p + Math.random() * 12;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const petals = Array.from({ length: 8 }, (_, i) => i);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Blooming flower SVG */}
          <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 48 }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              {petals.map((i) => (
                <motion.ellipse
                  key={i}
                  cx="60" cy="60"
                  rx="8" ry="22"
                  fill="none"
                  stroke="#D4A0A0"
                  strokeWidth="1"
                  transform={`rotate(${i * 45} 60 60) translate(0 -18)`}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: [0, 0.8, 0.5] }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ transformOrigin: '60px 60px' }}
                />
              ))}
              <motion.circle
                cx="60" cy="60" r="8"
                fill="#C9A84C"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </svg>
          </div>

          <motion.div
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
              marginBottom: 32,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Phool Wali Ladki
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: 160, height: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 1 }}>
            <motion.div
              style={{ height: '100%', background: 'linear-gradient(to right, #C9A84C, #D4A0A0)', borderRadius: 1 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
