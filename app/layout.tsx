import Script from "next/script";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { addBasePath } from "@/lib/basePath";
import Header from "@/components/Header";

const GTFlexa = localFont({
  src: [
    {
      path: "../fonts/GT-Flexa-Expanded-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/GT-Flexa-Expanded-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-headline",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ereolengo.dk"),
  title: "GO",
  description:
    "GO (tidligere eReolen GO) er flyttet til din lokale bibliotekshjemmeside. Vælg dit bibliotek her.",
  openGraph: {
    title: "GO",
    description:
      "GO (tidligere eReolen GO) er flyttet til din lokale bibliotekshjemmeside. Vælg dit bibliotek her.",
    images: ["/ereolen_logo_some_go.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GO",
    description:
      "GO (tidligere eReolen GO) er flyttet til din lokale bibliotekshjemmeside. Vælg dit bibliotek her.",
    images: ["/ereolen_logo_some_go.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <Script
          key="ti-loader"
          id="ti-loader"
          src={addBasePath("/tiLoader.min.js")}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${GTFlexa.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="bg-bg-primary flex flex-1 px-4">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8 pb-12 md:py-12 md:pb-16">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
