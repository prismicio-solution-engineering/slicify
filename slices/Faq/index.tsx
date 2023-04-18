import type { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

export type FaqProps = SliceComponentProps<Content.FaqSlice>

export default function Faq({ slice }: FaqProps) {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.title}
        fallback={`Placeholder component for "${slice.slice_type}" Slices (variation: "${slice.variation}")`}
      />
    </section>
  )
}
