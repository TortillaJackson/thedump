
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const BookConsultation = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-black">{t('footer.title')}</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 font-light">
                {t('footer.description')}
              </p>
              <p className="text-base text-gray-600 font-light">
                {t('footer.additional')}
              </p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 font-light rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/60 shadow-black/30"
              onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
            >
              {t('footer.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="pt-12 border-t border-gray-100">
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 font-light">
              <a 
                href="https://www.linkedin.com/in/fabio-chiaramonte-a6600192/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <span>|</span>
              <span className="text-gray-400 italic">{t('footer.madeWith')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
