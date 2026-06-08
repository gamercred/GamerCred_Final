import { TopNav } from '@/components/social/TopNav';
import { Hero } from '@/components/social/Hero';
import { BottomCta, Footer } from '@/components/social/Footer';

/**
 * /  — public marketing landing page (logged-out view).
 *
 * For now this is the ONLY social-MVP page in production. The logged-in
 * feed view (FeedPage) ships in Wave B after this is verified.
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface text-fg">
      <TopNav />
      <main>
        <Hero />
        {/* Feed preview (Wave B) goes here when ready */}
      </main>
      <BottomCta />
      <Footer />
    </div>
  );
}
