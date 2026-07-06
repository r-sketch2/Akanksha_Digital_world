'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

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
  { id: 1, name: 'Priya S.', city: 'Mumbai', instagram: '@priya_styles', note: 'Akanksha you are unstoppable! From pageants to Splitsvilla — forever my inspiration 🌸', colorIdx: 0, rotate: -2 },
  { id: 2, name: 'Rahul K.', city: 'Delhi', instagram: '@rahul_k', note: 'The way you carried yourself on Splitsvilla was pure class. You never let anyone dim your light ✨', colorIdx: 1, rotate: 1.5 },
  { id: 3, name: 'Sneha M.', city: 'Pune', instagram: '@sneha_m', note: 'Your Miss Universe walk gave me goosebumps every time. India was so proud! 👑', colorIdx: 2, rotate: -1 },
];

interface Note { 
  id: number; 
  name: string; 
  city: string; 
  instagram: string; 
  note: string; 
  colorIdx: number; 
  rotate: number; 
}

function getNotes(): Note[] {
  if (typeof window === 'undefined') return defaultNotes;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultNotes;
}

export default function FanNoteWall() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>(defaultNotes);
  
  // Form States
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [instagram, setInstagram] = useState('');
  const [note, setNote] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { setNotes(getNotes()); }, []);

  const handleSubmit = () => {
    if (!name.trim() || !note.trim()) { 
      setError('Please fill in your name and note.'); 
      return; 
    }
    if (note.length > 200) { 
      setError('Keep it under 200 characters.'); 
      return; 
    }
    
    setError('');
    const colorIdx = Math.floor(Math.random() * NOTE_COLORS.length);
    const rotate = (Math.random() - 0.5) * 5;
    
    const newNote: Note = { 
      id: Date.now(), 
      name: name.trim(), 
      city: city.trim() || 'India', 
      instagram: instagram.trim().startsWith('@') ? instagram.trim() : instagram.trim() ? `@${instagram.trim()}` : '',
      note: note.trim(), 
      colorIdx, 
      rotate 
    };
    
    const updated = [newNote, ...notes];
    setNotes(updated);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
    
    // Reset Form
    setName(''); 
    setCity(''); 
    setInstagram('');
    setNote('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const previewNotes = notes.slice(0, 6);

  return (
    <>
      <section ref={ref} id="fan-zone" style={{ padding: 'clamp(60px,12vw,160px) clamp(20px,5vw,80px)', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 1, background: 'var(--rose)' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--rose)', fontFamily: 'Inter, sans-serif' }}>From the Garden</span>
              <div style={{ width: 32, height: 1, background: 'var(--rose)' }} />
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px,5.5vw,72px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 14 }}>
              Leave a <em>Note</em>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(245,240,232,0.35)', fontFamily: 'Inter, sans-serif', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
              Write something for Akanksha — it will appear on the wall as your very own sticky note.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }}
            style={{ 
              maxWidth: 520, 
              margin: '0 auto 60px', 
              padding: 'clamp(20px,3.5vw,40px)', 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(212,160,160,0.15)', 
              borderRadius: 18 
            }}>
            
            {/* Form Fields Grid - Explicitly ordered with Instagram in the middle */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 15, marginBottom: 15 }}>
              {/* Name Field */}
              <div style={{ order: 1 }}>
                <label style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif', display: 'block', marginBottom: 7 }}>Your Name *</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Priya"
                  style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: 'var(--ivory)', fontSize: 13, fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,160,0.4)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>
              
              {/* Instagram Field - Positioned in the middle */}
              <div style={{ order: 2 }}>
                <label style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif', display: 'block', marginBottom: 7 }}>Instagram ID</label>
                <input value={instagram} onChange={e => setInstagram(e.target.value)} placeholder="@username"
                  style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: 'var(--ivory)', fontSize: 13, fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,160,0.4)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>
              
              {/* City Field */}
              <div style={{ order: 3 }}>
                <label style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif', display: 'block', marginBottom: 7 }}>City</label>
                <input value={city} onChange={e => setCity(e.target.value)} placeholder="e.g. Mumbai"
                  style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: 'var(--ivory)', fontSize: 13, fontFamily: 'Inter, sans-serif', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.3s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,160,0.4)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>
            </div>

            {/* Note Textarea */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif', display: 'block', marginBottom: 7 }}>
                Your Note * <span style={{ color: 'rgba(245,240,232,0.18)', textTransform: 'none', letterSpacing: 0 }}>({note.length}/200)</span>
              </label>
              <textarea value={note} onChange={e => setNote(e.target.value.slice(0, 200))} placeholder="Write something beautiful..." rows={3}
                style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: 'var(--ivory)', fontSize: 13, fontFamily: 'Inter, sans-serif', outline: 'none', resize: 'none', boxSizing: 'border-box', lineHeight: 1.6, transition: 'border-color 0.3s' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(212,160,160,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
            </div>

            {error && <div style={{ fontSize: 12, color: '#FF9EAD', fontFamily: 'Inter, sans-serif', marginBottom: 10 }}>{error}</div>}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
              <AnimatePresence>
                {submitted && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ fontSize: 13, color: '#B5EAD7', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
                    ✦ Your note is on the wall!
                  </motion.span>
                )}
              </AnimatePresence>
              <button onClick={handleSubmit}
                style={{ marginLeft: 'auto', padding: '12px 28px', background: 'var(--rose)', border: 'none', borderRadius: 100, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0A0A', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 700, transition: 'all 0.3s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              >Pin My Note 📌</button>
            </div>
          </motion.div>

          {/* Sticky note wall */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(14px,2vw,24px)', justifyContent: 'center', marginBottom: 40 }}>
            {previewNotes.map((n, i) => {
              const c = NOTE_COLORS[n.colorIdx % NOTE_COLORS.length];
              const size = 'clamp(160px, 20vw, 220px)';
              return (
                <motion.div key={n.id}
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  animate={inView ? { opacity: 1, y: 0, rotate: n.rotate } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                  style={{ width: size, minHeight: 180, background: c.bg, borderRadius: 4, padding: '26px 14px 14px', position: 'relative', boxShadow: `4px 6px 18px rgba(0,0,0,0.3), 2px 2px 0 ${c.shadow}`, cursor: 'default', flexShrink: 0 }}
                >
                  <div style={{ position: 'absolute', top: -9, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: '50%', background: '#c0392b', boxShadow: '0 2px 6px rgba(0,0,0,0.4)', border: '2px solid #e74c3c', zIndex: 2 }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 7, background: 'rgba(0,0,0,0.06)', borderRadius: '4px 4px 0 0' }} />
                  {[0,1,2,3,4].map(l => (
                    <div key={l} style={{ position: 'absolute', left: 12, right: 12, height: 1, background: c.lines, opacity: 0.18, top: 42 + l * 22 }} />
                  ))}
                  <p style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive', fontSize: 11, lineHeight: 1.6, color: c.text, position: 'relative', zIndex: 1, wordBreak: 'break-word', marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
                    {n.note}
                  </p>
                  
                  {/* Bottom section with Instagram in the middle */}
                  <div style={{ borderTop: `1px solid ${c.lines}`, paddingTop: 7, opacity: 0.85, position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: 10, fontWeight: 700, color: c.text, marginBottom: 2 }}>{n.name}</div>
                    {n.instagram && (
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: c.text, opacity: 0.7, fontStyle: 'italic', marginBottom: 2 }}>{n.instagram}</div>
                    )}
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: c.text, opacity: 0.6 }}>{n.city}</div>
                  </div>
                  
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 16, height: 16, background: `linear-gradient(225deg, rgba(0,0,0,0.1) 50%, transparent 50%)`, borderRadius: '0 0 4px 0' }} />
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} style={{ textAlign: 'center' }}>
            <button onClick={() => router.push('/fan-notes')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 32px', border: '1px solid rgba(212,160,160,0.25)', borderRadius: 100, color: 'var(--rose)', background: 'transparent', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,160,160,0.06)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >📌 See All {notes.length} Notes on the Wall</button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
<footer
  style={{
    padding: 'clamp(32px,5vw,60px) clamp(20px,5vw,80px)',
    background: 'var(--noir)',
    borderTop: '1px solid rgba(255,255,255,0.04)',
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20,
    }}
  >
    {/* Left Side */}
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 8,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ellipse
              key={i}
              cx="10"
              cy="10"
              rx="2.5"
              ry="7"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.8"
              transform={`rotate(${i * 30} 10 10) translate(0,-3.5)`}
              style={{ transformOrigin: '10px 10px' }}
            />
          ))}
          <circle cx="10" cy="10" r="2" fill="#C9A84C" />
        </svg>

        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 15,
            color: 'rgba(245,240,232,0.6)',
          }}
        >
          Dedicated To Akanksha Choudhary
        </span>
      </div>

      <div
        style={{
          fontSize: 11,
          color: 'rgba(245,240,232,0.2)',
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          flexWrap: 'wrap',
        }}
      >
        <span>© 2026</span>

        <a
          href="https://www.instagram.com/akanksha_journal_/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--gold)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.75';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          @akanksha_journal_
        </a>

        <span>• All rights reserved.</span>
      </div>
    </div>

    {/* Right Side */}
    <div
      style={{
        display: 'flex',
        gap: 'clamp(16px,3vw,32px)',
        flexWrap: 'wrap',
      }}
    >
      {[
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Contact', href: '#contact' },
        { name: 'Press', href: '#' },
      ].map((link) => (
        <a
          key={link.name}
          href={link.href}
          style={{
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.25)',
            textDecoration: 'none',
            fontFamily: 'Inter, sans-serif',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(245,240,232,0.25)';
          }}
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
</footer>
    </>
  );
}
