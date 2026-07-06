'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Biography', 'Outfits', 'Interviews', 'Gallery', 'Fan Zone'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 clamp(16px,4vw,40px)', height: 68,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
          transition: 'all 0.4s ease',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 20 20">
            {[0,1,2,3,4,5].map(i => (
              <ellipse key={i} cx="10" cy="10" rx="2.5" ry="7" fill="none" stroke="#C9A84C" strokeWidth="0.8"
                transform={`rotate(${i*30} 10 10) translate(0,-3.5)`} style={{ transformOrigin: '10px 10px' }} />
            ))}
            <circle cx="10" cy="10" r="2" fill="#C9A84C" />
          </svg>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, letterSpacing: '0.1em', color: '#F5F0E8' }}>AKANKSHA</span>
        </div>

        {/* Desktop links — hidden on mobile */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <a key={l}
              href={`#${l.toLowerCase().replace(' ', '-')}`}
              style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.55)', fontFamily: 'Inter, sans-serif', textDecoration: 'none', transition: 'color 0.3s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.55)')}
            >{l}</a>
          ))}
        </div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{ padding: '7px 20px', border: '1px solid rgba(201,168,76,0.4)', borderRadius: 100, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', background: 'transparent', cursor: 'none', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s ease', whiteSpace: 'nowrap', flexShrink: 0 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#C9A84C'; (e.currentTarget as HTMLElement).style.color = '#0A0A0A'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
        >Menu</button>
      </motion.nav>

      {/* Full screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: 'fixed', inset: 0, background: '#0A0A0A', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, padding: '80px 24px' }}
          >
            <button onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: 24, right: 'clamp(16px,4vw,40px)', color: 'rgba(245,240,232,0.4)', background: 'none', border: 'none', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif' }}
            >Close ✕</button>

            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px,7vw,72px)', color: '#F5F0E8', textDecoration: 'none', letterSpacing: '-0.01em', lineHeight: 1.1, transition: 'color 0.3s', textAlign: 'center' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F5F0E8')}
              >{l}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
