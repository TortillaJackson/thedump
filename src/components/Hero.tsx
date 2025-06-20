
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Spline from '@splinetool/react-spline';
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-black">
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
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 font-light rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/50 shadow-white/30"
              onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
