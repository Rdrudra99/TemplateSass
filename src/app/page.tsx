import AboutSection from "@/components/sections/AboutSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import FAQSection from "@/components/sections/FaqSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import LogoTracker from "@/components/sections/LogoSection";
import PricingSection from "@/components/sections/PricingSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoSection from "@/components/sections/VideoSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <LogoTracker />
      <FeatureSection />
      <AboutSection />
      <TestimonialSection />
      <FAQSection />
      <TeamSection />
      <PricingSection />
      <CallToActionSection />
    </>
  );
}
