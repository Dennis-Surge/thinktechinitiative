import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About Think Tech Initiative</h1>
          <div className="max-w-4xl space-y-6 text-lg text-muted-foreground">
            <p>
              Founded with a vision to empower Ghanaian youth with technology, Think Tech Initiative has grown into a leading program that offers training, innovation, and community impact.
            </p>
            <p>
              Our vision is to build a generation of digitally skilled youth who create innovative solutions for personal growth, employment, and social impact.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
