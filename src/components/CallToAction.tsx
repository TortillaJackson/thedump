
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-20 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
          {t('caseStudies.readyTitle')}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {t('caseStudies.readyDescription')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-[#f0511e] text-white hover:bg-[#d4430f] px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
          >
            {t('caseStudies.bookConsultation')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-[#f0511e] text-[#f0511e] hover:bg-[#f0511e] hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
          >
            {t('caseStudies.learnMore')}
          </Button>
        </div>
      </div>
    </div>
  );
};
