// header.ts

export const navigationItems = [
 { title: "Home", href: "/", description: "" },
 { title: "Features", href: "/features", description: "" },
 { title: "Pricing", href: "/pricing", description: "" },
 { title: "Blog", href: "/blog", description: "" },
 {
  title: "Product",
  description: "Managing a small business today is already tough.",
  items: [
   { title: "Reports", href: "/reports" },
   { title: "Statistics", href: "/statistics" },
   { title: "Dashboards", href: "/dashboards" },
   { title: "Recordings", href: "/recordings" },
  ],
 },
 {
  title: "Company",
  description: "Get to know us better.",
  items: [
   { title: "About us", href: "/about" },
   { title: "Fundraising", href: "/fundraising" },
   { title: "Investors", href: "/investors" },
   { title: "Contact us", href: "/contact" },
  ],
 },
];
