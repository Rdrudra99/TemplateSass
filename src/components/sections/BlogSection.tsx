import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
 {
  id: "post-1",
  title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
  summary:
   "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  label: "Ut varius dolor turpis",
  author: "Jane Doe",
  published: "1 Jan 2024",
  href: "#",
  image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
 },
 {
  id: "post-2",
  title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
  summary:
   "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  label: "Ut varius dolor turpis",
  author: "Jane Doe",
  published: "1 Jan 2024",
  href: "#",
  image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
 },
 {
  id: "post-3",
  title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
  summary:
   "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
  label: "Ut varius dolor turpis",
  author: "Jane Doe",
  published: "1 Jan 2024",
  href: "#",
  image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
 },
];

export default function BlogSection() {
 return (
  <div className="container mx-auto flex flex-col items-center gap-12 px-6 md:gap-16 lg:px-16">
   {/* Header */}
   <div className="text-center">
    <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground md:mb-6">
     Tag Line
    </p>
    <h2 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
     Blog Posts
    </h2>
    <p className="mb-6 text-sm text-muted-foreground md:mb-8 md:text-base lg:max-w-2xl lg:text-lg">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
     doloremque mollitia fugiat omnis! Porro facilis quo animi
     consequatur. Explicabo.
    </p>
    <Button variant="link" className="w-full sm:w-auto">
     Explore all posts
     <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
   </div>
   {/* Blog Posts */}
   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    {posts.map((post) => (
     <a
      key={post.id}
      href={post.href}
      className="flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-lg"
     >
      <div>
       <img
        src={post.image}
        alt={post.title}
        className="aspect-[16/9] h-full w-full object-cover"
       />
      </div>
      <div className="px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
       <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
        {post.title}
       </h3>
       <p className="mb-3 text-sm text-muted-foreground md:mb-4 lg:mb-6">
        {post.summary}
       </p>
       <p className="flex items-center text-sm font-medium text-primary hover:underline">
        Read more
        <ArrowRight className="ml-2 h-4 w-4" />
       </p>
      </div>
     </a>
    ))}
   </div>
  </div>
 );
}
