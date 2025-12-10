import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section 
      className="bg-gradient-to-br from-primary via-primary to-success text-primary-foreground py-20 md:py-32 relative overflow-hidden" 
      aria-labelledby="hero-heading"
    >
      {/* Java-inspired geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-primary-foreground rounded-lg rotate-12" />
        <div className="absolute top-40 right-40 w-20 h-20 border-4 border-primary-foreground rounded-lg rotate-45" />
        <div className="absolute bottom-20 left-20 w-40 h-40 border-4 border-primary-foreground rounded-full" />
        <div className="absolute bottom-40 left-60 w-24 h-24 border-4 border-primary-foreground rounded-lg -rotate-12" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-success/20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground">Empowering Ghana's Youth</span>
            </div>
            
            <h1 
              id="hero-heading" 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Empowering young people through{" "}
              <span className="text-accent">technology</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
              Our mission is to equip youth with digital skills and inspire them to innovate for community development, entrepreneurship, and social impact.
            </p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Button variant="hero" size="lg" className="group shadow-xl shadow-accent/30" asChild>
                <Link to="/programs">
                  Explore Programs
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
              <Button variant="donate" size="lg" className="shadow-lg" asChild>
                <Link to="/donate">Support Our Mission</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">500+</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Youth Trained</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">15+</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Programs</p>
              </div>
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">10+</p>
                <p className="text-sm text-primary-foreground/70 mt-1">Communities</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-success/30 rounded-2xl transform rotate-2" />
              <div className="absolute -inset-2 bg-primary-foreground/10 rounded-2xl backdrop-blur-sm" />
              <img 
                src={heroImage} 
                alt="Young woman with glasses smiling while working on a laptop, representing digital empowerment through technology"
                className="relative rounded-xl shadow-2xl w-full h-auto object-cover border-2 border-primary-foreground/20"
                loading="eager"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-card text-card-foreground px-6 py-4 rounded-xl shadow-xl border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="font-heading font-bold text-lg text-primary">Since 2020</p>
              <p className="text-sm text-muted-foreground">Making Impact</p>
            </motion.div>

            {/* Code snippet decoration */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-foreground/90 text-background px-4 py-3 rounded-lg shadow-xl font-mono text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="text-success">class</span> <span className="text-accent">ThinkTech</span> {"{"}
              <br />
              {"  "}<span className="text-primary-foreground/60">// Build the future</span>
              <br />
              {"}"}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;