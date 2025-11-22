
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import News from "./pages/News";
import Career from "./pages/Career";
import Certificates from "./pages/Certificates";
import Partners from "./pages/Partners";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import Materials from "./pages/Materials";
import Technologies from "./pages/Technologies";
import Equipment from "./pages/Equipment";
import Safety from "./pages/Safety";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Sustainability from "./pages/Sustainability";
import Innovations from "./pages/Innovations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/innovations" element={<Innovations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;