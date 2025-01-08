
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationItems } from '@/config/header'
import siteConfig from '@/config/siteConfig'
import { Menu, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from '../common/theme-toggle'
import { useRouter, usePathname } from 'next/navigation'
import { useScrollToHash } from '@/hooks/useScrollToHash'


export default function HeaderSection() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  useScrollToHash()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        // If we're not on the home page, navigate to home page with the hash
        router.push('/' + href)
      } else {
        // If we're already on the home page, just update the hash
        router.push(href)
      }
    } else {
      // For non-hash links, use normal navigation
      router.push(href)
    }
  }
  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:container flex h-16 max-w-screen-2xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Zap className="w-6 h-6 " fill='#00000' />
          <Link href="/" className='hidden font-bold lg:inline-block'>
            {siteConfig?.siteName || "Your Site Name"}
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Link href={item.href} onClick={(e) => handleNavigation(e, `${item.href}`)}>
                      <NavigationMenuLink className=" flex justify-center items-center font-medium text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {item.title}
                        <svg width="7" height="7" viewBox="0 0 6 6" className="ml-1">
                          <path fill="currentColor" d="M1.252 5.547l-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396-3.159 3.162z" />
                        </svg>
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      {item.items && (
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div>
                                <h4 className="text-base font-medium mb-1">{item.title}</h4>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                              </div>
                              <Button size="sm" className="mt-4">Learn more</Button>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items.map((subItem) => (
                                <Link href={subItem.href} key={subItem.title} target='_blank'>
                                  <NavigationMenuLink className="flex items-center justify-between hover:bg-muted py-2 px-4 rounded transition-colors">
                                    <span>{subItem.title}</span>
                                    <svg width="7" height="7" viewBox="0 0 6 6" className="ml-1">
                                      <path fill="currentColor" d="M1.252 5.547l-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396-3.159 3.162z" />
                                    </svg>
                                  </NavigationMenuLink>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      )}
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-3 text-sm hidden lg:flex"
            asChild
          >
            <Link href="#contact">Contact</Link>
          </Button>
          <Button
            size="sm"
            className="h-9 rounded-full px-3 text-sm"
            asChild
          >
            <Link href="/">Get Started</Link>
          </Button>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] overflow-y-auto">
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                  <SheetTitle>
                    {siteConfig?.siteName || "Your Site Name"}
                  </SheetTitle>
                  <SheetDescription>
                    { }
                  </SheetDescription>
                </div>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) =>
                  item.items ? (
                    <Accordion key={item.title} type="single" collapsible>
                      <AccordionItem value={item.title}>
                        <AccordionTrigger className="text-base">{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-2 pl-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                target='_blank'
                                className="flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                onClick={closeSidebar}
                              >
                                {subItem.title}
                                <svg width="7" height="7" viewBox="0 0 6 6" className="ml-1">
                                  <path fill="currentColor" d="M1.252 5.547l-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396-3.159 3.162z" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      className="text-base font-medium py-2"
                      onClick={(e) => {
                        closeSidebar();
                        handleNavigation(e, `${item.href}`);
                      }}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>
              <div className="mt-6 space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/" onClick={closeSidebar}>Get Started</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#contact" onClick={closeSidebar}>Contact</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}



