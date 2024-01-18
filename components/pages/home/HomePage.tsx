import { toPlainText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { FormContact } from '@/components/demos/FormContact'
import { MasonryDemo } from '@/components/demos/MasonryDemo'
import { Testimonials } from '@/components/demos/Testimonials'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import BlockBenefits from '@/components/shared/BlockBenefits'
import Bullet from '@/components/shared/Bullet'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { SectionBoost } from '@/components/shared/SectionBoost'
import { SectionHero } from '@/components/shared/SectionHero'
import { Stats } from '@/components/shared/Stats'
import { StatsBlock } from '@/components/shared/StatsBlock'
import { urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import ContactMap from './ContactMap'
import { HomePageProjects } from './HomePageProjects'

const width = 550
const height = 280

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { sections = [] } = data ?? {}
  const testimonials =
    sections[8]?.blocks?.map((item) => {
      return {
        body: toPlainText(item.description || []),
        author: {
          name: item.author?.name,
          handle: item.author?.name,
          imageUrl: urlForImage(item.author?.picture)?.url() || '',
        },
      }
    }) ?? []

  return (
    <div className="space-y-20">
      <SectionHero
        title={sections[0]?.title}
        description={toPlainText(sections[0]?.description || []) || ''}
        blocks={
          sections[0]?.blocks
            ? sections[0]?.blocks.map(
                (block) =>
                  ({
                    icon: block.icon,
                    title: block.title,
                    description: toPlainText(block.description || []) || '',
                  }) as any,
              )
            : []
        }
        video={sections[0]?.videoURL}
      />

      {/* Showcase posts */}
      {sections[1] && (
        <CarouselReadMore title="Showcase posts">
          {sections[1]?.showcasePosts?.map((post, key) => {
            return (
              <ProjectListItem
                project={post}
                odd={key % 2}
                width={width}
                height={height}
                key={key}
                className="h-full max-w-xs"
              />
            )
          })}
        </CarouselReadMore>
      )}

      {/* Showcase projects */}
      <HomePageProjects
        showcaseProjects={sections[2]?.showcaseProjects}
        title={sections[2]?.title}
        subtitle={sections[2]?.subtitle}
        description={toPlainText(sections[2]?.description || []) || ''}
        coverImage={urlForImage(sections[2]?.coverImage)?.url() ?? ''}
        width={width}
        height={height}
      />

      {/* Benefits */}
      <div className="container overflow-hidden">
        <BlockBenefits
          title={sections[3]?.title}
          desc={
            sections[3]?.description && (
              <CustomPortableText value={sections[3]?.description} />
            )
          }
          imgPos="left"
          secondaryNode={<MasonryDemo />}
        >
          <div className="w-full mt-5">
            {sections[3]?.blocks?.map((item, index) => (
              <Bullet key={index} title={item.title} icon={item.icon}>
                {toPlainText(item.description || [])}
              </Bullet>
            ))}
          </div>
        </BlockBenefits>
      </div>

      {/* Stats */}
      <Stats
        stats={
          sections[4]?.blocks?.map((item) => ({
            value: item.title,
            name: toPlainText(item.description || []),
            unit: item.subtitle,
          })) ?? []
        }
      />

      {/* StatsBlock */}
      <StatsBlock
        title={sections[6]?.title}
        subtitle={sections[6]?.subtitle}
        description={toPlainText(sections[6]?.description || []) || ''}
        stats={
          sections[6]?.blocks?.map((item) => ({
            value: item.title,
            name: toPlainText(item.description || []),
            unit: item.subtitle,
          })) ?? []
        }
      />

      {/* Boost */}
      <SectionBoost
        title={sections[5]?.title}
        description={toPlainText(sections[5]?.description || []) || ''}
      />

      {/* PostsDemo */}
      {/* <PostsDemo /> */}

      {/* AccordionDemo */}
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <ContactMap />
          <FormContact className="w-full" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="container">
        <Testimonials
          title={sections[8]?.title}
          description={sections[8]?.subtitle}
          testimonials={[
            [[testimonials[1]], [testimonials[2]]],
            [[testimonials[3]], [testimonials[4]]],
          ]}
          featuredTestimonial={testimonials[0]}
        />
      </div>

      <div className="relative w-full"></div>
    </div>
  )
}

export default HomePage
