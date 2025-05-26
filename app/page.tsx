import { ComboboxSelect } from "@/components/combobox-select";
import HtmlContent from "@/components/HtmlContent";

export default function Home() {
  return (
    <>
      <ComboboxSelect />
      <HtmlContent src="/content/main.html" />
    </>
  );
}
