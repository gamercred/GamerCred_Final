/**
 * Single source of truth for all FAKE/SEEDED/HARDCODED data in the social MVP.
 *
 * As real backend data replaces each piece, delete entries here and import
 * from API instead. This file is intentionally a "tech debt tracker."
 */

// ── Hero stat counters (made up — replace when real metrics exist) ──────
export const HERO_STATS = [
  { label: 'Games Tracked', value: '2.1M+', icon: 'game' as const },
  { label: 'Active Gamers', value: '50K+', icon: 'user' as const },
  { label: 'Achievements', value: '4.8M+', icon: 'trophy' as const },
  { label: 'Communities', value: '218+', icon: 'community' as const },
];

// ── Trending Games sidebar (placeholder until post counts exist) ────────
export const TRENDING_GAMES = [
  { rank: 1, title: 'Elden Ring', posts: '24.1K posts', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_184x69.jpg' },
  { rank: 2, title: 'Clair Obscur: Expedition 33', posts: '12.7K posts', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1903340/capsule_184x69.jpg' },
  { rank: 3, title: 'Hades II', posts: '8.3K posts', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/capsule_184x69.jpg' },
  { rank: 4, title: 'GTA VI', posts: '7.9K posts', cover: null },
  { rank: 5, title: "Baldur's Gate 3", posts: '6.4K posts', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_184x69.jpg' },
];

// ── Popular Communities (feature doesn't exist; v1.5+) ──────────────────
export const POPULAR_COMMUNITIES = [
  { name: 'Soulslike Addicts', members: '24.8K members', accent: '#EF4444' },
  { name: 'Indie Hunters', members: '18.6K members', accent: '#EC4899' },
  { name: 'RPG Veterans', members: '22.1K members', accent: '#7C3AED' },
  { name: 'Achievement Hunters', members: '16.2K members', accent: '#F59E0B' },
  { name: 'JRPG Enthusiasts', members: '14.7K members', accent: '#3B82F6' },
];

// ── Game of the Week (editorial; v2) ────────────────────────────────────
export const GAME_OF_THE_WEEK = {
  title: 'Elden Ring',
  subtitle: 'Shadow of the Erdtree',
  cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2778580/header.jpg',
};

// ── Friends Online (no friend system in v1) ─────────────────────────────
export const FRIENDS_ONLINE = [
  { name: 'ShadowHunter', status: 'Online', avatar: null },
  { name: 'SnehaPlays', status: 'In-Game', avatar: null },
  { name: 'GameVoyager', status: 'Online', avatar: null },
  { name: 'PixelQueen', status: 'In-Game', avatar: null },
];

// ── Upcoming Releases (no release calendar source; v2) ──────────────────
export const UPCOMING_RELEASES = [
  { title: 'Black Myth: Wukong', date: '20 Aug, 2024', cover: null },
  { title: 'Warhammer 40K: Space Marine 2', date: '09 Sep, 2024', cover: null },
];

// ── Sidebar navigation items ────────────────────────────────────────────
export type NavItemKey =
  | 'feed' | 'explore' | 'communities' | 'versus' | 'games'
  | 'achievements' | 'notifications' | 'messages' | 'bookmarks'
  | 'profile' | 'settings';

export interface NavItem {
  key: NavItemKey;
  label: string;
  href: string;
  badge?: number;
  comingSoon?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'feed', label: 'Feed', href: '/' },
  { key: 'explore', label: 'Explore', href: '/leaderboard' },
  { key: 'communities', label: 'Communities', href: '/coming-soon/communities', comingSoon: true },
  { key: 'versus', label: 'Versus', href: '/versus' },
  { key: 'games', label: 'Games', href: '/coming-soon/games', comingSoon: true },
  { key: 'notifications', label: 'Notifications', href: '/coming-soon/notifications', badge: 3, comingSoon: true },
  { key: 'messages', label: 'Messages', href: '/coming-soon/messages', comingSoon: true },
  { key: 'bookmarks', label: 'Bookmarks', href: '/coming-soon/bookmarks', comingSoon: true },
  { key: 'profile', label: 'Profile', href: '/profile' },
  { key: 'settings', label: 'Settings', href: '/coming-soon/settings', comingSoon: true },
];

// ── Demo user (for the sidebar user card when no real session) ──────────
export const DEMO_USER = {
  name: 'BappaRaj',
  level: 32,
  credScore: 8240,
  nextMilestone: 9000,
  avatar: null,
};

// ── Demo posts ────────────────────────────────────────────────────────
// You chose "No seeded posts — empty state" in spec. Set USE_DEMO_POSTS=true
// here OR pass ?demo=1 in URL to show the mockup-style posts for screenshots.

import type { PostData } from '@/components/social/PostCard';

export const USE_DEMO_POSTS = false;

export const DEMO_POSTS: PostData[] = [
  {
    id: 'demo-1',
    authorName: 'ArjunX',
    authorAvatar: null,
    authorVerified: true,
    timeAgo: '2h ago',
    gameTag: 'Elden Ring',
    text: "Finally beat Malenia! What a fight 🔥\nOne of the best boss battles I've ever experienced.",
    hashtags: ['#EldenRing'],
    likes: 124,
    comments: 23,
  },
  {
    id: 'demo-2',
    authorName: 'Vikram',
    authorAvatar: null,
    timeAgo: '4h ago',
    gameTag: 'Clair Obscur: Expedition 33',
    text: "Just finished Expedition 33. The story, the world, the music — everything was phenomenal. 10/10.",
    hashtags: ['#Expedition33'],
    likes: 98,
    comments: 15,
  },
  {
    id: 'demo-3',
    authorName: 'SnehaPlays',
    authorAvatar: null,
    timeAgo: '6h ago',
    achievementTag: { title: 'Completionist', xp: 50 },
    text: 'Unlocked 100% achievements in Hollow Knight! 🎉 Took me 62 hours but totally worth it.',
    likes: 76,
    comments: 12,
  },
];
