import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-bg-primary px-4 pt-6 md:pt-8">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="https://biblogo.dk/"
          className="focus-visible inline-flex items-center"
          aria-label="Biblo GO! forsiden"
        >
          <Image
            src={addBasePath("/GO-bright-green.svg")}
            alt="Biblo GO!"
            width={120}
            height={150}
            className="h-[96px] w-auto md:h-[120px]"
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
