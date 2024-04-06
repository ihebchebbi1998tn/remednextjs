import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface CardOpportunityProps {
  title?: string
  overview?: React.ReactNode
  startDate?: string
  endDate?: string
  image?: string
  readMoreLink?: string
  readMoreLabel?: string
}

export function CardOpportunity({
  title,
  overview,
  image,
  startDate,
  endDate,
  readMoreLabel = 'Read more',
  readMoreLink = '',
}: CardOpportunityProps) {
  return (
    <div className="p-4 mb-6 rounded-md bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        {image && (
          <Image src={image} alt="" width={100} height={100} className="mb-2" />
        )}
        <span className="mb-2 ml-auto text-xs text-gray-500 dark:text-gray-400">
          {[startDate, endDate].filter(Boolean).join(' - ')}
        </span>
      </div>
      <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
        {title}
      </h2>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        {overview}
      </p>
      <div className="flex flex-wrap items-center">
        {readMoreLink && (
          <Link href={readMoreLink} className="ml-auto">
            <Button variant="secondary">{readMoreLabel}</Button>
          </Link>
        )}
      </div>
    </div>
  )
}
