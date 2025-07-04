"use client";
import { useMemo } from "react";

export interface DeviceDetection {
  isMac: boolean;
  isWindows: boolean;
  isLinux: boolean;
  isActuallyMobile: boolean;
  isAndroidDevice: boolean;
  isIOSDevice: boolean;
  isDesktop: boolean;
  userAgent: string;
  platform: string;
}

/**
 * Custom hook for reliable device detection
 *
 * Provides more accurate device detection than react-device-detect,
 * which can incorrectly identify desktop Macs as mobile iOS devices.
 *
 * @returns DeviceDetection object with platform and device type information
 */
export const useDeviceDetection = (): DeviceDetection => {
  return useMemo(() => {
    // Safely access navigator in browser environment
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return {
        isMac: false,
        isWindows: false,
        isLinux: false,
        isActuallyMobile: false,
        isAndroidDevice: false,
        isIOSDevice: false,
        isDesktop: false,
        userAgent: "",
        platform: "",
      };
    }

    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    // Detect desktop operating systems
    const isMac =
      /Mac|Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent) ||
      /Mac/.test(platform);

    const isWindows = /Win|Windows/.test(userAgent) || /Win/.test(platform);

    // Detect mobile devices (excluding desktop Macs that might be misidentified)
    const isActuallyMobile =
      /Mobile|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/.test(
        userAgent,
      ) && !/Macintosh/.test(userAgent); // Exclude Mac desktop

    // Detect specific mobile platforms
    const isAndroidDevice = /Android/.test(userAgent) && isActuallyMobile;

    const isLinux =
      /Linux/.test(userAgent) &&
      !isAndroidDevice && // Android is Linux-based but we want to separate it
      !/Mac/.test(userAgent);

    const isIOSDevice =
      (/iPhone|iPad|iPod/.test(userAgent) ||
        (/Safari/.test(userAgent) && /Mobile/.test(userAgent))) &&
      !isMac; // Exclude Mac desktop Safari

    // Desktop is anything that's not actually mobile
    const isDesktop = !isActuallyMobile;

    return {
      isMac,
      isWindows,
      isLinux,
      isActuallyMobile,
      isAndroidDevice,
      isIOSDevice,
      isDesktop,
      userAgent,
      platform,
    };
  }, []); // Empty dependency array since navigator properties don't change
};
