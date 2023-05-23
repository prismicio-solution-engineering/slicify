import type { Content } from '@prismicio/client'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import {AnchorLink} from '@/prismicio'

export default function HeaderLinkDefault(slice: Content.HeaderLinkSliceDefault) {
  return (
    <div className="hidden md:block">
      <PrismicLink
        internalComponent={AnchorLink}
        field={slice.primary.link}
        anchor = {slice.primary.anchor}
        className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        <PrismicRichText field={slice.primary.label} />
      </PrismicLink>
    </div>
  )
}
