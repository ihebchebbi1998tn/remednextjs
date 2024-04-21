/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface Testimonial {
  body: React.ReactNode
  author: {
    name?: string
    handle?: string
    imageUrl: string
  }
}

interface TestimonialDemoProps {
  title?: string
  description?: string
  testimonials: Testimonial[][][]
  featuredTestimonial: Testimonial
}

export function Testimonials({
  title,
  description,
  testimonials,
  featuredTestimonial,
}: TestimonialDemoProps) {
  return (
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">
            {title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
            {description}
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 mx-auto mt-16 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 ">
          <figure className="bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{featuredTestimonial?.body}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center px-6 py-4 border-t gap-x-4 gap-y-4 border-gray-900/10 sm:flex-nowrap">
              <Image
                className="flex-none w-10 h-10 rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
                width={40}
                height={40}
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={cn(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial?.author?.handle}
                      className="p-6 bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{testimonial?.body}</p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          src={testimonial?.author?.imageUrl}
                          alt=""
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial?.author?.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial?.author?.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
  )
}
