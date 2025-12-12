import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface VolunteerModalProps {
  trigger: React.ReactNode;
}

const VolunteerModal = ({ trigger }: VolunteerModalProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    availability: "",
    motivation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("volunteer_applications").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        skills: formData.skills || null,
        experience: formData.experience || null,
        availability: formData.availability || null,
        motivation: formData.motivation,
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in volunteering with us.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        skills: "",
        experience: "",
        availability: "",
        motivation: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error submitting volunteer application:", error);
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
          <DialogTitle className="text-foreground text-xl">Volunteer Application</DialogTitle>
          <p className="text-muted-foreground text-sm">Join our team and make a difference in tech education</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="volunteer-name">Full Name *</Label>
              <Input
                id="volunteer-name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="volunteer-email">Email *</Label>
              <Input
                id="volunteer-email"
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
              <Label htmlFor="volunteer-phone">Phone Number</Label>
              <Input
                id="volunteer-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+233 XX XXX XXXX"
              />
            </div>
            <div>
              <Label htmlFor="volunteer-availability">Availability</Label>
              <Select
                value={formData.availability}
                onValueChange={(value) => setFormData({ ...formData, availability: value })}
              >
                <SelectTrigger id="volunteer-availability">
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekdays">Weekdays</SelectItem>
                  <SelectItem value="weekends">Weekends</SelectItem>
                  <SelectItem value="evenings">Evenings</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="volunteer-skills">Skills & Expertise</Label>
            <Input
              id="volunteer-skills"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              placeholder="e.g., Web Development, Teaching, Project Management"
            />
          </div>

          <div>
            <Label htmlFor="volunteer-experience">Relevant Experience</Label>
            <Textarea
              id="volunteer-experience"
              rows={3}
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="Share your relevant work or volunteer experience..."
            />
          </div>

          <div>
            <Label htmlFor="volunteer-motivation">Why do you want to volunteer? *</Label>
            <Textarea
              id="volunteer-motivation"
              required
              rows={4}
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              placeholder="Tell us what motivates you to join Think Tech Initiative..."
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerModal;
