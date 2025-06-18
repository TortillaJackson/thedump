
import { Card, CardContent } from "@/components/ui/card";

export const Benefits = () => {
  const benefits = [
    {
      title: "Reduced Risk",
      description: "Systematic market validation and proven business models minimize execution risk.",
      stat: "70%",
      statLabel: "Risk Reduction"
    },
    {
      title: "Faster Launch",
      description: "Shared infrastructure, talent pool, and operational expertise accelerate development.",
      stat: "3x",
      statLabel: "Faster"
    },
    {
      title: "Lower Costs",
      description: "Shared resources, bulk purchasing power, and operational efficiency reduce burn rate.",
      stat: "60%",
      statLabel: "Cost Savings"
    },
    {
      title: "Higher Success Rate",
      description: "Continuous mentorship, market insights, and strategic guidance increase success probability.",
      stat: "85%",
      statLabel: "Success Rate"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-bold">The venture building advantage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our approach systematically addresses the key factors that cause startup failure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-orange-500 transition-colors duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-500">{benefit.stat}</div>
                  <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
