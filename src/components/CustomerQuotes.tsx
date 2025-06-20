
import { Star } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export const CustomerQuotes = () => {
  const quotes = [
    {
      text: "Fabio war ein echter Game-Changer für unser Startup. Durch seine strukturierte Herangehensweise konnten wir unsere Idee erfolgreich validieren und sogar erste Investoren gewinnen.",
      author: "Markus Hahn",
      company: "Fjalla Founder",
      rating: 5
    },
    {
      text: "Mit Fabio konnten wir unser Venture zu einem weltweit bekannten Startup ausbauen und bekannte Venture Capital Investoren von uns überzeugen.",
      author: "Tilmann Holm",
      company: "GymCraft Founder",
      rating: 5
    },
    {
      text: "Ich durfte mit Fabio in seiner Zeit bei FLYACTS arbeiten. Von der ersten Beratung bis zum erfolgreichen Launch - die Unterstützung war durchweg professionell und zielorientiert. Heute sind wir ein erfolgreiches Mobility Unternehmen mit stetig wachsender Kundenbasis.",
      author: "Nadine Güner",
      company: "GCars Founder",
      rating: 5
    }
  ];

  return (
    <section id="kunden" className="py-20 px-6 relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollAnimation direction="center">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-light text-white">Was unsere Kunden sagen</h2>
              <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto">
                Erfolgsgeschichten von Gründern, die mit uns ihre Vision verwirklicht haben
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation direction="left">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(quotes[0].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 font-light leading-relaxed">
                  "{quotes[0].text}"
                </blockquote>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-medium text-black">{quotes[0].author}</div>
                  <div className="text-sm text-gray-500 font-light">{quotes[0].company}</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="center">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(quotes[1].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 font-light leading-relaxed">
                  "{quotes[1].text}"
                </blockquote>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-medium text-black">{quotes[1].author}</div>
                  <div className="text-sm text-gray-500 font-light">{quotes[1].company}</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(quotes[2].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 font-light leading-relaxed">
                  "{quotes[2].text}"
                </blockquote>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-medium text-black">{quotes[2].author}</div>
                  <div className="text-sm text-gray-500 font-light">{quotes[2].company}</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
