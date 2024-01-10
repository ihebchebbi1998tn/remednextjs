'use client'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'


export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2">
      <Button
        type="button"
        onClick={scrollToTop}
        className={cn(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-green-600 hover:bg-green-700 focus:ring-green-500 inline-flex items-center rounded-full p-1 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 ',
        )}
      >
        <ChevronUp className="w-8 h-8" aria-hidden="true" />
      </Button>
    </div>
  )
}
