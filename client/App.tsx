import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import UI from "./pages/UI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/about" 
            element={
              <PlaceholderPage 
                title="About Me" 
                description="Learn more about my journey as a web developer and data analyst." 
              />
            } 
          />
          <Route 
            path="/work" 
            element={
              <PlaceholderPage 
                title="My Work" 
                description="Explore my portfolio of web development projects and data analysis work." 
              />
            } 
          />
          <Route 
            path="/ui" 
            element={<UI />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PlaceholderPage 
                title="Contact Me" 
                description="Let's connect and discuss potential collaborations or opportunities." 
              />
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
