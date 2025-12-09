import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Klagon - Tema",
      description: "Intensive one-day bootcamp covering HTML, CSS, and JavaScript fundamentals.",
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "March 22, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Online",
      description: "Learn the basics of AI and how to build your first machine learning model.",
    },
    {
      id: 3,
      title: "Tech for Social Impact Hackathon",
      date: "April 5-7, 2025",
      time: "All Day",
      location: "Klagon - Tema",
      description: "48-hour hackathon focused on building technology solutions for community challenges.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Join our workshops, hackathons, and training sessions to enhance your tech skills and connect with like-minded innovators.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-card p-6 rounded-lg shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">{event.title}</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{event.description}</p>
                
                <Button variant="hero" className="w-full">
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
