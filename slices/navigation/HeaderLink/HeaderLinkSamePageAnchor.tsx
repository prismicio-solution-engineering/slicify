import type { Content } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

export default function HeaderLinkSamePageAnchor(slice: Content.HeaderLinkSliceSamePageAnchor) {
  return (
    <div className="hidden md:block">
      <Link
        href={"#"+slice.primary.anchor}
        className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      >
        <PrismicRichText field={slice.primary.label} />
      </Link>
    </div>
  )
}
