import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SchoolsSection from "@/components/SchoolsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="schools">
          <SchoolsSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
