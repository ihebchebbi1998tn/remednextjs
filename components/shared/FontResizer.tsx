'use client'

import { AArrowDown, AArrowUp } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

import { Slider } from '@/components/ui/slider'
import { SettingsPayload } from '@/types'

import { Button } from '../ui/button'

const fontSizes = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  /* 'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
  'text-8xl',
  'text-9xl', */
]

export function FontResizer() {
  const [textSizeIndex, setTextSizeIndex] = useState<number>(2)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    document.documentElement.className = `${theme} ${fontSizes[textSizeIndex]}`
  }, [textSizeIndex, theme])

  const onIncrease = useCallback(() => {
    setTextSizeIndex((prev) => Math.min(fontSizes.length - 1, prev + 1))
  }, [setTextSizeIndex])

  const onDecrease = useCallback(() => {
    setTextSizeIndex((prev) => Math.max(0, prev - 1))
  }, [setTextSizeIndex])

  return (
    <div className="flex flex-row gap-2 grow">
      <Button
        onClick={onDecrease}
        className="text-base"
        variant={'ghost'}
        size={'icon'}
        disabled={textSizeIndex === 0}
      >
        <AArrowDown />
      </Button>
      <Slider
        min={0}
        max={fontSizes.length - 1}
        step={1}
        value={[textSizeIndex]}
        onValueChange={(value) => setTextSizeIndex(value[0])}
      />
      <Button
        onClick={onIncrease}
        className="text-base"
        variant={'ghost'}
        size={'icon'}
        disabled={textSizeIndex === fontSizes.length - 1}
      >
        <AArrowUp />
      </Button>
    </div>
  )
}
