
import { CheckCircle, Target, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const AboutAdvisor = () => {
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
                    <h2 className="text-4xl font-light text-white">Ihr erfahrener Partner</h2>
                  </div>
                  <p className="text-lg text-gray-200 font-light leading-relaxed">
                    Fabio Chiaramonte bringt über 10 Jahre praktische Erfahrung im Aufbau und der Skalierung von Startups mit. Als erfolgreicher Gründer, der selbst ein Venture Capital finanziertes Unternehmen aufgebaut hat und später die Perspektive im Venture Capital selbst einnahm, versteht er die Herausforderungen und Chancen des modernen Venture Buildings aus erster Hand. Seine Beratung basiert auf echten Erfahrungen und bewährten Strategien, die zum Erfolg führen.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">15+ erfolgreiche Ventures</h3>
                      <p className="text-gray-200 font-light">Von der ersten Idee bis zur erfolgreichen Markteinführung</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">Multidisziplinäres Netzwerk</h3>
                      <p className="text-gray-200 font-light">Zugang zu Experten aus Tech, Marketing und Finanzierung</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Target className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">Systematischer Ansatz</h3>
                      <p className="text-gray-200 font-light">Bewährte Methoden kombiniert mit modernsten AI-Tools</p>
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
                    alt="Fabio Chiaramonte - Erfahrener Venture Builder und Berater" 
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
