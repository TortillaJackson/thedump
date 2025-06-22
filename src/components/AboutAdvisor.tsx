
import { CheckCircle, Target, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutAdvisor = () => {
  const { t } = useLanguage();
  
  return (
    <section id="partner" className="py-20 px-6 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#555555] via-[#4a4a4a] to-[#3d3d3d]" />
      
      {/* Moving Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <ScrollAnimation direction="left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-white" />
                    <h2 className="text-4xl font-light text-white">{t('about.title')}</h2>
                  </div>
                  <p className="text-lg text-gray-200 font-light leading-relaxed">
                    {t('about.description')}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">{t('traction.ventures.number')} {t('traction.ventures.label')}</h3>
                      <p className="text-gray-200 font-light">{t('about.ventures.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">{t('advantages.expertise.title')}</h3>
                      <p className="text-gray-200 font-light">{t('advantages.expertise.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Target className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">{t('about.systematic.title')}</h3>
                      <p className="text-gray-200 font-light">{t('about.systematic.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right side - Portrait image */}
            <ScrollAnimation direction="right">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/82170288-b9b0-44fe-a6cd-40e5c4528ef2.png" 
                    alt={`${t('about.name')} - ${t('about.role')}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
