import { Button } from "@/components/ui/button";
import { Users, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SchoolConnect
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#schools" className="text-foreground hover:text-primary transition-colors font-medium">
              Schools
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button variant="hero" className="hidden sm:inline-flex" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;