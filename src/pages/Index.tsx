import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import BenefitsSection from "@/components/BenefitsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPoints />
      <BenefitsSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
