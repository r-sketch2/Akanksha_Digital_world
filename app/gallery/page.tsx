'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });
const CLOUD = 'https://res.cloudinary.com/dnx5botey/image/upload';

const categories = ['All', 'Photoshoots', 'Events', 'Pageant', 'Fan Interactions'];

const galleryItems = [
  { id: 1,  cat: 'Photoshoots',      url: `${CLOUD}/1000191338_wx5vlv.jpg` },
  { id: 2,  cat: 'Photoshoots',      url: `${CLOUD}/1000191339_vap0ay.jpg` },
  { id: 3,  cat: 'Photoshoots',      url: `${CLOUD}/1000191340_tqoal1.jpg` },
  { id: 4,  cat: 'Photoshoots',      url: `${CLOUD}/1000191341_w82jb0.jpg` },
  { id: 5,  cat: 'Photoshoots',      url: `${CLOUD}/1000191342_teg4py.jpg` },
  { id: 6,  cat: 'Photoshoots',      url: `${CLOUD}/1000191344_xyzwkm.jpg` },
  { id: 7,  cat: 'Photoshoots',      url: `${CLOUD}/1000191345_kvokbo.jpg` },
  { id: 8,  cat: 'Photoshoots',      url: `${CLOUD}/1000191346_qiay3x.jpg` },
  { id: 9,  cat: 'Photoshoots',      url: `${CLOUD}/1000191347_y47nhz.jpg` },
  { id: 10, cat: 'Photoshoots',      url: `${CLOUD}/1000191348_kv5w7y.jpg` },
  { id: 11, cat: 'Photoshoots',      url: `${CLOUD}/1000191349_khaqvx.jpg` },
  { id: 12, cat: 'Photoshoots',      url: `${CLOUD}/1000191350_ld6wz4.jpg` },
  { id: 13, cat: 'Photoshoots',      url: `${CLOUD}/1000191351_jlev72.jpg` },
  { id: 14, cat: 'Photoshoots',      url: `${CLOUD}/1000191385_zn6dlq.jpg` },
  { id: 15, cat: 'Photoshoots',      url: `${CLOUD}/1000191386_nw22t6.jpg` },
  { id: 16, cat: 'Photoshoots',      url: `${CLOUD}/1000191387_pikv3t.jpg` },
  { id: 17, cat: 'Photoshoots',      url: `${CLOUD}/1000191388_ei2i66.jpg` },
  { id: 18, cat: 'Photoshoots',      url: `${CLOUD}/1000191426_tgpuha.jpg` },
  { id: 19, cat: 'Photoshoots',      url: `${CLOUD}/1000191427_mqns8w.jpg` },
  { id: 20, cat: 'Photoshoots',      url: `${CLOUD}/1000191428_sm1mrk.jpg` },
  { id: 21, cat: 'Photoshoots',      url: `${CLOUD}/1000191429_uyye3a.jpg` },
  { id: 22, cat: 'Photoshoots',      url: `${CLOUD}/1000191430_i6lc8i.jpg` },
  { id: 23, cat: 'Photoshoots',      url: `${CLOUD}/1000191431_kvd0ww.jpg` },
  { id: 24, cat: 'Photoshoots',      url: `${CLOUD}/1000191433_x2mpje.jpg` },
  { id: 25, cat: 'Photoshoots',      url: `${CLOUD}/1000191434_gvle2c.jpg` },
  { id: 26, cat: 'Photoshoots',      url: `${CLOUD}/1000191435_snlcin.jpg` },
  { id: 27, cat: 'Photoshoots',      url: `${CLOUD}/1000191436_rv5wtm.jpg` },
  { id: 28, cat: 'Photoshoots',      url: `${CLOUD}/1000191512_o2gb1z.jpg` },
  { id: 29, cat: 'Photoshoots',      url: `${CLOUD}/1000191513_ypx4j4.jpg` },
  { id: 30, cat: 'Photoshoots',      url: `${CLOUD}/1000191514_deygnm.jpg` },
  { id: 31, cat: 'Photoshoots',      url: `${CLOUD}/1000191515_qrdaaq.jpg` },
  { id: 32, cat: 'Photoshoots',      url: `${CLOUD}/1000191516_a0clbx.jpg` },
  { id: 33, cat: 'Photoshoots',      url: `${CLOUD}/1000191517_smvpm5.jpg` },
  { id: 34, cat: 'Photoshoots',      url: `${CLOUD}/1000191562_hnskxa.jpg` },
  { id: 35, cat: 'Photoshoots',      url: `${CLOUD}/1000191563_ywbfyx.jpg` },
  { id: 36, cat: 'Photoshoots',      url: `${CLOUD}/1000191565_zpyiwo.jpg` },
  { id: 37, cat: 'Photoshoots',      url: `${CLOUD}/1000191566_tgqhhy.jpg` },
  { id: 38, cat: 'Photoshoots',      url: `${CLOUD}/1000191567_xcircp.jpg` },
  { id: 39, cat: 'Photoshoots',      url: `${CLOUD}/1000191568_i1bqsr.jpg` },
  { id: 40, cat: 'Photoshoots',      url: `${CLOUD}/1000191569_ilgjqf.jpg` },
  { id: 41, cat: 'Photoshoots',      url: `${CLOUD}/1000191570_urb3gi.jpg` },
  { id: 42, cat: 'Photoshoots',      url: `${CLOUD}/1000191571_zbkbxy.jpg` },
  { id: 43, cat: 'Photoshoots',      url: `${CLOUD}/1000191572_xs60j5.jpg` },
  { id: 44, cat: 'Events',           url: `${CLOUD}/1000191244_w0ggjy.jpg` },
  { id: 45, cat: 'Events',           url: `${CLOUD}/1000191372_sdeeqz.jpg` },
  { id: 46, cat: 'Events',           url: `${CLOUD}/1000191373_ygu0al.jpg` },
  { id: 47, cat: 'Events',           url: `${CLOUD}/1000191414_kvo9gr.jpg` },
  { id: 48, cat: 'Events',           url: `${CLOUD}/1000191415_lyfqsr.jpg` },
  { id: 49, cat: 'Events',           url: `${CLOUD}/1000191416_km5ygf.jpg` },
  { id: 50, cat: 'Events',           url: `${CLOUD}/1000191423_imet9i.jpg` },
  { id: 51, cat: 'Events',           url: `${CLOUD}/1000191424_dk2inr.jpg` },
  { id: 52, cat: 'Events',           url: `${CLOUD}/1000191425_li0ykb.jpg` },
  { id: 53, cat: 'Events',           url: `${CLOUD}/1000191446_qmtjxa.jpg` },
  { id: 54, cat: 'Events',           url: `${CLOUD}/1000191447_tu1t8e.jpg` },
  { id: 55, cat: 'Events',           url: `${CLOUD}/1000191448_gpxiwh.jpg` },
  { id: 56, cat: 'Events',           url: `${CLOUD}/1000191449_ju6r6s.jpg` },
  { id: 57, cat: 'Events',           url: `${CLOUD}/1000191450_zpfzw7.jpg` },
  { id: 58, cat: 'Events',           url: `${CLOUD}/1000191451_s3ssmi.jpg` },
  { id: 59, cat: 'Events',           url: `${CLOUD}/1000191452_qgbfme.jpg` },
  { id: 60, cat: 'Events',           url: `${CLOUD}/1000191453_vqxg39.jpg` },
  { id: 61, cat: 'Events',           url: `${CLOUD}/1000191501_hihmj1.jpg` },
  { id: 62, cat: 'Events',           url: `${CLOUD}/1000191502_kcfwjh.jpg` },
  { id: 63, cat: 'Events',           url: `${CLOUD}/1000191503_l05jux.jpg` },
  { id: 64, cat: 'Events',           url: `${CLOUD}/1000191504_j8wccl.jpg` },
  { id: 65, cat: 'Events',           url: `${CLOUD}/1000191505_qcjetu.jpg` },
  { id: 66, cat: 'Events',           url: `${CLOUD}/1000191506_pxozl3.jpg` },
  { id: 67, cat: 'Events',           url: `${CLOUD}/1000191507_zvrrvm.jpg` },
  { id: 68, cat: 'Pageant',          url: `${CLOUD}/1000191460_yehezm.jpg` },
  { id: 69, cat: 'Pageant',          url: `${CLOUD}/1000191461_l1gmu6.jpg` },
  { id: 70, cat: 'Pageant',          url: `${CLOUD}/1000191462_hqaygs.jpg` },
  { id: 71, cat: 'Pageant',          url: `${CLOUD}/1000191463_uokbn6.jpg` },
  { id: 72, cat: 'Pageant',          url: `${CLOUD}/1000191509_i12xyi.jpg` },
  { id: 73, cat: 'Pageant',          url: `${CLOUD}/1000191510_j7yc40.jpg` },
  { id: 74, cat: 'Pageant',          url: `${CLOUD}/1000191511_gs2yup.jpg` },
  { id: 75, cat: 'Pageant',          url: `${CLOUD}/1000191541_wndkxd.jpg` },
  { id: 76, cat: 'Pageant',          url: `${CLOUD}/1000191542_m0arht.jpg` },
  { id: 77, cat: 'Pageant',          url: `${CLOUD}/1000191543_ifhahg.jpg` },
  { id: 78, cat: 'Pageant',          url: `${CLOUD}/1000191544_tetpdl.jpg` },
  { id: 79, cat: 'Pageant',          url: `${CLOUD}/1000191545_qezlbk.jpg` },
  { id: 80, cat: 'Pageant',          url: `${CLOUD}/1000191546_gr1god.jpg` },
  { id: 81, cat: 'Pageant',          url: `${CLOUD}/1000191547_nqizku.jpg` },
  { id: 82, cat: 'Pageant',          url: `${CLOUD}/1000191548_iyd78p.jpg` },
  { id: 83, cat: 'Pageant',          url: `${CLOUD}/WhatsApp_Image_2026-06-27_at_14.27.39_x1ipp9.jpg` },
  { id: 84, cat: 'Fan Interactions', url: `${CLOUD}/1000191471_bnd2dj.jpg` },
  { id: 85, cat: 'Fan Interactions', url: `${CLOUD}/1000191472_wyxm24.jpg` },
  { id: 86, cat: 'Fan Interactions', url: `${CLOUD}/1000191473_py8wiy.jpg` },
];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const router = useRouter();

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.cat === active);

  const openLightbox = (item: typeof galleryItems[0], index: number) => {
    setLightbox(item);
    setLightboxIndex(index);
  };

  const prev = () => {
    const i = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[i]); setLightboxIndex(i);
  };

  const next = () => {
    const i = (lightboxIndex + 1) % filtered.length;
    setLightbox(filtered[i]); setLightboxIndex(i);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--noir)', paddingTop: 80 }}>
      <Cursor/>

      {/* Top bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 72, background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(24px,5vw,80px)', zIndex: 1000 }}>
        <button
          onClick={() => router.push('/')}
          style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: 'rgba(245,240,232,0.5)', cursor: 'none', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')}
        >
          ← Back to Home
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 20 20">
            {[0,1,2,3,4,5].map(i => (
              <ellipse key={i} cx="10" cy="10" rx="2.5" ry="7" fill="none" stroke="#C9A84C" strokeWidth="0.8"
                transform={`rotate(${i*30} 10 10) translate(0,-3.5)`} style={{ transformOrigin: '10px 10px' }} />
            ))}
            <circle cx="10" cy="10" r="2" fill="#C9A84C" />
          </svg>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, color: 'var(--ivory)' }}>Gallery</span>
        </div>
        <span style={{ fontSize: 11, color: 'rgba(245,240,232,0.25)', fontFamily: 'Inter, sans-serif' }}>{filtered.length} photos</span>
      </div>

      <div style={{ padding: 'clamp(40px,6vw,80px) clamp(24px,5vw,80px)', maxWidth: 1400, margin: '0 auto' }}>

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 40 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 1, background: 'var(--sage)' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--sage)', fontFamily: 'Inter, sans-serif' }}>Visual Archive</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px,6vw,80px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            Photo <em>Gallery</em>
          </h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}
        >
          {categories.map(cat => {
            const count = cat === 'All' ? galleryItems.length : galleryItems.filter(g => g.cat === cat).length;
            return (
              <button key={cat} onClick={() => setActive(cat)}
                style={{ padding: '8px 20px', borderRadius: 100, border: `1px solid ${active === cat ? 'var(--sage)' : 'rgba(255,255,255,0.08)'}`, background: active === cat ? 'rgba(139,158,126,0.1)' : 'transparent', color: active === cat ? 'var(--sage)' : 'rgba(245,240,232,0.4)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s' }}
              >{cat} ({count})</button>
            );
          })}
        </motion.div>

        {/* Full masonry grid */}
        <div style={{ columns: 'clamp(150px, 18vw, 240px)', columnGap: 8 }}>
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.4), duration: 0.5 }}
              style={{ breakInside: 'avoid', marginBottom: 8, borderRadius: 8, overflow: 'hidden', cursor: 'none' }}
              onClick={() => openLightbox(item, i)}
              data-cursor
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.url}
                  alt={item.cat}
                  loading="lazy"
                  style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 55%)', opacity: 0, transition: 'opacity 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0'; }}
                >
                  <div style={{ position: 'absolute', bottom: 12, left: 14 }}>
                    <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'Inter, sans-serif' }}>{item.cat}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(10,10,10,0.97)', zIndex: 5000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)' }}
          >
            <button onClick={e => { e.stopPropagation(); prev(); }}
              style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: 48, height: 48, color: 'var(--ivory)', fontSize: 24, cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, transition: 'all 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >‹</button>

            <motion.img
              key={lightbox.id}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox.url}
              alt={lightbox.cat}
              onClick={e => e.stopPropagation()}
              style={{ maxHeight: '88vh', maxWidth: '80vw', objectFit: 'contain', borderRadius: 8, boxShadow: '0 40px 120px rgba(0,0,0,0.8)' }}
            />

            <button onClick={e => { e.stopPropagation(); next(); }}
              style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: 48, height: 48, color: 'var(--ivory)', fontSize: 24, cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, transition: 'all 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >›</button>

            <button onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: 40, height: 40, color: 'rgba(245,240,232,0.6)', fontSize: 16, cursor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >✕</button>

            <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', fontSize: 11, color: 'rgba(245,240,232,0.3)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
              {lightboxIndex + 1} / {filtered.length} · {lightbox.cat}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
