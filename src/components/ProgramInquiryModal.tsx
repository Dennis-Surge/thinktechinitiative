import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ProgramInquiryModalProps {
  trigger: React.ReactNode;
  programTitle: string;
  courses: string[];
}

const ProgramInquiryModal = ({ trigger, programTitle, courses }: ProgramInquiryModalProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    educationLevel: "",
    message: "",
  });
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCourseToggle = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedCourses.length === 0) {
      toast({
        title: "Please select at least one course",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("program_inquiries").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        program: programTitle,
        selected_courses: selectedCourses,
        education_level: formData.educationLevel || null,
        message: formData.message || null,
      });

      if (error) throw error;

      toast({
        title: "Inquiry Submitted!",
        description: "We'll get back to you soon about the program.",
      });

      setFormData({ fullName: "", email: "", phone: "", educationLevel: "", message: "" });
      setSelectedCourses([]);
      setOpen(false);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl">{programTitle}</DialogTitle>
          <p className="text-muted-foreground text-sm">Fill out the form below to learn more about this program</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="inquiry-name">Full Name *</Label>
              <Input
                id="inquiry-name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="inquiry-email">Email *</Label>
              <Input
                id="inquiry-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="inquiry-phone">Phone Number</Label>
              <Input
                id="inquiry-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+233 XX XXX XXXX"
              />
            </div>
            <div>
              <Label htmlFor="inquiry-education">Education Level</Label>
              <Select
                value={formData.educationLevel}
                onValueChange={(value) => setFormData({ ...formData, educationLevel: value })}
              >
                <SelectTrigger id="inquiry-education">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label className="mb-3 block">Select Courses of Interest *</Label>
            <div className="grid gap-3 sm:grid-cols-2 p-4 rounded-lg bg-secondary/50 border border-border">
              {courses.map((course) => (
                <div key={course} className="flex items-center space-x-2">
                  <Checkbox
                    id={`course-${course}`}
                    checked={selectedCourses.includes(course)}
                    onCheckedChange={() => handleCourseToggle(course)}
                  />
                  <Label
                    htmlFor={`course-${course}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {course}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="inquiry-message">Additional Message</Label>
            <Textarea
              id="inquiry-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any questions or specific interests..."
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProgramInquiryModal;
