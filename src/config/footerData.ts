import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export type SocialLink = {
 name: string;
 href: string;
 icon: "FaInstagram" | "FaFacebook" | "FaTwitter" | "FaLinkedin";
};

export type FooterSection = {
 title: string;
 links: { name: string; href: string }[];
};

export type FooterData = {
 logo: {
  image: string;
  alt: string;
  text: string;
 };
 description: string;
 socialLinks: SocialLink[];
 sections: FooterSection[];
 footerText: string;
 footerLinks: { name: string; href: string }[];
};

const footerData: FooterData = {
 logo: {
  image: "https://shadcnblocks.com/images/block/block-1.svg",
  alt: "logo",
  text: "Shadcnblocks",
 },
 description: "A collection of 100+ responsive HTML templates for your startup business or side project.",
 socialLinks: [
  { name: "Instagram", href: "#", icon: "FaInstagram" },
  { name: "Facebook", href: "#", icon: "FaFacebook" },
  { name: "Twitter", href: "#", icon: "FaTwitter" },
  { name: "LinkedIn", href: "#", icon: "FaLinkedin" },
 ],
 sections: [
  {
   title: "Product",
   links: [
    { name: "Overview", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Features", href: "#" },
   ],
  },
  {
   title: "Company",
   links: [
    { name: "About", href: "#" },
    { name: "Team", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
   ],
  },
  {
   title: "Resources",
   links: [
    { name: "Help", href: "#" },
    { name: "Sales", href: "#" },
    { name: "Advertise", href: "#" },
    { name: "Privacy", href: "#" },
   ],
  },
 ],
 footerText: "© 2024 Shadcnblocks. All rights reserved.",
 footerLinks: [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
 ],
};

export default footerData;
