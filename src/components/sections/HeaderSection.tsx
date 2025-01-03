// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Menu, MoveRight } from "lucide-react";
// import Link from "next/link";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// import { navigationItems } from "@/config/header";
// import siteConfig from "@/config/siteConfig";

// export default function HeaderSection() {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeSidebar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="w-full z-40 fixed top-0 left-0 bg-background">
//       <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
//         <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
//           <NavigationMenu className="flex justify-start items-start">
//             <NavigationMenuList className="flex justify-start gap-4 flex-row">
//               {navigationItems.map((item) => (
//                 <NavigationMenuItem key={item.title}>
//                   {item.href ? (
//                     <NavigationMenuLink href={item.href}>
//                       <Button variant="ghost" asChild>
//                         <p>{item.title}</p>
//                       </Button>
//                     </NavigationMenuLink>
//                   ) : (
//                     <>
//                       <NavigationMenuTrigger className="font-medium text-sm">
//                         {item.title}
//                       </NavigationMenuTrigger>
//                       {item.items && item.items.length > 0 ? (
//                         <NavigationMenuContent className="!w-[450px] p-4">
//                           <div className="flex flex-col lg:grid grid-cols-2 gap-4">
//                             <div className="flex flex-col h-full justify-between">
//                               <div className="flex flex-col">
//                                 <p className="text-base">{item.title}</p>
//                                 <p className="text-muted-foreground text-sm">
//                                   {item.description}
//                                 </p>
//                               </div>
//                               <Button size="sm" className="mt-10">
//                                 Book a call today
//                               </Button>
//                             </div>
//                             <div className="flex flex-col text-sm h-full justify-end">
//                               {item.items.map((subItem) => (
//                                 <NavigationMenuLink
//                                   href={subItem.href}
//                                   key={subItem.title}
//                                   className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
//                                 >
//                                   <span>{subItem.title}</span>
//                                   <MoveRight className="w-4 h-4 text-muted-foreground" />
//                                 </NavigationMenuLink>
//                               ))}
//                             </div>
//                           </div>
//                         </NavigationMenuContent>
//                       ) : null}
//                     </>
//                   )}
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div className="flex lg:justify-center">
//           <p className="font-semibold">
//             {siteConfig?.siteName || "Your Site Name"}
//           </p>
//         </div>
//         <div className="flex justify-end w-full gap-4">
//           <Button variant="ghost" className="hidden md:inline">
//             Book a demo
//           </Button>
//           <div className="border-r hidden md:inline"></div>
//           <Button variant={"outline"}>Get started</Button>
//         </div>
//         <div className="flex w-12 shrink lg:hidden items-end justify-end">
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="outline" size="icon">
//                 <Menu className="size-4" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent className="overflow-y-auto">
//               <SheetHeader>
//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="https://shadcnblocks.com/images/block/block-1.svg"
//                     className="w-8"
//                     alt="logo"
//                     width={32}
//                     height={32}
//                   />
//                   <span className="text-xl font-bold">Shadcn Blocks</span>
//                 </div>
//               </SheetHeader>
//               <div className="mb-8 mt-8 flex flex-col gap-4">
//                 {navigationItems.map((item) =>
//                   item.items && item.items.length > 0 ? (
//                     <Accordion key={item.title} type="single" collapsible>
//                       <AccordionItem value={item.title}>
//                         <AccordionTrigger>{item.title}</AccordionTrigger>
//                         <AccordionContent>
//                           {item.items.map((subItem) => (
//                             <Link
//                               key={subItem.title}
//                               href={subItem.href}
//                               className="block p-2 hover:bg-muted"
//                               onClick={closeSidebar}
//                             >
//                               {subItem.title}
//                             </Link>
//                           ))}
//                         </AccordionContent>
//                       </AccordionItem>
//                     </Accordion>
//                   ) : (
//                     <Link
//                       key={item.title}
//                       href={item.href || "#"}
//                       className="font-semibold"
//                       onClick={closeSidebar}
//                     >
//                       {item.title}
//                     </Link>
//                   )
//                 )}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, MoveRight, Zap } from 'lucide-react'
import { Logo } from '../common/logo'
import { ThemeToggle } from '../common/theme-toggle'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import siteConfig from '@/config/siteConfig'
import { navigationItems } from '@/config/header'



export default function HeaderSection() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:container flex h-16 max-w-screen-2xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Zap className="w-6 h-6 " fill='#00000' />
          <span className='hidden font-bold lg:inline-block'>
            {siteConfig?.siteName || "Your Site Name"}
          </span>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Link href={item.href} legacyBehavior passHref>
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
            <Link href="#footer">Contact</Link>
          </Button>
          <Button
            size="sm"
            className="h-9 rounded-full px-3 text-sm"
            asChild
          >
            <Link href="/get-started">Get Started</Link>
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
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
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
                      onClick={closeSidebar}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>
              <div className="mt-6 space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/get-started" onClick={closeSidebar}>Get Started</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact" onClick={closeSidebar}>Contact</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}



