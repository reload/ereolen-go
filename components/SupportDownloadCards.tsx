import { helpANdSupportLink } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";

const SupportDownloadCards = () => {
  return (
    <section className="grid gap-6 p-6 md:grid-cols-2">
      {/* Help and Support */}
      <a
        href={helpANdSupportLink}
        className="flex items-center justify-center rounded-xl bg-[#C0163A] p-6 text-white shadow-lg"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-white text-6xl font-bold">
            ?
          </div>
          <div className="font-semibold">
            <p>Hjælp og</p>
            <p>support</p>
          </div>
        </div>
      </a>

      {/* Download App */}
      <div className="flex items-center justify-center gap-4 rounded-xl bg-[#7B848E] p-6 text-white shadow-lg">
        <Image
          src={addBasePath("/ereolen_app.png")}
          alt="eReolen Icon"
          className="rounded-xl"
          width={100}
          height={100}
        />
        <div className="flex h-full flex-col justify-between">
          <div className="font-semibold">
            <p>Download</p>
            <p>eReolens app</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=dk.redia.eReolen"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={addBasePath("/google_play.svg")} alt="Google Play" />
            </a>
            <a
              href="https://apps.apple.com/dk/app/ereolen/id1438218229?l=da"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={addBasePath("/app_store.svg")} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportDownloadCards;
