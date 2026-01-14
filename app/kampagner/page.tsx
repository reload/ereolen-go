import { LibrarySelect } from "@/components/library-select";
import SupportDownloadCards from "@/components/SupportDownloadCards";
import { Typography } from "@/components/typography";

export default function KampagnerPage() {
  return (
    <div className="grid h-full w-full flex-1 grid-rows-[auto_min-content] items-center gap-8">
      <div className="mx-auto grid w-full justify-center space-y-4 py-12">
        <Typography variant={"h1"} as={"h1"} className="md:text-center">
          Du er der næsten
        </Typography>
        <p className="md:text-center">
          Find din kommune herunder for at blive omdirigeret til dit lokale
          GO-site
        </p>
        <div className="mt-6 flex w-full flex-col justify-center space-y-4 md:mt-16">
          <Typography
            className="w-full md:text-center"
            variant={"h4"}
            as={"h2"}
          >
            Vælg kommune for at gå til dit lokale GO-site
          </Typography>
          <LibrarySelect className="mx-auto" customPath="/kampagner" />
        </div>
      </div>
      <SupportDownloadCards />
    </div>
  );
}
