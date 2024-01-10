import { toPlainText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { AccordionDemo } from '@/components/demos/AccordionDemo'
import { MasonryDemo } from '@/components/demos/MasonryDemo'
import { MasonryDemo2 } from '@/components/demos/MasonryDemo2'
import { PostsDemo } from '@/components/demos/PostsDemo'
import { SectionBoost } from '@/components/demos/SectionBoost'
import { SectionHero } from '@/components/demos/SectionHero'
import { Stats } from '@/components/demos/Stats'
import { StatsBlock } from '@/components/demos/StatsBlock'
import { TestimonialsDemo } from '@/components/demos/TestimonialsDemo'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import BlockBenefits from '@/components/shared/BlockBenefits'
import Bullet from '@/components/shared/Bullet'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'
import { bullets } from '@/lib/data'
import { urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

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
  console.log('sections[3] : ', sections[3])

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
      <div className="relative w-full"></div>

      {/* Showcase posts */}
      {sections[1] && (
        <CarouselReadMore title="Showcase posts" titleClassName="ml-8">
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
          desc={toPlainText(sections[3]?.description || []) || ''}
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
        <BlockBenefits
          title={sections[7]?.title}
          desc={toPlainText(sections[7]?.description || []) || ''}
          imgPos="right"
          secondaryNode={<MasonryDemo2 />}
        >
          <AccordionDemo
            data={sections[7]?.blocks?.map((item) => {
              return {
                title: item.title,
                description: toPlainText(item.description || []),
              }
            })}
          />
        </BlockBenefits>

        {/* TestimonialsDemo */}
        <TestimonialsDemo />
      </div>
    </div>
  )
}

export default HomePage
