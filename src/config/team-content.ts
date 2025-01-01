import { Dribbble, Github, Linkedin } from 'lucide-react';

export interface TeamMember {
 name: string;
 role: string;
 description: string;
 socials: Array<{
  icon: typeof Github | typeof Linkedin | typeof Dribbble;
  link: string;
 }>;
 image: {
  src: string;
  alt: string;
 };
}

export const teamContent = {
 hiring: "We're hiring",
 title: "Meet our team",
 description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
 teamMembers: [
  {
   name: "John Doe",
   role: "CEO",
   description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
   socials: [
    { icon: Github, link: "#" },
    { icon: Linkedin, link: "#" },
    { icon: Dribbble, link: "#" },
   ],
   image: { src: "https://instagram.fbbi5-3.fna.fbcdn.net/v/t51.2885-19/470900581_614126391142378_5555939437547003444_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbbi5-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2_jPAPgKtMkQ7kNvgErpztO&_nc_gid=dfcde42f16cb469292e8d278a52417b0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB0IBab0OaHbxDlfJocUNG4N_St5eibvVuzUL8fYfMkEQ&oe=677B259A&_nc_sid=8b3546", alt: "John Doe" },
  },
  {
   name: "Jane Smith",
   role: "CTO",
   description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
   socials: [
    { icon: Github, link: "#" },
    { icon: Linkedin, link: "#" },
    { icon: Dribbble, link: "#" },
   ],
   image: { src: "https://instagram.fbbi5-3.fna.fbcdn.net/v/t51.2885-19/470900581_614126391142378_5555939437547003444_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbbi5-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2_jPAPgKtMkQ7kNvgErpztO&_nc_gid=dfcde42f16cb469292e8d278a52417b0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB0IBab0OaHbxDlfJocUNG4N_St5eibvVuzUL8fYfMkEQ&oe=677B259A&_nc_sid=8b3546", alt: "Jane Smith" },
  },
  {
   name: "Mike Johnson",
   role: "Lead Developer",
   description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
   socials: [
    { icon: Github, link: "#" },
    { icon: Linkedin, link: "#" },
    { icon: Dribbble, link: "#" },
   ],
   image: { src: "https://instagram.fbbi5-3.fna.fbcdn.net/v/t51.2885-19/470900581_614126391142378_5555939437547003444_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbbi5-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2_jPAPgKtMkQ7kNvgErpztO&_nc_gid=dfcde42f16cb469292e8d278a52417b0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB0IBab0OaHbxDlfJocUNG4N_St5eibvVuzUL8fYfMkEQ&oe=677B259A&_nc_sid=8b3546", alt: "Mike Johnson" },
  },
  {
   name: "Sarah Williams",
   role: "UX Designer",
   description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
   socials: [
    { icon: Github, link: "#" },
    { icon: Linkedin, link: "#" },
    { icon: Dribbble, link: "#" },
   ],
   image: { src: "https://instagram.fbbi5-3.fna.fbcdn.net/v/t51.2885-19/470900581_614126391142378_5555939437547003444_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbbi5-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2_jPAPgKtMkQ7kNvgErpztO&_nc_gid=dfcde42f16cb469292e8d278a52417b0&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB0IBab0OaHbxDlfJocUNG4N_St5eibvVuzUL8fYfMkEQ&oe=677B259A&_nc_sid=8b3546", alt: "Sarah Williams" },
  }
 ] as TeamMember[]
};
