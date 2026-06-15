import { Link } from 'wouter';
import { Button } from '@/components/ui';
import { Icon } from './Icon';

interface Props {
  loggedIn?: boolean;
}

/**
 * Top nav for the new GamerCred direction (profile + blog).
 * News route is implemented in Phase News.
 */
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'News', href: '/news' },
  { label: 'About', href: '/about' },
];

export function TopNav({ loggedIn }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2 text-fg">
          <span className="text-brand">
            <Icon name="gamercred-logo" size={28} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-fg">GAMER</span>
            <span className="text-brand">CRED</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {loggedIn ? (
            <Link href="/profile">
              <Button variant="ghost" size="sm">My Profile</Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="secondary" size="sm">Log in</Button>
              </Link>
              <Link href="/login">
                <Button variant="primary" size="sm">Connect Steam</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
