import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="mx-auto max-w-6xl p-4">
        <Image
          src={addBasePath("/logo.svg")}
          alt="Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="h-10 bg-[#b81b40]"></div>
    </header>
  );
};

export default Header;
