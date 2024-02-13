/* eslint-disable @next/next/no-img-element */
import { Icons } from './icons'

interface SectionHeroProps {
  title?: string
  description?: React.ReactNode
  video?: string
  blocks?: {
    icon: keyof typeof Icons
    title: string
    description: string
  }[]
}

export function SectionHero({
  title,
  description,
  blocks,
  video,
}: SectionHeroProps) {
  return (
    <div className="relative py-8 overflow-hidden bg-gray-900 isolate sm:py-32">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center filter brightness-50"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {description}
            </p>
          )}
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {blocks?.map((card) => {
            const Icon = Icons[card.icon]
            return (
              <div
                key={card.title}
                className="flex p-6 bg-green-500 gap-x-4 rounded-xl ring-1 ring-inset ring-white/10 bg-opacity-80 backdrop-blur-2px"
              >
                <Icon
                  className="flex-none w-8 h-8 text-yellow-400"
                  aria-hidden="true"
                />
                <div className="text-base leading-7">
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-gray-300">{card.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
