'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const Cursor = dynamic(() => import('../components/Cursor'), { ssr: false });

const chapters = [
  {
    era: 'The Early Years',
    period: 'Childhood & Roots',
    color: 'rgba(212,160,160,0.08)',
    accent: 'var(--rose)',
    content: `Akanksha Choudhary was born on 10 April 2002 in Jaipur, Rajasthan, India. Raised in a close-knit and supportive Rajasthani family, she grew up in an environment that valued education, discipline, and strong family values. As of now, she is 24 years old and continues to proudly represent her roots while building her career in the entertainment industry. She shares a special bond with her family, which includes her parents and two brothers. Throughout her journey, her family has remained a constant source of encouragement and support, helping her pursue her ambitions with confidence. Their emphasis on education and personal growth played an important role in shaping her outlook on life. Alongside her creative aspirations, Akanksha also focused on academics. She completed her Bachelor of Technology (B.Tech) degree, demonstrating her commitment to education while balancing her passion for modeling and entertainment. Her academic background reflects her dedication and ability to excel in different aspects of life.`,
  },
  {
    era: 'The Bloom Begins',
    period: 'Modelling & Early Career',
    color: 'rgba(201,168,76,0.06)',
    accent: 'var(--gold)',
    content: `Akanksha Choudhary's journey into the world of modeling began in 2023, marking the start of a new chapter in her life. With confidence, determination, and a passion for self-expression, she stepped into the competitive world of beauty pageants and fashion, taking her first steps toward building a career in the entertainment industry. One of her earliest achievements came when she was crowned the Runner-up at Miss Rajasthan 2023. The accomplishment was especially meaningful because, at the time, her family was unaware that she had participated in the competition. It wasn't until her photographs appeared in the local newspaper that she shared the news with them. Surprised and immensely proud, her family celebrated her achievement and wholeheartedly supported her decision to pursue modeling. This milestone became the foundation of her professional journey. It not only gave her recognition in the modeling industry but also boosted her confidence to explore greater opportunities. What began as a single pageant soon evolved into a promising career, opening doors to fashion, media, and the entertainment world.`,
  },
  {
    era: 'The Struggling Chapter',
    period: 'Struggled with Rejections',
    color: 'rgba(139,158,126,0.08)',
    accent: 'var(--sage)',
    content: `Like many aspiring models, Akanksha Choudhary's journey was not without its challenges. Behind the confidence and success was a period of self-doubt, setbacks, and perseverance. During the early stages of her career, she faced health challenges due to PCOD (Polycystic Ovary Disease), which led to weight gain and made her path even more demanding. As she pursued her dreams, Akanksha auditioned for several opportunities, including beauty pageants, but success did not come immediately. She experienced rejection, missed opportunities, and criticism that tested her confidence. At times, she also faced hurtful comments about her appearance, making the journey emotionally difficult. Despite these obstacles, Akanksha refused to let setbacks define her. Instead of giving up, she focused on improving herself, working hard, and believing in her dreams. Every rejection became a lesson, and every challenge strengthened her determination to move forward. Her story is a reminder that success is rarely achieved overnight. It is built through resilience, patience, and the courage to keep going even when the path seems uncertain. Today, Akanksha's journey continues to inspire many young girls to believe in themselves, embrace their individuality, and never let temporary setbacks stand in the way of their dreams.`,
  },
  {
    era: 'The Crown Chapter',
    period: 'Pageant Days, Miss Universe India',
    color: 'rgba(242,196,196,0.08)',
    accent: 'var(--blush)',
    content: `Akanksha Choudhary's journey in the world of pageantry is a story of perseverance, resilience, and unwavering determination.  Her dream of representing herself on one of India's biggest beauty pageant stages was built on years of hard work, countless auditions, and an unshakable belief in her potential. Like many aspiring contestants, Akanksha faced several disappointments along the way. There were moments when opportunities slipped away, and times when she questioned whether her dream would ever become a reality. Yet, she never allowed rejection to define her. Instead, every setback became another reason to work harder and return stronger.Her persistence was rewarded when she was selected as a wild card finalist for Miss Universe India 2025, giving her the opportunity to represent her State and compete on a national platform. It was a defining milestone that validated years of dedication and sacrifice. Although she did not take home the crown, her journey as a finalist became one of the most significant moments of her career. Participating in Miss Universe India was more than a competition—it was proof that determination can open doors even when hope seems distant. The experience strengthened her confidence, introduced her to a wider audience, and marked the beginning of even greater opportunities in modeling and entertainment. For Akanksha, the Miss Universe India stage was never the destination—it was the beginning of a much bigger journey. Her story continues to inspire aspiring models and young women to believe that dreams are achieved not by never failing, but by never giving up.`,
  },
  {
    era: 'The Nation Watched',
    period: 'MTV Splitsvilla X6',
    color: 'rgba(212,160,160,0.06)',
    accent: 'var(--rose)',
    content: `Following her success in pageantry, Akanksha Choudhary expanded her journey into reality television by participating in a MTV dating reality show Splitsvilla X6. The show introduced her to a much wider audience and allowed viewers to see her personality beyond the world of modeling and pageants. Throughout the season, Akanksha became known for her calm demeanor, confidence, and authenticity. Her warm personality and natural charm earned her the affectionate nickname "Phool Wali Ladki" among many viewers and fans. As the show progressed, audiences witnessed her emotional side, her ability to form genuine connections, and her willingness to express her feelings honestly. Her journey, however, was not without challenges. There were several moments when she found herself isolated during conflicts inside the house, often having to face difficult situations on her own. Rather than stepping back, Akanksha chose to stand up for herself with courage and composure. Her resilience, self-respect, and determination to stay true to her values resonated with many viewers.`,
  },
  {
    era: 'The Brand Collabs',
    period: 'Collaborations  & Promotions',
    color: 'rgba(201,168,76,0.06)',
    accent: 'var(--gold)',
    content: `Akanksha Choudhary's appearance on the reality show marked a turning point in her career, significantly expanding her reach and introducing her to millions of viewers across the country. Her authenticity, resilience, and graceful personality resonated with audiences, leading to a rapidly growing fanbase on social media. In the months following the show, her popularity surged, with her Instagram community growing to over 3.3 million followers within just six months. Fans connected with her genuine nature, confidence, and inspiring journey, making her one of the most talked-about emerging personalities in the digital entertainment space. This remarkable growth opened the door to numerous professional opportunities. Akanksha began collaborating with well-known brands, secured multiple endorsement deals, and was invited for interviews, media features, and public appearances. Her growing influence extended beyond social media, establishing her as a recognizable face in fashion, lifestyle, and entertainment.`,
  },
  {
    era: 'Her Heroine Era',
    period: 'Music Videos',
    color: 'rgba(139,158,126,0.06)',
    accent: 'var(--sage)',
    content: `Building on her growing popularity, Akanksha Choudhary expanded her creative journey into music videos, where she continued to captivate audiences with her on-screen presence and expressive performances. Her transition into music further showcased her versatility as a performer and introduced her to an even wider audience. Her first music video, Eyes, received an overwhelmingly positive response from viewers and quickly became a fan favorite. The song has crossed 2 million views on YouTube, reflecting the love and support she continues to receive from her audience. Her natural screen presence and emotional performance earned praise from both fans and music lovers alike. Following the success of Eyes, Akanksha starred in her second music video, Dooriyan, a heartfelt romantic track that explores the emotions of love, distance, and heartbreak. Released across YouTube and major music streaming platforms, the song further highlighted her ability to portray deep emotions on screen. As Dooriyan continues to reach new audiences, its viewership continues to grow, adding another milestone to her expanding career.`,
  },
  {
    era: 'Right Now',
    period: 'Lockup Season 2 & Beyond',
    color: 'rgba(80,60,100,0.1)',
    accent: '#9B7FC8',
    content: `Akanksha Choudhary reached another significant milestone in her career by making her Netflix debut as a contestant on Lock Upp Season 2. Stepping into one of the country's most talked-about reality shows, she embraced a completely new challenge, giving audiences an opportunity to witness her personality beyond modeling, pageantry, and social media. Throughout her journey on the show, Akanksha has consistently displayed resilience, honesty, and the courage to stand up for herself. Faced with intense situations, disagreements, and public scrutiny, she has handled challenges with composure while staying true to her values. Rather than allowing criticism or allegations to define her, she has used the platform to express her side of the story and let her actions speak louder than assumptions. Her loyalty towards her friends, willingness to support those she cares about, and determination to face difficult situations head-on have earned her appreciation from many viewers. As the season progresses, audiences continue to witness her growth, strength, and authenticity, making her journey one of the most engaging aspects of the show. For Akanksha, Lock Upp Season 2 is more than just a reality show—it represents another important chapter in her evolving career, introducing her to an even wider audience and further establishing her presence in the entertainment industry.`,
  },
];

export default function BiographyPage() {
  const router = useRouter();

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
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, color: 'var(--ivory)' }}>Biography</span>
        </div>
        <span style={{ fontSize: 11, color: 'rgba(245,240,232,0.25)', fontFamily: 'Inter, sans-serif' }}>{chapters.length} chapters</span>
      </div>

      {/* Hero */}
      <div style={{ padding: 'clamp(60px,8vw,120px) clamp(24px,5vw,80px) clamp(40px,5vw,60px)', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: 'var(--rose)' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--rose)', fontFamily: 'Inter, sans-serif' }}>The Full Story</span>
            <div style={{ width: 40, height: 1, background: 'var(--rose)' }} />
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(44px,7vw,96px)', fontWeight: 300, color: 'var(--ivory)', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: 24 }}>
            Akanksha<br /><em style={{ color: 'var(--rose)' }}>Choudhary</em>
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(16px,1.8vw,22px)', fontStyle: 'italic', color: 'rgba(245,240,232,0.45)', lineHeight: 1.7 }}>
            The girl with flowers. The woman with a story worth telling.
          </p>
        </motion.div>
      </div>

      {/* Chapters */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 clamp(24px,5vw,80px) clamp(80px,10vw,140px)' }}>
        {chapters.map((chapter, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 'clamp(60px,8vw,100px)', position: 'relative' }}
          >
            {/* Chapter number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${chapter.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, color: chapter.accent }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: chapter.accent, fontFamily: 'Inter, sans-serif', marginBottom: 3 }}>{chapter.period}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(22px,3vw,36px)', color: 'var(--ivory)', fontWeight: 400, lineHeight: 1 }}>{chapter.era}</div>
              </div>
            </div>

            {/* Content card */}
            <div style={{ background: chapter.color, border: '1px solid rgba(255,255,255,0.04)', borderRadius: 16, padding: 'clamp(28px,4vw,48px)' }}>
              {chapter.content.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontFamily: j === 0 ? 'Cormorant Garamond, serif' : 'Inter, sans-serif', fontSize: j === 0 ? 'clamp(17px,1.8vw,21px)' : 'clamp(14px,1.3vw,16px)', lineHeight: j === 0 ? 1.8 : 1.75, color: j === 0 ? 'rgba(245,240,232,0.7)' : 'rgba(245,240,232,0.5)', fontStyle: j === 0 ? 'italic' : 'normal', fontWeight: 300, marginBottom: j < chapter.content.split('\n\n').length - 1 ? 20 : 0 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Divider */}
            {i < chapters.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 'clamp(40px,5vw,60px)' }}>
                <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)' }} />
              </div>
            )}
          </motion.div>
        ))}

        {/* End flower */}
        <div style={{ textAlign: 'center', paddingTop: 20 }}>
          <svg width="48" height="48" viewBox="0 0 48 48" style={{ opacity: 0.3, margin: '0 auto 20px' }}>
            {[0,1,2,3,4,5].map(i => (
              <ellipse key={i} cx="24" cy="24" rx="5" ry="14" fill="none" stroke="#C9A84C" strokeWidth="0.8"
                transform={`rotate(${i*30} 24 24) translate(0,-6)`} style={{ transformOrigin: '24px 24px' }} />
            ))}
            <circle cx="24" cy="24" r="5" fill="#C9A84C" opacity="0.6" />
          </svg>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontStyle: 'italic', color: 'rgba(245,240,232,0.25)' }}>The story continues...</p>
          <button
            onClick={() => router.push('/')}
            style={{ marginTop: 32, padding: '12px 32px', border: '1px solid rgba(201,168,76,0.25)', borderRadius: 100, background: 'transparent', color: 'var(--gold)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'none', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >← Back to Home</button>
        </div>
      </div>
    </div>
  );
}
