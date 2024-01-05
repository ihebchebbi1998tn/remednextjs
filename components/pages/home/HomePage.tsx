import { toPlainText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { Globe, Heart, User } from 'lucide-react'

import { AccordionDemo } from '@/components/demos/AccordionDemo'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import BlockBenefits from '@/components/shared/BlockBenefits'
import Bullet from '@/components/shared/Bullet'
import { CardNavigation } from '@/components/shared/CardNavigation'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'
import { Header } from '@/components/shared/Header'
import { bullets } from '@/lib/data'
import type { HomePagePayload } from '@/types'

import { HomePageProjects } from './HomePageProjects'
import Image from 'next/image'
import { MasonryDemo } from '@/components/demos/MasonryDemo'
import { MasonryDemo2 } from '@/components/demos/MasonryDemo2'
import { MasonryDemo3 } from '@/components/demos/MasonryDemo3'
import SectionDemo from '@/components/demos/SectionDemo'
import HeaderDemo from '@/components/demos/HeaderDemo'
import StatsDemo from '@/components/demos/StatsDemo'
import TestimonialsDemo from '@/components/demos/TestimonialsDemo'

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
      <div className="container">
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
    </div>
  )
}

export default HomePage
