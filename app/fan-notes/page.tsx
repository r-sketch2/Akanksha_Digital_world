'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });

const STORAGE_KEY = 'phool_fan_notes';

const NOTE_COLORS = [
  { bg: '#FFD700', shadow: '#D4A800', text: '#5a4a00', lines: '#D4A800' },
  { bg: '#FF9EAD', shadow: '#D4607A', text: '#6b0020', lines: '#D4607A' },
  { bg: '#B5EAD7', shadow: '#6DC5A3', text: '#1a5c42', lines: '#6DC5A3' },
  { bg: '#C7CEEA', shadow: '#8A96D4', text: '#2a3580', lines: '#8A96D4' },
  { bg: '#FFDAC1', shadow: '#E8A87C', text: '#6b3a1f', lines: '#E8A87C' },
  { bg: '#E2F0CB', shadow: '#A8D47A', text: '#2d5a1b', lines: '#A8D47A' },
  { bg: '#F8C8D4', shadow: '#E88FA4', text: '#6b1f30', lines: '#E88FA4' },
  { bg: '#AED6F1', shadow: '#5DADE2', text: '#1a4a6b', lines: '#5DADE2' },
];

const defaultNotes = [
  { id: 1, name: 'Priya S.', city: 'Mumbai', note: 'Akanksha you are unstoppable! From pageants to Splitsvilla — forever my inspiration 🌸', colorIdx: 0, rotate: -2 },
  { id: 2, name: 'Rahul K.', city: 'Delhi', note: 'The way you carried yourself on Splitsvilla was pure class. You never let anyone dim your light ✨', colorIdx: 1, rotate: 1.5 },
  { id: 3, name: 'Sneha M.', city: 'Pune', note: 'Your Miss Universe walk gave me goosebumps every time. India was so proud! 👑', colorIdx: 2, rotate: -1 },
  { id: 4, name: 'Aisha R.', city: 'Hyderabad', note: 'Phool Wali Ladki forever. Your outfits, your smile — everything is just perfect 💕', colorIdx: 3, rotate: 2 },
  { id: 5, name: 'Vikram T.', city: 'Bangalore', note: 'Watched every episode of Splitsvilla just for you. Your fashion sense is unreal! 🔥', colorIdx: 4, rotate: -1.5 },
  { id: 6, name: 'Deepika N.', city: 'Chennai', note: 'You are the reason I started believing in myself again. Thank you 🌺', colorIdx: 5, rotate: 1 },
  { id: 7, name: 'Ananya P.', city: 'Kolkata', note: 'India was cheering for you at Miss Universe. Always will be! 🇮🇳', colorIdx: 6, rotate: -2.5 },
  { id: 8, name: 'Karan M.', city: 'Jaipur', note: 'From Splitsvilla to Lockup — you keep proving you are built different 💪', colorIdx: 7, rotate: 1.8 },
];

interface Note { id: number; name: string; city: string; note: string; colorIdx: number; rotate: number; }

export default function FanNotesPage() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>(defaultNotes);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setNotes(JSON.parse(stored));
    } catch {}
  }, []);

  // Note size shrinks as count grows
  const count = notes.length;
  const noteSize = count <= 8 ? 200 : count <= 16 ? 170 : count <= 30 ? 150 : count <= 50 ? 130 : 110;
  const fontSize = count <= 8 ? 12 : count <= 16 ? 11 : count <= 30 ? 10.5 : 10;
  const gap = count <= 8 ? 28 : count <= 16 ? 20 : count <= 30 ? 16 : 12;

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a2e', paddingTop: 80 }}>
      <Cursor />

      {/* Top bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 72, background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(24px,5vw,80px)', zIndex: 1000 }}>
        <button onClick={() => router.push('/')}
          style={{ background: 'none', border: 'none', color: 'rgba(245,240,232,0.5)', cursor: 'none', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')}
        >← Back to Home</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 18 }}>📌</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, color: 'var(--ivory)' }}>The Note Wall</span>
        </div>
        <span style={{ fontSize: 11, color: 'rgba(245,240,232,0.25)', fontFamily: 'Inter, sans-serif' }}>{notes.length} notes pinned</span>
      </div>

      {/* Wood board background */}
      <div style={{ position: 'fixed', inset: 0, background: 'linear-gradient(135deg, #2c1810 0%, #3d2314 25%, #2c1810 50%, #4a2d1a 75%, #2c1810 100%)', zIndex: 0 }} />
      {/* Wood grain lines */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)', zIndex: 0, pointerEvents: 'none' }} />
      {/* Subtle vignette */}
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(32px,4vw,60px) clamp(24px,5vw,60px) 80px' }}>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,64px)' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px,5vw,64px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 12 }}>
            Fan <em style={{ color: 'var(--rose)' }}>Note Wall</em>
          </h1>
          <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
            {notes.length} notes pinned with love · Go back to leave yours
          </p>
        </motion.div>

        {/* THE STICKY NOTE WALL */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: gap,
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxWidth: 1400,
          margin: '0 auto',
        }}>
          {notes.map((n, i) => {
            const c = NOTE_COLORS[n.colorIdx % NOTE_COLORS.length];
            return (
              <motion.div key={n.id}
                initial={{ opacity: 0, y: -30, rotate: n.rotate }}
                animate={{ opacity: 1, y: 0, rotate: n.rotate }}
                transition={{ delay: Math.min(i * 0.04, 1.2), duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 20, boxShadow: `8px 12px 32px rgba(0,0,0,0.5), 2px 2px 0 ${c.shadow}` }}
                style={{
                  width: noteSize,
                  minHeight: noteSize * 0.92,
                  background: c.bg,
                  borderRadius: 3,
                  padding: `${noteSize * 0.14}px ${noteSize * 0.09}px ${noteSize * 0.09}px`,
                  position: 'relative',
                  boxShadow: `4px 6px 18px rgba(0,0,0,0.4), 2px 2px 0 ${c.shadow}`,
                  cursor: 'none',
                  flexShrink: 0,
                  transition: 'box-shadow 0.3s',
                }}
              >
                {/* Pin */}
                <div style={{
                  position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                  width: noteSize * 0.1, height: noteSize * 0.1,
                  minWidth: 14, minHeight: 14,
                  borderRadius: '50%', background: '#c0392b',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.5)', border: '2px solid #e74c3c', zIndex: 2
                }} />

                {/* Top shadow fold */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'rgba(0,0,0,0.06)', borderRadius: '3px 3px 0 0' }} />

                {/* Ruled lines */}
                {[0,1,2,3].map(l => (
                  <div key={l} style={{ position: 'absolute', left: noteSize * 0.08, right: noteSize * 0.08, height: 1, background: c.lines, opacity: 0.18, top: noteSize * 0.25 + l * (noteSize * 0.17) }} />
                ))}

                {/* Note text */}
                <p style={{
                  fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
                  fontSize: fontSize,
                  lineHeight: 1.6,
                  color: c.text,
                  position: 'relative',
                  zIndex: 1,
                  wordBreak: 'break-word',
                  marginBottom: noteSize * 0.07,
                  display: '-webkit-box',
                  WebkitLineClamp: count > 30 ? 4 : 6,
                  WebkitBoxOrient: 'vertical' as const,
                  overflow: 'hidden',
                }}>
                  {n.note}
                </p>

                {/* Author */}
                <div style={{ borderTop: `1px dashed ${c.lines}`, paddingTop: 6, opacity: 0.75 }}>
                  <div style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: fontSize - 1, fontWeight: 700, color: c.text }}>{n.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: fontSize - 2, color: c.text, opacity: 0.6 }}>{n.city}</div>
                </div>

                {/* Bottom right fold effect */}
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, background: `linear-gradient(225deg, rgba(0,0,0,0.12) 50%, transparent 50%)`, borderRadius: '0 0 3px 0' }} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA to write */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} style={{ textAlign: 'center', marginTop: 60 }}>
          <button onClick={() => router.push('/#fan-zone')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 36px', background: 'var(--rose)', border: 'none', borderRadius: 100, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0A0A0A', cursor: 'none', fontFamily: 'Inter, sans-serif', fontWeight: 700, transition: 'all 0.3s', boxShadow: '0 8px 30px rgba(212,160,160,0.3)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
          >📌 Leave Your Note</button>
        </motion.div>
      </div>
    </div>
  );
}
