import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import HeaderLinkDefault from "./HeaderLinkDefault";
import HeaderLinkButton from "./HeaderLinkButton";

export type HeaderLinkProps = SliceComponentProps<Content.HeaderLinkSlice>;

export default function HeaderLink({ slice }: HeaderLinkProps) {
  switch (slice.variation) {
    case "default":
      return <HeaderLinkDefault {...slice} />;
    case "button":
      return <HeaderLinkButton {...slice} />;
  }
}
