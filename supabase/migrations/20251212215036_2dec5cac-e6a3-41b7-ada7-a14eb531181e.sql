-- Create table for volunteer applications
CREATE TABLE public.volunteer_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  skills TEXT,
  experience TEXT,
  availability TEXT,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for program inquiries (Learn More forms)
CREATE TABLE public.program_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  program TEXT NOT NULL,
  selected_courses TEXT[] NOT NULL,
  education_level TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.volunteer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.program_inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit volunteer applications
CREATE POLICY "Anyone can submit volunteer applications"
ON public.volunteer_applications
FOR INSERT
WITH CHECK (true);

-- Policy: Only admins can view volunteer applications
CREATE POLICY "Only admins can view volunteer applications"
ON public.volunteer_applications
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy: Only admins can delete volunteer applications
CREATE POLICY "Only admins can delete volunteer applications"
ON public.volunteer_applications
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy: Anyone can submit program inquiries
CREATE POLICY "Anyone can submit program inquiries"
ON public.program_inquiries
FOR INSERT
WITH CHECK (true);

-- Policy: Only admins can view program inquiries
CREATE POLICY "Only admins can view program inquiries"
ON public.program_inquiries
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy: Only admins can delete program inquiries
CREATE POLICY "Only admins can delete program inquiries"
ON public.program_inquiries
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));