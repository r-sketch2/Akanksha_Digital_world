'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

const previewOutfits = [
  { id: 1,  name: 'Black Sequin Slit Gown',   event: 'City Meetup',           category: 'Western',     image: '/outfits/outfit-1.jpg' },
  { id: 3,  name: 'Crimson Beaded Gown',       event: 'Splitsvilla X6 Finale', category: 'Western',     image: '/outfits/outfit-3.jpg' },
  { id: 7,  name: 'Emerald Corset Gown',       event: 'Splitsvilla X6 Queen',  category: 'Western',     image: '/outfits/outfit-7.jpg' },
  { id: 19, name: 'Golden Bridal Lehenga Set', event: 'Festive Shoot',         category: 'Traditional', image: '/outfits/outfit-19.jpg' },
  { id: 27, name: 'Pink Ruched Co-ord',               event: 'Event Night',            category: 'Western',      image: '/outfits/outfit-27.jpg'}, 
  { id: 28, name: 'Navy Fringe Dress',                event: 'Outdoor Event',          category: 'Western',      image: '/outfits/outfit-28.jpg'}, 
];

export default function OutfitCatalogue() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  return (
    <section ref={ref} id="outfits" style={{ padding: 'clamp(60px,12vw,160px) clamp(20px,5vw,80px)', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
              <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'Inter, sans-serif' }}>Style Archive</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px,5.5vw,72px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              Outfit<br /><em>Catalogue</em>
            </h2>
          </div>
        </motion.div>

        {/* 2 cols on mobile, 4 on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px,calc(50% - 6px)), 1fr))', gap: 10 }}>
          {previewOutfits.map((outfit, i) => (
            <motion.div key={outfit.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderRadius: 10, overflow: 'hidden', cursor: 'none', position: 'relative' }}
              onClick={() => router.push('/outfits')}
              data-cursor
            >
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
                <img src={outfit.image} alt={outfit.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(12px,2vw,20px)' }}>
                  <span className="tag-pill" style={{ fontSize: 9, marginBottom: 6, display: 'inline-block' }}>{outfit.category}</span>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(14px,1.5vw,18px)', color: 'var(--ivory)', fontWeight: 500, marginBottom: 2, lineHeight: 1.2 }}>{outfit.name}</div>
                  <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.4)', fontFamily: 'Inter, sans-serif' }}>{outfit.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} style={{ textAlign: 'center', marginTop: 40 }}>
          <button onClick={() => router.push('/outfits')}
            style={{ padding: '14px 40px', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 100, color: 'var(--gold)', background: 'transparent', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >Explore All 37 Outfits →</button>
        </motion.div>
      </div>
    </section>
  );
}
