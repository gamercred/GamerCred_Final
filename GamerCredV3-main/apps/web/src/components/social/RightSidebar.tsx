import { Avatar, Card } from '@/components/ui';
import { Icon } from './Icon';
import { useToast } from './Toast';
import {
  TRENDING_GAMES,
  POPULAR_COMMUNITIES,
  GAME_OF_THE_WEEK,
  FRIENDS_ONLINE,
  UPCOMING_RELEASES,
} from '@/data/seed';

function SidebarHeader({ title, onSeeAll }: { title: string; onSeeAll: () => void }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-sm font-bold text-fg">{title}</h3>
      <button
        type="button"
        onClick={onSeeAll}
        className="text-xs text-brand hover:text-brand-glow"
      >
        See all
      </button>
    </div>
  );
}

function TrendingGames() {
  const toast = useToast();
  return (
    <Card padding="md">
      <SidebarHeader title="Trending Games" onSeeAll={() => toast.comingSoon('Trending')} />
      <ul className="space-y-2">
        {TRENDING_GAMES.map(g => (
          <li
            key={g.rank}
            className="flex items-center gap-3 rounded-button p-1 hover:bg-surface-overlay cursor-pointer transition-colors"
            onClick={() => toast.comingSoon(g.title)}
          >
            <span className="num w-4 text-center text-xs text-fg-dim">{g.rank}</span>
            <div className="h-10 w-16 shrink-0 overflow-hidden rounded-button bg-surface-overlay">
              {g.cover ? (
                <img src={g.cover} alt={g.title} className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-fg-dim">
                  <Icon name="game" size={16} />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold text-fg">{g.title}</div>
              <div className="text-[10px] text-fg-muted">{g.posts}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function PopularCommunities() {
  const toast = useToast();
  return (
    <Card padding="md">
      <SidebarHeader title="Active Communities" onSeeAll={() => toast.comingSoon('Communities')} />
      <ul className="space-y-2">
        {POPULAR_COMMUNITIES.map(c => (
          <li
            key={c.name}
            className="flex items-center gap-3 rounded-button p-1 hover:bg-surface-overlay cursor-pointer transition-colors"
            onClick={() => toast.comingSoon(c.name)}
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill text-white"
              style={{ backgroundColor: c.accent }}
            >
              <Icon name="users" size={14} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold text-fg">{c.name}</div>
              <div className="text-[10px] text-fg-muted">{c.members}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function GameOfTheWeek() {
  const toast = useToast();
  return (
    <Card padding="none" className="overflow-hidden">
      <div className="border-b border-line p-3">
        <div className="text-[10px] font-bold uppercase tracking-wider text-fg-dim">Game of the Week</div>
      </div>
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden bg-surface-overlay">
          {GAME_OF_THE_WEEK.cover && (
            <img
              src={GAME_OF_THE_WEEK.cover}
              alt={GAME_OF_THE_WEEK.title}
              className="h-full w-full object-cover opacity-80"
              loading="lazy"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent" />
        <div className="absolute bottom-0 left-0 p-3">
          <div className="text-sm font-bold text-fg">{GAME_OF_THE_WEEK.title}</div>
          <div className="text-[11px] text-fg-muted">{GAME_OF_THE_WEEK.subtitle}</div>
        </div>
      </div>
      <div className="p-3">
        <button
          type="button"
          onClick={() => toast.comingSoon('View Game')}
          className="w-full rounded-button border border-line bg-surface-overlay px-3 py-2 text-xs font-medium text-fg hover:border-line-strong transition-colors"
        >
          View Game
        </button>
      </div>
    </Card>
  );
}

function FriendsOnline() {
  const toast = useToast();
  return (
    <Card padding="md">
      <SidebarHeader title="Friends Online" onSeeAll={() => toast.comingSoon('Friends')} />
      <ul className="space-y-2">
        {FRIENDS_ONLINE.map(f => (
          <li
            key={f.name}
            className="flex items-center gap-3 rounded-button p-1 hover:bg-surface-overlay cursor-pointer transition-colors"
            onClick={() => toast.comingSoon(f.name)}
          >
            <Avatar size="sm" src={f.avatar} fallback={f.name} online />
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold text-fg">{f.name}</div>
              <div className="text-[10px] text-fg-muted">{f.status}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function UpcomingReleases() {
  const toast = useToast();
  return (
    <Card padding="md">
      <SidebarHeader title="Upcoming Releases" onSeeAll={() => toast.comingSoon('Releases')} />
      <ul className="space-y-2">
        {UPCOMING_RELEASES.map(r => (
          <li
            key={r.title}
            className="flex items-center gap-3 rounded-button p-1 hover:bg-surface-overlay cursor-pointer transition-colors"
            onClick={() => toast.comingSoon(r.title)}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-button bg-surface-overlay text-fg-dim">
              <Icon name="game" size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold text-fg">{r.title}</div>
              <div className="text-[10px] text-fg-muted">{r.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

interface Props {
  // Allows swapping which widgets show in different contexts later
  variant?: 'compact' | 'extended';
}

export function RightSidebar({ variant = 'extended' }: Props) {
  return (
    <aside className="hidden w-72 shrink-0 space-y-3 xl:block">
      <TrendingGames />
      {variant === 'compact' ? (
        <PopularCommunities />
      ) : (
        <>
          <GameOfTheWeek />
          <FriendsOnline />
          <UpcomingReleases />
        </>
      )}
    </aside>
  );
}
