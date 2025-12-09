import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <section 
      className="py-20 md:py-28 bg-background" 
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              About Us
            </span>
            
            <h2 
              id="about-heading" 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight"
            >
              Building a generation of{" "}
              <span className="text-accent">digitally skilled</span> youth
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Founded with a vision to empower Ghanaian youth with technology, Think Tech Initiative has grown into a leading program that offers training, innovation, and community impact. We believe in the transformative power of digital skills to create opportunities and drive social change.
            </p>
            
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/about">
                Learn More About Us
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </motion.div>

          {/* Vision & Mission Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">Our Vision</h3>
                  <p className="font-body text-muted-foreground">
                    To build a generation of digitally skilled youth who create innovative solutions for personal growth, employment, and social impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">Our Mission</h3>
                  <p className="font-body text-muted-foreground">
                    To equip youth with digital skills and inspire them to innovate for community development, entrepreneurship, and meaningful social impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">Our Values</h3>
                  <p className="font-body text-muted-foreground">
                    Accessibility, innovation, community impact, and inclusive growth guide everything we do to empower the next generation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
