import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { addBasePath } from "@/lib/basePath";
import Header from "@/components/Header";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ereolengo.dk"),
  title: "Biblo GO!",
  description:
    "eReolen GO hedder nu Biblo GO! Vælg din kommune for at gå til dit lokale GO!-site.",
  openGraph: {
    title: "Biblo GO!",
    description:
      "eReolen GO hedder nu Biblo GO! Vælg din kommune for at gå til dit lokale GO!-site.",
    images: ["/ereolen_logo_some_go.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblo GO!",
    description:
      "eReolen GO hedder nu Biblo GO! Vælg din kommune for at gå til dit lokale GO!-site.",
    images: ["/ereolen_logo_some_go.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${dmSans.variable} ${dmSans.className}`}>
      <head>
        <script
          data-category-consent="cookie_cat_statistic"
          data-consent-src={addBasePath("/tiLoader.min.js")}
          key="ti-loader"
          id="ti-loader"
          defer
        />
        <script id="CookieConsent" src="https://policy.app.cookieinformation.com/uc.js" async
    data-culture="EN" data-gcm-version="2.0" type="text/javascript"></script>
      </head>
      <body className="bg-bg-primary flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex flex-1 px-4">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col pt-8 md:pt-[8vh] pb-12 md:pb-16">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
