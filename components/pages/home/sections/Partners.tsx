'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import * as React from 'react'

import {
  Carousel,
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

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`w-full bg-white dark:bg-gray-300 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24`}
      opts={{
        align: 'center',
        loop: true,
      }}
    >
      <CarouselContent>
        {partners?.map((partner, key) => {
          return (
            <CarouselItem
              className="h-26 md:basis-1/4 basis-1/2 sm:basis-1/3 lg:basis-1/5 xl:basis-1/6"
              key={key}
            >
              <Image
                src={partner.logo || ''}
                key={partner.name}
                alt={partner.alt || partner.name || ''}
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
