'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });

const categories = ['All', 'Traditional', 'Fusion', 'Contemporary', 'Western'];

const outfits = [
  { id: 1,  name: 'Black Sequin Slit Gown',          event: 'City Meetup',            category: 'Western',      image: '/outfits/outfit-1.jpg',  desc: 'A show-stopping black sequin gown with sheer sleeves and a daring thigh-high slit, paired with a dramatic sweeping train.',  link: 'https://www.instagram.com/satrangdelhi?igsh=MTE2aDVkODFrbjR3Ng==' },
  { id: 2,  name: 'Green Floral Maxi',                event: 'Summer Perfect',         category: 'Fusion',       image: '/outfits/outfit-2.jpg',  desc: 'A breezy green floral printed maxi dress with delicate trim detailing, perfect for relaxed daytime styling.',                link: 'https://www.ajio.com/winered-women-floral-print-a-line-kurta-set/p/466702136_green' },
  { id: 3,  name: 'Crimson Beaded Gown',              event: 'Splitsvilla X6 Finale',  category: 'Western',      image: '/outfits/outfit-3.jpg',  desc: 'A striking red beaded one-shoulder gown with intricate hand embellishment and a thigh-high slit.',                          link: 'https://www.instagram.com/satrangdelhi?igsh=MTE2aDVkODFrbjR3Ng==' },
  { id: 4,  name: 'Sage Pearl Co-ord',                event: 'First Award Show',       category: 'Contemporary', image: '/outfits/outfit-4.jpg',  desc: 'An elegant sage green pearl-embellished top paired with a matching draped skirt.',                                         link: 'https://www.instagram.com/ivoryrose.in?igsh=MTJic3Yza3N4MW15eg==' },
  { id: 5,  name: 'Blush Lace Cut-out Gown',         event: 'Iconic Exit',            category: 'Western',      image: '/outfits/outfit-5.jpg',  desc: 'A romantic blush lace gown with intricate scalloped tiers and a chic cut-out waist detail.',                               link: '' },
  { id: 6,  name: 'Champagne Sequin Gown',            event: 'Iconic Farewell Speech', category: 'Western',      image: '/outfits/outfit-6.jpg',  desc: 'A sparkling champagne sequin gown with a structured strapless bodice and intricate paisley patterns.',                      link: 'https://www.instagram.com/dress_zilla?igsh=cXFraW9ibWJ1aTQ3' },
  { id: 7,  name: 'Emerald Corset Gown',              event: 'Splitsvilla X6 Queen',   category: 'Western',      image: '/outfits/outfit-7.jpg',  desc: 'A glamorous emerald green corset gown with an embellished bustier and elegant draped cape sleeves.',                        link: 'https://www.instagram.com/nihalthakur04?igsh=MXIybzJ3cHBzYWhsaA==' },
  { id: 8,  name: 'Ruby Ruffle Dress',                event: 'Night Out',              category: 'Western',      image: '/outfits/outfit-8.jpg',  desc: 'A flirty red ruffled mini dress with a halter neckline, perfect for a glamorous evening look.',                             link: 'https://www.myntra.com/dress/lulu--sky/lulu--sky-halter-neck-sheath-dress/28303938/buy' },
  { id: 9,  name: 'Teal Floral Sundress',             event: 'Poolside Day',           category: 'Fusion',       image: '/outfits/outfit-9.jpg',  desc: 'A vibrant teal floral printed sundress with a flattering cut-out bodice, ideal for sunny day outings.',                      link: 'https://www.instagram.com/amaraa.officialindia?igsh=MTEzYndwMmd0cnMzeQ==' },
  { id: 10, name: 'Crimson Mermaid Gown',             event: 'Birthday Beach',         category: 'Western',      image: '/outfits/outfit-10.jpg', desc: 'A bold red mermaid silhouette gown with a sweetheart cut-out neckline and dramatic ruffled hem.',                           link: 'https://www.instagram.com/label_wildchild?igsh=MWhoc3g5aTJzdTRi' },
  { id: 11, name: 'Midnight Glitter Gown',            event: 'Poolside Gala',          category: 'Western',      image: '/outfits/outfit-11.jpg', desc: 'A sultry off-shoulder black glitter gown with a sweetheart neckline and sheer long sleeves.',                               link: 'https://www.myntra.com/Dresses/JC+Mode/JC-Mode-Embellished-Off-Shoulder-Bodycon-Midi-Dress/39834242/buy' },
  { id: 12, name: 'Floral Print Midi Dress',          event: 'Throne Night',           category: 'Fusion',       image: '/outfits/outfit-12.jpg', desc: 'A whimsical strapless floral printed midi dress with an asymmetric hem and vibrant paisley patterns.',                      link: 'https://www.instagram.com/nihalthakur04?igsh=MXIybzJ3cHBzYWhsaA==' },
  { id: 13, name: 'Classic Black Corset Gown',        event: 'Filmygyan Event',        category: 'Western',      image: '/outfits/outfit-13.jpg', desc: 'A timeless black corset gown with a fitted bustier bodice and flowing maxi skirt.',                                         link: 'https://www.instagram.com/hawa.mukri?igsh=bGd3djF4Y3cxcTgy' },
  { id: 14, name: 'Maroon Tiered Ball Gown',          event: 'Her Iconic Smile',       category: 'Western',      image: '/outfits/outfit-14.jpg', desc: 'A regal maroon ball gown with a sequined off-shoulder bodice and dramatic tiered tulle skirt.',                             link: 'https://www.instagram.com/dress_zilla?igsh=cXFraW9ibWJ1aTQ3' },
  { id: 15, name: 'Golden Cage Gown',                 event: 'Pageant Time',           category: 'Western',      image: '/outfits/outfit-15.jpg', desc: 'A dazzling golden gown featuring intricate cage detailing at the waist with a fitted silhouette.',                          link: 'https://www.instagram.com/nihalthakur04?igsh=MXIybzJ3cHBzYWhsaA==' },
  { id: 16, name: 'Scarlet Slit Dress',               event: 'Palace Visit',           category: 'Western',      image: '/outfits/outfit-16.jpg', desc: 'An elegant red bodycon dress with a sweetheart neckline and a chic side slit.',                                            link: 'https://newme.asia/product/red-sweetheart-neckline-maxi-dress' },
  { id: 17, name: 'Golden Shimmer Cage Gown',         event: 'Pageant Days',           category: 'Western',      image: '/outfits/outfit-17.jpg', desc: 'A radiant golden shimmer gown with sheer cage panels and a thigh-high slit, paired with statement jewelry.',               link: 'https://www.instagram.com/nihalthakur04?igsh=MXIybzJ3cHBzYWhsaA==' },
  { id: 18, name: 'Ice Blue Satin Set',               event: 'Studio Shoot',           category: 'Contemporary', image: '/outfits/outfit-18.jpg', desc: 'A modern ice-blue satin bralette and draped skirt set with a sleek metallic ring detail.',                                 link: 'https://www.instagram.com/outrostudioofficial?igsh=MXQxaTd3ZnlpdXUyNA==' },
  { id: 19, name: 'Golden Bridal Lehenga Set',        event: 'Festive Shoot',          category: 'Traditional',  image: '/outfits/outfit-19.jpg', desc: 'A regal golden bustier paired with a shimmering lehenga skirt, complete with traditional maang tikka and jhumkas.',        link: 'https://www.instagram.com/dress_zilla?igsh=cXFraW9ibWJ1aTQ3' },
  { id: 20, name: 'Silver Knit Co-ord',               event: 'Studio Shoot',           category: 'Contemporary', image: '/outfits/outfit-20.jpg', desc: 'A chic silver-grey knit bandeau top with matching striped skirt, perfect for a cool minimal aesthetic.',                   link: 'https://www.instagram.com/kreationsbyree?igsh=ZmxyaGlscmg3eGNz' },
  { id: 21, name: 'Yellow Floral Bikini Set',         event: 'Jab Talak',              category: 'Western',      image: '/outfits/outfit-21.jpg', desc: 'A vibrant yellow halter bikini top with orange floral detail, paired with a flowing white sarong skirt.',                  link: 'https://www.instagram.com/lovecovera?igsh=eWU5dm5ybWY3dnA3' },
  { id: 22, name: 'Lavender Sequin Mini',             event: 'BYOG day',            category: 'Western',      image: '/outfits/outfit-22.jpg', desc: 'A sparkling lavender sequin strapless mini dress with a flared skirt silhouette.',                                         link: 'https://www.instagram.com/bhavriib?igsh=MXVtaXM3amFucTJ2Yw==' },
  { id: 23, name: 'Lime Halter Midi',                 event: 'Queen Behaviour',          category: 'Contemporary', image: '/outfits/outfit-23.jpg', desc: 'A breezy lime green ribbed halter neck midi dress with a sleek minimalist silhouette.',                                    link: 'https://www.myntra.com/dress/mango/mango-one-shoulder-twisted-cut-out-detail-self-striped-bodycon-midi-dress/23434054/buy' },
  { id: 24, name: 'Gingham Peplum Top',               event: 'Studio Shoot',           category: 'Western',      image: '/outfits/outfit-24.jpg', desc: 'A classic blue and white gingham halter peplum top paired with dark denim jeans.',                                         link: 'https://www.instagram.com/shubhshreestudios?igsh=MXA4b2I3NGxrZGl3bA==' },
  { id: 25, name: 'Red Satin Mini Dress',             event: 'Date Night',         category: 'Western',      image: '/outfits/outfit-25.jpg', desc: 'A glamorous red satin mini dress with pleated skirt and spaghetti straps, perfect for an elegant evening look.',           link: 'https://newme.asia/product/red-layered-fit-and-flare-mini-dress' },
  { id: 26, name: 'Black Velvet Cut-out Gown',        event: 'Show Appearance',        category: 'Western',      image: '/outfits/outfit-26.jpg', desc: 'A sleek black velvet embellished gown with rhinestone trim and side cut-out detailing.',                                   link: 'https://www.namshi.com/kuwait-en/buy-amelia-rose-sequin-cutout-gown-dress/ZAE88275D39C9DCCCC3BEZ/p/?utm_source=share_product&utm_medium=web&utm_campaign=o24_all_web_both_organic_share_share-elements_open_na_na_na&' },
  { id: 27, name: 'Pink Ruched Co-ord',               event: 'Event Night',            category: 'Western',      image: '/outfits/outfit-27.jpg', desc: 'A bubblegum pink ruched crop top and mini skirt co-ord with ruffled hem and long sleeves.',                                link: 'https://www.instagram.com/cstoreclothin?igsh=MWJydmUyeDA4a3E4NQ==' },
  { id: 28, name: 'Navy Fringe Dress',                event: 'Outdoor Event',          category: 'Western',      image: '/outfits/outfit-28.jpg', desc: 'A stunning navy blue beaded halter dress with tiered fringe hem detailing.',                                               link: 'https://www.instagram.com/dress_zilla?igsh=cXFraW9ibWJ1aTQ3' },
  { id: 29, name: 'Denim Boho Co-ord',                event: 'Casual Outing',          category: 'Fusion',       image: '/outfits/outfit-29.jpg', desc: 'A bohemian denim embroidered crop top and maxi skirt co-ord with tassel details.',                                         link: 'https://www.instagram.com/orlance.in?igsh=MWh2OWI2ZnJyZTI3OQ==' },
  { id: 30, name: 'Black Silver Co-ord Set',           event: 'Evening Event',          category: 'Fusion',       image: '/outfits/outfit-30.jpg', desc: 'A modern metallic silver draped skirt paired with a black sequin crop top for a fusion glam look.',                        link: 'https://www.instagram.com/evabledesigns?igsh=MWZoMWZ4ZTFpYzk4cQ==' },
  { id: 31, name: 'Iridescent Feather Mini',          event: 'Ideal Match',        category: 'Western',      image: '/outfits/outfit-31.jpg', desc: 'A dazzling iridescent strapless mini dress with a feathered hem and holographic sequin bodice.',                          link: 'https://www.instagram.com/nihalthakur04?igsh=MXIybzJ3cHBzYWhsaA==' },
  { id: 32, name: 'Blush Draped Gown',                event: 'Unsafe Zone Fire',        category: 'Western',      image: '/outfits/outfit-32.jpg', desc: 'An ethereal blush pink strapless draped gown with rhinestone corset detailing.',                                           link: '' },
  { id: 33, name: 'Magenta One Shoulder Gown',        event: 'Evening Party',          category: 'Western',      image: '/outfits/outfit-33.jpg', desc: 'A bold magenta one-shoulder ruched gown with crystal embellishment and a sleek fitted silhouette.',                        link: 'https://www.instagram.com/dress_zilla?igsh=cXFraW9ibWJ1aTQ3' },
  { id: 34, name: 'Black & White Off-Shoulder Set',   event: 'Studio Shoot',           category: 'Contemporary', image: '/outfits/outfit-34.jpg', desc: 'A chic black strapless bodysuit paired with dramatic white puff sleeves and patterned fishnet tights.',                    link: 'https://www.instagram.com/outline.collection?igsh=MXJ6OG9kc2JvMGlmZw==' },
  { id: 35, name: 'Yellow Cut-out Halter Dress',      event: 'Lockup Premiere',         category: 'Western',      image: '/outfits/outfit-35.jpg', desc: 'A sunny yellow halter neck cut-out bodycon dress with ruched detailing, perfect for a bold night out.',                   link: 'https://www.instagram.com/boutiquobysaachi?igsh=MTZ5ZTJjZ2F4OXZybA==' },
  { id: 36, name: 'Red Mesh Off-Shoulder Gown',       event: 'Iconic Red Dress',         category: 'Western',      image: '/outfits/outfit-37.jpg', desc: 'A stunning red off-shoulder gown with sheer mesh sleeves and a fitted glitter silhouette.',                               link: '' },
];

export default function OutfitsPage() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<null | typeof outfits[0]>(null);
  const router = useRouter();

  const filtered = active === 'All' ? outfits : outfits.filter(o => o.category === active);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--noir)', paddingTop: 80 }}>
      <Cursor />

      {/* Top bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 72, background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(24px,5vw,80px)', zIndex: 1000 }}>
        <button
          onClick={() => router.push('/')}
          style={{ background: 'none', border: 'none', color: 'rgba(245,240,232,0.5)', cursor: 'none', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')}
        >← Back to Home</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 20 20">
            {[0,1,2,3,4,5].map(i => (
              <ellipse key={i} cx="10" cy="10" rx="2.5" ry="7" fill="none" stroke="#C9A84C" strokeWidth="0.8"
                transform={`rotate(${i*30} 10 10) translate(0,-3.5)`} style={{ transformOrigin: '10px 10px' }} />
            ))}
            <circle cx="10" cy="10" r="2" fill="#C9A84C" />
          </svg>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, color: 'var(--ivory)' }}>Outfit Catalogue</span>
        </div>
        <span style={{ fontSize: 11, color: 'rgba(245,240,232,0.25)', fontFamily: 'Inter, sans-serif' }}>{filtered.length} outfits</span>
      </div>

      <div style={{ padding: 'clamp(40px,6vw,80px) clamp(24px,5vw,80px)', maxWidth: 1400, margin: '0 auto' }}>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'Inter, sans-serif' }}>Style Archive</span>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px,6vw,80px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
            Outfit <em>Catalogue</em>
          </h1>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map(cat => {
            const count = cat === 'All' ? outfits.length : outfits.filter(o => o.category === cat).length;
            return (
              <button key={cat} onClick={() => setActive(cat)}
                style={{ padding: '8px 20px', borderRadius: 100, border: `1px solid ${active === cat ? 'var(--gold)' : 'rgba(255,255,255,0.08)'}`, background: active === cat ? 'rgba(201,168,76,0.1)' : 'transparent', color: active === cat ? 'var(--gold)' : 'rgba(245,240,232,0.4)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s' }}
              >{cat} ({count})</button>
            );
          })}
        </motion.div>

        {/* Outfit grid */}
        <div style={{ columns: 'clamp(200px, 22vw, 280px)', columnGap: 12 }}>
          {filtered.map((outfit, i) => (
            <motion.div
              key={outfit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.6 }}
              style={{ breakInside: 'avoid', marginBottom: 12, borderRadius: 12, overflow: 'hidden', cursor: 'none', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              onClick={() => setSelected(outfit)}
              data-cursor
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={outfit.image}
                  alt={outfit.name}
                  loading="lazy"
                  style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 40%)', pointerEvents: 'none' }} />
              </div>
              <div style={{ padding: '16px 18px 20px' }}>
                <span className="tag-pill" style={{ fontSize: 9, marginBottom: 8, display: 'inline-block' }}>{outfit.category}</span>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, color: 'var(--ivory)', fontWeight: 500, marginBottom: 4 }}>{outfit.name}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.35)', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>{outfit.event}</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={e => { e.stopPropagation(); setSelected(outfit); }}
                    style={{ padding: '7px 16px', background: 'var(--gold)', border: 'none', borderRadius: 100, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0A0A0A', cursor: 'none', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                  >Details</button>
                  {outfit.link && (
                    <a href={outfit.link} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ padding: '7px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ivory)', cursor: 'none', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
                    >Checkout →</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Outfit detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(10,10,10,0.95)', zIndex: 5000, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(20px)', padding: 24, overflowY: 'auto' }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ width: 'min(560px, 95vw)', background: 'var(--charcoal)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ maxHeight: '50vh', overflow: 'hidden', flexShrink: 0 }}>
                <img src={selected.image} alt={selected.name} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 32, overflowY: 'auto' }}>
                <span className="tag-pill" style={{ marginBottom: 12, display: 'inline-block' }}>{selected.category}</span>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: 'var(--ivory)', fontWeight: 400, marginBottom: 6 }}>{selected.name}</h2>
                <div style={{ fontSize: 12, color: 'var(--gold)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', marginBottom: 16 }}>{selected.event}</div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(245,240,232,0.5)', fontFamily: 'Inter, sans-serif', marginBottom: 24 }}>{selected.desc}</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  {selected.link ? (
                    <a href={selected.link} target="_blank" rel="noopener noreferrer"
                      style={{ flex: 1, padding: '13px 24px', background: 'var(--gold)', border: 'none', borderRadius: 100, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0A0A0A', cursor: 'none', fontFamily: 'Inter, sans-serif', fontWeight: 600, textDecoration: 'none', textAlign: 'center' as const }}
                    >Checkout →</a>
                  ) : (
                    <div style={{ flex: 1, padding: '13px 24px', background: 'rgba(255,255,255,0.04)', borderRadius: 100, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.2)', fontFamily: 'Inter, sans-serif', textAlign: 'center' as const }}>
                      Link Coming Soon
                    </div>
                  )}
                  <button
                    onClick={() => setSelected(null)}
                    style={{ padding: '13px 24px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', cursor: 'none', fontFamily: 'Inter, sans-serif' }}
                  >Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}