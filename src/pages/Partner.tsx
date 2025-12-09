import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, GraduationCap, Globe } from "lucide-react";

const Partner = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Corporate Partnerships",
      description: "Collaborate with us to develop talent pipelines and corporate social responsibility initiatives.",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Partner with us to enhance your curriculum and provide students with practical tech skills.",
    },
    {
      icon: Globe,
      title: "International Organizations",
      description: "Join us in scaling our impact and bringing tech education to more communities.",
    },
    {
      icon: Handshake,
      title: "Technology Companies",
      description: "Provide mentorship, resources, and opportunities for our program participants.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Partner With Us</h1>
            <p className="text-lg text-muted-foreground">
              Together, we can create lasting impact and empower the next generation of tech innovators in Ghana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto bg-card p-12 rounded-lg shadow-lg border border-border text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Partner With Think Tech?</h2>
            <p className="text-muted-foreground mb-8">
              Our programs have trained over 1,000 young people in digital skills, with 85% of graduates finding employment or starting their own tech ventures within 6 months. By partnering with us, you're investing in the future of Ghana's tech ecosystem.
            </p>
            <Button variant="hero" size="lg">
              Become a Partner
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partner;
