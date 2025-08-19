import { contactFormLink, footerLinks } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";
import { Typography as Typo } from "@/components/typography";
import { Link } from "@/components/link";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary p-4 py-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
        <section aria-labelledby="nyttig-information">
          <Typo
            as="h3"
            variant="h4"
            className="mb-4 text-xl"
            id="nyttig-information"
          >
            Nyttig information
          </Typo>

          <nav>
            <ul className="space-y-1">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link target="_blank" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="kontakt-supporten">
          <Typo
            as="h3"
            variant="h4"
            className="mb-4 text-xl"
            id="kontakt-supporten"
          >
            Kontakt supporten
          </Typo>
          <Typo as="p" variant="small" className="mb-2">
            Alle hverdage kl. 14.00-18.00
          </Typo>
          <Link className="mb-2 block" href="tel:70263636">
            Tlf: 7026 3636
          </Link>
          <Typo as="p" variant="small" className="mb-2">
            Eller skriv til os uden for vores åbningstid{" "}
            <Link href={contactFormLink} className="underline">
              her
            </Link>
            .
          </Typo>
        </section>

        <div className="mx-auto mt-12 space-y-6 self-center justify-self-end md:col-span-2 md:col-start-3 md:mx-0 md:mt-0">
          <Image
            className="mx-auto"
            src={addBasePath("/ddf_logo.png")}
            alt="Logo"
            width={300}
            height={200}
          />
          <div className="text-center">
            <Typo as="p" variant="small" className="">
              eReolen GO er en del af Det Digitale Folkebibliotek
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
