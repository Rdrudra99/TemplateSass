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
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), {
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
        <ContactSection />
        <CallToActionSection />
      </Suspense>
    </>
  );
}

