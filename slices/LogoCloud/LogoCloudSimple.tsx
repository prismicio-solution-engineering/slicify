import type { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import Image from "next/image";

// Tailwind imports
import { Container } from "@/components/Container";
import logoLaravel from "@/images/logos/laravel.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";

const group = [
  { name: "Transistor", logo: logoTransistor },
  { name: "Tuple", logo: logoTuple },
  { name: "StaticKit", logo: logoStaticKit },
  { name: "Mirage", logo: logoMirage },
  { name: "Laravel", logo: logoLaravel },
  { name: "Statamic", logo: logoStatamic },
];
export default function LogoCloudSimple({
  slice,
  darkMode = false,
}: {
  slice: Content.LogoCloudSliceDefault | Content.LogoCloudSliceSimpleDarkMode;
  darkMode: boolean;
}) {
  return (
    <section>
      <Container
        className={`pb-16 pt-20 text-center lg:pt-32  ${
          darkMode && "bg-dark-blue"
        }`}
      >
        <p
          className={`font-display text-xl ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Trusted by these companies so far
        </p>
        <div
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
            {group.map((company) => (
              <li key={company.name} className="flex">
                <Image src={company.logo} alt={company.name} unoptimized />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
