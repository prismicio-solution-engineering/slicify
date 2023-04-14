import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import FeaturesHorizontal from "./FeaturesHorizontal";
import FeaturesVertical from "./FeaturesVertical";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

export default function Features({ slice }: FeaturesProps) {
  return (
    <section>
      {
        {
          leftSide: <FeaturesHorizontal slice={slice} rightSide={false} />,
          rightSide: <FeaturesHorizontal slice={slice} rightSide={true} />,
          above: <FeaturesHorizontal slice={slice} rightSide={true} />,
          below: <FeaturesHorizontal slice={slice} rightSide={true} />,
        }[slice.variation]
      }
    </section>
  );
}
