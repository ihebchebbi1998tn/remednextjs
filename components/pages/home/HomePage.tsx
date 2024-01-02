import { toPlainText } from '@portabletext/react'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { Globe, Heart, User } from 'lucide-react'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { CardNavigation } from '@/components/shared/CardNavigation'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'
import { Header } from '@/components/shared/Header'
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
      <header className="relative flex flex-col items-center justify-center w-full h-screen">
        {/* Header */}
        {title && (
          <Header
            centered
            title={title}
            description={overview}
            className="relative z-10 p-5 text-white mb-11"
          />
        )}
        <div className="z-10 flex flex-col items-stretch justify-between w-auto px-0 md:w-full md:flex-row md:px-52">
          {/* Passion */}
          <CardNavigation
            className="p-5 md:max-w-sm bg-opacity-70 backdrop-blur-2px md:py-0"
            title="Passion"
            description={passion ? toPlainText(passion) : ''}
            buttonText="Read more"
            buttonLink="/"
            active={true}
            icon={Heart}
          />
          {/* Identity */}
          <CardNavigation
            className="p-5 md:max-w-sm bg-opacity-70 backdrop-blur-2px"
            title="Identity"
            description={identity ? toPlainText(identity) : ''}
            buttonText="Read more"
            buttonLink="/"
            active={true}
            icon={User}
          />
          {/* Worldwide */}
          <CardNavigation
            className="p-5 md:max-w-sm bg-opacity-70 backdrop-blur-2px"
            title="Worldwide"
            description={worldwide ? toPlainText(worldwide) : ''}
            buttonText="Read more"
            buttonLink="/"
            active={true}
            icon={Globe}
          />
        </div>

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 object-cover w-full h-full filter brightness-50"
        >
          <source src="/videos/omp.mp4" type="video/mp4" />
        </video>
      </header>
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
