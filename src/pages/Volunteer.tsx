import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb, Award } from "lucide-react";
import VolunteerModal from "@/components/VolunteerModal";

const Volunteer = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Mentor",
      description: "Guide and support students through their learning journey in tech.",
    },
    {
      icon: Lightbulb,
      title: "Workshop Facilitator",
      description: "Lead hands-on training sessions and share your technical expertise.",
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Help us reach more young people and spread awareness about our programs.",
    },
    {
      icon: Award,
      title: "Career Advisor",
      description: "Provide career guidance and help students navigate the tech industry.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Volunteer With Us</h1>
            <p className="text-lg text-muted-foreground">
              Make a difference by sharing your skills and experience with the next generation of tech innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg border border-border">
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{opportunity.title}</h3>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-primary text-primary-foreground p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our volunteer community and help shape the future of tech in Ghana.
            </p>
            <VolunteerModal 
              trigger={<Button variant="hero" size="lg">Apply to Volunteer</Button>}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
