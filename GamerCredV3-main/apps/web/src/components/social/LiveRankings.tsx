import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { api } from '@/lib/api';

const MAX_ROWS = 7;

export function LiveRankings() {
  const lbQ = useQuery({
    queryKey: ['leaderboard-top'],
    queryFn: () => api.leaderboard(),
    staleTime: 120_000,
  });

  const users = (lbQ.data?.users ?? []).slice(0, MAX_ROWS);

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

      <div className="mt-4 space-y-2">
        {lbQ.isLoading && (
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
        )}

        {lbQ.isError && (
          <div className="py-4 text-xs text-white/45">
            Couldn't load rankings. Backend may be warming up.
          </div>
        )}

        {!lbQ.isLoading && !lbQ.isError && users.length === 0 && (
          <div className="py-4 text-xs text-white/45">
            No rankings yet. Be the first to connect Steam.
          </div>
        )}

        {users.map((user, idx) => {
          const rank = idx + 1;
          return (
            <Link key={user.steamId} href={`/player/${user.steamId}`}>
              <a className="flex items-center gap-3 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-white/5">
                {/* Rank */}
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

                {/* Avatar */}
                <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-white/40">
                      {user.personaName.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium text-white">{user.personaName}</div>
                </div>

                {/* Score */}
                <div className="text-xs font-bold tabular-nums text-credGreenGlow">
                  {user.credScore.toLocaleString()}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
