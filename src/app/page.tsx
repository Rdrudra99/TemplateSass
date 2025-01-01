// import AboutSection from "@/components/sections/AboutSection";
// import CallToActionSection from "@/components/sections/CallToActionSection";
// import FAQSection from "@/components/sections/FaqSection";
// import { FeatureSection } from "@/components/sections/FeatureSection";
// import HeroSection from "@/components/sections/HeroSection";
// import LogoTracker from "@/components/sections/LogoSection";
// import PricingSection from "@/components/sections/PricingSection";
// import TeamSection from "@/components/sections/TeamSection";
// import TestimonialSection from "@/components/sections/TestimonialSection";
// import VideoSection from "@/components/sections/VideoSection";
// export default function Home() {
//   return (
//     <>
//       <HeroSection />
//       <VideoSection />
//       <LogoTracker />
//       <FeatureSection />
//       <AboutSection />
//       <TestimonialSection />
//       <FAQSection />
//       <TeamSection />
//       <PricingSection />
//       <CallToActionSection />
//     </>
//   );
// }

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '@/components/common/Loading';

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <Loading />
});
const CallToActionSection = dynamic(() => import("@/components/sections/CallToActionSection"), {
  loading: () => <Loading />
});
const FAQSection = dynamic(() => import("@/components/sections/FaqSection"), {
  loading: () => <Loading />
});
const FeatureSection = dynamic(() => import("@/components/sections/FeatureSection"), {
  loading: () => <Loading />
});
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), {
  ssr: true
});
const LogoTracker = dynamic(() => import("@/components/sections/LogoSection"), {
  loading: () => <Loading />
});
const PricingSection = dynamic(() => import("@/components/sections/PricingSection"), {
  loading: () => <Loading />
});
const TeamSection = dynamic(() => import("@/components/sections/TeamSection"), {
  loading: () => <Loading />
});
const TestimonialSection = dynamic(() => import("@/components/sections/TestimonialSection"), {
  loading: () => <Loading />
});
const VideoSection = dynamic(() => import("@/components/sections/VideoSection"), {
  loading: () => <Loading />
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <VideoSection />
        <LogoTracker />
        <FeatureSection />
        <AboutSection />
        <TestimonialSection />
        <FAQSection />
        <TeamSection />
        <PricingSection />
        <CallToActionSection />
      </Suspense>
    </>
  );
}

