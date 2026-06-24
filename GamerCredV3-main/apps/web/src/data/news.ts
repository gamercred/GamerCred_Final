/**
 * News post metadata for the command-centre landing.
 *
 * The actual full posts (the 1,500+ word articles) will be loaded from
 * markdown files via lib/news.ts in a future pass. For now this is enough
 * to render the carousel + grid.
 *
 * When markdown ships, this file gets generated automatically.
 */

export interface NewsCardData {
  slug: string;
  title: string;
  excerpt: string;
  timeAgo: string;
  isBreaking?: boolean;
  /** Gradient name used in place of hero image — keeps things license-clean */
  heroGradient: 'magenta-violet' | 'pink-cyan' | 'green-purple' | 'crimson-magenta' | 'violet-blue';
}

export const NEWS_FEATURED: NewsCardData[] = [
  {
    slug: 'steam-next-fest-too-big',
    title: 'Steam Next Fest Hit 4,200 Demos. That\u2019s Not a Win.',
    excerpt: 'PC gaming\u2019s biggest discovery event is now too big to function as discovery. A look at the math behind the chart.',
    timeAgo: '6 hours ago',
    isBreaking: true,
    heroGradient: 'magenta-violet',
  },
  {
    slug: 'june-2026-quiet-gta6-shadow',
    title: 'June 2026 Is the Quietest Big Month in Years. GTA 6 Is the Reason.',
    excerpt: 'Summer Game Fest delivered the trailers. The release calendar didn\u2019t deliver the games. That\u2019s strategy, not coincidence.',
    timeAgo: '6 hours ago',
    isBreaking: true,
    heroGradient: 'crimson-magenta',
  },
];

export const NEWS_GRID: NewsCardData[] = [
  {
    slug: 'placeholder-3',
    title: 'GOG Goes Independent: What the CD Projekt Buyout Actually Means',
    excerpt: 'Twenty-two million users. DRM-free positioning. Now without a publisher backstop. The numbers behind GOG\u2019s split.',
    timeAgo: '1 day ago',
    heroGradient: 'pink-cyan',
  },
  {
    slug: 'placeholder-4',
    title: 'Steam Summer Sale 2026: The Last Big PC Window Before November',
    excerpt: 'Why this sale matters more than usual, and what publishers are doing with their Q4 calendar gaps.',
    timeAgo: '2 days ago',
    heroGradient: 'violet-blue',
  },
  {
    slug: 'placeholder-5',
    title: 'EVO 2026 Returns to Las Vegas: The Fighting Game Calendar in 2026',
    excerpt: 'Tekken 8\u2019s deepest year. Street Fighter 6\u2019s second wind. A genre quietly having its strongest run in a decade.',
    timeAgo: '3 days ago',
    heroGradient: 'crimson-magenta',
  },
  {
    slug: 'placeholder-6',
    title: 'Epic Games Store at 3% Market Share: The Exclusivity Strategy Endgame',
    excerpt: 'Seven years in, 317 million accounts, and a market position that hasn\u2019t moved. What does Epic do next?',
    timeAgo: '4 days ago',
    heroGradient: 'green-purple',
  },
  {
    slug: 'placeholder-7',
    title: 'Final Fantasy 14 Patch 7.3: What the Data Center Migration Actually Changes',
    excerpt: 'Square Enix\u2019s biggest infrastructure shift since Endwalker. The technical reasoning the patch notes skipped.',
    timeAgo: '5 days ago',
    heroGradient: 'violet-blue',
  },
  {
    slug: 'placeholder-8',
    title: 'Why \u201cCozy Gaming\u201d Outlasted Every Trend That Was Supposed to Replace It',
    excerpt: 'Stardew Valley turned ten. Wholesome Direct ran a tenth showcase. The genre that quietly became foundational.',
    timeAgo: '6 days ago',
    heroGradient: 'pink-cyan',
  },
];

export const GRADIENT_BY_NAME: Record<NewsCardData['heroGradient'], string> = {
  'magenta-violet': 'linear-gradient(135deg, #E91E63 0%, #6A1B9A 60%, #1a0a2e 100%)',
  'pink-cyan': 'linear-gradient(135deg, #FF1F8F 0%, #7C3AED 50%, #0EA5E9 100%)',
  'green-purple': 'linear-gradient(135deg, #10F0A0 0%, #5BFFC5 30%, #6A1B9A 100%)',
  'crimson-magenta': 'linear-gradient(135deg, #FF2D55 0%, #E91E63 60%, #2a0a18 100%)',
  'violet-blue': 'linear-gradient(135deg, #A020F0 0%, #3B82F6 60%, #1E1B4B 100%)',
};
