import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

interface CardReadMoreProps {
  image: string
  title?: string
  description?: string
  tags?: string[]
  readMoreLabel: string
  readMoreLink: string
  className?: string
  width?: number
  height?: number
}

export function CardReadMore({
  width = 350,
  height = 250,
  className,
  image,
  title,
  description,
  tags,
  readMoreLabel,

  ...props
}: CardReadMoreProps) {
  return (
    <Card className={`${className} overflow-hidden`}>
      <Image
        src={image}
        width={width}
        height={height}
        alt={title ?? 'Cover image'}
      />
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      {description && (
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      )}
      <CardFooter className="flex justify-between gap-x-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-row gap-x-2">
            {tags?.map((tag, key) => (
              <div
                className="text-sm font-medium lowercase md:text-lg"
                key={key}
              >
                #{tag}
              </div>
            ))}
          </div>
        )}
        <Link
          href={props.readMoreLink}
          className="text-sm font-medium lowercase md:text-lg"
        >
          <Button>{readMoreLabel}</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
