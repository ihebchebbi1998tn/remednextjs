'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ModeToggle() {
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
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="items-center justify-center hidden w-6 h-6 border rounded-md group text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:flex"
    >
      <span className="sr-only">Toggle dark/light mode</span>
      {theme !== 'dark' ? (
        <Moon className="h-4 w-4 duration-300 group-hover:rotate-[360deg]" />
      ) : (
        <Sun className="w-4 h-4 duration-300 group-hover:rotate-180" />
      )}
    </button>
  )
}