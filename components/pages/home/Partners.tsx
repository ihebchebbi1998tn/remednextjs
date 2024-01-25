
'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import * as React from 'react'

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

export interface PartnersProps {
  partners: any
}

export function Partners({ partners }: PartnersProps) {

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
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className={`w-full`}
      opts={{
        align: 'center',
        loop: true,
      }}
    >
      <CarouselContent>
        {partners?.map((partner, key) => {
          return (
            <CarouselItem
              className="h-40 md:basis-1/4 basis-1/2 sm:basis-1/3 lg:basis-1/5 xl:basis-1/6"
              key={key}
            >
              <Image
                src={partner.logo || ''}
                key={partner.name}
                alt={partner.alt || ''}
                width={150}
                height={100}
                style={{ height: '100px', objectFit: 'contain' }}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default Partners
