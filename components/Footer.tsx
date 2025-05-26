import { footerLinks } from "@/content/links";
import { addBasePath } from "@/lib/basePath";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-4">
      <section aria-labelledby="nyttig-information">
        <h2 id="nyttig-information" className="mb-4 text-xl font-bold">
          Nyttig information
        </h2>

        <nav>
          <ul className="space-y-1">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section aria-labelledby="kontakt-supporten">
        <h2 id="kontakt-supporten" className="mb-4 text-xl font-bold">
          Kontakt supporten
        </h2>
        <p className="mb-2">Alle hverdage kl. 14.00-18.00</p>
        <a href="tel:70263636" className="underline">
          Tlf: 7026 3636
        </a>
      </section>

      <div className="col-start-4 col-end-5 text-center text-xs">
        <Image
          src={addBasePath("/ddf_logo.png")}
          alt="Logo"
          width={300}
          height={200}
        />
        <p className="">eReolen er en del af Det Digitale Folkebibliotek</p>
        <a
          href="https://detdigitalefolkebibliotek.dk"
          target="_blank"
          className="underline"
        >
          Læs mere på detdigitalefolkebibliotek.dk
        </a>
      </div>
    </footer>
  );
};

export default Footer;
