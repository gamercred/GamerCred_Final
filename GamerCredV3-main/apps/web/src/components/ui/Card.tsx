import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './cn';

interface Props extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

const paddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ padding = 'md', interactive, className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'surface-card',
          interactive && 'lift-hover cursor-pointer',
          paddingClasses[padding],
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = 'Card';
