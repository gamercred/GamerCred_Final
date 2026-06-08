import { useState } from 'react';
import { Avatar, Card } from '@/components/ui';
import { Icon } from './Icon';
import { useToast } from './Toast';

export interface PostData {
  id: string;
  authorName: string;
  authorAvatar?: string | null;
  authorVerified?: boolean;
  timeAgo: string;          // "2h ago"
  gameTag?: string;         // "Elden Ring"
  achievementTag?: { title: string; xp: number };
  text: string;
  images?: string[];        // up to 4 R2 URLs
  hashtags?: string[];      // ["#EldenRing"]
  likes: number;
  comments: number;
  liked?: boolean;
  bookmarked?: boolean;
}

interface Props {
  post: PostData;
}

export function PostCard({ post }: Props) {
  const toast = useToast();
  const [liked, setLiked] = useState(!!post.liked);
  const [bookmarked, setBookmarked] = useState(!!post.bookmarked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const toggleLike = () => {
    // Optimistic UI — backend later
    const next = !liked;
    setLiked(next);
    setLikeCount(c => c + (next ? 1 : -1));
  };

  const toggleBookmark = () => {
    setBookmarked(b => !b);
  };

  return (
    <Card padding="md">
      {/* Header: avatar, name, time, game/achievement tag, menu */}
      <div className="flex items-start gap-3">
        <Avatar
          size="md"
          src={post.authorAvatar}
          fallback={post.authorName}
          verified={post.authorVerified}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="text-sm font-semibold text-fg">{post.authorName}</span>
            {post.authorVerified && (
              <span className="text-brand" title="Verified">
                <Icon name="check" size={12} />
              </span>
            )}
            <span className="text-xs text-fg-dim">·</span>
            <span className="text-xs text-fg-muted">{post.timeAgo}</span>
            {post.gameTag && (
              <>
                <span className="text-xs text-fg-dim">·</span>
                <span className="text-xs text-brand">{post.gameTag}</span>
              </>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => toast.comingSoon('Post options')}
          className="rounded-button p-1 text-fg-muted hover:bg-surface-overlay hover:text-fg"
          aria-label="More options"
        >
          <Icon name="more" size={16} />
        </button>
      </div>

      {/* Body text */}
      {post.text && (
        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-fg">{post.text}</p>
      )}

      {/* Achievement card (special post type) */}
      {post.achievementTag && (
        <div className="mt-3 flex items-center gap-3 rounded-card border border-line bg-surface-inset p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-button bg-brand/15 text-brand">
            <Icon name="trophy" size={20} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-fg-dim">Achievement Unlocked</div>
            <div className="truncate text-sm font-semibold text-fg">{post.achievementTag.title}</div>
          </div>
          <div className="flex items-center gap-1 rounded-pill bg-brand/15 px-2 py-1 text-xs font-bold text-brand">
            <span className="text-brand">
              <Icon name="gamercred-logo" size={12} />
            </span>
            {post.achievementTag.xp}
          </div>
        </div>
      )}

      {/* Images grid */}
      {post.images && post.images.length > 0 && (
        <div
          className={`mt-3 grid gap-1 overflow-hidden rounded-card ${
            post.images.length === 1 ? 'grid-cols-1' :
            post.images.length === 2 ? 'grid-cols-2' :
            'grid-cols-2'
          }`}
        >
          {post.images.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className={`relative bg-surface-inset ${
                post.images!.length === 3 && i === 0 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt=""
                className="h-full max-h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      {/* Hashtags */}
      {post.hashtags && post.hashtags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {post.hashtags.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => toast.comingSoon(tag)}
              className="text-xs font-medium text-brand hover:text-brand-glow"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
        <div className="flex items-center gap-1">
          {/* Like */}
          <button
            type="button"
            onClick={toggleLike}
            className={`flex items-center gap-1.5 rounded-button px-2 py-1 text-xs transition-colors ${
              liked ? 'text-like' : 'text-fg-muted hover:text-like hover:bg-like/10'
            }`}
            aria-label="Like"
          >
            <span className={liked ? 'fill-current' : ''}>
              {liked ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              ) : (
                <Icon name="heart" size={16} />
              )}
            </span>
            <span className="num">{likeCount}</span>
          </button>

          {/* Comment */}
          <button
            type="button"
            onClick={() => toast.comingSoon('Comments')}
            className="flex items-center gap-1.5 rounded-button px-2 py-1 text-xs text-fg-muted transition-colors hover:bg-surface-overlay hover:text-fg"
            aria-label="Comment"
          >
            <Icon name="comment" size={16} />
            <span className="num">{post.comments}</span>
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={() => toast.comingSoon('Share')}
            className="rounded-button p-1.5 text-fg-muted transition-colors hover:bg-surface-overlay hover:text-fg"
            aria-label="Share"
          >
            <Icon name="share" size={16} />
          </button>
        </div>

        {/* Bookmark */}
        <button
          type="button"
          onClick={toggleBookmark}
          className={`rounded-button p-1.5 transition-colors ${
            bookmarked ? 'text-brand' : 'text-fg-muted hover:bg-surface-overlay hover:text-fg'
          }`}
          aria-label="Bookmark"
        >
          <Icon name={bookmarked ? 'bookmark-fill' : 'bookmark'} size={16} />
        </button>
      </div>
    </Card>
  );
}
