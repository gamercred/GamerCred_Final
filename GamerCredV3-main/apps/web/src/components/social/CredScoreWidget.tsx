import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { api } from '@/lib/api';

/**
 * Compute a tier label from a cred score.
 * Buckets chosen to land most active users in Gold/Platinum and reserve
 * "Elite" / "Legend" for genuinely high scores.
 */
function tierFor(score: number): { label: string; accent: string } {
  if (score >= 8000) return { label: 'LEGEND', accent: '#FFD700' };
  if (score >= 5000) return { label: 'ELITE', accent: '#10F0A0' };
  if (score >= 3000) return { label: 'PLATINUM', accent: '#A78BFA' };
  if (score >= 1500) return { label: 'GOLD', accent: '#F59E0B' };
  if (score >= 500) return { label: 'SILVER', accent: '#9CA3AF' };
  return { label: 'BRONZE', accent: '#A16207' };
}

export function CredScoreWidget() {
  const meQ = useQuery({
    queryKey: ['auth-me'],
    queryFn: () => api.me(),
    staleTime: 60_000,
  });

  const user = meQ.data?.user;
  const isLoggedIn = !!user;

  // Static demo values when logged out; real values when logged in.
  const score = isLoggedIn ? user.credScore : 6720;
  const tier = tierFor(score);

  return (
    <section className="cc-panel cc-panel-green p-5">
      <h3 className="text-xs font-bold tracking-widest text-white/70">
        {isLoggedIn ? 'YOUR GAMER CRED SCORE' : 'GAMER CRED SCORE'}
      </h3>

      <div className="mt-4 flex flex-col items-center">
        {/* Hexagon score badge */}
        <div className="relative h-[150px] w-[130px]">
          <div className="cc-hex-border" />
          <div className="cc-hex">
            <div className="relative z-10 flex flex-col items-center">
              <div className="cc-text-green text-3xl font-extrabold tabular-nums">
                {score.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Tier label */}
        <div className="mt-3 text-center">
          <div className="text-[10px] uppercase tracking-widest text-white/40">Tier</div>
          <div
            className="text-base font-bold tracking-wider"
            style={{
              color: tier.accent,
              textShadow: `0 0 12px ${tier.accent}80`,
            }}
          >
            {tier.label}
          </div>
        </div>

        {/* CTA based on auth state */}
        <div className="mt-5 w-full">
          {isLoggedIn ? (
            <Link href={`/player/${user.steamId}`}>
              <a className="block">
                <button className="cc-btn-primary w-full justify-center">
                  View Full Breakdown
                </button>
              </a>
            </Link>
          ) : (
            <>
              <p className="mb-3 text-center text-xs text-white/55">
                Connect Steam to see your real score.
              </p>
              <Link href="/login">
                <a className="block">
                  <button className="cc-btn-primary w-full justify-center">
                    Connect Steam
                  </button>
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
