import Image from 'next/image'
import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'

import { Button } from '../ui/button'

/* eslint-disable @next/next/no-img-element */
interface Block {
  title?: string
  description?: React.ReactNode
  coverImage: string
  slug: string
}

interface ShowcasePostsProps {
  title?: string
  description?: React.ReactNode
  blocks?: Block[]
}

export function ShowcasePosts({
  title,
  description,
  blocks,
}: ShowcasePostsProps) {
  console.log('blocks: ', blocks);
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto mt-5 xl:px-0">
      <h2 className="mt-2 mb-1 text-3xl font-bold leading-tight tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200">
        {title}
      </h2>
      <p className="mb-12 text-lg text-gray-500">{description}</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="mb-3">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      className="object-cover"
                      fill
                      src={blocks?.[0].coverImage || ''}
                      alt={blocks?.[0].title || ''}
                    />
                  </AspectRatio>
                </div>
                <div className="flex items-center ">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    {blocks?.[0].title}
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">{blocks?.[0].description}</p>
                <Link
                  href={`/posts/${blocks?.[0].slug}`}
                  className="absolute bottom-4 right-4"
                >
                  <Button variant={'link'} className="text-green-500">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="mb-3">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      className="object-cover"
                      fill
                      src={blocks?.[1].coverImage || ''}
                      alt={blocks?.[1].title || ''}
                    />
                  </AspectRatio>
                </div>
                <div className="flex items-center ">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    {blocks?.[1].title}
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">{blocks?.[1].description}</p>
                <Link
                  href={`/posts/${blocks?.[1].slug}`}
                  className="absolute bottom-4 right-4"
                >
                  <Button variant={'link'} className="text-green-500">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg">
                <div className="mb-3">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      className="object-cover"
                      fill
                      src={blocks?.[2].coverImage || ''}
                      alt={blocks?.[2].title || ''}
                    />
                  </AspectRatio>
                </div>
                <div className="flex items-center ">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    {blocks?.[2].title}
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">{blocks?.[2].description}</p>
                <Link
                  href={`/posts/${blocks?.[2].slug}`}
                  className="absolute bottom-4 right-4"
                >
                  <Button variant={'link'} className="text-green-500">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg">
                <div className="mb-3">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      className="object-cover"
                      fill
                      src={blocks?.[3].coverImage || ''}
                      alt={blocks?.[3].title || ''}
                    />
                  </AspectRatio>
                </div>
                <div className="flex items-center ">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    {blocks?.[3].title}
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">{blocks?.[3].description}</p>
                <Link
                  href={`/posts/${blocks?.[3].slug}`}
                  className="absolute bottom-4 right-4"
                >
                  <Button variant={'link'} className="text-green-500">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="mb-3">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      className="object-cover"
                      fill
                      src={blocks?.[4].coverImage || ''}
                      alt={blocks?.[4].title || ''}
                    />
                  </AspectRatio>
                </div>
                <div className="flex items-center ">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    {blocks?.[4].title}
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">{blocks?.[4].description}</p>
                <Link
                  href={`/posts/${blocks?.[4].slug}`}
                  className="absolute bottom-4 right-4"
                >
                  <Button variant={'link'} className="text-green-500">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
