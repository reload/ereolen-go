import { FormattedText } from "@/components/formattedText";
import { promises as fs } from "fs";
import path from "path";

interface HtmlContentProps {
  src: string;
}

export default async function HtmlContent({ src }: HtmlContentProps) {
  const filePath = path.join(process.cwd(), src);
  const content = await fs.readFile(filePath, "utf-8");

  return <FormattedText html={content} className="space-y-2 text-center" />;
}
