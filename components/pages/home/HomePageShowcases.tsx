'use client'

import { format, parseISO } from 'date-fns'
import fr from 'date-fns/locale/fr'
import { motion } from 'framer-motion'

import { CardOpportunity } from '@/components/shared/CardOpportunity'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePageShowcases({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { opportunity, innovation } = data ?? {}

  return (
    <div className="container">
      <div className="flex flex-col gap-8 md:flex-row">
        <motion.div
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
          <CardOpportunity
            title={opportunity?.title}
            overview={
              <CustomPortableText value={opportunity?.overview ?? []} />
            }
            startDate={
              opportunity?.duration?.start
                ? format(parseISO(opportunity?.duration?.start), 'dd/LL/yyyy', {
                    locale: fr,
                  })
                : ''
            }
            endDate={
              opportunity?.duration?.end
                ? format(parseISO(opportunity?.duration?.end), 'dd/LL/yyyy', {
                    locale: fr,
                  })
                : ''
            }
            image={urlForImage(opportunity?.image)?.url() ?? ''}
            link={`/opportunities/${opportunity?.slug}`}
          />
        </motion.div>
        <motion.div
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
          <CardOpportunity
            title={innovation?.title}
            overview={<CustomPortableText value={innovation?.overview ?? []} />}
            image={urlForImage(innovation?.images?.[0])?.url() ?? ''}
            link={`/innovation/${innovation?.slug}`}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HomePageShowcases
