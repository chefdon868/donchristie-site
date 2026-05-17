/**
 * Lightweight class-name joiner. Filters falsy values and joins with spaces.
 * Used by components to compose Tailwind utilities conditionally without
 * pulling in clsx as a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
