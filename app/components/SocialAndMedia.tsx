'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  { name: 'Instagram', handle: '@akankshachaudhary_official', followers: '3.3M', icon: '📸', color: 'rgba(212,160,160,0.12)', border: 'rgba(212,160,160,0.2)', url: 'https://www.instagram.com/akankshachoudhary_official?igsh=MWdocmxqamZ6amxqaA==' },
  { name: 'YouTube',   handle: '@akankshachaudhary_official', followers: '481K', icon: '▶',  color: 'rgba(255,60,60,0.08)',    border: 'rgba(255,80,80,0.2)',   url: 'https://youtube.com/@akankshachoudhary_official?si=iQnz0CcR_u28950q' },
  { name: 'X',         handle: 'Akanksha10_C',               followers: '5.8K', icon: '𝕏',  color: 'rgba(245,240,232,0.04)', border: 'rgba(255,255,255,0.1)', url: 'https://x.com/Akanksha10_C' },
  { name: 'Snapchat',  handle: 'Akanksha650',                followers: '776K', icon: '👻', color: 'rgba(255,252,0,0.05)',   border: 'rgba(255,252,0,0.15)',  url: 'https://www.snapchat.com/add/akanksha650?share_id=VNEDlv-JlZE&locale=en-IN' },
  { name: 'Threads',   handle: '@akankshachaudhary_official', followers: '77.9K', icon: 'threads', color: 'rgba(245,240,232,0.04)', border: 'rgba(255,255,255,0.1)', url: 'https://www.threads.com/@akankshachaudhary_official' },
];

const ThreadsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.05l13.74 9.42c5.734-8.7 14.724-10.56 21.38-10.56h.23c8.27.054 14.52 2.456 18.585 7.145 2.943 3.36 4.914 8.01 5.892 13.87-7.353-1.249-15.31-1.633-23.78-1.14-23.9 1.375-39.277 15.256-38.323 34.537.486 9.798 5.464 18.244 14.016 23.792 7.13 4.687 16.302 6.972 25.847 6.466 12.597-.685 22.499-5.492 29.435-14.284 5.3-6.786 8.655-15.57 10.152-26.723 6.09 3.677 10.596 8.507 13.078 14.205 4.208 9.8 4.448 25.89-8.567 38.8-11.85 11.742-26.108 16.85-47.624 17-23.7-.168-41.606-7.787-53.236-22.648C22.952 145.24 17.1 126.012 16.9 100.019c.2-26 6.05-45.228 17.38-57.155 11.52-12.128 29.43-19.748 53.254-19.917 24-.17 42.17 7.586 54.004 21.06 5.835 6.67 10.24 15.025 13.11 24.794l16.175-4.32c-3.528-12.294-9.06-22.93-16.617-31.58C137.47 14.394 114.825 4.5 85.554 4.296h-.053C56.32 4.5 33.88 14.53 19.44 33.88 6.537 51.348.235 76.367.01 99.969v.085c.225 23.6 6.53 48.617 19.43 66.086 14.44 19.35 36.88 29.376 66.066 29.574h.047c25.96-.173 44.44-6.975 59.516-21.93 19.94-19.79 19.342-44.61 12.742-59.836-4.612-10.727-13.482-19.438-26.274-25.96z" fill="currentColor"/>
    <path d="M98.733 127.176c-10.25.558-20.916-4.026-21.417-13.908-.346-6.79 4.852-14.033 22.066-15.027 1.925-.11 3.82-.166 5.69-.166 6.133 0 11.882.6 17.15 1.757-1.952 24.375-13.246 26.894-23.49 27.344z" fill="currentColor"/>
  </svg>
);

export default function SocialHub() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="social" style={{ padding: 'clamp(60px,12vw,160px) clamp(20px,5vw,80px)', background: 'var(--noir)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'Inter, sans-serif' }}>Follow Along</span>
            <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px,5.5vw,72px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            Social <em>Hub</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))', gap: 12 }}>
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              style={{ padding: 'clamp(20px,3vw,36px)', background: s.color, border: `1px solid ${s.border}`, borderRadius: 16, textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease', cursor: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              data-cursor
            >
              {/* Icon — SVG for Threads, emoji for others */}
              <div style={{ fontSize: 28, marginBottom: 10, color: 'var(--ivory)' }}>
                {s.icon === 'threads' ? <ThreadsIcon /> : s.icon}
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(16px,1.8vw,20px)', color: 'var(--ivory)', fontWeight: 500, marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 12, color: 'rgba(245,240,232,0.4)', fontFamily: 'Inter, sans-serif', marginBottom: 16 }}>{s.handle}</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px,2.5vw,28px)', color: 'var(--gold)' }}>{s.followers}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.25)', fontFamily: 'Inter, sans-serif', marginTop: 2 }}>Followers</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}