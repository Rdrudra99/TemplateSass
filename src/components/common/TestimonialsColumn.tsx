'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';


interface Testimonial {
 text: string;
 imageSrc: string | StaticImageData;
 name: string;
 username: string;
}

interface TestimonialsColumnProps {
 className?: string;
 testimonials: Testimonial[];
 duration?: number;
}

export function TestimonialsColumn({ className, testimonials, duration = 10 }: TestimonialsColumnProps) {
 return (
  <div className={className}>
   <motion.div
    animate={{ translateY: '-50%' }}
    transition={{
     duration: duration,
     repeat: Infinity,
     ease: 'linear',
     repeatType: 'loop',
    }}
    className={twMerge('flex flex-col pt-10', className)}
   >
    {[...new Array(2)].fill(0).map((_, index) => (
     <React.Fragment key={index}>
      {testimonials.map(({ text, imageSrc, name, username }) => (
       <div
        key={username}
        className="p-6 border border-border rounded-3xl bg-card max-w-sm w-full my-5 shadow-lg"
       >
        <div className='text-card-foreground'>{text}</div>
        <div className="flex items-center gap-2 mt-5">
         <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
         />
         <div className="flex flex-col">
          <div className="font-semibold text-card-foreground tracking-tight leading-5">
           {name}
          </div>
          <div className="leading-5 text-muted-foreground tracking-tight">{username}</div>
         </div>
        </div>
       </div>
      ))}
     </React.Fragment>
    ))}
   </motion.div>
  </div>
 );
}

