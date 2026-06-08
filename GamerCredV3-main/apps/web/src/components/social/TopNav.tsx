import { Link } from 'wouter';
import { Button } from '@/components/ui';
import { Icon } from './Icon';

interface Props {
  // When true, render the logged-in variant (no Log in / Sign up buttons)
  loggedIn?: boolean;
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/leaderboard' },
  { label: 'Communities', href: '/coming-soon/communities' },
  { label: 'Features', href: '/coming-soon/features' },
  { label: 'About', href: '/coming-soon/about' },
];

export function TopNav({ loggedIn }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-fg">
          <span className="text-brand">
            <Icon name="gamercred-logo" size={28} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-fg">GAMER</span>
            <span className="text-brand">CRED</span>
          </span>
        </Link>

        {/* Center nav links (hidden on mobile) */}
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

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          {loggedIn ? (
            <Button variant="ghost" size="sm">Profile</Button>
          ) : (
            <>
              <Link href="/login">
                <Button variant="secondary" size="sm">Log in</Button>
              </Link>
              <Link href="/login">
                <Button variant="primary" size="sm">Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
