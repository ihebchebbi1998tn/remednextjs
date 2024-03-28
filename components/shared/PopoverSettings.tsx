'use client'

import { AArrowDown, AArrowUp, Moon, Settings, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { SettingsPayload } from '@/types'

import { Button } from '../ui/button'
import { SocialNetworksList } from './SocialNetworksList'

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

type PopoverSettingsProps = {
  socialNetworks?: SettingsPayload['socialNetworks']
}

export function PopoverSettings({ socialNetworks }: PopoverSettingsProps) {
  const [textSizeIndex, setTextSizeIndex] = useState<number>(2)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    document.documentElement.className = `${theme} ${fontSizes[textSizeIndex]}`
  }, [textSizeIndex, theme])

  
  const onIncrease = useCallback(() => {
    setTextSizeIndex((prev) => Math.max(0, prev + 1))
  }, [setTextSizeIndex]);

  const onDecrease = useCallback(() => {
    setTextSizeIndex((prev) => Math.max(0, prev - 1))
  }, [setTextSizeIndex]);


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size={'icon'}>
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <div className="flex flex-row gap-2">
          <Button
            onClick={onDecrease}
            className="text-base"
            variant={'ghost'}
            size={'icon'}
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
          >
            <AArrowUp />
          </Button>
        </div>
        <Separator orientation="horizontal" className="m-4" />
        <div className="flex flex-row gap-2">
          <Button
            onClick={() => setTheme('light')}
            disabled={theme === 'light'}
          >
            <Sun className="w-4 h-4 mr-2" />
            Light mode
          </Button>

          <Button onClick={() => setTheme('dark')} disabled={theme === 'dark'}>
            <Moon className="w-4 h-4 mr-2" />
            Dark mode
          </Button>
        </div>
        <Separator orientation="horizontal" className="m-4" />
        {socialNetworks && (
          <>
            <Label htmlFor="font-size" className="text-sm">
              Social Networks
            </Label>
            <SocialNetworksList
              socialNetworks={socialNetworks?.fields}
              className="hidden md:flex"
            />
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
