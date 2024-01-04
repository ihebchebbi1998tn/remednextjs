import { toPlainText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { AccordionDemo } from '@/components/demos/AccordionDemo'
import HeaderDemo from '@/components/demos/HeaderDemo'
import { MasonryDemo } from '@/components/demos/MasonryDemo'
import { MasonryDemo2 } from '@/components/demos/MasonryDemo2'
import { MasonryDemo3 } from '@/components/demos/MasonryDemo3'
import PostsDemo from '@/components/demos/PostsDemo'
import SectionDemo from '@/components/demos/SectionDemo'
import StatsDemo from '@/components/demos/StatsDemo'
import StatsDemo2 from '@/components/demos/StatsDemo2'
import TestimonialsDemo from '@/components/demos/TestimonialsDemo'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import BlockBenefits from '@/components/shared/BlockBenefits'
import Bullet from '@/components/shared/Bullet'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'
import { bullets } from '@/lib/data'
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
    overview = [],
    showcaseProjects = [],
    showcasePosts,
    title = '',
    passion = '',
    worldwide = '',
    identity = '',
  } = data ?? {}

  return (
    <div className="space-y-20">
      <HeaderDemo />
      <div className="relative w-full"></div>

      {/* Showcase posts */}
      <div className="md:container">
        {showcasePosts && showcasePosts.length > 0 && (
          <CarouselReadMore title="Showcase posts">
            {showcasePosts.map((post, key) => {
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
      </div>
      {/* Showcase projects */}
      <HomePageProjects
        showcaseProjects={showcaseProjects}
        width={width}
        height={height}
      />
      <div className="container">
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
