'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useScrollToHash() {
 const pathname = usePathname()

 useEffect(() => {
  // Small delay to ensure the DOM has updated
  const timeoutId = setTimeout(() => {
   if (window.location.hash) {
    const element = document.getElementById(window.location.hash.slice(1))
    if (element) {
     element.scrollIntoView({ behavior: 'smooth' })
    }
   }
  }, 0)

  return () => clearTimeout(timeoutId)
 }, [pathname])
}

