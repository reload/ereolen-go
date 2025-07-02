import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-bg-primary p-4 pt-8">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/"
          className="shadow-button focus-visible hover:shadow-button-hover border-foreground text-foreground text-typo-button-sm pointer-events-auto inline-flex h-[40px] items-center justify-center rounded-full border px-3 whitespace-nowrap uppercase transition hover:translate-x-[1px] hover:translate-y-[1px] hover:cursor-pointer active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:pointer-events-none disabled:opacity-50"
        >
          <Image
            src={addBasePath("/logo-borderless.svg")}
            alt="Logo"
            width={225}
            height={100}
            className="h-auto w-full max-w-[225px]"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
