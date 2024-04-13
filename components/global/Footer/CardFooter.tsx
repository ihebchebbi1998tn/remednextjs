import * as React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CardReadMoreProps {
  image: string
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
  width?: number
}

export function CardReadMore({
  width,
  className,
  image,
  title,
  description,
  children,
  ...props
}: CardReadMoreProps) {
  return (
    <Card className={`${className} w-${width}px overflow-hidden`}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      {description && !children && (
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      )}
      {children}
    </Card>
  )
}
