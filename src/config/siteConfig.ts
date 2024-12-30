const siteConfig = {
 siteName: "Your Site Name",
 siteUrl: "https://www.yoursite.com",
 siteDescription: "A brief description of your site for SEO purposes.",
 siteLogo: "/assets/logo.png",
 socialLinks: {
  twitter: "https://twitter.com/yourprofile",
  github: "https://github.com/yourprofile",
  linkedin: "https://linkedin.com/in/yourprofile",
 },
 seo: {
  defaultTitle: "Your Default Title",
  defaultDescription: "Default description for SEO",
  keywords: ["Next.js", "SEO", "Blog"],
  openGraph: {
   type: "website",
   title: "Your OpenGraph Title",
   description: "Your OpenGraph Description",
   site_name: "Your Site Name",
   images: [
    {
     url: "/assets/og-image.jpg",
     width: 1200,
     height: 630,
     alt: "OpenGraph Image Alt Text",
    },
   ],
  },
  twitter: {
   handle: "@yourhandle",
   site: "@yourhandle",
   cardType: "summary_large_image",
  },
 },
};

export default siteConfig;
