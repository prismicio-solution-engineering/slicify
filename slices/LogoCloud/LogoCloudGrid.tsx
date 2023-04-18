import type { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";

// Tailwind imports
import Image from "next/image";
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

export default function LogoCloudGrid({
  slice,
}: {
  slice: Content.LogoCloudSliceThreeColumns;
}) {
  return (
    <section>
      <Container className="pb-16 pt-20 text-center lg:pt-32">
        <p className="font-display text-xl text-slate-900">
          Trusted by these companies so far
        </p>
        <div
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <ul className="grid grid-cols-2 gap-y-8 overflow-hidden sm:mx-0 md:grid-cols-3 sm:gap-x-20 sm:gap-y-8">
            {group.map((company) => (
              <li key={company.name} className="object-contain">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={200}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
