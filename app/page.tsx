import { LibrarySelect } from "@/components/library-select";
import HtmlContent from "@/components/HtmlContent";
import SupportDownloadCards from "@/components/SupportDownloadCards";
import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <div className="grid h-full w-full flex-1 grid-rows-[auto_min-content] items-center gap-8">
      <div className="mx-auto grid w-full justify-center space-y-4 py-12">
        <Typography
          variant={"h1"}
          as={"h1"}
          className="flex items-center justify-center gap-4 text-center"
        >
          eReolen GO er flyttet
        </Typography>
        <HtmlContent src="/content/main.html" />
        <div className="mx-auto mt-16 space-y-4">
          <Typography variant={"h4"} as={"h2"}>
            Vælg din kommune for at gå til det nye GO
          </Typography>
          <LibrarySelect />
        </div>
      </div>
      <SupportDownloadCards />
    </div>
  );
}
