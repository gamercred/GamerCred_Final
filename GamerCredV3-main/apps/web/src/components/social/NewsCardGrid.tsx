import { Link } from 'wouter';
import { NEWS_GRID, GRADIENT_BY_NAME, type NewsCardData } from '@/data/news';

export function NewsCardGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {NEWS_GRID.map(post => (
        <NewsCard key={post.slug} post={post} />
      ))}
    </section>
  );
}

function NewsCard({ post }: { post: NewsCardData }) {
  return (
    <Link href={`/news/${post.slug}`}>
      <a className="cc-panel cc-card-hover block overflow-hidden">
        {/* Hero */}
        <div className="relative h-32 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: GRADIENT_BY_NAME[post.heroGradient] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Body */}
        <div className="p-4">
          {post.isBreaking ? (
            <span className="cc-pill-breaking">BREAKING</span>
          ) : (
            <span className="cc-pill-news">NEWS</span>
          )}
          <h3 className="mt-2.5 line-clamp-3 text-sm font-bold leading-snug text-white">
            {post.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs text-white/55">{post.excerpt}</p>
          <div className="mt-2.5 text-[11px] text-white/40">{post.timeAgo}</div>
        </div>
      </a>
    </Link>
  );
}
