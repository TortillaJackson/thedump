
import { Bot, Zap, Target, Palette } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

export const AITools = () => {
  const { t } = useLanguage();
  
  return (
    <section id="ai-tools" className="py-20 px-6 bg-white relative overflow-hidden shadow-sm">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-white via-gray-50/50 to-white opacity-80" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollAnimation direction="center">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <Bot className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-4xl font-light text-black">{t('aitools.title')}</h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                {t('aitools.subtitle')}
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Desk setup image */}
            <ScrollAnimation direction="left">
              <div className="relative">
                <img 
                  src="/lovable-uploads/b7244a6a-566c-4674-8d63-9ebc9af7adc8.png" 
                  alt="Modern workspace with AI tools and technology" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
            
            {/* Right side - AI Tools */}
            <ScrollAnimation direction="right">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">{t('aitools.analysis.title')}</h3>
                    <p className="text-gray-600 font-light">
                      {t('aitools.analysis.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">{t('aitools.validation.title')}</h3>
                    <p className="text-gray-600 font-light">
                      {t('aitools.validation.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Palette className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">{t('aitools.development.title')}</h3>
                    <p className="text-gray-600 font-light">
                      {t('aitools.development.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Bot className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">{t('aitools.automation.title')}</h3>
                    <p className="text-gray-600 font-light">
                      {t('aitools.automation.description')}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
