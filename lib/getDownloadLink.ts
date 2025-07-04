import { DeviceDetection } from "@/hooks/useDeviceDetection";
import { downloadAppLinks } from "@/content/links";

/**
 * Determines the appropriate download link based on device detection
 *
 * @param deviceInfo - Device detection information from useDeviceDetection hook
 * @returns The appropriate download URL for the user's device
 */
export const getDownloadLink = (deviceInfo: DeviceDetection): string => {
  const { isActuallyMobile, isAndroidDevice, isMac } = deviceInfo;

  // Mobile devices get direct app store links
  if (isActuallyMobile) {
    return isAndroidDevice ? downloadAppLinks.android : downloadAppLinks.ios;
  }

  // Desktop handling
  if (isMac) {
    // Mac App Store supports iOS apps on Apple Silicon Macs
    return downloadAppLinks.ios;
  }

  // Windows, Linux, or Android desktop users get the general download page
  return "https://www.detdigitalefolkebibliotek.dk/hent-ereolens-app";
};
