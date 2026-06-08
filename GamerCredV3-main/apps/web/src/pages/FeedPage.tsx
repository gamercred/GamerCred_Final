import { Card } from '@/components/ui';
import { TopNav } from '@/components/social/TopNav';
import { LeftSidebar } from '@/components/social/LeftSidebar';
import { RightSidebar } from '@/components/social/RightSidebar';
import { ToastProvider } from '@/components/social/Toast';
import { Icon } from '@/components/social/Icon';

/**
 * /feed — logged-in social feed view.
 * 3-column layout: left sidebar (nav + user card) / center (composer + feed) / right (trending etc.)
 *
 * Wave B1: shell + sidebars only. Wave B2 fills the center column.
 */
export default function FeedPage() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-surface text-fg">
        <TopNav loggedIn />
        <main className="mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-6">
          <LeftSidebar />

          {/* Center: composer + feed (Wave B2 fills this) */}
          <section className="min-w-0 flex-1 space-y-3">
            {/* Composer placeholder */}
            <Card padding="md">
              <div className="text-sm text-fg-muted">
                <span className="text-fg-dim">Post composer ships in Wave B2.</span>
              </div>
            </Card>

            {/* Empty feed state */}
            <Card padding="lg">
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-card border border-line bg-surface-elevated text-fg-muted">
                  <Icon name="comment" size={28} />
                </div>
                <h2 className="text-lg font-semibold text-fg">No posts yet</h2>
                <p className="mt-2 max-w-xs text-sm text-fg-muted">
                  When you and people you follow share gaming moments, they'll appear here.
                </p>
              </div>
            </Card>
          </section>

          <RightSidebar variant="extended" />
        </main>
      </div>
    </ToastProvider>
  );
}
