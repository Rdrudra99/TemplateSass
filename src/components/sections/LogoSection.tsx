'use client'
import quantumLogo from "@/assets/marqueImage/quantum.svg";
import acmeLogo from "@/assets/marqueImage/acme-corp.svg";
import echoValleyLogo from "@/assets/marqueImage/echo-valley.svg";
import pulseLogo from "@/assets/marqueImage/pulse.svg";
import outsideLogo from "@/assets/marqueImage/outside.svg";
import apexLogo from "@/assets/marqueImage/apex.svg";
import celestialLogo from "@/assets/marqueImage/celestial.svg";
import twiceLogo from "@/assets/marqueImage/twice.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
 { name: "Quantum", image: quantumLogo },
 { name: "Acme Corp", image: acmeLogo },
 { name: "Echo Valley", image: echoValleyLogo },
 { name: "Pulse", image: pulseLogo },
 { name: "Outside", image: outsideLogo },
 { name: "Apex", image: apexLogo },
 { name: "Celestial", image: celestialLogo },
 { name: "Twice", image: twiceLogo },
];

export default function LogoTracker() {
 return (
  <section className="py-16 md:py-24 lg:py-32 overflow-x-clip">
   <div className="container mx-auto">
    <h3 className="text-center text-primary text-xl">
     Already Chosen By These Market Leaders
    </h3>
    <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to right, transparent, black 10%, black 90%, transparent)]">
     <motion.div className="flex gap-14 flex-none pr-14" animate={{
      translateX: "-50%"
     }}
      transition={{
       duration: 15,
       repeat: Infinity,
       ease: "linear",
       repeatType: "loop"
      }}
     >
      {logos.map((logo, index) => (
       <Image key={index} src={logo.image} alt={logo.name} />
      ))}
     </motion.div>
    </div>
   </div>
  </section >
 )
}
