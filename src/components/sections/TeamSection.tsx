import Image from "next/image";
import Link from "next/link";
import { teamContent, TeamMember } from "@/config/team-content";

export default function TeamSection() {
 return (
  <section className="py-16 md:py-24 lg:py-32" id="team">
   <div className="container flex flex-col items-start text-left">
    <p className="semibold">{teamContent.hiring}</p>
    <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">{teamContent.title}</h2>
    <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
     {teamContent.description}
    </p>
   </div>
   <div className="container mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
    {teamContent.teamMembers.map((member: TeamMember, index: number) => (
     <div key={index} className="flex flex-col sm:flex-row">
      <div className="mb-4 aspect-square w-full shrink-0 overflow-clip bg-accent sm:mb-0 sm:mr-5 sm:size-48  rounded-lg">
       <Image
        src={member.image.src}
        alt={member.image.alt}
        width={192}
        height={192}
        className="h-full w-full object-cover"
       />
      </div>
      <div className="flex flex-1 flex-col items-start">
       <p className="w-full text-left font-medium">
        {member.name}
       </p>
       <p className="w-full text-left text-muted-foreground">
        {member.role}
       </p>
       <p className="w-full py-2 text-sm text-muted-foreground">
        {member.description}
       </p>
       <div className="my-2 flex items-start gap-4">
        {member.socials.map((social, index) => (
         <Link href={social.link} key={index}>
          <social.icon size={24} className="size-4 text-muted-foreground" />
         </Link>
        ))}
       </div>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
}

