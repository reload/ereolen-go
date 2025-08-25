"use client";
import { useEffect } from "react";
import { buildRedirectParam } from "@/lib/utils";

export default function NotFound() {
  useEffect(() => {
    const { pathname, search } = window.location;

    const redirectTo = buildRedirectParam(pathname, search);
    console.log("🚀 ~ NotFound ~ redirectTo:", redirectTo);
    window.location.replace(redirectTo);
  }, []);

  return null;
}
