'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const musicVideos = [
  {
    id: 'mv1',
    title: 'Latest Music Video',
    platform: 'YouTube',
    channel: 'Official Release',
    date: '3 July 2026',
    category: 'Music Video',
    thumbnail: 'https://img.youtube.com/vi/hUDrfmmDE0Q/maxresdefault.jpg',
    link: 'https://youtu.be/hUDrfmmDE0Q?si=IcX1CvFbQ1hw38bG',
    color: 'rgba(201,168,76,0.12)',
    badge: '#C9A84C',
  },
  {
    id: 'mv2',
    title: 'Music Video',
    platform: 'YouTube',
    channel: 'Official Release',
    date: 'June 2026',
    category: 'Music Video',
    thumbnail: 'https://img.youtube.com/vi/TitQphB-Puk/maxresdefault.jpg',
    link: 'https://youtu.be/TitQphB-Puk?si=8GxdNmo2YGEYZmC5',
    color: 'rgba(212,160,160,0.1)',
    badge: '#D4A0A0',
  },
];

const interviews = [
  { id: 1, title: 'Akanksha Choudhary REVEALS Truth About Yogesh & Ruru', platform: 'YouTube', channel: 'PINKVILLA',         duration: '1:33:35', date: 'Mar 2026', category: 'Interview', link: 'https://youtu.be/PtwROEZpo6U?si=ZMwIy3CGUEd2BFOb', thumbnail: 'https://img.youtube.com/vi/PtwROEZpo6U/maxresdefault.jpg', color: 'rgba(212,160,160,0.12)', badge: '#FF0000' },
  { id: 2, title: 'First Podcast After Finale',                           platform: 'YouTube', channel: 'Filmygyan',          duration: '1:18:26', date: 'May 2026', category: 'Podcast',   link: 'https://youtu.be/eq4IVB6lTsg?si=bbzajPtW4ABEBfwO', thumbnail: 'https://img.youtube.com/vi/eq4IVB6lTsg/maxresdefault.jpg', color: 'rgba(139,158,126,0.12)', badge: '#C9A84C' },
  { id: 3, title: 'Akanksha Choudhary Exposes Yogesh & Ruru',             platform: 'YouTube', channel: 'Siddharth Kannan',  duration: '1:33:33', date: 'Mar 2026', category: 'Interview', link: 'https://youtu.be/DkPpEcFiWX8?si=SmrsvukY6Zb8Z5No', thumbnail: 'https://img.youtube.com/vi/DkPpEcFiWX8/maxresdefault.jpg', color: 'rgba(201,168,76,0.08)', badge: '#FF0000' },
  { id: 4, title: "Splitsvilla X6's Akanksha Choudhary",                  platform: 'YouTube', channel: 'India Forums',       duration: '1:38:19', date: 'Mar 2026', category: 'Interview', link: 'https://youtu.be/of0tS13TTGo?si=hIKJcXRj4hJukOuV', thumbnail: 'https://img.youtube.com/vi/of0tS13TTGo/maxresdefault.jpg', color: 'rgba(80,60,100,0.12)',  badge: '#FF0000' },
  { id: 5, title: 'Splitsvilla Fame Akanksha Choudhary',                  platform: 'YouTube', channel: 'Nayandeep Rakshit', duration: '52:07',   date: 'Apr 2026', category: 'Interview', link: 'https://youtu.be/TcU5NjMRLwQ?si=H7SUUo_soIS9UrK0', thumbnail: 'https://img.youtube.com/vi/TcU5NjMRLwQ/maxresdefault.jpg', color: 'rgba(242,196,196,0.1)', badge: '#FF0000' },
  { id: 6, title: 'Story With Sahana ft. Akanksha Choudhary',             platform: 'YouTube', channel: 'Story with Sahana', duration: '4:33',    date: 'Jun 2026', category: 'Interview', link: 'https://youtu.be/TGFhDZ1J8qE?si=tanWrLzqueZg5r3k', thumbnail: 'https://img.youtube.com/vi/TGFhDZ1J8qE/maxresdefault.jpg', color: 'rgba(139,158,126,0.08)', badge: '#FF0000' },
  { id: 7, title: 'LOCK UPP fame Akanksha Choudhary Bargains In Lokhandwala!', platform: 'YouTube', channel: 'Hauterrfly', duration: '19:33',   date: 'July 2026', category: 'Interview', link: 'https://youtu.be/6tz98LBhALk?si=_5e7req0QkeFS_Zx', thumbnail: 'https://img.youtube.com/vi/6tz98LBhALk/maxresdefault.jpg', color: 'rgba(212,160,160,0.08)', badge: '#FF0000' },
];

export default function InterviewLibrary() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="interviews" style={{ padding: 'clamp(60px,12vw,160px) clamp(20px,5vw,80px)', background: 'var(--noir)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 1, background: 'var(--rose)', flexShrink: 0 }} />
            <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--rose)', fontFamily: 'Inter, sans-serif' }}>In Her Words</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px,5.5vw,72px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            Interviews &<br /><em>Music Videos</em>
          </h2>
        </motion.div>

        {/* NEW RELEASE — featured music video */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.8 }} style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ padding: '4px 12px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 100 }}>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'Inter, sans-serif' }}>✦ New Release · 3 July 2026</span>
            </div>
          </div>
          <a href={musicVideos[0].link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)', transition: 'border-color 0.3s', cursor: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
              data-cursor
            >
              <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden', minHeight: 140 }}>
                <img src={musicVideos[0].thumbnail} alt={musicVideos[0].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.45)' }}
                  onError={e => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/hUDrfmmDE0Q/hqdefault.jpg`; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.92) 35%, rgba(10,10,10,0.15) 100%)' }} />
                {/* Play */}
                <div style={{ position: 'absolute', right: 'clamp(16px,4vw,60px)', top: '50%', transform: 'translateY(-50%)', width: 'clamp(48px,6vw,72px)', height: 'clamp(48px,6vw,72px)', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid rgba(245,240,232,0.8)', marginLeft: 4 }} />
                </div>
                {/* Text */}
                <div style={{ position: 'absolute', left: 'clamp(16px,4vw,48px)', top: '50%', transform: 'translateY(-50%)', maxWidth: '60%' }}>
                  <span className="tag-pill" style={{ marginBottom: 10, display: 'inline-block', borderColor: 'rgba(201,168,76,0.5)', color: 'var(--gold)', fontSize: 9 }}>Music Video</span>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px,3vw,40px)', color: 'var(--ivory)', fontWeight: 300, lineHeight: 1.1, marginBottom: 6 }}>{musicVideos[0].title}</div>
                  <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.4)', fontFamily: 'Inter, sans-serif' }}>{musicVideos[0].channel} · {musicVideos[0].date}</div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Grid — 2 cols mobile, auto on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px,calc(50% - 6px)), 1fr))', gap: 10 }}>
          {[musicVideos[1], ...interviews].map((item, i) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.6 }}
              style={{ background: item.color, border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'border-color 0.3s, transform 0.3s', cursor: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              data-cursor
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
                <img src={item.thumbnail} alt={item.title} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.65)' }}
                  onError={e => {
                    const id = item.link.match(/youtu\.be\/([^?]+)/)?.[1];
                    if (id) (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '14px solid rgba(245,240,232,0.8)', marginLeft: 3 }} />
                  </div>
                </div>
                <div style={{ position: 'absolute', top: 8, left: 8, background: item.badge, borderRadius: 4, padding: '2px 7px', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.platform}</div>
                {'duration' in item && (
                  <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.75)', borderRadius: 4, padding: '2px 6px', fontSize: 10, fontFamily: 'Inter, sans-serif', color: 'rgba(245,240,232,0.8)' }}>{(item as any).duration}</div>
                )}
              </div>
              <div style={{ padding: 'clamp(12px,1.5vw,16px)' }}>
                <span className="tag-pill" style={{ fontSize: 9, marginBottom: 7, display: 'inline-block' }}>{item.category}</span>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(14px,1.4vw,17px)', color: 'var(--ivory)', lineHeight: 1.3, marginBottom: 5, fontWeight: 500 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif' }}>{item.channel} · {item.date}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} style={{ textAlign: 'center', marginTop: 28 }}>
          <p style={{ fontSize: 11, color: 'rgba(245,240,232,0.2)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>Click any card to watch on the original platform</p>
        </motion.div>
      </div>
    </section>
  );
}
