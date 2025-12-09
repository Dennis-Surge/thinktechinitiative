import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
              aria-label="Think Tech Initiative Home"
            >
              <img src={logo} alt="Think Tech Initiative" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering youth through technology and innovation for a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/apply" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-primary-foreground/80">Klagon - Tema, Ghana</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:thinktechinitiative@gmail.com" 
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  thinktechinitiative@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+233509062614" 
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +233 509 062 614
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Think Tech Initiative. All rights reserved.
          </p>
          <div className="flex space-x-4" role="list" aria-label="Social media links">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/80 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/80 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/80 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/80 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
