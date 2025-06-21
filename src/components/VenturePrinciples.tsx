
import { Search, CheckSquare, Rocket, TrendingUp } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const VenturePrinciples = () => {
  return (
    <section id="prinzipien" className="py-20 px-6 bg-white relative overflow-hidden shadow-sm">
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
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-80" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollAnimation direction="center">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-4">
                <Search className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-4xl font-light text-black">Die 4 Phasen des Venture Building</h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                Systematischer Aufbau neuer Unternehmen durch bewährte Methoden
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation direction="left">
              <div className="text-center space-y-6 p-6">
                <div className="flex justify-center">
                  <Search className="h-12 w-12 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-black">1. Explore</h3>
                  <p className="text-gray-600 font-light">
                    Identifikation von Marktchancen und Validierung von Geschäftsideen
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="left">
              <div className="text-center space-y-6 p-6">
                <div className="flex justify-center">
                  <CheckSquare className="h-12 w-12 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-black">2. Validate</h3>
                  <p className="text-gray-600 font-light">
                    Testen der Hypothesen und Entwicklung eines validierten Geschäftsmodells
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right">
              <div className="text-center space-y-6 p-6">
                <div className="flex justify-center">
                  <Rocket className="h-12 w-12 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-black">3. Build</h3>
                  <p className="text-gray-600 font-light">
                    Aufbau des MVP und Zusammenstellung des Gründerteams
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right">
              <div className="text-center space-y-6 p-6">
                <div className="flex justify-center">
                  <TrendingUp className="h-12 w-12 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-black">4. Grow</h3>
                  <p className="text-gray-600 font-light">
                    Skalierung und Wachstum des etablierten Ventures
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
