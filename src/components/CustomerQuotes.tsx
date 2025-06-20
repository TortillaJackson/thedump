
import { Star } from "lucide-react";

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
      text: "Von der ersten Beratung bis zum erfolgreichen Launch - die Unterstützung war durchweg professionell und zielorientiert. Heute sind wir ein erfolgreiches Mobility Unternehmen mit stetig wachsender Kundenbasis.",
      author: "Nadine Güner",
      company: "GCars Founder",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-light text-black">Was unsere Kunden sagen</h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Erfolgsgeschichten von Gründern, die mit uns ihre Vision verwirklicht haben
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(quote.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 font-light leading-relaxed">
                  "{quote.text}"
                </blockquote>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-medium text-black">{quote.author}</div>
                  <div className="text-sm text-gray-500 font-light">{quote.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
