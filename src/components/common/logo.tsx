import React from 'react'
import Link from 'next/link'

export function Logo() {
 return (
  <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
   <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64" className="h-6 w-6">
    <path fill="currentColor" d="M0 20C0 8.954 8.954 0 20 0h24c11.046 0 20 8.954 20 20v24c0 11.046-8.954 20-20 20H20C8.954 64 0 55.046 0 44V20z"></path>
    <path fill="currentColor" className="text-white dark:text-black" d="M31.976 11.96L47.016 42h-6.08l-8.96-18.88L23.056 42h-6.08l15-30.04z"></path>
   </svg>
   <span className="hidden font-bold xl:inline-block">Achromatic</span>
  </Link>
 )
}

