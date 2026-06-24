import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { api } from '@/lib/api';

type Tab = 'alltime' | 'today';
const MAX_ROWS = 7;

export function LiveRankings() {
  const [tab, setTab] = useState<Tab>('alltime');

  const allTimeQ = useQuery({
    queryKey: ['leaderboard-alltime'],
    queryFn: () => api.leaderboard(),
    staleTime: 120_000,
    enabled: tab === 'alltime',
  });

  const dailyQ = useQuery({
    queryKey: ['leaderboard-daily'],
    queryFn: () => api.dailyLeaderboard(),
    staleTime: 120_000,
    enabled: tab === 'today',
  });

  const activeQ = tab === 'alltime' ? allTimeQ : dailyQ;

  // Normalize both endpoint shapes into the same row format
  const rows: Array<{ steamId: string; personaName: string; avatar: string; score: number }> = (() => {
    if (tab === 'alltime') {
      return (allTimeQ.data?.users ?? []).slice(0, MAX_ROWS).map(u => ({
        steamId: u.steamId,
        personaName: u.personaName,
        avatar: u.avatar,
        score: u.credScore,
      }));
    }
    return (dailyQ.data?.users ?? []).slice(0, MAX_ROWS).map(u => ({
      steamId: u.steamId,
      personaName: u.personaName,
      avatar: u.avatar,
      score: u.dailyCred,
    }));
  })();

  return (
    <section className="cc-panel p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold tracking-widest text-white/70">LIVE CRED RANKINGS</h3>
        <Link href="/leaderboard">
          <a className="text-[11px] font-medium text-cyberMagentaGlow hover:text-cyberPink">
            See all →
          </a>
        </Link>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex gap-1 border-b border-white/5">
        <TabBtn label="All-time" active={tab === 'alltime'} onClick={() => setTab('alltime')} />
        <TabBtn label="Today" active={tab === 'today'} onClick={() => setTab('today')} />
      </div>

      {/* Body */}
      <div className="mt-3 space-y-2">
        {activeQ.isLoading && <RankingsLoading />}

        {activeQ.isError && (
          <div className="py-4 text-xs text-white/45">
            Couldn't load rankings. Backend may be warming up.
          </div>
        )}

        {!activeQ.isLoading && !activeQ.isError && rows.length === 0 && (
          <div className="py-6 text-center text-xs text-white/50">
            {tab === 'today'
              ? 'No 24-hour activity yet. Be the first to top the daily board.'
              : 'No rankings yet. Be the first to connect Steam.'}
          </div>
        )}

        {rows.map((row, idx) => {
          const rank = idx + 1;
          return (
            <Link key={row.steamId} href={`/player/${row.steamId}`}>
              <a className="flex items-center gap-3 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-white/5">
                <span
                  className={`w-4 text-center text-xs font-bold tabular-nums ${
                    rank === 1 ? 'text-credGreenGlow' :
                    rank === 2 ? 'text-cyberMagentaGlow' :
                    rank === 3 ? 'text-amber-300' :
                    'text-white/45'
                  }`}
                >
                  {rank}
                </span>

                <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
                  {row.avatar ? (
                    <img src={row.avatar} alt="" className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-white/40">
                      {row.personaName.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium text-white">{row.personaName}</div>
                </div>

                <div className="text-xs font-bold tabular-nums text-credGreenGlow">
                  {tab === 'today' && row.score > 0 ? '+' : ''}{row.score.toLocaleString()}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function TabBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-3 py-2 text-xs font-medium transition-colors ${
        active ? 'text-white' : 'text-white/45 hover:text-white/75'
      }`}
    >
      {label}
      {active && (
        <span
          className="absolute inset-x-2 -bottom-px h-0.5 bg-cyberMagenta"
          style={{ boxShadow: '0 0 8px rgba(233, 30, 99, 0.7)' }}
        />
      )}
    </button>
  );
}

function RankingsLoading() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 py-1.5">
          <div className="h-6 w-3 animate-pulse rounded bg-white/10" />
          <div className="h-7 w-7 animate-pulse rounded-full bg-white/10" />
          <div className="h-3 flex-1 animate-pulse rounded bg-white/10" />
          <div className="h-3 w-10 animate-pulse rounded bg-white/10" />
        </div>
      ))}
    </>
  );
}
