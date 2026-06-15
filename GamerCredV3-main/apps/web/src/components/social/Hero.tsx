import { Link } from 'wouter';
import { Button } from '@/components/ui';
import { Icon } from './Icon';
import { HERO_STATS } from '@/data/seed';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-pill border border-line bg-surface-elevated px-3 py-1 text-xs font-medium text-fg-muted">
              <span className="text-brand">
                <Icon name="gamepad" size={14} />
              </span>
              YOUR GAMING IDENTITY
            </div>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-fg lg:text-6xl">
              Your Gaming
              <br />
              <span className="brand-gradient">Credit Score</span>
            </h1>

            <p className="mt-5 max-w-md text-base text-fg-muted lg:text-lg">
              <span className="font-semibold text-fg">Connect Steam. Get your score.</span>
              <br />
              A shareable badge built from how, what, and how well you play.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/login">
                <Button variant="primary" size="lg">Connect Steam</Button>
              </Link>
              <Link href="/leaderboard">
                <Button variant="secondary" size="lg">View Leaderboard</Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-x-4">
              {HERO_STATS.map(stat => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-brand/15 text-brand">
                    <Icon name={stat.icon} size={14} />
                  </span>
                  <div>
                    <div className="num text-sm font-bold text-fg">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wide text-fg-dim">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-card bg-gradient-to-br from-brand/30 via-brand/10 to-transparent blur-2xl" />
              <div className="absolute inset-8 rounded-card bg-gradient-to-tr from-brand/40 via-fuchsia-500/10 to-transparent blur-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-card border border-brand/40 bg-surface-elevated shadow-glow">
                  <span className="text-brand drop-shadow-[0_0_18px_rgba(124,58,237,0.7)]">
                    <Icon name="gamercred-logo" size={90} />
                  </span>
                </div>
              </div>
              <div className="absolute left-6 top-1/4 h-3 w-3 rounded-pill bg-brand/60 shadow-glow-sm animate-pulse-soft" />
              <div className="absolute right-4 top-1/3 h-2 w-2 rounded-pill bg-brand/40 animate-pulse-soft" />
              <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-pill bg-fuchsia-400/60 animate-pulse-soft" />
              <div className="absolute right-1/4 bottom-12 h-3 w-3 rounded-pill bg-brand/50 shadow-glow-sm animate-pulse-soft" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
