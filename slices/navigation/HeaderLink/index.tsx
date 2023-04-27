import { NavLink } from '@/components/NavLink'
import type { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import HeaderLinkSamePageAnchor from './HeaderLinkSamePageAnchor';
import HeaderLinkDefault from './HeaderLinkDefault';
import HeaderLinkButton from './HeaderLinkButton';

export type HeaderLinkProps = SliceComponentProps<Content.HeaderLinkSlice>

export default function HeaderLink({ slice }: HeaderLinkProps) {
  switch (slice.variation) {
    case "default":
      return <HeaderLinkDefault {...slice} />;
    case "samePageAnchor":
      return <HeaderLinkSamePageAnchor {...slice} />;
    case "button":
      return <HeaderLinkButton {...slice} />;
  }
}
