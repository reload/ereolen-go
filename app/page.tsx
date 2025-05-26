import { LibrarySelect } from "@/components/library-select";
import HtmlContent from "@/components/HtmlContent";
import SupportDownloadCards from "@/components/SupportDownloadCards";

export default function Home() {
  return (
    <>
      <HtmlContent src="/content/main.html" />
      <LibrarySelect />
      <SupportDownloadCards />
    </>
  );
}
