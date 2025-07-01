// Note: This file is currently unused in the application.
// Retained for reference due to significant design changes.
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-primary bg-scondary border-b-40 p-4 pt-8">
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
