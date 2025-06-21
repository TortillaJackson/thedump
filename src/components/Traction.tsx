
export const Traction = () => {
  // Updated logos with new company logos
  const ventureLogos = [
    { name: "GymCraft", src: "/lovable-uploads/d39afb53-84b6-4455-8c02-00b4aad34bae.png" },
    { name: "Fjalla", src: "/lovable-uploads/724e42a4-5b7a-4d92-b1eb-7ba349b77b8e.png" },
    { name: "Gcars", src: "/lovable-uploads/fbaaa175-dcb1-47a2-8ff0-1450b1a80f37.png" },
    { name: "Thermal Half Pipe", src: "/lovable-uploads/29b655ff-d493-471a-b820-43a9f7367186.png" },
    { name: "Aya.de", src: "/lovable-uploads/2ffe08a4-bc64-439e-b7ae-01836d561901.png" },
    { name: "DataBorg", src: "/lovable-uploads/d5ac08e0-2093-4b68-bead-704d672c580b.png" }
  ];

  const tractionLogos = [
    { name: "Red Herring Winner", src: "/lovable-uploads/6a3291d1-d9f9-4230-8053-951d06a61373.png" },
    { name: "Wolves Summit", src: "/lovable-uploads/87c40ada-227e-49b5-8633-0b7d30a161e2.png" },
    { name: "Startup Insider", src: "/lovable-uploads/193da83a-4a31-4808-ad63-0f3d440d70a9.png" },
    { name: "Deutsche Telekom", src: "/lovable-uploads/bf90d099-7614-4f58-9990-f794f921bf2f.png" },
    { name: "EBAN", src: "/lovable-uploads/bcd7e8c9-5994-467b-a16e-6325f0bc7278.png" },
    { name: "FlyActs", src: "/lovable-uploads/07affffb-1bda-4d39-8196-f0d9a5883567.png" },
    { name: "Slush'd", src: "/lovable-uploads/31334826-b705-4953-9f6e-f09d6579ee3c.png" },
    { name: "Impact", src: "/lovable-uploads/d4422a5e-e6f2-4dea-909d-1fd9c854f8fe.png" },
    { name: "Product Hunt", src: "/lovable-uploads/30c3add0-b624-40c3-b766-31260973d586.png" }
  ];

  return (
    <section id="traction" className="py-20 px-6 bg-white overflow-hidden shadow-sm">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Ventures Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black">Ventures</h3>
            </div>
            
            {/* Ventures Logo Scroll */}
            <div className="relative overflow-hidden">
              <div className="flex animate-[slide-left_25s_linear_infinite] space-x-16">
                {[...ventureLogos, ...ventureLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40 h-20 bg-gray-50 rounded-lg flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    {logo.src ? (
                      <img 
                        src={logo.src} 
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain px-4"
                      />
                    ) : (
                      <span className="text-gray-600 font-light text-sm">{logo.name}</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Enhanced gradient overlays */}
              <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          {/* Traction Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black">Traction</h3>
            </div>
            
            {/* Traction Logo Scroll - moving right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-[slide-right_30s_linear_infinite] space-x-16">
                {[...tractionLogos, ...tractionLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40 h-20 bg-gray-50 rounded-lg flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    {logo.src ? (
                      <img 
                        src={logo.src} 
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain px-4"
                      />
                    ) : (
                      <span className="text-gray-600 font-light text-sm">{logo.name}</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Enhanced gradient overlays */}
              <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
