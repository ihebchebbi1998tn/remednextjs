'use client'

import { Moon, Settings, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

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

type PopoverSettingsProps = {
  socialNetworks?: SettingsPayload['socialNetworks']
}

export function PopoverSettings({ socialNetworks }: PopoverSettingsProps) {
  const { setTheme, theme } = useTheme()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size={'icon'} aria-label="settings">
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <FontResizer />
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
