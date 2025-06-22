
import { Clock, DollarSign, Shield, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

export const WhyVentureBuilding = () => {
  const { t } = useLanguage();
  
  return (
    <section id="vorteile" className="py-20 px-6 relative overflow-hidden shadow-sm">
      {/* Moving Grid Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Updated Background with #555555 and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#555555] via-[#666666] to-[#555555]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollAnimation direction="center">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-light text-white">{t('advantages.title')}</h2>
              <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto">
                {t('advantages.subtitle')}
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Benefits */}
            <ScrollAnimation direction="left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{t('advantages.speed.title')}</h3>
                    <p className="text-gray-200 font-light">
                      {t('advantages.speed.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <DollarSign className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{t('advantages.resources.title')}</h3>
                    <p className="text-gray-200 font-light">
                      {t('advantages.resources.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{t('advantages.riskReduction.title')}</h3>
                    <p className="text-gray-200 font-light">
                      {t('advantages.riskReduction.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{t('advantages.expertise.title')}</h3>
                    <p className="text-gray-200 font-light">
                      {t('advantages.expertise.description')}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right side - Workspace image */}
            <ScrollAnimation direction="right">
              <div className="relative">
                <img 
                  src="/lovable-uploads/736a4f1d-6e1d-4667-b60a-8aaaf6fb8211.png" 
                  alt="Startup workspace with team collaboration" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
