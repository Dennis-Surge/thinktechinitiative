import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/think-tech-logo.png";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/partner", label: "Partner" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-background border-b border-border"
      }`} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-md group flex items-center gap-3"
            aria-label="Think Tech Initiative Home"
          >
            <img 
              src={logo} 
              alt="Think Tech Initiative" 
              className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  location.pathname === link.to 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="hero" size="default" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button variant="donate" size="default" asChild>
              <Link to="/donate">Donate</Link>
            </Button>
            <Link 
              to="/auth" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm px-3 py-2"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md hover:bg-muted transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-4 border-t border-border space-y-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === link.to
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <Button variant="hero" size="default" className="w-full" asChild>
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <Button variant="donate" size="default" className="w-full" asChild>
                    <Link to="/donate">Donate</Link>
                  </Button>
                  <Link 
                    to="/auth" 
                    className="block text-center text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;