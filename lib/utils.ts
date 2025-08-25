import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildRedirectParam(pathname: string, search: string): string {
  const fullPath = pathname + search;
  return `/?from=${encodeURIComponent(fullPath)}`;
}

type BuildRedirectUrlParams = {
  originalPath: string;
  libraryDomain: string;
  customPath?: string;
  externalRedirectUrl?: string;
};

/**
 * Converts a legacy eReolen path to the corresponding new work path.
 * Specifically looks for `/ting/object/:id` and maps it to `/work/work-of::id`.
 * For libraries with redirectUrl, uses that directly without translation.
 * If the legacy structure is invalid, returns root path.
 */
export function buildRedirectUrl({
  originalPath,
  libraryDomain,
  customPath,
  externalRedirectUrl,
}: BuildRedirectUrlParams): string {
  // If this library has an external redirect URL, use it directly without any path translation
  if (externalRedirectUrl) {
    return externalRedirectUrl;
  }

  // Split the original path into pathname and search parts, ignoring all query parameters
  const [pathname] = originalPath.split("?");
  const decodedPath = decodeURIComponent(pathname);
  const pathSegments = decodedPath.split("/").filter(Boolean);

  // Step 1: Find 'ting' and ensure it's followed by 'object'
  const tingIndex = pathSegments.indexOf("ting");
  const objectFollowsTing =
    tingIndex >= 0 && pathSegments[tingIndex + 1] === "object";

  // Extract ID from the next segment after 'object'
  const idExists = objectFollowsTing && pathSegments.length > tingIndex + 2;
  const workId = idExists ? pathSegments[tingIndex + 2] : null;

  if (workId) {
    const redirectUrl = new URL(`https://${libraryDomain}`);
    redirectUrl.pathname = `/work/work-of:${workId}`;
    return redirectUrl.toString();
  }

  const redirectPath = customPath || "/";
  const redirectUrl = new URL(`https://${libraryDomain}`);
  redirectUrl.pathname = redirectPath;

  return redirectUrl.toString();
}
