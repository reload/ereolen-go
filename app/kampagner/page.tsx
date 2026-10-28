import { LibrarySelect } from "@/components/library-select";
import SupportDownloadCards from "@/components/SupportDownloadCards";
import { Typography } from "@/components/typography";

export default function KampagnerPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-[8vh]">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <Typography variant="h1" as="h1" className="text-balance">
          Du er der næsten
        </Typography>
        <Typography variant="p" as="p" className="mb-4">
          Find din kommune herunder for at komme videre til indholdet.
        </Typography>
        <Typography variant="h2" as="h2">
          Vælg din kommune for at gå til dit GO!-site
        </Typography>
        <LibrarySelect className="mx-auto mt-2 w-full" customPath="/kampagner" />
      </div>
      <SupportDownloadCards />
    </div>
  );
}
