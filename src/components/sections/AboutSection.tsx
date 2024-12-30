import Image from 'next/image'

export default function AboutSection() {
 return (
  <section className="py-16 md:py-24 lg:py-32">
   <div className="container px-4 md:px-6 mx-auto">
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
     <div className="flex w-full flex-col gap-12 lg:w-1/2">
      <div className="space-y-4">
       <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Our Story</h1>
       <p className="text-base sm:text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias repellendus perferendis earum facilis est soluta consequatur placeat hic aliquid exercitationem, ex molestias nam veniam distinctio maxime culpa magnam autem.</p>
       <p className="text-sm text-muted-foreground sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore quas placeat expedita aliquam rerum tempore amet, sequi ipsa ad quam, adipisci exercitationem nihil, sapiente laborum minus doloribus consequuntur sed. Quo repudiandae nihil quas voluptates, aut beatae reiciendis aliquid perspiciatis quae explicabo inventore temporibus laborum, nostrum omnis quos excepturi dolorum reprehenderit vel labore eaque libero perferendis? Qui illo numquam beatae?</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
       <Image
        src="https://shadcnblocks.com/images/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
        alt="about 1"
        width={400}
        height={600}
        className="aspect-[0.7] w-full rounded-lg object-cover"
       />
       <div className="flex flex-col gap-4">
        <Image
         src="https://shadcnblocks.com/images/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg"
         alt="about 2"
         width={400}
         height={400}
         className="aspect-square rounded-lg object-cover"
        />
        <Image
         src="https://shadcnblocks.com/images/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg"
         alt="about 3"
         width={400}
         height={600}
         className="aspect-[0.7] rounded-lg object-cover"
        />
       </div>
      </div>
     </div>
     <div className="flex w-full flex-col gap-12 lg:w-1/2 lg:pt-24">
      <div className="grid gap-4 sm:grid-cols-2">
       <Image
        src="https://shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg"
        alt="about 4"
        width={400}
        height={500}
        className="aspect-[0.9] w-full rounded-lg object-cover"
       />
       <div className="flex flex-col gap-4">
        <Image
         src="https://shadcnblocks.com/images/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
         alt="about 5"
         width={400}
         height={500}
         className="aspect-[0.8] rounded-lg object-cover"
        />
        <Image
         src="https://shadcnblocks.com/images/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg"
         alt="about 6"
         width={400}
         height={500}
         className="aspect-[0.9] rounded-lg object-cover"
        />
       </div>
      </div>
      <div className="space-y-4">
       <h2 className="text-2xl font-semibold sm:text-3xl">Our Workplace</h2>
       <p className="text-base sm:text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae vel rem tenetur illum aspernatur. Ea, facere soluta cumque laboriosam repudiandae quaerat inventore dolores saepe pariatur, adipisci atque voluptate doloribus!</p>
       <p className="text-sm text-muted-foreground sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid laudantium minus distinctio exercitationem odio non nihil blanditiis quae, beatae assumenda ad reiciendis soluta dolorem. Natus repellendus quidem dolorum temporibus!</p>
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}

