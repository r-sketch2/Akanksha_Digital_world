'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 70% at 75% 50%, rgba(201,168,76,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 50% 60% at 25% 60%, rgba(212,160,160,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 60% 90%, rgba(180,120,60,0.05) 0%, transparent 60%)
        `,
      }} />

      {/* Oversized BG text */}
      <motion.div style={{ position: 'absolute', bottom: -40, left: -20, y, userSelect: 'none', pointerEvents: 'none', zIndex: 0 }}>
        <div className="hero-bg-text">PHOOL</div>
      </motion.div>
      <motion.div style={{ position: 'absolute', top: -20, right: -30, y: useTransform(scrollYProgress, [0, 1], [0, 120]), userSelect: 'none', pointerEvents: 'none', zIndex: 0 }}>
        <div className="hero-bg-text" style={{ WebkitTextStroke: '1px rgba(201,168,76,0.05)' }}>WALI</div>
      </motion.div>

      {/* LEFT COLUMN — Text */}
      <motion.div
        style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(100px,10vw,140px) clamp(20px,5vw,80px) clamp(60px,6vw,80px)',
          y: textY, opacity,
        }}
      >
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}
        >
          <div style={{ width: 40, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
          <span style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
            Content Creator · Fashion Icon · Reality Show Queen
          </span>
        </motion.div>

        {/* Name */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 2.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6.5vw, 96px)', fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--ivory)' }}
          >
            Akanksha
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 32 }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 2.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6.5vw, 96px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.30, letterSpacing: '-0.02em', color: 'var(--rose)' }}
          >
            Choudhary
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', lineHeight: 1.75, color: 'rgba(245,240,232,0.5)', maxWidth: 380, fontFamily: 'Inter, sans-serif', fontWeight: 300, marginBottom: 40 }}
        >
          Behind every smile lies a story of courage, sacrifice, and countless new beginnings. Discover the remarkable life of Akanksha Choudhary—from Jaipur to the national spotlight.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.8 }}
          style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 52 }}
        >
          <button
            style={{ padding: '13px 28px', background: 'var(--gold)', color: '#0A0A0A', border: 'none', borderRadius: 100, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif', fontWeight: 600, transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(201,168,76,0.35)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
          >
            Explore World
          </button>
          <button
            style={{ padding: '13px 28px', background: 'transparent', color: 'var(--ivory)', border: '1px solid rgba(245,240,232,0.18)', borderRadius: 100, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif', fontWeight: 400, transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.18)'; (e.currentTarget as HTMLElement).style.color = 'var(--ivory)'; }}
          >
            View Outfits
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.1, duration: 0.8 }}
          style={{ display: 'flex', gap: 'clamp(20px,3vw,36px)', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}
        >
          {[['3.3M', 'Followers'], ['30+', 'Outfits'], ['2', 'Music Videos']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px,2.2vw,30px)', color: 'var(--ivory)', fontWeight: 500 }}>{num}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', marginTop: 3, fontFamily: 'Inter, sans-serif' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN — Portrait photo */}
      <motion.div
        style={{
          position: 'relative', zIndex: 5,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          overflow: 'hidden', y: imgY,
          minHeight: '50vh',
        }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/akanksha-hero.jpeg"
          alt="Akanksha Choudhary"
          style={{
            position: 'absolute', bottom: 0, left: '50%',
            transform: 'translateX(-50%)',
            height: '96%', width: 'auto', maxWidth: '110%',
            objectFit: 'contain', objectPosition: 'bottom center', display: 'block',
          }}
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%', background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.5) 60%, transparent 100%)', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '25%', background: 'linear-gradient(to right, #0A0A0A 0%, transparent 100%)', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '20%', background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '50%', background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none', zIndex: 1 }} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.3, duration: 0.8 }}
        style={{ position: 'absolute', bottom: 32, left: '25%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 20 }}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold), transparent)' }}
        />
      </motion.div>
    </section>
  );
}