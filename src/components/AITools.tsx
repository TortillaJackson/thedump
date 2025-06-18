
import { Bot, Zap, Target, Palette } from "lucide-react";

export const AITools = () => {
  return (
    <section id="ai-tools" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Bot className="h-8 w-8 text-black" />
            </div>
            <h2 className="text-4xl font-light text-black">AI-Tools als Erfolgsfaktor</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Erstmals in der Geschichte können Einzelpersonen ein Startup gründen und eigenständig Umsätze in Millionenhöhe erzielen.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Desk setup image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/b7244a6a-566c-4674-8d63-9ebc9af7adc8.png" 
                alt="Modern workspace with AI tools and technology" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            {/* Right side - AI Tools */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-black mb-2">Experte durch KI</h3>
                  <p className="text-gray-600 font-light">
                    Automatisierte Marktanalyse, Datengetriebene Entscheidungen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-black mb-2">MVP durch KI</h3>
                  <p className="text-gray-600 font-light">
                    KI-gestützte rapid MVP Entwicklung für Web und Mobile. 
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Palette className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-black mb-2">Sales durch KI</h3>
                  <p className="text-gray-600 font-light">
                    Von Lead Generierung über Qualifizierung bis zum Closing. Mit KI.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Bot className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-medium text-black mb-2">Workflow-Automatisierung</h3>
                  <p className="text-gray-600 font-light">
                    Komplexe Aufgaben und Tools kombinieren und vollautomatisieren. Mit KI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
