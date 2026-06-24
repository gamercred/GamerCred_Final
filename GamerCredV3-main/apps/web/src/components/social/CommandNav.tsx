import { Link } from 'wouter';
import { Icon } from './Icon';

interface Props {
  loggedIn?: boolean;
}

const NAV_LINKS = [
  { label: 'News', href: '/' },
  { label: 'Players', href: '/leaderboard' },
  { label: 'Versus', href: '/versus' },
  { label: 'About', href: '/about' },
];

export function CommandNav({ loggedIn }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/30 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="cc-text-magenta">
            <Icon name="gamercred-logo" size={28} />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            GAMER<span className="cc-text-magenta">CRED</span>
          </span>
        </Link>

        {/* Center nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          {loggedIn ? (
            <Link href="/profile">
              <button className="cc-btn-ghost">My Profile</button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <button className="cc-btn-ghost">Log in</button>
              </Link>
              <Link href="/login">
                <button className="cc-btn-primary">Sign up</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
