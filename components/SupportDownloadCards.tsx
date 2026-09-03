"use client";
import { helpANdSupportLink } from "@/content/links";
import React from "react";
import { Typography as Typo } from "@/components/typography";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/link";
import Image from "next/image";
import { addBasePath } from "@/lib/basePath";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import { getDownloadLink } from "@/lib/getDownloadLink";

type CardWrapperProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const CardWrapper = ({ href, className = "", children }: CardWrapperProps) => {
  const base =
    "flex items-center rounded-2xl p-3 md:p-4 justify-center text-card-primary-foreground";
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
  const deviceInfo = useDeviceDetection();
  const downloadLink = getDownloadLink(deviceInfo);

  return (
    <section className="mx-auto grid w-full max-w-2xl gap-5 xs:grid-cols-2 md:gap-6">
      <CardWrapper
        href={helpANdSupportLink}
        className="bg-card-primary grid aspect-square grid-rows-[1fr_auto] md:grid-rows-[1fr_30px] justify-items-center gap-2 md:gap-4 hover:no-underline h-full"
      >
        <Image
          src={addBasePath("/GO-chat-bubble.png")}
          alt=""
          width={320}
          height={245}
          className="h-auto w-[78%] max-w-[320px] object-contain self-center md:self-end"
        />
        <Typo as="p" variant="caption" className="mb-2 self-start md:mb-0">
          Hjælp og support
        </Typo>
      </CardWrapper>

      <CardWrapper
        href={downloadLink}
        className="bg-card-secondary grid aspect-square place-items-center hover:no-underline h-full"
      >
        <Image
          src={addBasePath("/GO-download-app.png")}
          alt="Download appen"
          width={250}
          height={333}
          className="h-auto w-[86%] max-w-[78%] md:max-w-[260px] object-contain"
        />
      </CardWrapper>
    </section>
  );
};

export default SupportDownloadCards;
