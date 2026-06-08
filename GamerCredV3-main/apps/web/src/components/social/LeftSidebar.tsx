import { Link, useLocation } from 'wouter';
import { Avatar, Card, cn } from '@/components/ui';
import { Icon } from './Icon';
import { useToast } from './Toast';
import { NAV_ITEMS, DEMO_USER, type NavItemKey } from '@/data/seed';

const ICON_BY_KEY: Record<NavItemKey, Parameters<typeof Icon>[0]['name']> = {
  feed: 'home',
  explore: 'compass',
  communities: 'users',
  versus: 'sword',
  games: 'gamepad',
  achievements: 'trophy',
  notifications: 'bell',
  messages: 'mail',
  bookmarks: 'bookmark',
  profile: 'user',
  settings: 'settings',
};

export function LeftSidebar() {
  const [location] = useLocation();
  const toast = useToast();

  return (
    <aside className="hidden w-60 shrink-0 lg:block">
      {/* User card */}
      <Card padding="md" className="mb-3">
        <div className="flex items-center gap-3">
          <Avatar
            size="lg"
            src={DEMO_USER.avatar}
            fallback={DEMO_USER.name}
            online
          />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold text-fg">{DEMO_USER.name}</div>
            <div className="text-xs text-fg-muted">Level {DEMO_USER.level}</div>
          </div>
        </div>

        {/* Cred score row */}
        <div className="mt-3 rounded-input bg-surface-inset px-3 py-2">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] uppercase tracking-wide text-fg-dim">Cred Score</span>
            <span className="num text-base font-bold text-brand">
              {DEMO_USER.credScore.toLocaleString()}
            </span>
          </div>
          {/* Progress to next milestone */}
          <div className="mt-2 h-1 overflow-hidden rounded-pill bg-surface-overlay">
            <div
              className="h-full bg-brand"
              style={{
                width: `${Math.min(100, (DEMO_USER.credScore / DEMO_USER.nextMilestone) * 100)}%`,
              }}
            />
          </div>
          <div className="mt-1 text-[10px] text-fg-dim">
            Next: {DEMO_USER.nextMilestone.toLocaleString()}
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <Card padding="sm">
        <nav className="space-y-0.5">
          {NAV_ITEMS.map(item => {
            const active = location === item.href;
            const iconName = ICON_BY_KEY[item.key];

            const inner = (
              <div
                className={cn(
                  'group flex items-center gap-3 rounded-button px-3 py-2 text-sm transition-colors',
                  active
                    ? 'bg-brand/15 text-brand'
                    : 'text-fg-muted hover:bg-surface-overlay hover:text-fg',
                )}
              >
                <Icon name={iconName} size={18} />
                <span className="flex-1">{item.label}</span>
                {item.badge !== undefined && (
                  <span className="rounded-pill bg-brand px-2 py-0.5 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </div>
            );

            if (item.comingSoon) {
              return (
                <button
                  key={item.key}
                  type="button"
                  className="block w-full text-left"
                  onClick={() => toast.comingSoon(item.label)}
                >
                  {inner}
                </button>
              );
            }
            return (
              <Link key={item.key} href={item.href}>
                {inner}
              </Link>
            );
          })}
        </nav>
      </Card>
    </aside>
  );
}
