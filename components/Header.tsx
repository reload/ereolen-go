import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="border-t-primary bg-scondary border-t-40 p-4 pt-8">
      <div className="mx-auto w-full max-w-6xl">
        <Image
          src={addBasePath("/logo.svg")}
          alt="Logo"
          width={225}
          height={100}
          className="h-auto w-full max-w-[225px]"
        />
      </div>
    </header>
  );
};

export default Header;
