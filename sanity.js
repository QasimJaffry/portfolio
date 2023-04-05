import { createClient } from '@sanity/client'

export const config = {
  dataset: `${process.env.SANITY_DATABASE}`,
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-04-03',
}
export const sanityClient = createClient(config)
