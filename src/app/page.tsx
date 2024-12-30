import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import FAQSection from "@/components/sections/FaqSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import HeaderSection from "@/components/sections/HeaderSection";
import HeroSection from "@/components/sections/HeroSection";
import LogoTracker from "@/components/sections/LogoSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoSection from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <VideoSection />
      <LogoTracker />
      <FeatureSection />
      <AboutSection />
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
      <TeamSection />
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
