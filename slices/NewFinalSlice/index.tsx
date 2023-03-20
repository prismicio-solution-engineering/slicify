import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

const NewFinalSlice = ({ slice } : SliceComponentProps<Content.NewFinalSliceSlice>) => (
  <section>
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
  </section>
)

export default NewFinalSlice