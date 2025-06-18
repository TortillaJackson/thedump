
import { ArrowRight } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Ideation & Validation",
      description: "Market research, customer discovery, and business model validation using proven frameworks."
    },
    {
      number: "02",
      title: "Team Assembly",
      description: "Recruit top talent from our network of entrepreneurs, developers, and domain experts."
    },
    {
      number: "03",
      title: "MVP Development",
      description: "Rapid prototyping and development using shared infrastructure and technical resources."
    },
    {
      number: "04",
      title: "Market Launch",
      description: "Go-to-market strategy execution with operational support and growth acceleration."
    },
    {
      number: "05",
      title: "Scale & Exit",
      description: "Continuous optimization, funding rounds, and strategic exit planning."
    }
  ];

  return (
    <section id="process" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-bold">Our process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to venture creation that maximizes success probability.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8 mb-12 last:mb-0">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
              </div>
              <div className="flex-1 space-y-2 pt-2">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 pt-6">
                  <ArrowRight className="h-6 w-6 text-orange-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
