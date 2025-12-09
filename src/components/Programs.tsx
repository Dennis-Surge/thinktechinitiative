import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import codingIcon from "@/assets/icon-coding.png";
import innovationIcon from "@/assets/icon-innovation.png";
import accessibilityIcon from "@/assets/icon-accessibility.png";

const programs = [
  {
    id: 1,
    title: "Digital Skills Training",
    description: "Web & app development, graphic design, data analytics, AI fundamentals, cybersecurity, and digital marketing",
    icon: codingIcon,
    iconAlt: "Laptop with code brackets representing digital skills training",
  },
  {
    id: 2,
    title: "Tech for Good Projects",
    description: "Technology solutions for schools, healthcare, agriculture, and community development",
    icon: innovationIcon,
    iconAlt: "Lightbulb with innovation rays representing technology for social good",
  },
  {
    id: 3,
    title: "Inclusive Innovation",
    description: "Empowering people with disabilities through accessible technology and innovation",
    icon: accessibilityIcon,
    iconAlt: "Accessibility symbol with assistive technology elements representing inclusive innovation",
  },
];

const Programs = () => {
  return (
    <section 
      className="py-16 md:py-24 bg-secondary" 
      aria-labelledby="programs-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="programs-heading" 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
        >
          Our Core Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <Card 
              key={program.id} 
              className="bg-card hover:shadow-xl transition-shadow duration-300 border-border"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={program.icon} 
                    alt={program.iconAlt}
                    className="h-20 w-20 object-contain"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
