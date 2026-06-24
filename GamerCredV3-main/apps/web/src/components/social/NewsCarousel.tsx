import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Icon } from './Icon';
import { NEWS_FEATURED, GRADIENT_BY_NAME, type NewsCardData } from '@/data/news';

const AUTO_ROTATE_MS = 7000;

export function NewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = NEWS_FEATURED.length;

  // Auto-advance
  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setTimeout(() => {
      setIndex(i => (i + 1) % total);
    }, AUTO_ROTATE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, total]);

  if (total === 0) return null;
  const current = NEWS_FEATURED[index];

  const next = () => setIndex(i => (i + 1) % total);
  const prev = () => setIndex(i => (i - 1 + total) % total);

  return (
    <section
      className="cc-panel relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Header strip */}
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <h2 className="text-sm font-bold tracking-widest text-white/80">NEWS FEED</h2>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={prev}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-cyberMagenta/60 hover:text-cyberMagentaGlow"
            aria-label="Previous"
          >
            <Icon name="chevron-right" size={14} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-cyberMagenta/60 hover:text-cyberMagentaGlow"
            aria-label="Next"
          >
            <Icon name="chevron-right" size={14} />
          </button>
        </div>
      </div>

      {/* Slide */}
      <CarouselSlide post={current} key={current.slug} />

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-4">
        {NEWS_FEATURED.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setIndex(i)}
            className={`cc-dot ${i === index ? 'cc-dot--active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function CarouselSlide({ post }: { post: NewsCardData }) {
  return (
    <Link href={`/news/${post.slug}`}>
      <a className="block">
        <div className="relative h-[340px] overflow-hidden md:h-[400px]">
          {/* Gradient hero */}
          <div
            className="absolute inset-0"
            style={{ background: GRADIENT_BY_NAME[post.heroGradient] }}
          />
          {/* Dark fade for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          {/* Decorative overlay grid (subtle) */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            {post.isBreaking ? (
              <span className="cc-pill-breaking">BREAKING</span>
            ) : (
              <span className="cc-pill-news">NEWS</span>
            )}
            <h3 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight text-white md:text-3xl">
              {post.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-white/70">{post.excerpt}</p>
            <div className="mt-3 text-xs text-white/50">{post.timeAgo}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
