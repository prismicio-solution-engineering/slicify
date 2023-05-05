import type { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

export type ArticleListProps = SliceComponentProps<Content.ArticleListSlice>

export default function ArticleList({ slice }: ArticleListProps) {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.title}
        fallback={`Placeholder component for "${slice.slice_type}" Slices (variation: "${slice.variation}")`}
      />
    </section>
  )
}
