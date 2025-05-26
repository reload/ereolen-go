import { LibrarySelect } from "@/components/library-select";
import HtmlContent from "@/components/HtmlContent";

export default function Home() {
  return (
    <>
      <LibrarySelect />
      <HtmlContent src="/content/main.html" />
    </>
  );
}
