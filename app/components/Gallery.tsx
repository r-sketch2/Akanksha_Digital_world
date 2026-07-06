'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

const CLOUD = 'https://res.cloudinary.com/dnx5botey/image/upload';

const previewItems = [
  { id: 1, cat: 'Photoshoots', url: `${CLOUD}/1000191338_wx5vlv.jpg` },
  { id: 2, cat: 'Events',      url: `${CLOUD}/1000191244_w0ggjy.jpg` },
  { id: 3, cat: 'Pageant',     url: `${CLOUD}/1000191460_yehezm.jpg` },
  { id: 4, cat: 'Photoshoots', url: `${CLOUD}/1000191426_tgpuha.jpg` },
  { id: 5, cat: 'Events',      url: `${CLOUD}/1000191446_qmtjxa.jpg` },
  { id: 6, cat: 'Pageant',     url: `${CLOUD}/1000191541_wndkxd.jpg` },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  return (
    <section ref={ref} id="gallery" style={{ padding: 'clamp(60px,12vw,160px) clamp(20px,5vw,80px)', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 1, background: 'var(--sage)', flexShrink: 0 }} />
              <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: 'Inter, sans-serif' }}>Visual Archive</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px,5.5vw,72px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              Photo<br /><em>Gallery</em>
            </h2>
          </div>
        </motion.div>

        {/* 2 cols mobile, 3 cols desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(180px,calc(50% - 5px)), 1fr))', gap: 8 }}>
          {previewItems.map((item, i) => (
            <motion.div key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ borderRadius: 8, overflow: 'hidden', cursor: 'none', aspectRatio: '3/4', position: 'relative' }}
              onClick={() => router.push('/gallery/events')}
              data-cursor
            >
              <img src={item.url} alt={item.cat} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: 10, left: 12 }}>
                <span style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'Inter, sans-serif' }}>{item.cat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} style={{ textAlign: 'center', marginTop: 36 }}>
          <button onClick={() => router.push('/gallery')}
            style={{ padding: '14px 40px', border: '1px solid rgba(139,158,126,0.25)', borderRadius: 100, color: 'var(--sage)', background: 'transparent', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(139,158,126,0.08)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >Explore Full Gallery — 86 Photos</button>
        </motion.div>
      </div>
    </section>
  );
}
