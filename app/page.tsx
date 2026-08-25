import { LibrarySelect } from "@/components/library-select";
import SupportDownloadCards from "@/components/SupportDownloadCards";
import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-12 md:gap-[8vh]">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <Typography variant="h1" as="h1" className="text-balance">
          eReolen GO hedder nu Biblo GO!
        </Typography>
        <Typography variant="p" as="p" className="mb-4">
          Bare rolig! Du kan stadig logge ind, som du plejer.
        </Typography>
        <Typography variant="h2" as="h2">
          Vælg din kommune for at gå til dit GO!-site
        </Typography>
        <LibrarySelect
          className="mx-auto mt-2 w-full"
          hoverHelpText="Hvis din skole er tilmeldt GO med UNI-login, skal du vælge
                skolens kommune. Hvis du vil bruge almindeligt bibliotekslogin,
                skal du vælge den kommune, du bor i."
        />
      </div>
      <SupportDownloadCards />
    </div>
  );
}
