import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildRedirectParam(pathname: string, search: string): string {
  const fullPath = pathname + search;
  return `/?from=${encodeURIComponent(fullPath)}`;
}

export function buildRedirectUrl(
  originalPath: string,
  libraryDomain: string
): string {
  const match = originalPath.match(/^\/ting\/object\/(.+)$/);
  const redirectPath = match
    ? `/work/work-of:${decodeURIComponent(match[1])}`
    : "/";

  const url = new URL(`https://${libraryDomain}`);
  url.pathname = redirectPath;

  return url.toString();
}
