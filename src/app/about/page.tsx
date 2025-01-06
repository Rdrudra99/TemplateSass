'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail } from 'lucide-react';
import { socialLinks } from "@/config/director";



export default function Page() {
 return (
  <motion.section
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
   className="max-w-2xl mx-auto px-4 py-16"
  >
   <div className="mb-8 text-center sm:text-left">
    <motion.div
     initial={{ scale: 0.5, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     transition={{ duration: 0.5 }}
    >
     <Image
      src="/about.jpg"
      alt="Abinash Rout"
      className="rounded-full object-cover aspect-square bg-gray-100 mx-auto sm:float-right sm:ml-5 sm:mb-5"
      unoptimized
      width={160}
      height={160}
      priority
     />
    </motion.div>
    <motion.h1
     initial={{ y: -20, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ delay: 0.2, duration: 0.5 }}
     className="text-3xl font-bold mt-4 mb-2 text-primary"
    >
     Abinash Rout
    </motion.h1>
    <motion.p
     initial={{ y: -20, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ delay: 0.3, duration: 0.5 }}
     className="text-xl text-gray-600 dark:text-gray-400"
    >
     CEO of Zoomster Hub OPC Private Limited
    </motion.p>
   </div>

   <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="prose prose-neutral dark:prose-invert"
   >
    <p>
     Abinash Rout, hailing from Kendujhar, Odisha, has established himself as a dynamic force in the Indian entertainment industry. Based in Mumbai and Hyderabad, he has excelled as a multifaceted filmmaker, producer, and visionary entrepreneur.
    </p>

    <AnimatedSection title="Career Highlights">
     <ul>
      <li>Directed over 100 TV commercials, web series, music videos, and serials</li>
      <li>Received accolades including Best Entrepreneur, Best Director, and Best Debut Assistant Director</li>
      <li>CEO of Zoomster Hub OPC Private Limited, diversifying into OTT platforms, film production, e-commerce, and digital media</li>
      <li>Spearheads Zoomaax TV, an OTT platform set to launch in over 190 countries</li>
      <li>Founder of Zoomaax Studio, focusing on nurturing fresh talent in the industry</li>
     </ul>
    </AnimatedSection>

    <AnimatedSection title="Entrepreneurial Vision">
     <p>
      As the CEO of Zoomster Hub OPC Private Limited, Abinash leads an enterprise that has expanded beyond India to countries like South Korea and Dubai. His latest venture, ZoomaaR, an e-commerce platform, showcases his versatility and business acumen.
     </p>
    </AnimatedSection>

    <motion.blockquote
     initial={{ x: -20, opacity: 0 }}
     animate={{ x: 0, opacity: 1 }}
     transition={{ delay: 0.6, duration: 0.5 }}
    >
     "Success is not the destination; it's the journey of perseverance, innovation, and belief in your dreams. With dedication and vision, anything is possible."
     <footer>- Abinash Rout</footer>
    </motion.blockquote>

    <AnimatedSection title="Achievements">
     <ul>
      <li>Revolutionizing global entertainment consumption through Zoomaax TV</li>
      <li>Empowering emerging talent and creating high-quality content</li>
      <li>Redefining standards in the entertainment and e-commerce industries</li>
      <li>Inspiring future generations to dream big and work hard</li>
     </ul>
    </AnimatedSection>

    <p>
     Abinash Rout's journey from a budding director to a trailblazer in the entertainment industry is a testament to the power of resilience and creativity. His story continues to inspire and shape the future of global entertainment.
    </p>

    <AnimatedSection title="Connect with Abinash Rout">
     <div className="flex space-x-4 mt-4">
      <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
      >
       <Link
        href={socialLinks.linkedin}
        target="_blank"
        aria-label="LinkedIn Profile"
       >
        <Linkedin size={24} />
       </Link>
      </motion.div>
      <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
      >
       <Link
        href={socialLinks.email}
        aria-label="Email"
       >
        <Mail size={24} />
       </Link>
      </motion.div>
     </div>
    </AnimatedSection>
   </motion.div>
  </motion.section>
 );
}

function AnimatedSection({ title, children }: any) {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ duration: 0.5 }}
   viewport={{ once: true, margin: "-100px" }}
  >
   <h2>{title}</h2>
   {children}
  </motion.div>
 );
}

