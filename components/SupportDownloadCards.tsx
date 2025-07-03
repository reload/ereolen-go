"use client";
import { downloadAppLinks, helpANdSupportLink } from "@/content/links";
import React from "react";
import { Typography as Typo } from "@/components/typography";
import { isAndroid } from "react-device-detect";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/link";
import Image from "next/image";
import { addBasePath } from "@/lib/basePath";

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
    <section className="mx-auto grid w-full max-w-lg gap-6 md:grid-cols-2">
      {/* Help and Support */}
      <CardWrapper
        href={helpANdSupportLink}
        className="bg-card-primary text-card-primary-foreground grid aspect-square grid-rows-[1fr_auto] justify-items-center hover:no-underline"
      >
        <Image
          src={addBasePath("/eReolenGoQuestionMark_trim.png")}
          alt="Support Icon"
          width={150}
          height={150}
        />
        <Typo as="p" variant="p" className="!font-bold">
          Hjælp og support
        </Typo>
      </CardWrapper>

      {/* Download App */}
      <CardWrapper
        href={downloadLink}
        className="bg-card-secondary text-card-secondary-foreground grid aspect-square grid-rows-[1fr_auto] justify-items-center hover:no-underline"
      >
        <Image
          src={addBasePath("/eReolenGoApp_trim.png")}
          alt="Download App Icon"
          width={150}
          height={150}
        />
        <Typo as="p" variant="p" className="!font-bold">
          Download GO-appen
        </Typo>
      </CardWrapper>
    </section>
  );
};

export default SupportDownloadCards;
