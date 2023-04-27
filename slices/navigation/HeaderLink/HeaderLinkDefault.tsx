import type { Content } from '@prismicio/client'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

export default function HeaderLinkDefault(slice: Content.HeaderLinkSliceDefault) {
  return (
    <div className="hidden md:block">
      <PrismicLink
        field={slice.primary.link}
        className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        <PrismicRichText field={slice.primary.label} />
      </PrismicLink>
    </div>
  )
}
