import { Zap, Lock, Star, CircleCheck, Globe } from 'lucide-react';
import { heroSectionContent } from '@/config/hero';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'zap':
      return <Zap className="h-auto w-3" />;
    case 'lock':
      return <Lock className="h-auto w-3" />;
    case 'star':
      return <Star className="h-auto w-3" />;
    case 'circle-check':
      return <CircleCheck className="h-auto w-3" />;
    default:
      return null;
  }
};

export default function HeroSection() {
  const content = heroSectionContent;

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container relative mx-auto min-h-[500px] md:min-h-[550px] flex justify-center items-center flex-col px-4">
        {/* Background grid */}
        <div className="absolute inset-0 -z-10 mx-auto h-full w-full max-w-3xl bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        {/* Heading */}
        <h1 className="relative mx-auto mb-8 max-w-3xl text-center text-3xl font-semibold md:text-5xl lg:text-6xl md:leading-snug">
          <span className="flex flex-wrap justify-center items-center">
            {content.title.split(' ').map((word, index) => (
              <span key={index} className={index === 2 ? 'opacity-50 mr-1' : 'mr-1'}>
                {word}
              </span>
            ))}
            <Globe className="mx-2 mb-1 inline-block h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </span>

          {/* Annotations */}
          {content.annotations.map((annotation, index) => (
            <div
              key={index}
              className={`absolute hidden w-fit ${index % 2 === 0 ? '-left-20 md:-left-24' : '-right-24 md:-right-28'
                } ${index < 2 ? '-top-10' : 'top-14'
                } ${index < 2 ? '-rotate-12' : 'rotate-12'
                } gap-1 border-b border-dashed border-muted-foreground text-sm font-normal text-muted-foreground lg:flex`}
            >
              {index % 2 === 0 && getIcon(annotation.icon)}
              {annotation.text}
              {index % 2 !== 0 && getIcon(annotation.icon)}
            </div>
          ))}
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-screen-md text-center font-medium text-muted-foreground text-lg md:text-xl px-4">
          {content.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
            {content.ctaButton}
          </button>
          <div className="text-sm text-muted-foreground md:text-balance">
            {content.poweredBy}
          </div>
        </div>
      </div>
    </section>
  );
}

