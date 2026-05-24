import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import {
  StatsSection,
  IndustriesSection,
  WhyChooseSection,
  TechStackSection,
  TestimonialsPreview,
  CTABanner,
} from "@/components/sections/HomeSections";

export const metadata: Metadata = {
  title: "Protonity Technology | Software Development Company in Jalna, Maharashtra",
  description:
    "Protonity Technology builds scalable websites, web apps, mobile apps, gym management software, and school ERP systems. Based in Jalna, Maharashtra.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <IndustriesSection />
      <WhyChooseSection />
      <TechStackSection />
      <TestimonialsPreview />
      <CTABanner />
    </>
  );
}
