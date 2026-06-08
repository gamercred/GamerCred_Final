import { HTMLAttributes } from 'react';
import { cn } from './cn';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: Size;
  online?: boolean;
  verified?: boolean;
}

const sizeClasses: Record<Size, string> = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
  xl: 'h-20 w-20 text-xl',
};

const dotSize: Record<Size, string> = {
  xs: 'h-1.5 w-1.5 -bottom-0 -right-0',
  sm: 'h-2 w-2 -bottom-0 -right-0',
  md: 'h-2.5 w-2.5 -bottom-0 -right-0',
  lg: 'h-3 w-3 -bottom-0.5 -right-0.5',
  xl: 'h-4 w-4 -bottom-0.5 -right-0.5',
};

export function Avatar({
  src,
  alt = '',
  fallback,
  size = 'md',
  online,
  verified,
  className,
  ...rest
}: Props) {
  const initial = fallback?.trim().charAt(0).toUpperCase() ?? '?';

  return (
    <div
      className={cn('relative inline-block shrink-0', sizeClasses[size], className)}
      {...rest}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-pill object-cover ring-1 ring-line"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center rounded-pill bg-surface-overlay font-semibold text-fg-muted ring-1 ring-line"
          aria-label={alt}
        >
          {initial}
        </div>
      )}

      {online && (
        <span
          className={cn(
            'absolute rounded-pill bg-ok ring-2 ring-surface',
            dotSize[size],
          )}
          aria-label="online"
        />
      )}

      {verified && (
        <span
          className={cn(
            'absolute -bottom-1 -right-1 rounded-pill bg-brand text-white',
            size === 'xs' || size === 'sm' ? 'p-0.5' : 'p-1',
          )}
          aria-label="verified"
          title="Verified"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn(size === 'xs' ? 'h-1.5 w-1.5' : size === 'sm' ? 'h-2 w-2' : 'h-3 w-3')}
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </div>
  );
}
