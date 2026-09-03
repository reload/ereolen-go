import { footerLinks } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import { Typography as Typo } from "@/components/typography";
import { Link } from "@/components/link";

const Footer = () => {
  return (
    <footer className="bg-bg-primary px-4 py-10 md:py-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_2fr] lg:grid-cols-[1fr_2fr_2fr] md:gap-8">
        <section aria-labelledby="nyttig-information">
          <Typo as="h3" variant="h4" className="mb-4" id="nyttig-information">
            Nyttig information
          </Typo>

          <nav>
            <ul className="space-y-1" aria-label="Liste af nyttige links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link target="_blank" href={link.href} className="underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="kontakt-supporten">
          <Typo as="h3" variant="h4" className="mb-4" id="kontakt-supporten">
            Kontakt supporten
          </Typo>
          <Typo as="p" variant="small" className="mb-1">
            Alle hverdage kl. 14.00-18.00
          </Typo>
          <Link className="underline" href="tel:70263636">
            Tlf: 7026 3636
          </Link>
        </section>

        <div className="flex flex-col items-center">
          <Image
            src={addBasePath("/ddf_logo.png")}
            alt="Det Digitale Folkebiblioteks logo"
            width={320}
            height={80}
            className="h-auto w-full max-w-[300px]"
          />
          <Typo as="p" variant="small" className="text-center">
            Biblo GO! er en del af Det Digitale Folkebibliotek
          </Typo>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
