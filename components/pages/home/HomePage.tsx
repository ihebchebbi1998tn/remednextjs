import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import fr from 'date-fns/locale/fr'

import { FormContact } from '@/components/demos/FormContact'
import { Testimonials } from '@/components/demos/Testimonials'
import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { CardOpportunity } from '@/components/shared/CardOpportunity'
import { CarouselReadMore } from '@/components/shared/CarouselReadMore'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { SectionApplication } from '@/components/shared/SectionApplication'
import { SectionHero } from '@/components/shared/SectionHero'
import { Stats } from '@/components/shared/Stats'
import { StatsBlock } from '@/components/shared/StatsBlock'
import { urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import ContactMap from './ContactMap'
import { HomePageProjects } from './HomePageProjects'
import Partners from './Partners'

const width = 550
const height = 280

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { sections = [], partners, opportunity, innovation } = data ?? {}

  const testimonials =
    sections[8]?.blocks?.map((item) => {
      return {
        body: <CustomPortableText value={item.description ?? []} />,
        author: {
          name: item.author?.name,
          handle: item.author?.name,
          imageUrl: urlForImage(item.author?.picture)?.url() || '',
        },
      }
    }) ?? []

  return (
    <div className="space-y-20">
      <SectionHero
        title={sections[0]?.title}
        description={<CustomPortableText value={sections[0]?.description ?? []} />}
        blocks={
          sections[0]?.blocks
            ? sections[0]?.blocks.map(
                (block) =>
                  ({
                    icon: block.icon,
                    title: block.title,
                    description: <CustomPortableText value={block.description ?? []} />,
                  }) as any,
              )
            : []
        }
        video={sections[0]?.videoURL}
      />

      {/* Showcase posts */}
      {sections[1] && (
        <CarouselReadMore title={sections[1]?.title}>
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
        description={<CustomPortableText value={sections[2]?.description ?? []} />}
        coverImage={urlForImage(sections[2]?.coverImage)?.url() ?? ''}
        width={width}
        height={height}
      />

      {/* Stats */}
      <Stats
        stats={
          sections[4]?.blocks?.map((item) => ({
            value: item.title,
            name: <CustomPortableText value={item.description ?? []} />,
            unit: item.subtitle,
          })) ?? []
        }
      />

      {/* Route expérimentale */}
      <StatsBlock
        title={sections[6]?.title}
        subtitle={sections[6]?.subtitle}
        description={<CustomPortableText value={sections[6]?.description ?? []} />}
        video={sections[6]?.videoURL}
        stats={
          sections[6]?.blocks?.map((item) => ({
            value: item.title,
            name: <CustomPortableText value={item.description ?? []} />,
            unit: item.subtitle,
          })) ?? []
        }
      />

      {/* Boost */}
      <SectionApplication
        title={sections[5]?.title}
        application={sections[5]?.showcaseApplications?.[0]}
      />

      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row">
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

          <CardOpportunity
            title={innovation?.title}
            overview={<CustomPortableText value={innovation?.overview ?? []} />}
            image={urlForImage(innovation?.images?.[0])?.url() ?? ''}
            link={`/innovation/${innovation?.slug}`}
          />
        </div>
      </div>

      <Partners partners={partners} />

      {/* AccordionDemo */}
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <ContactMap />
          <FormContact className="w-full" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="container">
        <Testimonials
          title={sections[8]?.title}
          description={sections[8]?.subtitle}
          testimonials={[
            [[testimonials[1]], [testimonials[2]]],
            [[testimonials[3]], [testimonials[4]]],
          ]}
          featuredTestimonial={testimonials[0]}
        />
      </div>

      <div className="relative w-full"></div>
    </div>
  )
}

export default HomePage
