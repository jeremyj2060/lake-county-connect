import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Shield, Heart, Zap, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Instant Messaging",
    description: "Connect and chat with students from all four schools in real-time.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "School Verified",
    description: "Only students with verified school email addresses can join.",
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "Interest Matching",
    description: "Find students who share your hobbies, interests, and passions.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Quick Connections",
    description: "Make meaningful connections with just a few taps.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Group Activities",
    description: "Join or create groups for events, study sessions, and hangouts.",
    color: "text-primary"
  },
  {
    icon: BookOpen,
    title: "Academic Support",
    description: "Get help with homework and share study resources.",
    color: "text-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Students Love Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for high school students with features that matter most to your social and academic life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="group hover:shadow-glow-accent transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 text-primary-foreground`} />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;