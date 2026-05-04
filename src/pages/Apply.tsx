import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "@/components/SectionHeader";
import { trackEvent } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

const tracks = ["Payments", "Gamification for Scaling", "Agentic Systems", "Not sure yet"];
const roles = ["Developer", "Founder", "Designer", "Product Manager", "Student", "Other"];
const experience = ["Beginner — new to Web3", "Intermediate — built a few projects", "Advanced — shipped to production"];

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
    track: "",
    experience: "",
    projectIdea: "",
    github: "",
    motivation: "",
  });

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role || !form.track) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    trackEvent("form_submit", { track: form.track });

    // Simulate submission (replace with Supabase/API)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    navigate("/success");
  };

  return (
    <div className="container py-12 md:py-16 max-w-2xl">
      <SectionHeader
        eyebrow="Apply"
        title="Join the Mini Hack"
        description="Fill out the form below to apply. We'll review your application and get back within 48 hours."
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl bg-gradient-card border-hairline p-6 space-y-5">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              onFocus={() => trackEvent("form_start")}
              className="mt-1.5 bg-surface-2 border-border"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className="mt-1.5 bg-surface-2 border-border"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="whatsapp">WhatsApp (optional)</Label>
            <Input
              id="whatsapp"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              className="mt-1.5 bg-surface-2 border-border"
              placeholder="+254..."
            />
          </div>

          <div>
            <Label>Your Role *</Label>
            <Select value={form.role} onValueChange={(v) => set("role", v)}>
              <SelectTrigger className="mt-1.5 bg-surface-2 border-border">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Preferred Track *</Label>
            <Select value={form.track} onValueChange={(v) => set("track", v)}>
              <SelectTrigger className="mt-1.5 bg-surface-2 border-border">
                <SelectValue placeholder="Which track interests you?" />
              </SelectTrigger>
              <SelectContent>
                {tracks.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Experience Level</Label>
            <Select value={form.experience} onValueChange={(v) => set("experience", v)}>
              <SelectTrigger className="mt-1.5 bg-surface-2 border-border">
                <SelectValue placeholder="Your Web3 experience" />
              </SelectTrigger>
              <SelectContent>
                {experience.map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="github">GitHub URL (optional)</Label>
            <Input
              id="github"
              value={form.github}
              onChange={(e) => set("github", e.target.value)}
              className="mt-1.5 bg-surface-2 border-border"
              placeholder="https://github.com/..."
            />
          </div>

          <div>
            <Label htmlFor="projectIdea">Project Idea (optional)</Label>
            <Textarea
              id="projectIdea"
              value={form.projectIdea}
              onChange={(e) => set("projectIdea", e.target.value)}
              className="mt-1.5 bg-surface-2 border-border min-h-[80px]"
              placeholder="Briefly describe what you want to build..."
            />
          </div>

          <div>
            <Label htmlFor="motivation">Why do you want to join? (optional)</Label>
            <Textarea
              id="motivation"
              value={form.motivation}
              onChange={(e) => set("motivation", e.target.value)}
              className="mt-1.5 bg-surface-2 border-border min-h-[80px]"
              placeholder="What excites you about building on Avalanche?"
            />
          </div>
        </div>

        <Button type="submit" variant="brand" size="lg" disabled={loading} className="w-full">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Submit Application <ArrowRight className="h-4 w-4" /></>}
        </Button>
      </form>
    </div>
  );
};

export default Apply;
