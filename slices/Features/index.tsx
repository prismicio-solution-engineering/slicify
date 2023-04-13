import type { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import FeaturesHorizontal from './subComponents/FeaturesHorizontal'

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>

export default function Features({ slice }: FeaturesProps) {
  return (
    <section>
      {
        {
          'leftSide': <FeaturesHorizontal slice={slice} rightSide={false}/>,
          'rightSide': <FeaturesHorizontal slice={slice} rightSide={true}/>,
        }[slice.variation]
      }
    </section>
  )
}
