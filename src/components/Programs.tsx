import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import codingIcon from "@/assets/icon-coding.png";
import innovationIcon from "@/assets/icon-innovation.png";
import accessibilityIcon from "@/assets/icon-accessibility.png";
import ProgramInquiryModal from "@/components/ProgramInquiryModal";

const programs = [
  {
    id: 1,
    title: "Digital Skills Training",
    description: "Web & app development, graphic design, data analytics, AI fundamentals, cybersecurity, and digital marketing",
    icon: codingIcon,
    iconAlt: "Laptop with code brackets representing digital skills training",
    gradient: "from-accent/20 to-accent/5",
    courses: ["HTML/CSS", "JavaScript", "React", "Python", "Digital Marketing", "Data Analytics"],
  },
  {
    id: 2,
    title: "Tech for Good Projects",
    description: "Technology solutions for schools, healthcare, agriculture, and community development",
    icon: innovationIcon,
    iconAlt: "Lightbulb with innovation rays representing technology for social good",
    gradient: "from-success/20 to-success/5",
    courses: ["Project Management", "UI/UX Design", "Database Management", "API Integration"],
  },
  {
    id: 3,
    title: "Inclusive Innovation",
    description: "Empowering people with disabilities through accessible technology and innovation",
    icon: accessibilityIcon,
    iconAlt: "Accessibility symbol with assistive technology elements representing inclusive innovation",
    gradient: "from-primary/20 to-primary/5",
    courses: ["Accessibility Standards", "Assistive Tech", "Inclusive Design", "User Research"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  },
};

const Programs = () => {
  return (
    <section 
      className="py-20 md:py-28 bg-secondary" 
      aria-labelledby="programs-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            What We Offer
          </span>
          <h2 
            id="programs-heading" 
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
          >
            Our Core Programs
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Comprehensive training and innovation programs designed to transform lives and communities through technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={cardVariants}>
              <Card 
                className="group bg-card hover:shadow-xl transition-all duration-500 border-border hover:border-accent/30 h-full overflow-hidden"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${program.gradient}`} />
                <CardHeader className="text-center pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={program.icon} 
                        alt={program.iconAlt}
                        className="relative h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-xl font-bold text-card-foreground group-hover:text-accent transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-8 text-center">
                  <CardDescription className="font-body text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </CardDescription>
                  <ProgramInquiryModal
                    trigger={
                      <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        Learn More
                      </Button>
                    }
                    programTitle={program.title}
                    courses={program.courses}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="hero" size="lg" className="group" asChild>
            <Link to="/programs">
              View All Programs
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
