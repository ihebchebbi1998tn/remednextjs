import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'

import { AppBreadcrumb } from '@/components/demos/NextBreadcrumb'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'
import type { ProjectsPayload } from '@/types'

export interface ProjectListPageProps {
  data: ProjectsPayload
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectListPage({
  data,
  encodeDataAttribute,
}: ProjectListPageProps) {
  // Default to an empty object to allow previews on non-existent documents

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <AppBreadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            {data.title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {data.overview && <CustomPortableText value={data.overview} />}
          </p>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none">
            {data &&
              data.items?.map((project) => (
                <article
                  key={project.slug}
                  className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-gray-900 isolate pt-80 sm:pt-48 lg:pt-80"
                >
                  <Image
                    src={urlForImage(project.coverImage)?.url() ?? ''}
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full -z-10"
                    width={384}
                    height={384}
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10" />
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={`projects/${project.slug}`}>
                      <span className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
                    {project.duration?.start && project.duration?.end && (
                      <div className="flex items-center gap-x-4">
                        <time
                          dateTime={project.duration?.start}
                          className="mr-8"
                        >
                          {format(
                            parseISO(project.duration?.start ?? ''),
                            'dd LLL, yyyy',
                          )}
                        </time>
                        <time dateTime={project.duration?.end}>
                          {format(
                            parseISO(project.duration?.end ?? ''),
                            'dd LLL, yyyy',
                          )}
                        </time>
                      </div>
                    )}
                    <div className="flex items-center -ml-4 gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {/* <div className="flex gap-x-2.5">
                      <Image
                        src={project.author.imageUrl}
                        alt=""
                        className="flex-none w-6 h-6 rounded-full bg-white/10"
                        width={24}
                        height={24}
                      />
                      {project.author.name}
                    </div> */}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListPage
