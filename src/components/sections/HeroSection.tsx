

export default function HeroSection() {
  return (
    <section className="py-32">
      <div className="container relative mx-auto">
        {/* Background grid */}
        <div className="absolute inset-0 -z-10 mx-auto h-full w-full max-w-3xl bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        {/* Heading */}
        <h1 className="relative mx-auto mb-8 max-w-3xl text-center text-4xl font-semibold md:mb-10 md:text-6xl md:leading-snug flex-wrap">
          <span>
            Create Winning
            <span className="ml-1 opacity-50">Proposals</span> 10X Faster with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe mx-2 mb-1 inline-block h-auto w-8 md:mx-4 md:mb-3 md:w-14"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            AI
          </span>

          {/* Annotations */}
          <div className="absolute -left-20 -top-10 hidden w-fit -rotate-12 gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-muted-foreground lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap h-auto w-3"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            Fast
          </div>

          <div className="absolute -left-24 top-14 hidden w-fit -rotate-12 gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-muted-foreground lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock h-auto w-3"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Secure
          </div>

          <div className="absolute -right-24 -top-10 hidden w-fit rotate-12 gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-muted-foreground lg:flex">
            Professional
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star h-auto w-3"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>

          <div className="absolute -right-28 top-14 hidden w-fit rotate-12 gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-muted-foreground lg:flex">
            Optimized
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-check h-auto w-3"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-screen-md text-center font-medium text-muted-foreground md:text-xl">
          Penna lets you build high-converting, website-style proposals with AI,
          helping you win better customers without wasting time.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
            Start free 14-day trial
          </button>
          <div className="text-sm text-muted-foreground md:text-balance">
            Powered by GPT-4
          </div>
        </div>
      </div>
    </section>
  );
};

