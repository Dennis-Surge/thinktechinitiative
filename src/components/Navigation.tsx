import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
            aria-label="Think Tech Initiative Home"
          >
            <img src={logo} alt="Think Tech Initiative" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/about" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              Programs
            </Link>
            <Link 
              to="/events" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              Events
            </Link>
            <Link 
              to="/blog" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              Blog
            </Link>
            <Link 
              to="/volunteer" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              Volunteer
            </Link>
            <Link 
              to="/partner" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              Partner
            </Link>
            <Button variant="hero" size="default" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button variant="donate" size="default" asChild>
              <Link to="/donate">Donate</Link>
            </Button>
            <Link 
              to="/auth" 
              className="text-primary-foreground hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-primary-foreground hover:text-accent transition-colors duration-300 px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/programs" 
                className="text-primary-foreground hover:text-accent transition-colors duration-300 px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/events" 
                className="text-primary-foreground hover:text-accent transition-colors duration-300 px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/blog" 
                className="text-primary-foreground hover:text-accent transition-colors duration-300 px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/volunteer" 
                className="text-primary-foreground hover:text-accent transition-colors duration-300 px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Volunteer
              </Link>
              <Link 
                to="/partner" 
                className="text-primary-foreground hover:text-accent transition-colors duration-300 px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Partner
              </Link>
              <Button variant="hero" size="default" className="w-full" asChild>
                <Link to="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
              </Button>
              <Button variant="donate" size="default" className="w-full" asChild>
                <Link to="/donate" onClick={() => setIsOpen(false)}>Donate</Link>
              </Button>
              <Link 
                to="/auth" 
                className="text-primary-foreground hover:text-accent transition-colors duration-300 px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
