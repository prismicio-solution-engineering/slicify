import type { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

export default function Hero({ slice }: HeroProps) {
  return (
    <section>
      `Placeholder component for "${slice.slice_type}" Slices (variation: "$
      {slice.variation}")`
    </section>
  );
}
