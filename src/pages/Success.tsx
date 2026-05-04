import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => (
  <div className="container py-20 md:py-32 text-center max-w-2xl mx-auto">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand shadow-glow mb-8">
        <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">You're in!</h1>
      <p className="text-lg text-muted-foreground mt-4 max-w-md mx-auto">
        Your application has been submitted. We'll review it and get back to you within 48 hours via email.
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-card border-hairline p-6 text-left max-w-md mx-auto">
        <h3 className="font-display font-semibold mb-3">What's next?</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
            Check your email for a confirmation message
          </li>
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
            Join the Team1 Kenya community on WhatsApp
          </li>
          <li className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
            Explore the ecosystem while you wait
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="brand">
          <a href="https://lu.ma/Team1Africa" target="_blank" rel="noopener noreferrer">
            <Calendar className="h-4 w-4" /> RSVP to Events
          </a>
        </Button>
        <Button asChild variant="glass">
          <Link to="/ecosystem">
            Explore Ecosystem <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  </div>
);

export default Success;
