import { Dribbble, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const TeamData = () => [
 {
  name: "Name",
  role: "Role",
  description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  socials: [{ icon: Github, link: "#", }, { icon: Linkedin, link: "#", }, { icon: Dribbble, link: "#", },],
  image: { src: "", alt: "" },
 },
 {
  name: "Name",
  role: "Role",
  description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  socials: [{ icon: Github, link: "#", }, { icon: Linkedin, link: "#", }, { icon: Dribbble, link: "#", },],
  image: { src: "", alt: "" },
 },
 {
  name: "Name",
  role: "Role",
  description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  socials: [{ icon: Github, link: "#", }, { icon: Linkedin, link: "#", }, { icon: Dribbble, link: "#", },],
  image: { src: "", alt: "" },
 },
 {
  name: "Name",
  role: "Role",
  description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  socials: [{ icon: Github, link: "#", }, { icon: Linkedin, link: "#", }, { icon: Dribbble, link: "#", },],
  image: { src: "", alt: "" },
 }
]


export default function TeamSection() {
 return (
  <section className="py-32">
   <div className="container flex flex-col items-start text-left">
    <p className="semibold">We're hiring</p>
    <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">Meet our team</h2>
    <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
    </p>
   </div>
   <div className="container mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
    {
     TeamData().map((member, index) => (
      <div className="flex flex-col sm:flex-row">
       <div className="mb-4 aspect-square w-full shrink-0 overflow-clip bg-accent sm:mb-0 sm:mr-5 sm:size-48"></div>
       <div className="flex flex-1 flex-col items-start">
        <p className="w-full text-left font-medium">
         {member?.name || "Name"}
        </p>
        <p className="w-full text-left text-muted-foreground">
         {member?.role || "Role"}
        </p>
        <p className="w-full py-2 text-sm text-muted-foreground">
         {member?.description || "Description"}
        </p>
        <div className="my-2 flex items-start gap-4">
         {
          member?.socials?.map((social, index) => (
           <Link href={social?.link || "#"} key={index}>
            {social?.icon && <social.icon size={24} className="size-4 text-muted-foreground" />}
           </Link>
          ))
         }
        </div>
       </div>
      </div>
     ))
    }
   </div>
  </section>
 );
}
