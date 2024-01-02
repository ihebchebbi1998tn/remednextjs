import { Instagram, LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CardNavigationProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  active?: boolean
  icon?: LucideIcon
  className?: string
}

export function CardNavigation({
  title,
  description,
  buttonText,
  buttonLink,
  active = false,
  icon = Instagram,
  className = '',
}: CardNavigationProps) {
  const Icon = icon
  return (
    <Card
      className={`flex md:flex-col border-none rounded-none ${className} ${
        active ? 'bg-green-500' : ''
      }`}
    >
      <CardHeader>
        <Icon
          size={80}
          className={`pb-0 ${active ? 'text-yellow-400' : 'text-reg-main'}`}
        />
      </CardHeader>
      {description && (
        <CardContent className="pb-3 md:p-6">
          {title && (
            <CardTitle className={`pb-3 ${active ? 'text-white' : ''}`}>
              {title}
            </CardTitle>
          )}
          <CardDescription className={`text-md ${active ? 'text-white' : ''}`}>
            {description}
          </CardDescription>
          {buttonText && (
            <Button
              variant="link"
              className={`p-0 font-bold ${active ? 'text-yellow-400' : ''}`}
            >
              <Link href={buttonLink || '#'}>{buttonText}</Link>
            </Button>
          )}
        </CardContent>
      )}
    </Card>
  )
}
