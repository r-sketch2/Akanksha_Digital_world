'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const milestones = [
  { year: 'AUG 2023', title: 'First Brand Collaboration with catty.in', desc: 'Collaborated with the first brand of her journey and many more to go.', side: 'left' },
  { year: 'AUG 2023', title: 'Miss Rajasthan - Runner Up', desc: 'Became the face of multiple premium lifestyle and fashion brands across India.', side: 'right' },
  { year: 'JULY 2025', title: 'Miss Universe India', desc: 'Selected to represent India at Miss Universe — a milestone that changed everything.', side: 'left' },
  { year: 'JAN 2026', title: 'MTV Splitsvilla X6', desc: 'Became one of the most celebrated contestants, winning hearts across the nation.', side: 'right' },
  { year: 'MAR 2026', title: 'Her First TED Talk', desc: 'A community of flower lovers united around elegance, culture, and authentic storytelling.', side: 'left' },
  { year: 'JUNE 2026', title: 'Her First Music Video', desc: 'Her very first music video "EYES" Released.', side: 'right' },
  { year: 'JUNE 2026', title: 'Lockup Season 2', desc: 'Currently making waves on Lockup Season 2, adding another iconic chapter to her story.', side: 'left' },
  { year: 'JULY 2026', title: 'Music & More', desc: 'Released Another music video "DOORIYAN" and continued expanding her creative universe.', side: 'right' },
];

export default function Biography() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();
  
  // Responsive handling
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={ref} id="biography" style={{ 
      padding: 'clamp(60px, 10vw, 140px) clamp(20px, 5vw, 80px)', 
      position: 'relative', 
      background: 'var(--noir)',
      overflow: 'hidden'
    }}>
      {/* Background Gradient */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        width: '40%', 
        height: '100%', 
        background: 'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(139,158,126,0.04), transparent 70%)', 
        pointerEvents: 'none' 
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'clamp(32px, 4vw, 56px)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: 'var(--rose)', flexShrink: 0 }} />
            <span style={{ 
              fontSize: 11, 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase', 
              color: 'var(--rose)', 
              fontFamily: 'Inter, sans-serif', 
              whiteSpace: 'nowrap' 
            }}>Her Story</span>
          </div>
          <h2 style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 'clamp(36px, 6vw, 80px)', 
            fontWeight: 300, 
            color: 'var(--ivory)', 
            lineHeight: 0.95, 
            letterSpacing: '-0.02em' 
          }}>
            A Life in<br /><em>Full Bloom</em>
          </h2>
        </motion.div>

        {/* Biography Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8 }}
          style={{ marginBottom: 'clamp(24px, 3vw, 40px)' }}
        >
          <p style={{ 
            fontSize: 'clamp(15px, 1.5vw, 18px)', 
            lineHeight: 1.85, 
            color: 'rgba(245,240,232,0.6)', 
            fontFamily: 'Cormorant Garamond, serif', 
            fontWeight: 400, 
            fontStyle: 'italic' 
          }}>
           From a young dreamer in Jaipur to a nationally recognized model, pageant finalist, reality television personality, and digital creator, Akanksha Choudhary's journey is a story of resilience, courage, and unwavering determination. Every chapter reflects her belief that no dream is too big when pursued with passion.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'clamp(40px, 5vw, 64px)' }}
        >
          <button
            onClick={() => router.push('/biography')}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 12, 
              padding: '14px 32px', 
              background: 'transparent', 
              border: '1px solid rgba(201,168,76,0.3)', 
              borderRadius: 100, 
              cursor: 'pointer', 
              transition: 'all 0.4s ease',
              outline: 'none'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.06)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
              {[0,1,2,3,4,5].map(i => (
                <ellipse key={i} cx="10" cy="10" rx="2" ry="6" fill="none" stroke="#C9A84C" strokeWidth="0.7"
                  transform={`rotate(${i*30} 10 10) translate(0,-3)`} style={{ transformOrigin: '10px 10px' }} />
              ))}
              <circle cx="10" cy="10" r="1.5" fill="#C9A84C" />
            </svg>
            <span style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: 15, 
              letterSpacing: '0.15em', 
              color: 'var(--gold)', 
              fontStyle: 'italic', 
              whiteSpace: 'nowrap' 
            }}>
              Unfold Her Story →
            </span>
          </button>
        </motion.div>

        {/* Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ maxWidth: 640, margin: '0 auto clamp(60px, 8vw, 100px)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-block',
              width: 'fit-content',
              maxWidth: 700,
              padding: 'clamp(24px, 3vw, 40px)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 16,
              background: 'rgba(201,168,76,0.03)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: -20,
                left: 20,
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 80,
                lineHeight: 1,
                color: 'var(--gold)',
                opacity: 0.15,
                fontWeight: 300,
                userSelect: 'none',
              }}>"</div>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(16px, 2vw, 24px)',
                fontStyle: 'italic',
                color: 'var(--ivory)',
                lineHeight: 1.6,
                fontWeight: 400,
                position: 'relative',
                zIndex: 1,
                marginBottom: 20,
              }}>
                I don't chase. I attract.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 1, background: 'var(--gold)', opacity: 0.4, flexShrink: 0 }} />
                <span style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontFamily: 'Inter, sans-serif',
                  opacity: 0.7,
                  whiteSpace: 'nowrap',
                }}>Akanksha Choudhary</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Responsive Timeline Section */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ 
              fontSize: 11, 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase', 
              color: 'rgba(245,240,232,0.3)', 
              fontFamily: 'Inter, sans-serif' 
            }}>Timeline · Milestones</span>
          </div>

          <div style={{ position: 'relative', paddingBottom: 20 }}>
            {/* Vertical Line */}
            <div style={{
              position: 'absolute',
              left: isMobile ? '20px' : '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2) 10%, rgba(201,168,76,0.2) 90%, transparent)',
              transform: isMobile ? 'none' : 'translateX(-50%)',
              zIndex: 0
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(36px, 5vw, 60px)' }}>
              {milestones.map((m, i) => {
                const side = isMobile ? 'right' : m.side;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: isMobile ? '40px 1fr' : '1fr 60px 1fr', 
                      alignItems: 'center', 
                      gap: 0,
                      position: 'relative'
                    }}
                  >
                    {/* Left Content (Desktop Only) */}
                    {!isMobile && (
                      <div style={{ 
                        textAlign: 'right', 
                        paddingRight: 'clamp(16px,3vw,40px)', 
                        gridColumn: 1,
                        visibility: side === 'left' ? 'visible' : 'hidden'
                      }}>
                        {side === 'left' && <MilestoneContent m={m} align="right" />}
                      </div>
                    )}

                    {/* Center/Left Dot */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      gridColumn: isMobile ? 1 : 2,
                      zIndex: 2
                    }}>
                      <div style={{ 
                        width: 11, 
                        height: 11, 
                        borderRadius: '50%', 
                        background: 'var(--gold)', 
                        boxShadow: '0 0 16px rgba(201,168,76,0.4)', 
                        border: '3px solid var(--noir)', 
                        flexShrink: 0 
                      }} />
                    </div>

                    {/* Right Content */}
                    <div style={{ 
                      textAlign: 'left', 
                      paddingLeft: isMobile ? '20px' : 'clamp(16px,3vw,40px)', 
                      gridColumn: isMobile ? 2 : 3,
                      visibility: isMobile || side === 'right' ? 'visible' : 'hidden'
                    }}>
                      {(isMobile || side === 'right') && <MilestoneContent m={m} align="left" />}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Global styles for variables if not defined */}
      <style jsx global>{`
        :root {
          --noir: #0A0A0A;
          --ivory: #F5F0E8;
          --gold: #C9A84C;
          --rose: #8B9E7E;
        }
      `}</style>
    </section>
  );
}

function MilestoneContent({ m, align }: { m: any, align: 'left' | 'right' }) {
  return (
    <div>
      <div style={{ 
        fontFamily: 'Cormorant Garamond, serif', 
        fontSize: 12, 
        color: 'var(--gold)', 
        letterSpacing: '0.1em', 
        marginBottom: 4 
      }}>{m.year}</div>
      <div style={{ 
        fontFamily: 'Cormorant Garamond, serif', 
        fontSize: 'clamp(15px, 1.8vw, 22px)', 
        color: 'var(--ivory)', 
        marginBottom: 6, 
        fontWeight: 500, 
        lineHeight: 1.2 
      }}>{m.title}</div>
      <div style={{ 
        fontSize: 12, 
        lineHeight: 1.6, 
        color: 'rgba(245,240,232,0.4)', 
        fontFamily: 'Inter, sans-serif', 
        maxWidth: 280, 
        marginLeft: align === 'right' ? 'auto' : 0 
      }}>{m.desc}</div>
    </div>
  );
}

