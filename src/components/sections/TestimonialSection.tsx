'use client';

import React from 'react';
import { TestimonialsColumn } from '@/components/common/TestimonialsColumn';
import { testimonials, testimonialContent } from '@/config/testimonials';

export default function TestimonialSection() {
 const firstColumn = testimonials.slice(0, 3);
 const secondColumn = testimonials.slice(3, 6);
 const thirdColumn = testimonials.slice(6, 9);

 return (
  <section className="py-16 md:py-24 lg:py-32 bg-background">
   <div className="container mx-auto px-4">
    <h2
     className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center max-w-xl mx-auto text-foreground"
     dangerouslySetInnerHTML={{ __html: testimonialContent.title }}
    />
    <p className="text-center text-muted-foreground text-xl mt-12 max-w-2xl mx-auto">
     {testimonialContent.description}
    </p>
    <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
     <TestimonialsColumn testimonials={firstColumn} duration={15} className="block" />
     <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
     <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
    </div>
   </div>
  </section>
 );
}
