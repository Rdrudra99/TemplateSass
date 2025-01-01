import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";
import type { Metadata } from "next";
import "./globals.css";
import HeaderSection from "@/components/sections/HeaderSection";
import FooterSection from "@/components/sections/FooterSection";
import siteConfig from "@/config/siteConfig";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords.join(", "), // Convert array of keywords to a comma-separated string
  openGraph: {
    title: siteConfig.seo.openGraph.title,
    description: siteConfig.seo.openGraph.description,
    images: siteConfig.seo.openGraph.images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#e0c8fd" />
        {/* add keywords here  */}
        <meta name="keywords" content="whyme" />
        <meta property="og:title" content="Nextjs App" />
        <meta name="twitter:title" content="Nextjs App" />

        <meta name="description" content="Nextjs 14 starter template" />
        <meta property="og:description" content="Nextjs 14 starter template" />
        <meta name="twitter:description" content="Nextjs 14 starter template" />

        <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
        <meta name="twitter:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
      </head>
      <body
        className={classNames("antialiased", {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderSection />
          {children}
          <FooterSection />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

