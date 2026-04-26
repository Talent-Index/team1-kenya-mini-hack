import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import Index from "./pages/Index.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Builders from "./pages/Builders.tsx";
import BuilderProfile from "./pages/BuilderProfile.tsx";
import Tracks from "./pages/Tracks.tsx";
import SubmitProject from "./pages/SubmitProject.tsx";
import Admin from "./pages/Admin.tsx";
import Analytics from "./pages/Analytics.tsx";
import NotFound from "./pages/NotFound.tsx";

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/builders" element={<Builders />} />
            <Route path="/builders/:id" element={<BuilderProfile />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/submit" element={<SubmitProject />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
