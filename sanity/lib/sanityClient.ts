// import { createClient } from 'next-sanity'
import { createClient } from '@sanity/preview-kit/client'

import { apiVersion, dataset, projectId, useCdn } from '../env'


export const sanityClient = createClient({
  apiVersion: "v2023-06-06",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: true,
  studioUrl: ''
})
// await client.fetch()