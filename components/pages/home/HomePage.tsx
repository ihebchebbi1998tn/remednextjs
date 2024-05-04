'use client'
import { sendGTMEvent } from '@next/third-parties/google'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import dynamic from 'next/dynamic'
import { toPlainText } from 'next-sanity'
import { useEffect } from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { SectionApplication } from '@/components/shared/SectionApplication'
import { SectionHero } from '@/components/shared/SectionHero'
import { ShowcasePosts } from '@/components/shared/ShowcasePosts'
import { Stats } from '@/components/shared/Stats'
import { StatsBlock } from '@/components/shared/StatsBlock'
import { Testimonials } from '@/components/shared/Testimonials'
import { Skeleton } from '@/components/ui/skeleton'
import { urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { HomePageProjects } from './sections/HomePageProjects'
import HomePageShowcases from './sections/HomePageShowcases'
import Partners from './sections/Partners'

const ContactMap = dynamic(() => import('./sections/ContactMap'), {
  loading: () => <Skeleton className="w-full" />,
  ssr: false,
})
const FormContact = dynamic(() => import('./sections/FormContact'), {
  loading: () => (
    <Skeleton className="sm:min-w-[340px] md:min-w-[400px] lg:min-w-[500px]" />
  ),
})

const width = 550
const height = 280

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN

export interface HomePageProps {
  data: HomePagePayload
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { sections = [], partners } = data ?? {}

  useEffect(() => {
      sendGTMEvent({ event: 'Pageview', value: '/' })
  }, [])

  const testimonials =
    sections[6]?.blocks?.map((item) => {
      return {
        body: <CustomPortableText value={item.description ?? []} />,
        author: {
          name: item.author?.name,
          handle: item.author?.name,
          imageUrl: urlForImage(item.author?.picture)?.url() || '',
        },
      }
    }) ?? []

  const jsonLd =
    sections[0]?.blocks?.map((block) => ({
      '@context': 'http://schema.org',
      '@type': 'Product',
      name: block.title,
      description: toPlainText(block?.description ?? []),
    })) ?? []

  return (
    <div className="space-y-10">
      <SectionHero
        title={sections[0]?.title}
        description={
          <CustomPortableText value={sections[0]?.description ?? []} />
        }
        blocks={
          sections[0]?.blocks?.map(
            (block) =>
              ({
                icon: block.icon,
                title: block.title,
                description: (
                  <CustomPortableText value={block.description ?? []} />
                ),
              }) as any,
          ) ?? []
        }
        video={sections[0]?.videoURL}
      />

      {/* Showcase posts */}
      <div className="container">
        <ShowcasePosts
          title={sections[1]?.title}
          blocks={sections[1]?.showcasePosts?.map((post, key) => {
            return {
              slug: post.slug ?? '',
              coverImage: urlForImage(post.coverImage)?.url() ?? '',
              title: post.title,
              description: <CustomPortableText value={post?.overview ?? []} />,
            }
          })}
        />
      </div>

      {/* Showcase projects */}
      <HomePageProjects
        showcaseProjects={sections[2]?.showcaseProjects}
        title={sections[2]?.title}
        subtitle={sections[2]?.subtitle}
        description={
          <CustomPortableText value={sections[2]?.description ?? []} />
        }
        coverImage={urlForImage(sections[2]?.coverImage)?.url() ?? ''}
        width={width}
        height={height}
      />

      {/* Route expérimentale */}
      <div className="container">
        <StatsBlock
          title={sections[4]?.title}
          subtitle={sections[4]?.subtitle}
          description={
            <CustomPortableText value={sections[4]?.description ?? []} />
          }
          video={sections[4]?.videoURL}
          stats={
            sections[4]?.blocks?.map((item) => ({
              value: item.title,
              name: <CustomPortableText value={item.description ?? []} />,
              unit: item.subtitle,
            })) ?? []
          }
        />
      </div>

      {/* Stats */}
      <Stats
        stats={
          sections[3]?.blocks?.map((item) => ({
            value: item.title,
            name: <CustomPortableText value={item.description ?? []} />,
            unit: item.subtitle,
          })) ?? []
        }
      />

      <div className="container">
        <HomePageShowcases data={data} />
      </div>

      {/* Boost */}
      <div className="container">
        <SectionApplication
          title={sections[5]?.title}
          application={sections[5]?.showcaseApplications?.[0]}
        />
      </div>

      <Partners partners={partners} />

      {/* Contact form */}
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <ContactMap mapboxAccessToken={MAPBOX_ACCESS_TOKEN as string} />
          <FormContact />
        </div>
      </div>

      {/* Testimonials */}
      <div className="container">
        <Testimonials
          title={sections[6]?.title}
          description={sections[6]?.subtitle}
          testimonials={[
            [[testimonials[1]], [testimonials[2]]],
            [[testimonials[3]], [testimonials[4]]],
          ]}
          featuredTestimonial={testimonials[0]}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

export default HomePage
