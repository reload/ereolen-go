"use client";
import { buildRedirectParam } from "@/lib/utils";
import { useEffect } from "react";

export default function CatchAll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const redirectTo = buildRedirectParam(
      window.location.pathname,
      window.location.search
    );

    window.location.replace(redirectTo);
  }, []);

  return null;
}
