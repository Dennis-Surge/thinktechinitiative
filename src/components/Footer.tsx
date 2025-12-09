import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to make a difference?
            </h3>
            <p className="font-body text-primary-foreground/80 mb-8">
              Join us in empowering the next generation of tech innovators in Ghana.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/apply">Apply for a Program</Link>
              </Button>
              <Button variant="donate" size="lg" asChild>
                <Link to="/donate">
                  <Heart className="w-4 h-4 mr-2" />
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link 
              to="/" 
              className="inline-block focus:outline-none focus:ring-2 focus:ring-accent rounded-md mb-4"
              aria-label="Think Tech Initiative Home"
            >
              <img src={logo} alt="Think Tech Initiative" className="h-16 w-auto" />
            </Link>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Empowering youth through technology and innovation for a better future in Ghana and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Programs" },
                { to: "/events", label: "Events" },
                { to: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { to: "/apply", label: "Apply Now" },
                { to: "/volunteer", label: "Volunteer" },
                { to: "/partner", label: "Partner With Us" },
                { to: "/donate", label: "Donate" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-body text-sm text-primary-foreground/70">Klagon - Tema, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:thinktechinitiative@gmail.com" 
                  className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  thinktechinitiative@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+233509062614" 
                  className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +233 509 062 614
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/60">
            © {currentYear} Think Tech Initiative. All rights reserved.
          </p>
          <div className="flex items-center gap-2" role="list" aria-label="Social media links">
            {[
              { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
              { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/10 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
