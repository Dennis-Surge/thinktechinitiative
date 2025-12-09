import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section 
      className="py-16 md:py-24 bg-background" 
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 
            id="about-heading" 
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
          >
            About Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded with a vision to empower Ghanaian youth with technology, Think Tech Initiative has grown into a leading program that offers training, innovation, and community impact. Our vision is to build a generation of digitally skilled youth who create innovative solutions for personal growth, employment, and social impact.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
