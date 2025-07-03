"use client";
import { downloadAppLinks, helpANdSupportLink } from "@/content/links";
import React from "react";
import { Typography as Typo } from "@/components/typography";
import { isAndroid } from "react-device-detect";

import { twMerge } from "tailwind-merge";
import { Link } from "@/components/link";

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const CardWrapper = ({ href, className = "", children }: CardWrapperProps) => {
  const base =
    "flex items-center rounded-xl p-6 shadow-lg text-white justify-center";
  const classes = twMerge(base, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
};

const SupportDownloadCards = () => {
  const downloadLink = isAndroid
    ? downloadAppLinks.android
    : downloadAppLinks.ios;

  return (
    <section className="mt-auto grid w-full gap-6 md:grid-cols-2">
      {/* Help and Support */}
      <CardWrapper
        href={helpANdSupportLink}
        className="bg-card-primary text-card-primary-foreground hover:no-underline"
      >
        <Typo as="p" variant="p" className="!font-bold">
          Hjælp og support
        </Typo>
      </CardWrapper>

      {/* Download App */}
      <CardWrapper
        href={downloadLink}
        className="bg-card-secondary text-card-secondary-foreground hover:no-underline"
      >
        <Typo as="p" variant="p" className="!font-bold">
          Download GO-appen
        </Typo>
      </CardWrapper>
    </section>
  );
};

export default SupportDownloadCards;
