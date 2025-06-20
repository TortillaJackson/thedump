
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const { t } = useLanguage();
  
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-6 left-12 right-12 z-50 bg-white/80 backdrop-blur-md border border-white/20 rounded-[3rem] shadow-lg max-w-6xl mx-auto">
      <div className="px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0b0cda8c-3cea-4a3c-a500-fa72d70591be.png" 
              alt="Cinque Monti Ventures" 
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleSmoothScroll('prinzipien')}
              className="text-gray-600 hover:text-black transition-colors text-sm font-light cursor-pointer"
            >
              {t('nav.principles')}
            </button>
            <button 
              onClick={() => handleSmoothScroll('vorteile')}
              className="text-gray-600 hover:text-black transition-colors text-sm font-light cursor-pointer"
            >
              {t('nav.advantages')}
            </button>
            <button 
              onClick={() => handleSmoothScroll('ai-tools')}
              className="text-gray-600 hover:text-black transition-colors text-sm font-light cursor-pointer"
            >
              {t('nav.aitools')}
            </button>
            <button 
              onClick={() => handleSmoothScroll('traction')}
              className="text-gray-600 hover:text-black transition-colors text-sm font-light cursor-pointer"
            >
              {t('nav.traction')}
            </button>
            <button 
              onClick={() => handleSmoothScroll('partner')}
              className="text-gray-600 hover:text-black transition-colors text-sm font-light cursor-pointer"
            >
              Partner
            </button>
            <LanguageSelector />
            <Button 
              className="bg-black text-white hover:bg-gray-800 text-sm font-light px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/50 shadow-black/20"
              onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
            >
              {t('nav.booking')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
