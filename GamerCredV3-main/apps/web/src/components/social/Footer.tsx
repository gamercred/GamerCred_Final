import { Link } from 'wouter';
import { Button } from '@/components/ui';
import { Icon } from './Icon';

export function BottomCta() {
  return (
    <section className="border-t border-line bg-gradient-to-r from-brand/10 via-brand/5 to-fuchsia-500/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="text-sm font-semibold text-fg">Ready to level up your gaming identity?</div>
            <div className="text-xs text-fg-muted">Join thousands of gamers sharing their journey.</div>
          </div>
        </div>
        <Link href="/login">
          <Button variant="primary" size="md">
            Create Your Profile
            <Icon name="arrow-right" size={16} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-fg-dim sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-brand">
              <Icon name="gamercred-logo" size={18} />
            </span>
            <span>GAMERCRED — Your Gaming Identity. Connected.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/coming-soon/about" className="hover:text-fg-muted">About</Link>
            <Link href="/coming-soon/terms" className="hover:text-fg-muted">Terms</Link>
            <Link href="/coming-soon/privacy" className="hover:text-fg-muted">Privacy</Link>
            <span>Steam is a trademark of Valve.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
