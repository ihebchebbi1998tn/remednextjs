'use client'

import Cookies from 'js-cookie'
import { Moon, Settings, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { SettingsPayload } from '@/types'

import { Button } from '../ui/button'
import { FontResizer } from './FontResizer'
import { SocialNetworksList } from './SocialNetworksList'

const fontSizes = ['text-xs', 'text-sm', 'text-base', 'text-lg']

type PopoverSettingsProps = {
  socialNetworks?: SettingsPayload['socialNetworks']
}

export function PopoverSettings({ socialNetworks }: PopoverSettingsProps) {
  const textSizeIndexCookie = Cookies.get('textSizeIndex') || 1 // Default to smallest size (text-xs)
  const [textSizeIndex, setTextSizeIndex] = useState<number>(Number(textSizeIndexCookie))
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    document.documentElement.className = `${theme} ${fontSizes[textSizeIndex]}`
  }, [textSizeIndex, theme])

  const onIncrease = useCallback(() => {
    setTextSizeIndex((prev) => {
      const value = Math.min(fontSizes.length - 1, prev + 1)
      Cookies.set('textSizeIndex', value.toString())
      return value
    })
  }, [setTextSizeIndex])

  const onDecrease = useCallback(() => {
    setTextSizeIndex((prev) => {
      const value = Math.max(0, prev - 1)
      Cookies.set('textSizeIndex', value.toString())
      return value
    })
  }, [setTextSizeIndex])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size={'icon'} aria-label="settings">
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <FontResizer
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          textSizeIndex={textSizeIndex}
          fontSizes={fontSizes}
          setTextSizeIndex={setTextSizeIndex}
        />
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
