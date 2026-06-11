import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import Index from "./pages/Index";
import EcosystemMap from "./pages/EcosystemMap";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Apply from "./pages/Apply";
import Success from "./pages/Success";
import GetStarted from "./pages/GetStarted";
import Guide from "./pages/Guide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/ecosystem" element={<EcosystemMap />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/success" element={<Success />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/guide" element={<Guide />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
