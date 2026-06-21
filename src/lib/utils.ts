import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
