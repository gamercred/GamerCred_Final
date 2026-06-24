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
import CommandCenterPage from '@/pages/CommandCenterPage';

/**
 * "New theme" routes use the cyberpunk command-centre / Inter shell.
 * Everything else still falls back to the legacy arcade shell.
 */
const NEW_THEME_ROUTES = ['/', '/design'];

function isNewThemeRoute(path: string): boolean {
  if (path === '/') return true;
  return NEW_THEME_ROUTES.some(r => r !== '/' && (path === r || path.startsWith(r + '/')));
}

function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(to);
  }, [to, setLocation]);
  return null;
}

export default function App() {
  const [location] = useLocation();

  if (isNewThemeRoute(location)) {
    return (
      <Switch>
        <Route path="/" component={CommandCenterPage} />
        <Route path="/design" component={DesignSystemPage} />
        <Route>
          <div className="cc-app">
            <div className="mx-auto max-w-md px-4 py-24 text-center">
              <h1 className="text-4xl text-white">404</h1>
              <p className="mt-2 text-white/55">Page not found</p>
              <a href="/" className="mt-6 inline-block text-cyberMagentaGlow hover:text-cyberPink">
                ← Back to command centre
              </a>
            </div>
          </div>
        </Route>
      </Switch>
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
            {/* Deprecated routes redirect home so any external link survives */}
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
