import Image from 'next/image';
import { aboutSectionContent } from '@/config/about';

export default function AboutSection() {
 const { ourStory, ourWorkplace, images } = aboutSectionContent;

 return (
  <section className="py-16 md:py-24 lg:py-32" id='about'>
   <div className="container px-4 md:px-6 mx-auto">
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
     <div className="flex w-full flex-col gap-12 lg:w-1/2">
      <div className="space-y-4">
       <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">{ourStory.title}</h1>
       <p className="text-base sm:text-lg md:text-xl">{ourStory.mainText}</p>
       <p className="text-sm text-muted-foreground sm:text-base">{ourStory.additionalText}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
       <Image
        src={images[0].src}
        alt={images[0].alt}
        width={images[0].width}
        height={images[0].height}
        className={images[0].className}
       />
       <div className="flex flex-col gap-4">
        <Image
         src={images[1].src}
         alt={images[1].alt}
         width={images[1].width}
         height={images[1].height}
         className={images[1].className}
        />
        <Image
         src={images[2].src}
         alt={images[2].alt}
         width={images[2].width}
         height={images[2].height}
         className={images[2].className}
        />
       </div>
      </div>
     </div>
     <div className="flex w-full flex-col gap-12 lg:w-1/2 lg:pt-24">
      <div className="grid gap-4 sm:grid-cols-2">
       <Image
        src={images[3].src}
        alt={images[3].alt}
        width={images[3].width}
        height={images[3].height}
        className={images[3].className}
       />
       <div className="flex flex-col gap-4">
        <Image
         src={images[4].src}
         alt={images[4].alt}
         width={images[4].width}
         height={images[4].height}
         className={images[4].className}
        />
        <Image
         src={images[5].src}
         alt={images[5].alt}
         width={images[5].width}
         height={images[5].height}
         className={images[5].className}
        />
       </div>
      </div>
      <div className="space-y-4">
       <h2 className="text-2xl font-semibold sm:text-3xl">{ourWorkplace.title}</h2>
       <p className="text-base sm:text-lg md:text-xl">{ourWorkplace.mainText}</p>
       <p className="text-sm text-muted-foreground sm:text-base">{ourWorkplace.additionalText}</p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

