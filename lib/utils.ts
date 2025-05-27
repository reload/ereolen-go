import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildRedirectParam(pathname: string, search: string): string {
  const basePath = pathname.startsWith("/ereolen") ? "/ereolen" : "";
  const fullPath = pathname + search;
  return `${basePath}/?from=${encodeURIComponent(fullPath)}`;
}

/**
 * Converts a legacy eReolen path to the corresponding new work path.
 * Specifically looks for `/ting/object/:id` and maps it to `/work/work-of::id`.
 * If the legacy structure is invalid, returns root path.
 */
export function buildRedirectUrl(
  originalPath: string,
  libraryDomain: string,
): string {
  const decodedPath = decodeURIComponent(originalPath);
  const pathSegments = decodedPath.split("/").filter(Boolean);
  // Step 1: Find 'ting' and ensure it’s followed by 'object'
  const tingIndex = pathSegments.indexOf("ting");
  const objectFollowsTing =
    tingIndex >= 0 && pathSegments[tingIndex + 1] === "object";

  // Extract ID from the next segment after 'object'
  const idExists = objectFollowsTing && pathSegments.length > tingIndex + 2;
  const workId = idExists ? pathSegments[tingIndex + 2] : null;

  const redirectPath = workId ? `/work/work-of:${workId}` : "/";

  const redirectUrl = new URL(`https://${libraryDomain}`);
  redirectUrl.pathname = redirectPath;

  return redirectUrl.toString();
}
