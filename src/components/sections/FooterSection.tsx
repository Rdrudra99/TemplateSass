// import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
// import footerData, { FooterData, SocialLink } from "@/config/footerData"; // Adjust the path as per your project structure

// const Footer = () => {
//   const footer: FooterData = footerData;
//   // Function to get the corresponding icon component based on the string value
//   const getIcon = (iconName: string) => {
//     switch (iconName) {
//       case "FaInstagram":
//         return FaInstagram;
//       case "FaFacebook":
//         return FaFacebook;
//       case "FaTwitter":
//         return FaTwitter;
//       case "FaLinkedin":
//         return FaLinkedin;
//       default:
//         return FaInstagram; // Default fallback
//     }
//   };

//   return (
//     <section className="md:py-32 py-12">
//       <div className="container mx-auto">
//         <footer>
//           <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
//             <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
//               <div>
//                 <span className="flex items-center justify-center gap-4 lg:justify-start">
//                   <img
//                     src={footer.logo.image}
//                     alt={footer.logo.alt}
//                     className="h-11"
//                   />
//                   <p className="text-3xl font-semibold">{footer.logo.text}</p>
//                 </span>
//                 <p className="mt-6 text-sm text-muted-foreground">
//                   {footer.description}
//                 </p>
//               </div>
//               <ul className="flex items-center space-x-6 text-muted-foreground">
//                 {footer.socialLinks.map((link: SocialLink, idx: number) => {
//                   const Icon = getIcon(link.icon); // Get the corresponding icon
//                   return (
//                     <li key={idx} className="font-medium hover:text-primary">
//                       <a href={link.href}>
//                         <Icon className="size-6" />
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//             <div className="grid grid-cols-3 gap-6 lg:gap-20">
//               {footer.sections.map((section, sectionIdx) => (
//                 <div key={sectionIdx}>
//                   <h3 className="mb-6 font-bold">{section.title}</h3>
//                   <ul className="space-y-4 text-sm text-muted-foreground">
//                     {section.links.map((link, linkIdx) => (
//                       <li key={linkIdx} className="font-medium hover:text-primary">
//                         <a href={link.href}>{link.name}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
//             <p>{footer.footerText}</p>
//             <ul className="flex justify-center gap-4 lg:justify-start">
//               {footer.footerLinks.map((link, idx) => (
//                 <li key={idx} className="hover:text-primary">
//                   <a href={link.href}>{link.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export default Footer;

'use client'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import footerData, { FooterData, SocialLink } from "@/config/footerData"; // Adjust the path as per your project structure
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Moon, Sun, Laptop } from 'lucide-react';

const Footer = () => {
  const footer: FooterData = footerData;
  const { setTheme } = useTheme();

  // Function to get the corresponding icon component based on the string value
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FaInstagram":
        return FaInstagram;
      case "FaFacebook":
        return FaFacebook;
      case "FaTwitter":
        return FaTwitter;
      case "FaLinkedin":
        return FaLinkedin;
      default:
        return FaInstagram; // Default fallback
    }
  };

  return (
    <section className="md:py-32 py-12">
      <div className="container mx-auto">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <img
                    src={footer.logo.image}
                    alt={footer.logo.alt}
                    className="h-11"
                  />
                  <p className="text-3xl font-semibold">{footer.logo.text}</p>
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  {footer.description}
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                {footer.socialLinks.map((link: SocialLink, idx: number) => {
                  const Icon = getIcon(link.icon); // Get the corresponding icon
                  return (
                    <li key={idx} className="font-medium hover:text-primary">
                      <a href={link.href}>
                        <Icon className="size-6" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {footer.sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="font-medium hover:text-primary">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>{footer.footerText}</p>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <ul className="flex justify-center gap-4 lg:justify-start">
                {footer.footerLinks.map((link, idx) => (
                  <li key={idx} className="hover:text-primary">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>System</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

