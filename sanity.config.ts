/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { locate } from '@/sanity/plugins/locate'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import application from '@/sanity/schemas/documents/application'
import author from '@/sanity/schemas/documents/author'
import certification from '@/sanity/schemas/documents/certification'
import opportunity from '@/sanity/schemas/documents/opportunity'
import page from '@/sanity/schemas/documents/page'
import post from '@/sanity/schemas/documents/post'
import project from '@/sanity/schemas/documents/project'
import block from '@/sanity/schemas/objects/block'
import contact from '@/sanity/schemas/objects/contact'
import duration from '@/sanity/schemas/objects/duration'
import internalLink from '@/sanity/schemas/objects/internalLink'
import milestone from '@/sanity/schemas/objects/milestone'
import socialNetwork from '@/sanity/schemas/objects/socialNetwork'
import timeline from '@/sanity/schemas/objects/timeline'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Next.js Personal Website with Sanity.io'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      application,
      certification,
      opportunity,
      duration,
      page,
      project,
      post,
      author,
      internalLink,
      socialNetwork,
      // Objects
      block,
      contact,
      milestone,
      timeline,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
    }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
