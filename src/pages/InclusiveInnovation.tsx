import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accessibility, Eye, Ear, Hand } from "lucide-react";

const InclusiveInnovation = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Tools and training for screen readers, high contrast interfaces, and alternative text implementations.",
    },
    {
      icon: Ear,
      title: "Audio Accessibility",
      description: "Captioning, transcription services, and visual indicators for audio content.",
    },
    {
      icon: Hand,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice controls, and assistive device integration.",
    },
    {
      icon: Accessibility,
      title: "Universal Design",
      description: "Creating technology that works for everyone, regardless of ability.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Inclusive Innovation</h1>
            <p className="text-lg text-muted-foreground">
              Empowering people with disabilities through accessible technology and innovation. We believe technology should be accessible to everyone, and we're committed to making that a reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-primary text-primary-foreground p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-lg mb-6 opacity-90">
              We partner with disability advocacy groups and assistive technology providers to ensure our programs meet WCAG 2.1 AA standards and provide meaningful opportunities for people with disabilities to learn, create, and innovate in tech.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                <span>Sign language interpretation available for all workshops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                <span>Accessible learning materials in multiple formats</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                <span>Assistive technology equipment and training provided</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                <span>Flexible learning pace and accommodation requests honored</span>
              </li>
            </ul>
            <Button variant="hero" size="lg">
              Apply to Our Program
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InclusiveInnovation;
