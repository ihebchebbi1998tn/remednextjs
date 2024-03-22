'use client'

import { AArrowDown, AArrowUp, ALargeSmall, Moon, Settings, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'

import { Button } from '../ui/button'
import { ModeToggle } from './mode-toggle'
import { SocialNetworksList } from './SocialNetworksList'

interface Props {
  className?: string
}

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

export function ButtonFontSize(props: Props) {
  const [textSize, setTextSize] = useState('text-base')

  useEffect(() => {
    document.documentElement.className = `${document.documentElement.className} ${textSize}`

    return () => {
      document.documentElement.className = ''
    }
  }, [textSize])

  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() => setTextSize('text-sm')}
        className="text-base"
        variant={'ghost'}
        size={'icon'}
      >
        <span className="sr-only">decrease text size</span>
        <span>A-</span>
      </Button>
      <Button
        onClick={() => setTextSize('text-base')}
        className="text-base"
        variant={'ghost'}
        size={'icon'}
      >
        <span className="sr-only">reset text size</span>
        <span>A</span>
      </Button>
      <Button
        onClick={() => setTextSize('text-lg')}
        className="text-base"
        variant={'ghost'}
        size={'icon'}
      >
        <span className="sr-only">increase text size</span>
        <span>A+</span>
      </Button>
    </div>
  )
}

export function SelectFontSize(props: Props) {
  const [textSize, setTextSize] = useState('text-base')

  useEffect(() => {
    document.documentElement.className = `${document.documentElement.className} ${textSize}`

    return () => {
      document.documentElement.className = ''
    }
  }, [textSize])

  const onChange = useCallback((value) => {
    setTextSize(value)
  }, [])

  return (
    <Select onValueChange={onChange} defaultValue={textSize}>
      <SelectTrigger className="w-[70px]">
        <SelectValue placeholder="Select a font size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Font Size</SelectLabel>
          <SelectItem value="text-sm">A-</SelectItem>
          <SelectItem value="text-base">A</SelectItem>
          <SelectItem value="text-lg">A+</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

type PopoverFontSizeProps = {
  socialNetworks: any
}

export function PopoverFontSize({ socialNetworks }: PopoverFontSizeProps) {
  const [textSizeIndex, setTextSizeIndex] = useState<number>(2)
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.className = `${document.documentElement.className} ${fontSizes[textSizeIndex]}`

    return () => {
      document.documentElement.className = ''
    }
  }, [textSizeIndex])

  if (!mounted) {
    return null
  }

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
            onClick={() => setTextSizeIndex((prev) => Math.max(0, prev - 1))}
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
            onClick={() =>
              setTextSizeIndex((prev) =>
                Math.min(fontSizes.length - 1, prev + 1),
              )
            }
            className="text-base"
            variant={'ghost'}
            size={'icon'}
          >
            <AArrowUp />
          </Button>
        </div>
        <Separator orientation="horizontal" className="m-4" />
        <div className="flex flex-row gap-2">
          <Button onClick={() => setTheme('light')} disabled={theme === 'light'}>
            <Sun className="w-4 h-4 mr-2" />
            Light mode
          </Button>

          <Button onClick={() => setTheme('dark')} disabled={theme === 'dark'}>
            <Moon className="w-4 h-4 mr-2" />
            Dark mode
          </Button>
        </div>
        <Separator orientation="horizontal" className="m-4" />
        <Label htmlFor="font-size" className="text-sm">
          Social Networks
        </Label>
        <SocialNetworksList
          socialNetworks={socialNetworks?.fields}
          className="hidden md:flex"
        />
      </PopoverContent>
    </Popover>
  )
}
