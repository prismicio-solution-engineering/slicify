import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '../../prismicio'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({ req })

  await setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client })
}