"use client";
import { useEffect } from "react";

function getBasePath(): string {
  const path = window.location.pathname;
  return path.startsWith("/ereolen") ? "/ereolen" : "";
}

export default function NotFound() {
  useEffect(() => {
    const { pathname, search } = window.location;

    const isLegacy = /\/ting\/object\/[^/?#]+\/?$/.test(pathname);

    const base = getBasePath();

    const redirectTo = isLegacy
      ? `${base}/?from=${encodeURIComponent(pathname + search)}`
      : `${base}/`;

    window.location.replace(redirectTo);
  }, []);

  return null;
}
