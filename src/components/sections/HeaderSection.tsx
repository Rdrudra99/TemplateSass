"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { navigationItems } from "@/config/header";
import siteConfig from "@/config/siteConfig";

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink href={item.href}>
                      <Button variant="ghost" asChild>
                        <p>{item.title}</p>
                      </Button>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      {item.items && item.items.length > 0 ? (
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                <p className="text-base">{item.title}</p>
                                <p className="text-muted-foreground text-sm">
                                  {item.description}
                                </p>
                              </div>
                              <Button size="sm" className="mt-10">
                                Book a call today
                              </Button>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items.map((subItem) => (
                                <NavigationMenuLink
                                  href={subItem.href}
                                  key={subItem.title}
                                  className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground" />
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      ) : null}
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <p className="font-semibold">
            {siteConfig?.siteName || "Your Site Name"}
          </p>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button variant="ghost" className="hidden md:inline">
            Book a demo
          </Button>
          <div className="border-r hidden md:inline"></div>
          <Button variant={"outline"}>Get started</Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <div className="flex items-center gap-2">
                  <Image
                    src="https://shadcnblocks.com/images/block/block-1.svg"
                    className="w-8"
                    alt="logo"
                    width={32}
                    height={32}
                  />
                  <span className="text-xl font-bold">Shadcn Blocks</span>
                </div>
              </SheetHeader>
              <div className="mb-8 mt-8 flex flex-col gap-4">
                {navigationItems.map((item) =>
                  item.items && item.items.length > 0 ? (
                    <Accordion key={item.title} type="single" collapsible>
                      <AccordionItem value={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block p-2 hover:bg-muted"
                              onClick={closeSidebar}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      className="font-semibold"
                      onClick={closeSidebar}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
