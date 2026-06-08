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

/**
 * Routes using the NEW social MVP design (dark/purple, Inter font).
 * Everything else falls back to the legacy arcade shell.
 *
 * As we migrate pages to the new design, add their paths here.
 */
const SOCIAL_ROUTES = ['/design'];

function isSocialRoute(path: string): boolean {
  return SOCIAL_ROUTES.some(r => path === r || path.startsWith(r + '/'));
}

export default function App() {
  const [location] = useLocation();
  const social = isSocialRoute(location);

  if (social) {
    return (
      <div className="social-app">
        <Switch>
          <Route path="/design" component={DesignSystemPage} />
          <Route>
            <div className="mx-auto max-w-md px-4 py-24 text-center">
              <h1 className="text-4xl text-fg">404</h1>
              <p className="text-fg-muted mt-2">Page not found</p>
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
            <Route path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/leaderboard" component={LeaderboardPage} />
            <Route path="/player/:steamId" component={PlayerPage} />
            <Route path="/versus" component={VersusPage} />
            <Route path="/friends" component={FriendsPage} />
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
