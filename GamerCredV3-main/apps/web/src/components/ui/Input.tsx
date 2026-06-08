import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from './cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full rounded-input bg-surface-inset px-3 py-2 text-sm text-fg placeholder:text-fg-dim',
          'border border-line transition-colors',
          'focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand-glow',
          error && 'border-danger focus:border-danger focus:ring-danger',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      />
    );
  },
);
Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full rounded-input bg-surface-inset px-3 py-2 text-sm text-fg placeholder:text-fg-dim',
          'border border-line transition-colors resize-none',
          'focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand-glow',
          error && 'border-danger focus:border-danger focus:ring-danger',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      />
    );
  },
);
Textarea.displayName = 'Textarea';
