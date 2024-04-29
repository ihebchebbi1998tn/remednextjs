import { format, parseISO } from 'date-fns'
import fr from 'date-fns/locale/fr'
import Image from 'next/image'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { MotionDiv } from '@/components/shared/MotionDiv'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePageShowcases({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { opportunity, innovation } = data ?? {}

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <MotionDiv
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <div className="flex flex-col w-full gap-4 p-4 text-white shadow-lg rounded-2xl ring-1 ring-gray-900/5 bg-gradient-to-r from-green-600 to-green-500">
          <div className="flex flex-col gap-4">
            <Image
              src={urlForImage(opportunity?.image)?.url() ?? ''}
              alt={opportunity?.title ?? ''}
              width={300}
              height={100}
            />
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 md:flex-row">
                <span className="text-lg font-bold">Start Date</span>
                <span>
                  {opportunity?.duration?.start
                    ? format(
                        parseISO(opportunity?.duration?.start),
                        'dd/LL/yyyy',
                        {
                          locale: fr,
                        },
                      )
                    : ''}
                </span>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <span className="text-lg font-bold">End Date</span>
                <span>
                  {opportunity?.duration?.end
                    ? format(
                        parseISO(opportunity?.duration?.end),
                        'dd/LL/yyyy',
                        {
                          locale: fr,
                        },
                      )
                    : ''}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">{opportunity?.title}</h1>
            <CustomPortableText value={opportunity?.overview ?? []} />
          </div>
          <div className="flex flex-col self-end gap-2 mr-6">
            <Link
              href={`/tenders/${opportunity?.slug}`}
              className="underline "
              aria-label="Read more"
            >
              Read more
            </Link>
          </div>
        </div>
      </MotionDiv>
      <MotionDiv
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <div className="flex flex-col w-full h-full gap-4 p-4 shadow-lg rounded-2xl ring-1 ring-gray-900/5">
          <h1 className="text-lg font-bold">{innovation?.title}</h1>
          <CustomPortableText value={innovation?.overview ?? []} />
          <div className="flex flex-col self-end gap-2 mr-6">
            <Link
              href={`/innovations/${innovation?.slug}`}
              className="underline"
              aria-label="Read more"
            >
              Read more
            </Link>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}

export default HomePageShowcases
