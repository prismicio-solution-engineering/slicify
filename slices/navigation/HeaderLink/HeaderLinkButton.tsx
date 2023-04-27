import { Button } from '@/components/Button'
import type { Content } from '@prismicio/client'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

export default function HeaderLinkDefault(slice: Content.HeaderLinkSliceButton) {
  return (
    <section>
      <Button field={slice.primary.link} color="blue">
        <span>
          <PrismicRichText field={slice.primary.label} />
        </span>
      </Button>
    </section>
  )
}
