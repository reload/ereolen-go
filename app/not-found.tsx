"use client";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const { pathname, search } = window.location;

    const isLegacy = /^\/+ting\/+object\/+[^/?#]+\/?$/.test(pathname);
    const base = process.env.NODE_ENV === "production" ? "/ereolen" : "";

    const redirectTo = isLegacy
      ? `${base}/?from=${encodeURIComponent(pathname + search)}`
      : `${base}/`;

    window.location.replace(redirectTo);
  }, []);

  return null;
}
