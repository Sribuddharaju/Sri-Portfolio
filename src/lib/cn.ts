type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | { [key: string]: boolean | undefined | null };

function toVal(input: ClassValue): string {
  if (!input) return '';
  if (typeof input === 'string' || typeof input === 'number') return String(input);
  if (Array.isArray(input)) return input.map(toVal).filter(Boolean).join(' ');
  if (typeof input === 'object') {
    return Object.entries(input)
      .filter(([, v]) => Boolean(v))
      .map(([k]) => k)
      .join(' ');
  }
  return '';
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toVal).filter(Boolean).join(' ');
}
