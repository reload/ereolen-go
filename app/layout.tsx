import Script from "next/script";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { addBasePath } from "@/lib/basePath";

const sourceSansProLight = localFont({
  src: "../fonts/source-sans-pro.light.ttf",
});

export const metadata: Metadata = {
  title: "eReolen",
  description: "eReolen er rykket til dit lokale bibliotek",
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
        className={`${sourceSansProLight.className} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="bg-secondary flex flex-1 px-4">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8 md:py-12">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
