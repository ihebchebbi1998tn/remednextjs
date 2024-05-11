'use client'

import { AArrowDown, AArrowUp } from 'lucide-react'

import { Slider } from '@/components/ui/slider'

import { Button } from '../ui/button'

type FontResizerProps = {
  onIncrease?: () => void
  onDecrease?: () => void
  setTextSizeIndex: (value: number) => void
  textSizeIndex: number
  fontSizes: string[]
}

export function FontResizer({
  onIncrease,
  onDecrease,
  setTextSizeIndex,
  textSizeIndex,
  fontSizes,
}: FontResizerProps) {
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
