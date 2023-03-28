import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  // dataset: `${process.env.SANITY_DATABASE}`,
  // projectId: `${process.env.SANITY_PROJECT_ID}`,
  projectId: 'kodkuimt',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
