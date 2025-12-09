import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section 
      className="bg-primary text-primary-foreground py-16 md:py-24" 
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 
              id="hero-heading" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Empowering young people through technology
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Our mission is to equip youth with digital skills and inspire them to innovate for community development, entrepreneurship, and social impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/programs">Programs</Link>
              </Button>
              <Button variant="donate" size="lg" asChild>
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Young woman with glasses smiling while working on a laptop, representing digital empowerment through technology"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
