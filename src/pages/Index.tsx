
import { Hero } from "@/components/Hero";
import { VenturePrinciples } from "@/components/VenturePrinciples";
import { WhyVentureBuilding } from "@/components/WhyVentureBuilding";
import { AITools } from "@/components/AITools";
import { AboutAdvisor } from "@/components/AboutAdvisor";
import { BookConsultation } from "@/components/BookConsultation";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <VenturePrinciples />
      <WhyVentureBuilding />
      <AITools />
      <AboutAdvisor />
      <BookConsultation />
    </div>
  );
};

export default Index;
