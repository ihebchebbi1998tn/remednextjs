import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { PostListItem } from '@/components/pages/home/PostListItem'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const width = 3500
const height = 2000

const toPlainText = (blocks: any) =>
  blocks
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')

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
      {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-5 mx-auto max-w-[100rem] md:grid-cols-2 lg:grid-cols-3">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}

      {/* Showcase posts */}
      {showcasePosts && showcasePosts.length > 0 && (
        <div className="grid grid-cols-1 gap-5 mx-auto max-w-[100rem] md:grid-cols-2 lg:grid-cols-3">
          {showcasePosts.map((post, key) => {
            const href = resolveHref(post._type, post.slug)
            return (
              <Link
                key={key}
                href={href ?? `/posts/${post.slug}`}
                data-sanity={encodeDataAttribute?.([
                  'showcasePosts',
                  key,
                  'slug',
                ])}
              >
                <PostListItem post={post} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HomePage
