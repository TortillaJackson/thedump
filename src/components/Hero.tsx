
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Spline from '@splinetool/react-spline';
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  
  const bulletPoints = [
    "Venture Building",
    "Corporate Venturing", 
    "Venture Clienting",
    "Fundraising",
    "Due Diligence",
    "Agentic Automation",
    "Artificial Intelligence",
    "Growth Automations",
    "Business Modelling",
    "Financial Modelling",
    "M&A Transactions"
  ];
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/U-WEFUzhR-NrXYj0/scene.splinecode"
          className="w-full h-full"
          onMouseMove={(e) => {
            // This enables mouse interaction with the Spline scene
            console.log('Mouse interaction enabled');
          }}
        />
      </div>
      
      {/* Watermark patch - covers bottom right corner, expanded to the left */}
      <div className="absolute bottom-0 right-0 w-48 h-16 bg-[#0f0f0f] z-20"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto flex-1 flex items-center justify-center pt-48 sm:pt-44 md:pt-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4d220c19-c47b-4f5b-bf1a-ccd3836819d3.png" 
              alt="Cinque Monti Ventures Logo" 
              className="h-24 md:h-32 w-auto mx-auto"
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.8)) drop-shadow(0 4px 16px rgba(0, 0, 0, 1))'
              }}
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
              {t('hero.title')}<br />
              <span className="font-bold">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
          
          <div className="pt-8 flex justify-center">
            <Button 
              size="lg" 
              className="bg-[#f0511e] text-white hover:bg-[#d4430f] text-lg px-8 py-6 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 shadow-orange-500/30"
              onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bullet Points Slider */}
      <div className="relative z-10 w-full pb-20">
        <div className="py-4 overflow-hidden relative">
          <div className="flex animate-[slide-left_60s_linear_infinite] whitespace-nowrap">
            {/* Duplicate the array to create seamless loop */}
            {[...bulletPoints, ...bulletPoints].map((point, index) => (
              <div 
                key={index}
                className="inline-flex items-center mx-4 px-4 py-2 rounded-full border border-white/10"
              >
                <Check className="h-4 w-4 text-[#f0511e] mr-2 flex-shrink-0" />
                <span className="text-white text-sm font-light">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
