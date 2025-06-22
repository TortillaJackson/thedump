
import { Hero } from "@/components/Hero";
import { VenturePrinciples } from "@/components/VenturePrinciples";
import { WhyVentureBuilding } from "@/components/WhyVentureBuilding";
import { AITools } from "@/components/AITools";
import { CustomerQuotes } from "@/components/CustomerQuotes";
import { Traction } from "@/components/Traction";
import { AboutAdvisor } from "@/components/AboutAdvisor";
import { BookConsultation } from "@/components/BookConsultation";
import { Navigation } from "@/components/Navigation";
import { LoadingAnimation } from "@/components/LoadingAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LoadingAnimation />
      <Navigation />
      <Hero />
      <div id="prinzipien">
        <VenturePrinciples />
      </div>
      <div id="vorteile">
        <WhyVentureBuilding />
      </div>
      <AITools />
      <div id="partner">
        <AboutAdvisor />
      </div>
      <Traction />
      <CustomerQuotes />
      <BookConsultation />
    </div>
  );
};

export default Index;
