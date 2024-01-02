/* eslint-disable react-hooks/exhaustive-deps */
'use client'

interface TitleWithLineProps {
  text?: string
  className?: string
  active?: boolean
}

export function TitleWithLine({ active, className, text }: TitleWithLineProps) {
  return (
    <h2
      className={`font-normal px-0 flex items-center before:content-[''] before:w-20 before:inline-block before:h-[2px]  before:mr-4 align-middle  ${active ? 'text-white' : ''} ${active ? 'before:bg-yellow-400' : 'before:bg-green-500'} ${className}`}
    >
      {text}
    </h2>
  )
}
