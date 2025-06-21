
import { Clock, DollarSign, Shield, Users } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const WhyVentureBuilding = () => {
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
              <h2 className="text-4xl font-light text-white">Warum Venture Building Zeit und Geld spart</h2>
              <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto">
                Strukturierte Prozesse minimieren Risiken und beschleunigen den Erfolg. Dabei gilt weniger ist mehr! Durch unsere Erfahrung blenden wir unnötiges Berater rauschen aus und konzentrieren uns auf das, was wirkt.
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
                    <h3 className="text-xl font-medium text-white mb-2">3x schneller am Markt</h3>
                    <p className="text-gray-200 font-light">
                      Durch bewährte Prozesse und erfahrene Teams verkürzen wir die Time-to-Market erheblich
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <DollarSign className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">60% Kostenersparnis</h3>
                    <p className="text-gray-200 font-light">
                      Keine teuren Fehlbesetzungen, flexible Unterstützung nur wenn nötig
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">85% Erfolgsrate</h3>
                    <p className="text-gray-200 font-light">
                      Systematisches Vorgehen reduziert das Risiko des Scheiterns drastisch
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Expertennetzwerk</h3>
                    <p className="text-gray-200 font-light">
                      Zugang zu einem etablierten Netzwerk aus Spezialisten und Mentoren
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
