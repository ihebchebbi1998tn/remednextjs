import { toPlainText } from '@portabletext/react'

import { Breadcrumb } from '@/components/demos/Breadcrumb'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <div className="py-14 sm:py-22">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <Breadcrumb />
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-300">
            {title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {overview && toPlainText(overview)}
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {body && (
              <CustomPortableText
                paragraphClasses="dark:text-gray-400 text-xl text-gray-600"
                value={body}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
