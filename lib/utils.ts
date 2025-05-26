import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildRedirectParam(pathname: string, search: string): string {
  const fullPath = pathname + search;
  return `/?from=${encodeURIComponent(fullPath)}`;
}
