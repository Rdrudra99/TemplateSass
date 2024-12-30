export default function CallToActionSection() {
 return (
  <section className="py-32">
   <div className="container mx-auto">
    <div className="flex items-center justify-center bg-[url('https://shadcnblocks.com/images/block/circles.svg')] bg-cover bg-center px-8 py-20 text-center md:p-20">
     <div className="mx-auto max-w-screen-md">
      <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
       Start building your websites faster
      </h1>
      <p className="text-muted-foreground md:text-lg">
       Try our tools and services to build your website faster. Start with a
       14-day free trial. No credit card required. No setup fees. Cancel
       anytime.
      </p>
      <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
       <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
        Get Started
       </button>
       <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
        Learn More
       </button>
      </div>
     </div>
    </div>
   </div>
  </section>

 );
}
