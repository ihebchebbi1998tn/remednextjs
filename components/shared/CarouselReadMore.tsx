'use client'

import * as React from 'react'

import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
  CarouselItem,
} from '@/components/ui/carousel'
import { AvailabilityBadge } from './AvailabilityBadge'

interface CarouselReadMoreProps {
  title?: string
  className?: string
  children?: React.ReactNode
}

export function CarouselReadMore({
  className,
  children,
  title,
}: CarouselReadMoreProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  console.log('count: ', count)

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
        <div className="flex justify-between w-full py-10 ">
          <h1 className="text-5xl font-bold">{title}</h1>
          <span className="flex items-end mr-8 space-x-2">
            {Array.from({ length: React.Children.count(children) }).map(
              (_, index) => (
                <AvailabilityBadge
                  key={index}
                  available={index === current - 1}
                />
              ),
            )}
          </span>
        </div>
        <CarouselContent>
          {React.Children.map(children, (child, index) => (
            <CarouselItem className="md:basis-1/4 basis-1/2 sm:basis-1/3">
              {child}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
