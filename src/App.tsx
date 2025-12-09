import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ProgramsPage from "./pages/ProgramsPage";
import InclusiveInnovation from "./pages/InclusiveInnovation";
import Donate from "./pages/Donate";
import Apply from "./pages/Apply";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Volunteer from "./pages/Volunteer";
import Partner from "./pages/Partner";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/inclusive-innovation" element={<InclusiveInnovation />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
