import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { PostListItem } from '@/components/pages/home/PostListItem'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import type { HomePagePayload } from '@/types'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import FramerButton from '@/components/shared/FramerButton'
import { HomePageFramer } from './HomePageFramer'

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
        <div className="z-10 flex flex-row items-stretch justify-between w-full px-8">
          {/* Passion */}
          {passion && (
            <div className="max-w-sm p-5 text-white bg-green-600 bg-opacity-70 backdrop-blur-2px">
              <CustomPortableText value={passion} />
              <FramerButton />
            </div>
          )}
          {/* Identity */}
          {identity && (
            <div className="max-w-sm p-5 text-white bg-green-600 bg-opacity-70 backdrop-blur-2px">
              <CustomPortableText value={identity} />
            </div>
          )}
          {/* Worldwide */}
          {worldwide && (
            <div className="max-w-sm p-5 text-white bg-green-600 bg-opacity-70 backdrop-blur-2px">
              <CustomPortableText value={worldwide} />
            </div>
          )}
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
      {/* Showcase projects */}
      <div className="container">
        {showcaseProjects && showcaseProjects.length > 0 && (
          <CarouselReadMore title="Showcase projects">
            {showcaseProjects.map((project, key) => {
              return (
                <ProjectListItem
                  project={project}
                  odd={key % 2}
                  width={width}
                  height={height}
                  key={key}
                  className="max-w-xs "
                />
              )
            })}
          </CarouselReadMore>
        )}
      </div>

      {/* Showcase posts */}

      <HomePageFramer
        showcasePosts={showcasePosts}
        width={width}
        height={height}
      />
    </div>
  )
}

export default HomePage
