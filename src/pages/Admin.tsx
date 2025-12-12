import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Users, BookOpen, DollarSign, FileText, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type VolunteerApplication = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  skills: string | null;
  experience: string | null;
  availability: string | null;
  motivation: string;
  created_at: string;
};

type ProgramInquiry = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  program: string;
  selected_courses: string[];
  education_level: string | null;
  message: string | null;
  created_at: string;
};

type Application = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  program: string;
  education_level: string;
  motivation: string;
  accessibility_needs: string | null;
  status: string | null;
  created_at: string;
};

type Donation = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  amount: number;
  currency: string | null;
  message: string | null;
  created_at: string;
};

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [volunteers, setVolunteers] = useState<VolunteerApplication[]>([]);
  const [inquiries, setInquiries] = useState<ProgramInquiry[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate("/auth");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .single();

    if (!roles) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    fetchAllData();
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [volunteerRes, inquiryRes, appRes, donationRes] = await Promise.all([
        supabase.from("volunteer_applications").select("*").order("created_at", { ascending: false }),
        supabase.from("program_inquiries").select("*").order("created_at", { ascending: false }),
        supabase.from("applications").select("*").order("created_at", { ascending: false }),
        supabase.from("donations").select("*").order("created_at", { ascending: false }),
      ]);

      if (volunteerRes.data) setVolunteers(volunteerRes.data);
      if (inquiryRes.data) setInquiries(inquiryRes.data);
      if (appRes.data) setApplications(appRes.data);
      if (donationRes.data) setDonations(donationRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const exportToExcel = (data: any[], filename: string) => {
    if (data.length === 0) {
      toast({
        title: "No Data",
        description: "There's no data to export.",
        variant: "destructive",
      });
      return;
    }

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        headers
          .map((header) => {
            const value = row[header];
            if (Array.isArray(value)) return `"${value.join("; ")}"`;
            if (typeof value === "string" && (value.includes(",") || value.includes("\n"))) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value ?? "";
          })
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();

    toast({
      title: "Export Successful",
      description: `${filename} has been downloaded.`,
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Checking access...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-2">Manage and export form submissions</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="volunteers" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="volunteers" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Volunteers</span>
                <span className="text-xs bg-accent/20 px-2 py-0.5 rounded-full">{volunteers.length}</span>
              </TabsTrigger>
              <TabsTrigger value="inquiries" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Inquiries</span>
                <span className="text-xs bg-accent/20 px-2 py-0.5 rounded-full">{inquiries.length}</span>
              </TabsTrigger>
              <TabsTrigger value="applications" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Applications</span>
                <span className="text-xs bg-accent/20 px-2 py-0.5 rounded-full">{applications.length}</span>
              </TabsTrigger>
              <TabsTrigger value="donations" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span className="hidden sm:inline">Donations</span>
                <span className="text-xs bg-accent/20 px-2 py-0.5 rounded-full">{donations.length}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="volunteers">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Volunteer Applications</h2>
                <Button onClick={() => exportToExcel(volunteers, "volunteer_applications")}>
                  <Download className="h-4 w-4 mr-2" />
                  Export to Excel
                </Button>
              </div>
              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Skills</TableHead>
                      <TableHead>Availability</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8">Loading...</TableCell></TableRow>
                    ) : volunteers.length === 0 ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No volunteer applications yet</TableCell></TableRow>
                    ) : (
                      volunteers.map((v) => (
                        <TableRow key={v.id}>
                          <TableCell className="font-medium">{v.full_name}</TableCell>
                          <TableCell>{v.email}</TableCell>
                          <TableCell>{v.phone || "-"}</TableCell>
                          <TableCell className="max-w-xs truncate">{v.skills || "-"}</TableCell>
                          <TableCell>{v.availability || "-"}</TableCell>
                          <TableCell>{new Date(v.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="inquiries">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Program Inquiries</h2>
                <Button onClick={() => exportToExcel(inquiries, "program_inquiries")}>
                  <Download className="h-4 w-4 mr-2" />
                  Export to Excel
                </Button>
              </div>
              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Courses</TableHead>
                      <TableHead>Education</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8">Loading...</TableCell></TableRow>
                    ) : inquiries.length === 0 ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No program inquiries yet</TableCell></TableRow>
                    ) : (
                      inquiries.map((i) => (
                        <TableRow key={i.id}>
                          <TableCell className="font-medium">{i.full_name}</TableCell>
                          <TableCell>{i.email}</TableCell>
                          <TableCell>{i.program}</TableCell>
                          <TableCell className="max-w-xs truncate">{i.selected_courses.join(", ")}</TableCell>
                          <TableCell>{i.education_level || "-"}</TableCell>
                          <TableCell>{new Date(i.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="applications">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Program Applications</h2>
                <Button onClick={() => exportToExcel(applications, "program_applications")}>
                  <Download className="h-4 w-4 mr-2" />
                  Export to Excel
                </Button>
              </div>
              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Education</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8">Loading...</TableCell></TableRow>
                    ) : applications.length === 0 ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No applications yet</TableCell></TableRow>
                    ) : (
                      applications.map((a) => (
                        <TableRow key={a.id}>
                          <TableCell className="font-medium">{a.full_name}</TableCell>
                          <TableCell>{a.email}</TableCell>
                          <TableCell>{a.program}</TableCell>
                          <TableCell>{a.education_level}</TableCell>
                          <TableCell>{a.status || "pending"}</TableCell>
                          <TableCell>{new Date(a.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="donations">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Donations</h2>
                <Button onClick={() => exportToExcel(donations, "donations")}>
                  <Download className="h-4 w-4 mr-2" />
                  Export to Excel
                </Button>
              </div>
              <div className="rounded-lg border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow><TableCell colSpan={5} className="text-center py-8">Loading...</TableCell></TableRow>
                    ) : donations.length === 0 ? (
                      <TableRow><TableCell colSpan={5} className="text-center py-8 text-muted-foreground">No donations yet</TableCell></TableRow>
                    ) : (
                      donations.map((d) => (
                        <TableRow key={d.id}>
                          <TableCell className="font-medium">{d.full_name}</TableCell>
                          <TableCell>{d.email}</TableCell>
                          <TableCell>{d.currency || "GHS"} {d.amount}</TableCell>
                          <TableCell className="max-w-xs truncate">{d.message || "-"}</TableCell>
                          <TableCell>{new Date(d.created_at).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
