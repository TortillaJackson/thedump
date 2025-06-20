
import { CheckCircle, Target, Users } from "lucide-react";

export const AboutAdvisor = () => {
  return (
    <section id="partner" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-black" />
                  <h2 className="text-4xl font-light text-black">Ihr erfahrener Partner</h2>
                </div>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Fabio Chiaramonte bringt über 10 Jahre praktische Erfahrung im Aufbau und der Skalierung von Startups mit. 
                  Als erfolgreicher Gründer, der selbst ein VC-backed Unternehmen aufgebaut hat, versteht er die Herausforderungen 
                  und Chancen des modernen Venture Buildings aus erster Hand. Seine Beratung basiert auf echten Erfahrungen und 
                  bewährten Strategien, die zum Erfolg führen.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-black mb-1">15+ erfolgreiche Ventures</h3>
                    <p className="text-gray-600 font-light">Von der ersten Idee bis zur erfolgreichen Markteinführung</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-black mb-1">Multidisziplinäres Netzwerk</h3>
                    <p className="text-gray-600 font-light">Zugang zu Experten aus Tech, Marketing und Finanzierung</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-black mb-1">Systematischer Ansatz</h3>
                    <p className="text-gray-600 font-light">Bewährte Methoden kombiniert mit modernsten AI-Tools</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Portrait image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/82170288-b9b0-44fe-a6cd-40e5c4528ef2.png" 
                  alt="Fabio Chiaramonte - Erfahrener Venture Builder und Berater" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
