import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { FloatingAskAIButton } from "./FloatingAskAIButton";
import { Outlet } from "react-router-dom";

export const AppLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <FloatingAskAIButton />
  </div>
);
