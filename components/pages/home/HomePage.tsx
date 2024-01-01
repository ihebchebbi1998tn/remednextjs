import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { PostListItem } from '@/components/pages/home/PostListItem'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'

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
  } = data ?? {}

  console.log('showcaseProjects: ', showcaseProjects)
  return (
    <div className="space-y-20">
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        {/* Header */}
        {title && (
          <Header
            centered
            title={title}
            description={overview}
            className="relative z-10 w-1/2 p-5 text-white bg-green-600 bg-opacity-70 backdrop-blur-2px"
          />
        )}

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full max-w-none filter brightness-50"
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
                  className="max-w-xs"
                />
              )
            })}
          </CarouselReadMore>
        )}
      </div>

      {/* Showcase posts */}
      <div className="container">
        {showcasePosts && showcasePosts.length > 0 && (
          <CarouselReadMore title="Showcase posts">
            {showcasePosts.map((post, key) => {
              return (
                <PostListItem
                  post={post}
                  odd={key % 2}
                  width={width}
                  height={height}
                  key={key}
                  className="max-w-xs"
                />
              )
            })}
          </CarouselReadMore>
        )}
      </div>
    </div>
  )
}

export default HomePage
