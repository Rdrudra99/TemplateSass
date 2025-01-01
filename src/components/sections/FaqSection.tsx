import { Badge } from "@/components/ui/badge";
import { faqContent } from "@/config/faq-content";

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container max-w-4xl px-6 mx-auto">
        <div className="text-center">
          <Badge variant="default">{faqContent.badge}</Badge>
          <h1 className="mt-4 text-2xl font-semibold md:text-4xl">
            {faqContent.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-muted-foreground md:mt-6 md:text-base">
            {faqContent.description}
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:mt-12 md:mt-14 md:grid-cols-2 md:gap-12">
          {faqContent.faqItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:flex-row md:gap-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <h3 className="font-medium">{item.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

