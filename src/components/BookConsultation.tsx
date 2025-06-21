
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const BookConsultation = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-6 bg-black shadow-sm">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-white">{t('footer.title')}</h2>
            <div className="space-y-4">
              <p className="text-lg text-white/90 font-light">
                {t('footer.description')}
              </p>
              <p className="text-base text-white/80 font-light">
                {t('footer.additional')}
              </p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-[#f0511e] text-white hover:bg-[#d4430f] text-lg px-8 py-6 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 shadow-orange-500/30"
              onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
            >
              {t('footer.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="pt-12 border-t border-white/20">
            <div className="flex justify-center items-center space-x-8 text-sm text-white/60 font-light">
              <a 
                href="https://www.linkedin.com/in/fabio-chiaramonte-a6600192/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span>|</span>
              <span className="text-white/40 italic">{t('footer.madeWith')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
