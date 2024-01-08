'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'

interface Props {
  className?: string
}

export function ModeToggle(props: Props) {
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
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={props.className}
      variant={'ghost'}
      size={'icon'}
    >
      <span className="sr-only">Toggle dark/light mode</span>
      {theme !== 'dark' ? (
        <Moon className="duration-300 w-4 h-4 group-hover:rotate-[360deg]" />
      ) : (
        <Sun className="w-4 h-4 duration-300 group-hover:rotate-180" />
      )}
    </Button>
  )
}
