import { footerLinks } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import { Typography as Typo } from "@/components/typography";
import { Link } from "@/components/link";

const Footer = () => {
  return (
    <footer className="border-t-2 bg-[#282828] p-4 py-8 text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
        <section aria-labelledby="nyttig-information">
          <Typo
            as="h3"
            variant="h4"
            className="mb-4 text-xl font-bold"
            id="nyttig-information"
          >
            Nyttig information
          </Typo>

          <nav>
            <ul className="space-y-1">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="kontakt-supporten">
          <Typo
            as="h3"
            variant="h4"
            className="mb-4 text-xl font-bold"
            id="kontakt-supporten"
          >
            Kontakt supporten
          </Typo>
          <Typo as="p" variant="small" className="mb-2 font-bold">
            Alle hverdage kl. 14.00-18.00
          </Typo>
          <Link href="tel:70263636">Tlf: 7026 3636</Link>
        </section>

        <div className="mx-auto mt-12 space-y-6 self-center justify-self-end md:col-span-2 md:col-start-3 md:mx-0 md:mt-0">
          <Image
            src={addBasePath("/ereolen-logo-white.svg")}
            alt="Logo"
            width={300}
            height={200}
          />
          <div className="text-center md:text-left">
            <Typo as="p" variant="small" className="font-bold">
              eReolen er en del af Det Digitale Folkebibliotek
            </Typo>
            <Link href="https://detdigitalefolkebibliotek.dk" target="_blank">
              Læs mere på detdigitalefolkebibliotek.dk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
