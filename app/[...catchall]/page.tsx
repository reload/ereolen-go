"use client";
import { useEffect } from "react";
import { buildRedirectParam } from "@/lib/utils";

export default function CatchAll() {
  useEffect(() => {
    const redirectTo = buildRedirectParam(
      window.location.pathname,
      window.location.search
    );
    window.location.replace(redirectTo);
  }, []);

  return null;
}