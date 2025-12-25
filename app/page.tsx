import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { LeadershipSection } from "@/components/home/leadership-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { WhyPartnerSection } from "@/components/home/why-partner-section";
import { StatsSection } from "@/components/home/stats-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LeadershipSection />
      <WhyChooseUs />
      <WhyPartnerSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
