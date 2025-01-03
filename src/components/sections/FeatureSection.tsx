'use client'

import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from 'lucide-react';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Marquee from "../common/marquee";
import { AnimatedBeamMultipleOutputDemo } from "../common/AnimatedBeamMultipleOutputDemo";
import { AnimatedListDemo } from "../common/AnimatedListDemo";
import { Calendar } from "../ui/calendar";

type BentoGridProps = {
 children: ReactNode;
 className?: string;
};

type BentoCardProps = {
 name: string;
 className: string;
 background: ReactNode;
 Icon: React.ElementType;
 description: string;
 href: string;
 cta: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
 return (
  <div
   className={cn(
    "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
    className,
   )}
  >
   {children}
  </div>
 );
};

const BentoCard = ({
 name,
 className,
 background,
 Icon,
 description,
 href,
 cta,
}: BentoCardProps) => (
 <div
  key={name}
  className={cn(
   "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
   "bg-background/80 backdrop-blur-sm",
   "border border-border",
   "shadow-md dark:shadow-primary/25",
   "transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/50",
   className,
  )}
 >
  <div>{background}</div>
  <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
   <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
   <h3 className="text-xl font-semibold text-foreground">
    {name}
   </h3>
   <p className="text-muted-foreground">{description}</p>
  </div>

  <div
   className={cn(
    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
   )}
  >
   <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
    <a href={href}>
     {cta}
     <ArrowRightIcon className="ml-2 h-4 w-4" />
    </a>
   </Button>
  </div>
  <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/5" />
 </div>
);

const files = [
 {
  name: "bitcoin.pdf",
  body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
 },
 {
  name: "finances.xlsx",
  body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
 },
 {
  name: "logo.svg",
  body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
 },
 {
  name: "keys.gpg",
  body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
 },
 {
  name: "seed.txt",
  body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
 },
];

// export const features = [
//  {
//   Icon: FileTextIcon,
//   name: "Save your files",
//   description: "We automatically save your files as you type.",
//   href: "#",
//   cta: "Learn more",
//   className: "col-span-3 lg:col-span-1",
//   background: (
//    <Marquee
//     pauseOnHover
//     className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
//    >
//     {files.map((f, idx) => (
//      <figure
//       key={idx}
//       className={cn(
//        "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//        "border-border bg-muted/50 hover:bg-muted",
//        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
//       )}
//      >
//       <div className="flex flex-row items-center gap-2">
//        <div className="flex flex-col">
//         <figcaption className="text-sm font-medium text-foreground">
//          {f.name}
//         </figcaption>
//        </div>
//       </div>
//       <blockquote className="mt-2 text-xs text-muted-foreground">{f.body}</blockquote>
//      </figure>
//     ))}
//    </Marquee>
//   ),
//  },
//  {
//   Icon: BellIcon,
//   name: "Notifications",
//   description: "Get notified when something happens.",
//   href: "#",
//   cta: "Learn more",
//   className: "col-span-3 lg:col-span-2",
//   background: (
//    <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
//   ),
//  },
//  {
//   Icon: Share2Icon,
//   name: "Integrations",
//   description: "Supports 100+ integrations and counting.",
//   href: "#",
//   cta: "Learn more",
//   className: "col-span-3 lg:col-span-2",
//   background: (
//    <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
//   ),
//  },
//  {
//   Icon: CalendarIcon,
//   name: "Calendar",
//   description: "Use the calendar to filter your files by date.",
//   className: "col-span-3 lg:col-span-1",
//   href: "#",
//   cta: "Learn more",
//   background: (
//    <Calendar
//     mode="single"
//     selected={new Date(2022, 4, 11, 0, 0, 0)}
//     className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
//    />
//   ),
//  },
// ];

export const features = [
 {
  Icon: FileTextIcon,
  name: "Save your Watchlist",
  description: "Automatically save movies and TV shows to your personal watchlist.",
  href: "#",
  cta: "Learn more",
  className: "col-span-3 lg:col-span-1",
  background: (
   <Marquee
    pauseOnHover
    className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
   >
    {files.map((f, idx) => (
     <figure
      key={idx}
      className={cn(
       "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
       "border-border bg-muted/50 hover:bg-muted",
       "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
      )}
     >
      <div className="flex flex-row items-center gap-2">
       <div className="flex flex-col">
        <figcaption className="text-sm font-medium text-foreground">
         {f.name}
        </figcaption>
       </div>
      </div>
      <blockquote className="mt-2 text-xs text-muted-foreground">{f.body}</blockquote>
     </figure>
    ))}
   </Marquee>
  ),
 },
 {
  Icon: BellIcon,
  name: "Notifications",
  description: "Get notified when your favorite shows release new episodes.",
  href: "#",
  cta: "Learn more",
  className: "col-span-3 lg:col-span-2",
  background: (
   <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  ),
 },
 {
  Icon: Share2Icon,
  name: "Share with Friends",
  description: "Easily share movies and TV shows with friends via social media.",
  href: "#",
  cta: "Learn more",
  className: "col-span-3 lg:col-span-2",
  background: (
   <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  ),
 },
 {
  Icon: CalendarIcon,
  name: "Release Calendar",
  description: "Use the calendar to track upcoming movie and TV show releases.",
  className: "col-span-3 lg:col-span-1",
  href: "#",
  cta: "Learn more",
  background: (
   <Calendar
    mode="single"
    selected={new Date(2022, 4, 11, 0, 0, 0)}
    className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
   />
  ),
 },
];

export default function FeatureSection() {
 return (
  <section className="container mx-auto max-w-5xl overflow-hidden" id="services">
   <div className="text-center space-y-4 pb-6 md:pb-12 mx-auto">
    <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
     Features
    </h2>
    <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-foreground">
     Features to help you get more done.
    </h3>
   </div>
   <BentoGrid>
    {features.map((feature, idx) => (
     <BentoCard key={idx} {...feature} />
    ))}
   </BentoGrid>
  </section>
 );
}

