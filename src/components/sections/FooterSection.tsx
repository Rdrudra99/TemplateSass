import { Separator } from "@/components/ui/separator";
import { footerLinks, socialLinks } from "@/config/footerData";
import siteConfig from "@/config/siteConfig";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const renderSocialIcon = (iconName: any) => {
    switch (iconName) {
      case "FacebookIcon":
        return <FacebookIcon className="h-5 w-5" />;
      case "LinkedinIcon":
        return <LinkedinIcon className="h-5 w-5" />;
      case "YoutubeIcon":
        return <YoutubeIcon className="h-5 w-5" />;
      case "InstagramIcon":
        return <InstagramIcon className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer>
      <div className="container mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          <h2 className="font-bold tracking-tighter text-3xl">
            Zoomsterhub.com
          </h2>
          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }: any) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground font-medium flex justify-center items-center gap-1"
                >
                  {title}
                  <svg width="7" height="7" viewBox="0 0 6 6" className="ml-1">
                    <path fill="currentColor" d="M1.252 5.547l-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396-3.159 3.162z" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              {siteConfig?.siteName || "Zoomsterhub.com"}
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            {socialLinks.map(({ icon, href }: any) => (
              <Link href={href} target="_blank" key={icon}>
                {renderSocialIcon(icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
