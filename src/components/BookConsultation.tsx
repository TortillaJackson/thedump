
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BookConsultation = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-black">Beratungstermin buchen</h2>
            <p className="text-lg text-gray-600 font-light">
              Lassen Sie uns gemeinsam Ihr nächstes Venture starten – 
              jetzt unverbindlichen Beratungstermin sichern!
            </p>
          </div>
          
          <div className="pt-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 font-light">
              Jetzt Termin buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="pt-12 border-t border-gray-100">
            <div className="flex justify-center space-x-8 text-sm text-gray-500 font-light">
              <a href="mailto:contact@venture.studio" className="hover:text-black transition-colors">
                contact@venture.studio
              </a>
              <span>|</span>
              <a href="tel:+49123456789" className="hover:text-black transition-colors">
                +49 123 456 789
              </a>
              <span>|</span>
              <a href="#" className="hover:text-black transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
