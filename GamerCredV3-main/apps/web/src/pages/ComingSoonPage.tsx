import { Link, useRoute } from 'wouter';
import { Button, Card } from '@/components/ui';
import { TopNav } from '@/components/social/TopNav';
import { Footer } from '@/components/social/Footer';
import { Icon } from '@/components/social/Icon';

/**
 * Catch-all for nav items that aren't built yet.
 * Keeps the navigation polished — users see a real page, not a 404.
 */
export default function ComingSoonPage() {
  const [, params] = useRoute<{ feature: string }>('/coming-soon/:feature');
  const feature = params?.feature ?? 'this feature';
  const displayName = feature.charAt(0).toUpperCase() + feature.slice(1);

  return (
    <div className="min-h-screen bg-surface text-fg">
      <TopNav />
      <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center lg:px-6">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-card border border-line bg-surface-elevated text-brand shadow-glow">
          <Icon name="trophy" size={40} />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="text-fg">{displayName}</span>{' '}
          <span className="brand-gradient">Coming Soon</span>
        </h1>
        <p className="mt-4 max-w-md text-fg-muted">
          We're cooking this one up. {displayName} will land in a future GamerCred update.
          For now, head back home or check out what's already shipping.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
          <Link href="/leaderboard">
            <Button variant="secondary">View Leaderboard</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
