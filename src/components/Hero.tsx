import { Button } from "@/components/ui/button";
import { Users, Mail, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-90"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Hero Image */}
        <div className="mb-8 mx-auto w-72 h-48 rounded-2xl overflow-hidden shadow-glow-primary">
          <img 
            src={heroImage} 
            alt="Students connecting through technology" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          Connect Beyond
          <br />
          <span className="text-accent">Your School</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join students from Libertyville, Vernon Hills, Warren Township, and Stevenson High Schools. 
          Make new friends, share experiences, and build your network.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
            <Link to="/signup">
              <Mail className="mr-2" />
              Get Started with Email
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-primary/30" asChild>
            <Link to="/students">
              <Users className="mr-2" />
              Browse Students
            </Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Schools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Connections Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;