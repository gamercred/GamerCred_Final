import { CommandNav } from '@/components/social/CommandNav';
import { NewsCarousel } from '@/components/social/NewsCarousel';
import { NewsCardGrid } from '@/components/social/NewsCardGrid';
import { CredScoreWidget } from '@/components/social/CredScoreWidget';
import { LiveRankings } from '@/components/social/LiveRankings';

/**
 * /  — Neon Command Centre landing page.
 *
 * Layout:
 *   ┌──────────────────────────────────────────────────────┐
 *   │  CommandNav                                          │
 *   ├──────────────────────────────────┬───────────────────┤
 *   │  NewsCarousel (hero)             │  CredScoreWidget  │
 *   │                                  │                   │
 *   │  NewsCardGrid (3×2)              │  LiveRankings     │
 *   │                                  │                   │
 *   └──────────────────────────────────┴───────────────────┘
 */
export default function CommandCenterPage() {
  return (
    <div className="cc-app">
      <CommandNav />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
          {/* Left column: news */}
          <div className="space-y-5">
            <NewsCarousel />
            <NewsCardGrid />
          </div>

          {/* Right column: cred + rankings */}
          <aside className="space-y-5">
            <CredScoreWidget />
            <LiveRankings />
          </aside>
        </div>
      </main>

      <footer className="mt-12 border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-white/40 sm:flex-row lg:px-6">
          <div className="flex items-center gap-2">
            <span className="cc-text-magenta">GAMERCRED</span>
            <span>— Your Gaming Credit Score.</span>
          </div>
          <div>Steam is a trademark of Valve Corporation.</div>
        </div>
      </footer>
    </div>
  );
}
