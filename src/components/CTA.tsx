
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Ready to build your venture?</h2>
            <p className="text-xl text-muted-foreground">
              Join the new generation of systematic venture creation. 
              Let's build something extraordinary together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Venture
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Schedule a Call
            </Button>
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 venture.lab - Building the future, one venture at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
