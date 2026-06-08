import { cn } from '@/components/ui';
import { Icon } from './Icon';
import { useToast } from './Toast';

export type FeedTab = 'for-you' | 'following' | 'trending';

interface Props {
  active: FeedTab;
  onChange: (tab: FeedTab) => void;
}

const TABS: { key: FeedTab; label: string }[] = [
  { key: 'for-you', label: 'For You' },
  { key: 'following', label: 'Following' },
  { key: 'trending', label: 'Trending' },
];

export function FeedTabs({ active, onChange }: Props) {
  const toast = useToast();

  return (
    <div className="flex items-center justify-between border-b border-line px-1">
      <div className="flex gap-1">
        {TABS.map(t => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onChange(t.key)}
              className={cn(
                'relative px-4 py-3 text-sm font-medium transition-colors',
                isActive ? 'text-fg' : 'text-fg-muted hover:text-fg',
              )}
            >
              {t.label}
              {isActive && (
                <span className="absolute inset-x-2 -bottom-px h-0.5 bg-brand" />
              )}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => toast.comingSoon('Filters')}
        className="rounded-button p-2 text-fg-muted hover:bg-surface-overlay hover:text-fg"
        aria-label="Filters"
      >
        <Icon name="settings" size={16} />
      </button>
    </div>
  );
}
