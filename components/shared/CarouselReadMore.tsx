'use client'

import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { AvailabilityBadge } from './AvailabilityBadge'

interface CarouselReadMoreProps {
  title?: string
  className?: string
  titleClassName?: string
  children?: React.ReactNode
}

export function CarouselReadMore({
  className,
  titleClassName,
  children,
  title,
}: CarouselReadMoreProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="w-full">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className={`w-full ${className}`}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <div className="flex flex-col items-center justify-between w-full gap-4 mb-8 md:flex-row">
          <h1
            className={`text-3xl md:text-5xl font-bold md:ml-8 ${titleClassName}`}
          >
            {title}
          </h1>
          <span className="flex items-end space-x-2 md:mr-8">
            {Array.from({ length: React.Children.count(children) }).map(
              (_, index) => (
                <AvailabilityBadge
                  key={index}
                  available={index === current - 1}
                  onClick={() => {
                    setCurrent(index + 1)
                    api?.scrollTo(index)
                  }}
                />
              ),
            )}
          </span>
        </div>
        <CarouselContent>
          {React.Children.map(children, (child, index) => (
            <CarouselItem className="md:basis-1/4 basis-1/2 sm:basis-1/3 lg:basis-1/5 xl:basis-1/6">
              {child}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
