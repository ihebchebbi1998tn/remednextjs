'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ModeToggleSelect() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <Select onValueChange={(value) => setTheme(value)}>
      <SelectTrigger className="bg-transparent rounded-md focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-accent">
        <SelectValue>
          {theme !== 'dark' ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Theme</SelectLabel>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
