import { Zap, Lock, Star, CircleCheck, Globe } from 'lucide-react';
import { heroSectionContent, people } from '@/config/hero';
import { AnimatedTooltip } from '../common/animated-tooltip';
import AnimatedShinyText from '../ui/animated-shiny-text';
import { ArrowRightIcon } from '@radix-ui/react-icons';

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
    <section className="py-16">
      <div className="container relative mx-auto min-h-[500px] md:min-h-[550px] flex justify-center items-center flex-col px-4">
        {/* Background grid */}
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Powered by Zoomster Hub OPC Private Limited</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl tracking-wide lg:text-7xl font-semibold container mx-auto text-center mt-6 relative z-10">
          <span className="flex flex-wrap justify-center items-center">
            {content.title.split(' ').map((word, index) => (
              <span key={index} className={index === 2 ? ' mr-1 text-primary' : 'mr-1'}>
                {word}
              </span>
            ))}
            <Zap className="mx-2 inline-block h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" fill='#00000' />
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
        <p className="text-center mt-6 text-base md:text-base text-muted-foreground dark:text-muted max-w-3xl mx-auto relative z-10">
          {content.subtitle}
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full pt-4">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </section>
  );
}

