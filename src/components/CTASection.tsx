import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-gradient-hero shadow-glow-primary border-0">
          <CardContent className="p-12 text-center">
            <div className="mb-6">
              <Sparkles className="w-16 h-16 mx-auto text-primary-foreground animate-pulse-glow" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Connect?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of students already making connections across Libertyville, Vernon Hills, Warren Township, and Stevenson High Schools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 h-auto font-semibold">
                <Mail className="mr-2" />
                Sign Up with School Email
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-6">
              ✓ Free to join ✓ Verified students only ✓ Safe & secure
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;