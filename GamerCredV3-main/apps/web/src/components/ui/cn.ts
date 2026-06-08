/**
 * Class name merger — concatenates conditional class strings.
 * Use for combining base classes with conditional/variant classes.
 *
 * Example:
 *   cn('px-4 py-2', isActive && 'bg-brand', disabled && 'opacity-50')
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}
