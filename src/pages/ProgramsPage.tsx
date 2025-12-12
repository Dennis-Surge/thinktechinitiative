import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProgramInquiryModal from "@/components/ProgramInquiryModal";
import iconCoding from "@/assets/icon-coding.png";
import iconInnovation from "@/assets/icon-innovation.png";
import iconAccessibility from "@/assets/icon-accessibility.png";

const ProgramsPage = () => {
  const programs = [
    {
      icon: iconCoding,
      title: "Digital Skills Training",
      duration: "12 weeks",
      description: "Comprehensive training in web development, mobile app development, and digital marketing. Learn from industry experts and build real-world projects.",
      skills: ["HTML/CSS", "JavaScript", "React", "Python", "Digital Marketing"],
    },
    {
      icon: iconInnovation,
      title: "Tech for Good Projects",
      duration: "8 weeks",
      description: "Work on real social impact projects that address community challenges. Collaborate with NGOs and local organizations to create technology solutions.",
      skills: ["Project Management", "UI/UX Design", "Database Management", "API Integration"],
    },
    {
      icon: iconAccessibility,
      title: "Inclusive Innovation",
      duration: "10 weeks",
      description: "Specialized program focused on creating accessible technology solutions for people with disabilities. Learn about assistive technologies and inclusive design.",
      skills: ["Accessibility Standards", "Assistive Tech", "Inclusive Design", "User Research"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Our Programs</h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
            Explore our comprehensive training programs designed to empower youth with digital skills and innovation capabilities. All programs include mentorship, career guidance, and job placement support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <img src={program.icon} alt="" className="h-16 w-16 mb-4" aria-hidden="true" />
                <h2 className="text-2xl font-bold mb-2 text-foreground">{program.title}</h2>
                <p className="text-accent font-semibold mb-4">{program.duration}</p>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">What You'll Learn:</h3>
                  <ul className="space-y-1">
                    {program.skills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <ProgramInquiryModal 
                  trigger={<Button variant="hero" className="w-full">Learn More</Button>}
                  programTitle={program.title}
                  courses={program.skills}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
