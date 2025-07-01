import { helpANdSupportLink } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import { Typography as Typo } from "@/components/typography";

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
  return (
    <section className="mt-auto grid w-full gap-6 md:grid-cols-2">
      {/* Help and Support */}
      <CardWrapper
        href={helpANdSupportLink}
        className="bg-primary hover:no-underline"
      >
        <div className="flex items-center gap-4">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-4 border-white text-6xl font-semibold">
            ?
          </div>
          <div className="font-semibold">
            <Typo as="p" variant="h4">
              Hjælp og support
            </Typo>
          </div>
        </div>
      </CardWrapper>

      {/* Download App */}
      <CardWrapper className="bg-[#7B848E]">
        <Image
          src={addBasePath("/ereolen_app.png")}
          alt="eReolen Icon"
          className="rounded-xl"
          width={80}
          height={80}
        />
        <div className="ml-4 flex h-full flex-col justify-between">
          <div className="font-semibold">
            <Typo as="p" variant="h4">
              Download eReolens app
            </Typo>
          </div>

          <div className="mt-2 flex gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=dk.redia.eReolen"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={addBasePath("/google_play.svg")} alt="Google Play" />
            </Link>
            <Link
              href="https://apps.apple.com/dk/app/ereolen/id1438218229?l=da"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={addBasePath("/app_store.svg")} alt="App Store" />
            </Link>
          </div>
        </div>
      </CardWrapper>
    </section>
  );
};

export default SupportDownloadCards;
