
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0b0cda8c-3cea-4a3c-a500-fa72d70591be.png" 
              alt="Cinque Monti Ventures" 
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#prinzipien" className="text-gray-600 hover:text-black transition-colors text-sm font-light">Prinzipien</a>
            <a href="#vorteile" className="text-gray-600 hover:text-black transition-colors text-sm font-light">Vorteile</a>
            <a href="#ai-tools" className="text-gray-600 hover:text-black transition-colors text-sm font-light">AI-Tools</a>
            <Button className="bg-black text-white hover:bg-gray-800 text-sm font-light px-6">
              Beratung buchen
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
