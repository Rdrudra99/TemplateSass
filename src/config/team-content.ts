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
 description: `
  This is the team of creative professionals who are passionate about their work and are always ready to collaborate with you.
 `,
 teamMembers: [
  {
   name: "Abigail Smith",
   role: "CEO",
   description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
   socials: [
    { icon: Github, link: "#" },
    { icon: Linkedin, link: "#" },
    { icon: Dribbble, link: "#" },
   ],
   image: {
    src: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "John Doe"
   },
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
   image: { src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Jane Smith" },
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
   image: { src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Mike Johnson" },
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
   image: { src: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Sarah Williams" },
  }
 ] as TeamMember[]
};
