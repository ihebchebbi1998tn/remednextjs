import { toPlainText } from '@portabletext/react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

import { FrCounter } from './FrCounter'
import { FrTextStagger } from './FrTextStagger'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
  className?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div
      className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'} ${
        props.className
      }`}
    >
      {/* Title */}
      {title && (
        <div className="text-3xl font-extrabold tracking-tight md:text-5xl">
          <FrTextStagger text={title} />
        </div>
      )}
      {/* Description */}
      {description && (
        <div className="mt-4 font-serif text-xl md:text-2xl">
          {toPlainText(description)}
          <FrCounter />
        </div>
      )}
    </div>
  )
}
