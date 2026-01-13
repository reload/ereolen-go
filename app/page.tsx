import { LibrarySelect } from "@/components/library-select";
import SupportDownloadCards from "@/components/SupportDownloadCards";
import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <div className="grid h-full w-full flex-1 grid-rows-[auto_min-content] items-center gap-8">
      <div className="mx-auto grid w-full justify-center space-y-4 py-12">
        <Typography variant={"h1"} as={"h1"} className="md:text-center">
          eReolen GO er flyttet
        </Typography>
        <div className="mx-auto mt-6 flex w-full flex-col justify-center space-y-4 md:mt-16">
          <Typography variant={"h4"} as={"h2"}>
            Vælg din kommune for at gå til dit lokale GO-site
          </Typography>
          <LibrarySelect
            className="mx-auto"
            hoverHelpText="Hvis din skole er tilmeldt GO med UNI-login, skal du vælge
                skolens kommune. Hvis du vil bruge almindeligt bibliotekslogin,
                skal du vælge den kommune, du bor i."
          />
        </div>
      </div>
      <SupportDownloadCards />
    </div>
  );
}
