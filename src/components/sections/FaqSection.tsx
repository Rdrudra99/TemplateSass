import { Badge } from "@/components/ui/badge";

const faqItems = [
 {
  question: "What is a FAQ and why is it important?",
  answer:
   "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
 },
 {
  question: "Why should I use a FAQ on my website or app?",
  answer:
   "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions.",
 },
 {
  question: "How do I effectively create a FAQ section?",
  answer:
   "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
 },
 {
  question: "What are the benefits of having a well-maintained FAQ section?",
  answer:
   "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
 },
 {
  question: "How should I organize my FAQ for optimal usability?",
  answer:
   'An organized FAQ is critical for user-friendliness. Start by grouping similar questions into categories, such as "Billing," "Account Setup," or "Technical Support." This way, users can quickly find the section that addresses their specific concerns.',
 },
 {
  question: "How often should I update my FAQ, and why is it necessary?",
  answer:
   "Regular updates to your FAQ are essential to keeping the information accurate and relevant. As your product or service evolves, so will the types of questions your users ask.",
 },
];

export default function FAQSection() {
 return (
  <section className="py-16 md:py-24 lg:py-32">
   <div className="container max-w-4xl px-6 mx-auto">
    <div className="text-center">
     <Badge variant="default">FAQ</Badge>
     <h1 className="mt-4 text-2xl font-semibold md:text-4xl">
      Common Questions &amp; Answers
     </h1>
     <p className="mt-4 text-sm font-medium text-muted-foreground md:mt-6 md:text-base">
      Find out all the essential details about our platform and how it can serve your needs.
     </p>
    </div>
    <div className="mt-10 grid gap-8 sm:mt-12 md:mt-14 md:grid-cols-2 md:gap-12">
     {faqItems.map((item, index) => (
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
