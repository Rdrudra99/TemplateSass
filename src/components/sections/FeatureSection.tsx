// 'use client'

// import { ReactNode } from "react";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { BellIcon, Share2Icon } from 'lucide-react';

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import Marquee from "../common/marquee";
// import { AnimatedBeamMultipleOutputDemo } from "../common/AnimatedBeamMultipleOutputDemo";
// import { AnimatedListDemo } from "../common/AnimatedListDemo";
// import { Calendar } from "../ui/calendar";

// type BentoGridProps = {
//  children: ReactNode;
//  className?: string;
// };

// type BentoCardProps = {
//  name: string;
//  className: string;
//  background: ReactNode;
//  Icon: React.ElementType;
//  description: string;
//  href: string;
//  cta: string;
// };

// const BentoGrid = ({ children, className }: BentoGridProps) => {
//  return (
//   <div
//    className={cn(
//     "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
//     className,
//    )}
//   >
//    {children}
//   </div>
//  );
// };

// const BentoCard = ({
//  name,
//  className,
//  background,
//  Icon,
//  description,
//  href,
//  cta,
// }: BentoCardProps) => (
//  <div
//   key={name}
//   className={cn(
//    "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
//    "bg-background/80 backdrop-blur-sm",
//    "border border-border",
//    "shadow-md dark:shadow-primary/25",
//    "transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/50",
//    className,
//   )}
//  >
//   <div>{background}</div>
//   <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
//    <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
//    <h3 className="text-xl font-semibold text-foreground">
//     {name}
//    </h3>
//    <p className="text-muted-foreground">{description}</p>
//   </div>

//   <div
//    className={cn(
//     "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
//    )}
//   >
//    <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
//     <a href={href}>
//      {cta}
//      <ArrowRightIcon className="ml-2 h-4 w-4" />
//     </a>
//    </Button>
//   </div>
//   <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/5" />
//  </div>
// );

// const files = [
//  {
//   name: "bitcoin.pdf",
//   body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
//  },
//  {
//   name: "finances.xlsx",
//   body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
//  },
//  {
//   name: "logo.svg",
//   body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
//  },
//  {
//   name: "keys.gpg",
//   body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
//  },
//  {
//   name: "seed.txt",
//   body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
//  },
// ];

// // export const features = [
// //  {
// //   Icon: FileTextIcon,
// //   name: "Save your files",
// //   description: "We automatically save your files as you type.",
// //   href: "#",
// //   cta: "Learn more",
// //   className: "col-span-3 lg:col-span-1",
// //   background: (
// //    <Marquee
// //     pauseOnHover
// //     className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
// //    >
// //     {files.map((f, idx) => (
// //      <figure
// //       key={idx}
// //       className={cn(
// //        "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
// //        "border-border bg-muted/50 hover:bg-muted",
// //        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
// //       )}
// //      >
// //       <div className="flex flex-row items-center gap-2">
// //        <div className="flex flex-col">
// //         <figcaption className="text-sm font-medium text-foreground">
// //          {f.name}
// //         </figcaption>
// //        </div>
// //       </div>
// //       <blockquote className="mt-2 text-xs text-muted-foreground">{f.body}</blockquote>
// //      </figure>
// //     ))}
// //    </Marquee>
// //   ),
// //  },
// //  {
// //   Icon: BellIcon,
// //   name: "Notifications",
// //   description: "Get notified when something happens.",
// //   href: "#",
// //   cta: "Learn more",
// //   className: "col-span-3 lg:col-span-2",
// //   background: (
// //    <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
// //   ),
// //  },
// //  {
// //   Icon: Share2Icon,
// //   name: "Integrations",
// //   description: "Supports 100+ integrations and counting.",
// //   href: "#",
// //   cta: "Learn more",
// //   className: "col-span-3 lg:col-span-2",
// //   background: (
// //    <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
// //   ),
// //  },
// //  {
// //   Icon: CalendarIcon,
// //   name: "Calendar",
// //   description: "Use the calendar to filter your files by date.",
// //   className: "col-span-3 lg:col-span-1",
// //   href: "#",
// //   cta: "Learn more",
// //   background: (
// //    <Calendar
// //     mode="single"
// //     selected={new Date(2022, 4, 11, 0, 0, 0)}
// //     className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
// //    />
// //   ),
// //  },
// // ];

// export const features = [
//  {
//   Icon: FileTextIcon,
//   name: "Save your Watchlist",
//   description: "Automatically save movies and TV shows to your personal watchlist.",
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
//   description: "Get notified when your favorite shows release new episodes.",
//   href: "#",
//   cta: "Learn more",
//   className: "col-span-3 lg:col-span-2",
//   background: (
//    <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
//   ),
//  },
//  {
//   Icon: Share2Icon,
//   name: "Share with Friends",
//   description: "Easily share movies and TV shows with friends via social media.",
//   href: "#",
//   cta: "Learn more",
//   className: "col-span-3 lg:col-span-2",
//   background: (
//    <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
//   ),
//  },
//  {
//   Icon: CalendarIcon,
//   name: "Release Calendar",
//   description: "Use the calendar to track upcoming movie and TV show releases.",
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

// export default function FeatureSection() {
//  return (
//   <section className="container mx-auto max-w-5xl overflow-hidden py-16 md:py-24 lg:py-32" id="services">
//    <div className="text-center space-y-4 pb-6 md:pb-12 mx-auto">
//     <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
//      Features
//     </h2>
//     <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-foreground">
//      Features to help you get more done.
//     </h3>
//    </div>
//    <BentoGrid>
//     {features.map((feature, idx) => (
//      <BentoCard key={idx} {...feature} />
//     ))}
//    </BentoGrid>
//   </section>
//  );
// }

import { cn } from "@/lib/utils";
import {
 IconAdjustmentsBolt,
 IconCloud,
 IconCurrencyDollar,
 IconEaseInOut,
 IconHeart,
 IconHelp,
 IconRouteAltLeft,
 IconTerminal2,
} from "@tabler/icons-react";

export default function FeatureSection() {
 const features = [
  {
   title: "Built for creators",
   description: "Crafted for business owners, content creators, and innovators to showcase their work effortlessly.",
   icon: <IconTerminal2 />,
  },
  {
   title: "User-friendly design",
   description: "Our platform is as intuitive as it gets—no tech skills required to create stunning websites.",
   icon: <IconEaseInOut />,
  },
  {
   title: "Affordable pricing",
   description: "Zoomsterhub offers competitive pricing with no hidden fees, catering to every budget.",
   icon: <IconCurrencyDollar />,
  },
  {
   title: "99.9% Uptime guarantee",
   description: "We ensure your website is always up and running smoothly, without interruption.",
   icon: <IconCloud />,
  },
  {
   title: "Customizable themes",
   description: "Choose from a variety of themes and personalize your site to match your brand.",
   icon: <IconRouteAltLeft />,
  },
  {
   title: "24/7 Support",
   description: "Our support team is always here to help, providing assistance whenever you need it.",
   icon: <IconHelp />,
  },
  {
   title: "Risk-free trial",
   description: "Try Zoomsterhub risk-free! If you're not satisfied, we'll help you make it right.",
   icon: <IconAdjustmentsBolt />,
  },
  {
   title: "Endless possibilities",
   description: "Build your dream website with unlimited customization options and integrations.",
   icon: <IconHeart />,
  },
 ];

 return (
  <section className="container mx-auto py-16 " id="services">
   <div className="px-8">
    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-primary dark:text-primary dark:text-white">
     Packed with thousands of features
    </h4>
    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
     From Image generation to video generation, Everything AI has APIs for
     literally everything. It can even create this website copy for you.
    </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
    {features.map((feature, index) => (
     <Feature key={feature.title} {...feature} index={index} />
    ))}
   </div>
  </section>
 );
}

const Feature = ({
 title,
 description,
 icon,
 index,
}: {
 title: string;
 description: string;
 icon: React.ReactNode;
 index: number;
}) => {
 return (
  <div
   className={cn(
    "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 cursor-pointer",
    (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
    index < 4 && "lg:border-b dark:border-neutral-800"
   )}
  >
   {index < 4 && (
    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full  pointer-events-none" />
   )}
   {index >= 4 && (
    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full  pointer-events-none" />
   )}
   <div className="mb-4 relative z-10 px-10 text-primary ">
    {icon}
   </div>
   <div className="text-lg font-bold mb-2 relative z-10 px-10">
    <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-foreground group-hover/feature:bg-primary transition-all duration-200 origin-center" />
    <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-white">
     {title}
    </span>
   </div>
   <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
    {description}
   </p>
  </div>
 );
};

