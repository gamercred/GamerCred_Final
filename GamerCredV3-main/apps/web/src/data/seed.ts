/**
 * Hardcoded/seeded data. Per product decisions (June 9, 2026),
 * GamerCred is profile + blog, not social. Most social-era seeds removed.
 *
 * Remaining seeds: hero stat counters (still aspirational on landing).
 */

export const HERO_STATS = [
  { label: 'Gamers Tracked', value: '12K+', icon: 'user' as const },
  { label: 'Games Indexed', value: '2.1M+', icon: 'game' as const },
  { label: 'Achievements Logged', value: '4.8M+', icon: 'trophy' as const },
  { label: 'Highest Cred Score', value: '947', icon: 'medal' as const },
];

// Used as a placeholder until real session data wires up.
export const DEMO_USER = {
  name: 'BappaRaj',
  steamId: '76561198000000000',
  level: 32,
  credScore: 8240,
  nextMilestone: 9000,
  avatar: null,
};
