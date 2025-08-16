import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Star } from "lucide-react";
import schoolLogos from "@/assets/school-logos.jpg";

const schools = [
  {
    name: "Libertyville High School",
    mascot: "Wildcats",
    color: "from-blue-500 to-blue-600",
    students: 120,
    rating: 4.8
  },
  {
    name: "Vernon Hills High School", 
    mascot: "Cougars",
    color: "from-green-500 to-green-600", 
    students: 95,
    rating: 4.7
  },
  {
    name: "Warren Township High School",
    mascot: "Blue Devils",
    color: "from-red-500 to-red-600",
    students: 150,
    rating: 4.9
  },
  {
    name: "Stevenson High School",
    mascot: "Patriots", 
    color: "from-purple-500 to-purple-600",
    students: 135,
    rating: 4.8
  }
];

const SchoolsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Four Amazing Schools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with students from the top high schools in your area. Each school brings its unique culture and amazing students.
          </p>
        </div>

        {/* School Logos Display */}
        <div className="mb-12 flex justify-center">
          <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-glow-accent">
            <img 
              src={schoolLogos} 
              alt="School logos for Libertyville, Vernon Hills, Warren Township, and Stevenson High Schools" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school, index) => (
            <Card key={school.name} className="group hover:shadow-glow-primary transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${school.color} flex items-center justify-center shadow-lg`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">{school.name}</h3>
                <Badge variant="secondary" className="mb-4">
                  {school.mascot}
                </Badge>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{school.students} students</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span>{school.rating} rating</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;