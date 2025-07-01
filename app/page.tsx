import { LibrarySelect } from "@/components/library-select";
import HtmlContent from "@/components/HtmlContent";
import SupportDownloadCards from "@/components/SupportDownloadCards";
import { Typography } from "@/components/typography";
import Image from "next/image";
import { addBasePath } from "@/lib/basePath";

export default function Home() {
  return (
    <div className="grid h-full w-full flex-1 grid-rows-[auto_min-content] items-center gap-8">
      <div className="mx-auto grid w-full justify-center space-y-4 py-12">
        <h1 className="text-primary flex items-center justify-center gap-4 text-center text-6xl font-extrabold">
          <Image
            src={addBasePath("/logo-red.png")}
            alt="EReolen Logo"
            width={225}
            height={100}
            className="h-auto w-full max-w-[225px]"
          />
          er flyttet
        </h1>
        <HtmlContent src="/content/main.html" />
        <div className="mx-auto mt-16 space-y-4">
          <Typography variant={"h3"} as={"h2"}>
            Vælg dit lokale bibliotek for at få adgang til eReolen
          </Typography>
          <LibrarySelect />
        </div>
      </div>
      <SupportDownloadCards />
    </div>
  );
}
