import Image from 'next/image'

import { CardNavigation } from '@/components/shared/CardNavigation'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { MotionDiv } from '@/components/shared/MotionDiv'
import { ShowcaseProject } from '@/types'

interface HomePageProjectsProps {
  title?: string
  subtitle?: string
  description?: React.ReactNode
  coverImage?: string
  showcaseProjects?: ShowcaseProject[]
  width: number
  height: number
}

export function HomePageProjects({
  showcaseProjects,
  title,
  subtitle,
  description,
  coverImage,
  width,
  height,
}: HomePageProjectsProps) {
  return (
    <div
      className={`w-full bg-reg-dark md:bg-center relative py-8 overflow-hidden bg-gray-900 isolate sm:py-32`}
    >
      <div className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center filter brightness-50">
        <Image fill className="object-cover" src={coverImage || ''} alt="projects showcase cover" />
      </div>
      <div className="container flex flex-col items-center justify-center gap-5 py-8 md:flex-row">
        <CardNavigation
          title={title}
          subtitle={subtitle}
          description={description}
          buttonLink="/"
          active={true}
          titleClassName="text-4xl font-bold"
          className="bg-transparent shadow-none md:w-1/2"
        />

        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          {showcaseProjects?.map((project, i) => (
            <MotionDiv
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: i % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
              key={i}
            >
              <CardNavigation
                title={project.title}
                description={
                  <CustomPortableText value={project.overview ?? []} />
                }
                buttonText="Learn more"
                buttonLink={`/projects/${project.slug}`}
                active={[0, 3].includes(i)}
                className="max-w-sm bg-opacity-90 backdrop-blur-2px"
                titleClassName="text-4xl font-bold"
                subtitleClassName="text-lg font-medium"
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  )
}
