
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/9c34d844-207f-485c-b823-1c82210d274f.png" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/5923070f-2f2f-487c-9c18-2a3705ccbf6a.png" 
                alt="Cinque Monti Ventures" 
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black">
              Von der Idee zum erfolgreichen Startup –{" "}
              <span className="font-normal">mit System und Innovation</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-light">
              Venture Building ist der systematische Aufbau neuer Unternehmen durch 
              bewährte Methoden, erfahrene Teams und innovative AI-Tools.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 font-light">
              Jetzt Beratungstermin buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
