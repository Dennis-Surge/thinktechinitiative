import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EMAIL_ADDRESS = "thinktechinitiative@gmail.com";

const Apply = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    program: "",
    education_level: "",
    motivation: "",
    accessibility_needs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoBody = `Program Application Details:

Full Name: ${formData.full_name}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${formData.program}
Education Level: ${formData.education_level}

Motivation:
${formData.motivation}

Accessibility Needs:
${formData.accessibility_needs || "None specified"}`;

    const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(`Program Application - ${formData.program}`)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client should open with your application details.",
    });

    setFormData({
      full_name: "",
      email: "",
      phone: "",
      program: "",
      education_level: "",
      motivation: "",
      accessibility_needs: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Apply to Our Programs</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of tech innovators and start your journey to making an impact.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
              <div>
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  required
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="program">Select Program *</Label>
                <Select required value={formData.program} onValueChange={(value) => setFormData({ ...formData, program: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital-skills">Digital Skills Training</SelectItem>
                    <SelectItem value="tech-for-good">Tech for Good Projects</SelectItem>
                    <SelectItem value="inclusive-innovation">Inclusive Innovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="education_level">Education Level *</Label>
                <Select required value={formData.education_level} onValueChange={(value) => setFormData({ ...formData, education_level: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                <Textarea
                  id="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="accessibility_needs">Accessibility Needs (Optional)</Label>
                <Textarea
                  id="accessibility_needs"
                  rows={3}
                  placeholder="Please let us know if you require any accommodations"
                  value={formData.accessibility_needs}
                  onChange={(e) => setFormData({ ...formData, accessibility_needs: e.target.value })}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
