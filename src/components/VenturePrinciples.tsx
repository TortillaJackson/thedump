
import { Search, CheckSquare, Rocket, TrendingUp } from "lucide-react";

export const VenturePrinciples = () => {
  return (
    <section id="prinzipien" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Search className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-4xl font-light text-black">Die 4 Phasen des Venture Building</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Systematischer Aufbau neuer Unternehmen durch bewährte Methoden
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};
