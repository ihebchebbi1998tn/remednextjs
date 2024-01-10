import { toPlainText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { AccordionDemo } from '@/components/demos/AccordionDemo'
import { MasonryDemo } from '@/components/demos/MasonryDemo'
import { MasonryDemo2 } from '@/components/demos/MasonryDemo2'
import { PostsDemo } from '@/components/demos/PostsDemo'
import { SectionDemo } from '@/components/demos/SectionDemo'
import { SectionHero } from '@/components/demos/SectionHero'
import { StatsDemo } from '@/components/demos/StatsDemo'
import { StatsDemo2 } from '@/components/demos/StatsDemo2'
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
  const {
    sections = [],
  } = data ?? {}
  console.log(
    'urlForImage(sections[2]?.coverImage)?.url() : ',
    urlForImage(sections[2]?.coverImage)?.url(),
  )

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
        coverImage={
          urlForImage(sections[2]?.coverImage)?.url() ?? ''
        }
        width={width}
        height={height}
      />
      <div className="container overflow-hidden">
        <BlockBenefits
          title="Providing Sustainable Energy Solutions"
          desc="Nam vitae tortor quis est tempus egestas. Suspendisse non erat non mi imperdiet fringilla at vel ipsum. Proin rutrum, diam vel scelerisque luctus, leo dui sodales massa, et mattis urna felis quis mi turpis egestas."
          image={{
            src: '/images/background_01.jpg',
            alt: 'background',
          }}
          imgPos="left"
          secondaryNode={<MasonryDemo />}
        >
          <div className="w-full mt-5">
            {bullets.map((item, index) => (
              <Bullet key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Bullet>
            ))}
          </div>
        </BlockBenefits>
      </div>
      <StatsDemo2 />
      <SectionDemo />
      <StatsDemo />
      <PostsDemo />
      <div className="container">
        {/* AccordionDemo */}
        <BlockBenefits
          title="Providing Sustainable Energy Solutions"
          desc="Nam vitae tortor quis est tempus egestas. Suspendisse non erat non mi imperdiet fringilla at vel ipsum. Proin rutrum, diam vel scelerisque luctus, leo dui sodales massa, et mattis urna felis quis mi turpis egestas."
          image={{
            src: '/images/background_01.jpg',
            alt: 'background',
          }}
          imgPos="right"
          secondaryNode={<MasonryDemo2 />}
        >
          <AccordionDemo />
        </BlockBenefits>
        <TestimonialsDemo />
      </div>
    </div>
  )
}

export default HomePage
