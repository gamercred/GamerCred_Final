import { useState } from 'react';
import { useSearch } from 'wouter';
import { Card } from '@/components/ui';
import { TopNav } from '@/components/social/TopNav';
import { LeftSidebar } from '@/components/social/LeftSidebar';
import { RightSidebar } from '@/components/social/RightSidebar';
import { ToastProvider } from '@/components/social/Toast';
import { PostComposer } from '@/components/social/PostComposer';
import { FeedTabs, type FeedTab } from '@/components/social/FeedTabs';
import { PostCard } from '@/components/social/PostCard';
import { Icon } from '@/components/social/Icon';
import { USE_DEMO_POSTS, DEMO_POSTS } from '@/data/seed';

/**
 * /feed — logged-in social feed view.
 * 3-column: left sidebar (nav + user) / center (composer + tabs + feed) / right (trending etc.)
 *
 * Pass ?demo=1 in URL to force show the demo posts (useful for screenshots).
 */
export default function FeedPage() {
  const [tab, setTab] = useState<FeedTab>('for-you');
  const search = useSearch();
  const showDemo = USE_DEMO_POSTS || new URLSearchParams(search).get('demo') === '1';
  const posts = showDemo && tab === 'for-you' ? DEMO_POSTS : [];

  return (
    <ToastProvider>
      <div className="min-h-screen bg-surface text-fg">
        <TopNav loggedIn />
        <main className="mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-6">
          <LeftSidebar />

          <section className="min-w-0 flex-1 space-y-3">
            <PostComposer />

            <Card padding="none" className="overflow-hidden">
              <FeedTabs active={tab} onChange={setTab} />

              {posts.length > 0 ? (
                <div className="space-y-3 p-3">
                  {posts.map(post => (
                    <div key={post.id} className="-m-3 mb-0 last:mb-0">
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyFeed tab={tab} />
              )}
            </Card>
          </section>

          <RightSidebar variant="extended" />
        </main>
      </div>
    </ToastProvider>
  );
}

function EmptyFeed({ tab }: { tab: FeedTab }) {
  const messages: Record<FeedTab, { title: string; body: string }> = {
    'for-you': {
      title: 'No posts yet',
      body: 'Be the first to share a gaming moment. When others post, you\'ll see them here.',
    },
    following: {
      title: 'Nothing from your follows',
      body: 'Follow other gamers to see their posts in this tab. Coming soon.',
    },
    trending: {
      title: 'Nothing trending right now',
      body: 'Trending posts will show up here once the community gets going.',
    },
  };
  const msg = messages[tab];

  return (
    <div className="flex flex-col items-center px-6 py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-card border border-line bg-surface-elevated text-fg-muted">
        <Icon name="comment" size={28} />
      </div>
      <h2 className="text-lg font-semibold text-fg">{msg.title}</h2>
      <p className="mt-2 max-w-xs text-sm text-fg-muted">{msg.body}</p>
    </div>
  );
}
