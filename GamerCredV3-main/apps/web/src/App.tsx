import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import GeometricBackground from '@/components/GeometricBackground';
import CrtOverlay from '@/components/CrtOverlay';
import Navbar from '@/components/Navbar';
import ChiptuneToggle from '@/components/ChiptuneToggle';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import PlayerPage from '@/pages/PlayerPage';
import VersusPage from '@/pages/VersusPage';
import FriendsPage from '@/pages/FriendsPage';
import DesignSystemPage from '@/pages/DesignSystemPage';
import LandingPage from '@/pages/LandingPage';

/**
 * Routes using the NEW theme (Inter, dark/purple). Everything else
 * falls back to the legacy arcade shell.
 *
 * Profile + News routes will be added in upcoming phases.
 */
const SOCIAL_ROUTES = ['/', '/design'];

function isSocialRoute(path: string): boolean {
  if (path === '/') return true;
  return SOCIAL_ROUTES.some(r => r !== '/' && (path === r || path.startsWith(r + '/')));
}

/**
 * Redirect helper for deprecated routes (e.g. old /feed shipped briefly).
 * Avoids breaking any external links that already point at the old URL.
 */
function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(to);
  }, [to, setLocation]);
  return null;
}

export default function App() {
  const [location] = useLocation();
  const social = isSocialRoute(location);

  if (social) {
    return (
      <div className="social-app">
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/design" component={DesignSystemPage} />
          <Route>
            <div className="mx-auto max-w-md px-4 py-24 text-center">
              <h1 className="text-4xl text-fg">404</h1>
              <p className="text-fg-muted mt-2">Page not found</p>
              <a href="/" className="mt-6 inline-block text-brand hover:text-brand-glow">← Back home</a>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <GeometricBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Switch>
            <Route path="/old-home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/leaderboard" component={LeaderboardPage} />
            <Route path="/player/:steamId" component={PlayerPage} />
            <Route path="/versus" component={VersusPage} />
            <Route path="/friends" component={FriendsPage} />
            {/* Deprecated routes — redirect home so external links don't 404 */}
            <Route path="/feed">{() => <Redirect to="/" />}</Route>
            <Route path="/coming-soon/:feature">{() => <Redirect to="/" />}</Route>
            <Route>
              <div className="mx-auto max-w-md px-4 py-24 text-center">
                <div className="neon-mag text-5xl uppercase">404</div>
                <div className="neon text-xl uppercase mt-2">SIGNAL LOST</div>
              </div>
            </Route>
          </Switch>
        </main>
      </div>
      <ChiptuneToggle />
      <CrtOverlay />
    </div>
  );
}
