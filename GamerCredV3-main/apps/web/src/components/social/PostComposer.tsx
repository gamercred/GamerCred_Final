import { useState } from 'react';
import { Avatar, Button, Card } from '@/components/ui';
import { Icon } from './Icon';
import { useToast } from './Toast';
import { DEMO_USER } from '@/data/seed';

const MAX_LEN = 500;

interface ChipProps {
  icon: Parameters<typeof Icon>[0]['name'];
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function Chip({ icon, label, onClick, disabled }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-surface-inset px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors hover:border-line-strong hover:text-fg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Icon name={icon} size={14} />
      {label}
    </button>
  );
}

export function PostComposer() {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);
  const toast = useToast();

  const handlePost = () => {
    if (!text.trim()) return;
    toast.comingSoon('Posting');
    setText('');
  };

  const charCount = text.length;
  const overLimit = charCount > MAX_LEN;
  const showCount = text.length > 0;

  return (
    <Card padding="md">
      <div className="flex gap-3">
        <Avatar size="md" src={DEMO_USER.avatar} fallback={DEMO_USER.name} />
        <div className="flex-1">
          {/* Bare textarea — no border, no ring, blends into the card */}
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="What's on your mind, gamer?"
            rows={focused || text ? 3 : 1}
            className="w-full resize-none border-0 bg-transparent p-0 pt-1.5 text-base text-fg outline-none ring-0 placeholder:text-fg-dim focus:border-0 focus:outline-none focus:ring-0"
            style={{ boxShadow: 'none' }}
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              <Chip icon="image" label="Photo/Video" onClick={() => toast.comingSoon('Media upload')} />
              <Chip icon="controller" label="Game" onClick={() => toast.comingSoon('Game tag')} />
              <Chip icon="medal" label="Achievement" onClick={() => toast.comingSoon('Achievement')} />
              <Chip icon="poll" label="Poll" onClick={() => toast.comingSoon('Poll')} />
            </div>

            <div className="flex items-center gap-3">
              {showCount && (
                <span
                  className={`num text-xs ${
                    overLimit ? 'text-danger' : charCount > MAX_LEN * 0.8 ? 'text-warn' : 'text-fg-dim'
                  }`}
                >
                  {charCount}/{MAX_LEN}
                </span>
              )}
              <Button
                variant="primary"
                size="sm"
                onClick={handlePost}
                disabled={!text.trim() || overLimit}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
