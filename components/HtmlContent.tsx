// This component fetches a static HTML file and renders it.
// https://vercel.com/guides/loading-static-file-nextjs-api-route?utm_source=chatgpt.com
import { promises as fs } from "fs";
import path from "path";
interface HtmlContentProps {
  src: string;
}

export default async function HtmlContent({ src }: HtmlContentProps) {
  const filePath = path.join(process.cwd(), src);
  const content = await fs.readFile(filePath, "utf-8");

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
