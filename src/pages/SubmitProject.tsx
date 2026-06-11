import { useState } from "react";
import { z } from "zod";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { TRACKS, STAGES } from "@/data/mock";
import { SectionHeader } from "@/components/SectionHeader";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Project name required").max(80),
  tagline: z.string().trim().min(8, "Add a one-liner").max(140),
  description: z.string().trim().min(20, "Tell us more").max(2000),
  track: z.string().min(1, "Pick a track"),
  stage: z.string().min(1, "Pick a stage"),
  team: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  whatsapp: z.string().trim().max(20).optional().or(z.literal("")),
  location: z.string().trim().min(2).max(60),
  github: z.string().trim().max(200).optional().or(z.literal("")),
  demo: z.string().trim().max(200).optional().or(z.literal("")),
  social: z.string().trim().max(200).optional().or(z.literal("")),
  avalanche: z.string().trim().max(500).optional().or(z.literal("")),
  wallet: z.string().trim().max(80).optional().or(z.literal("")),
  shipped: z.string().trim().max(500).optional().or(z.literal("")),
});

const SubmitProject = () => {
  const [done, setDone] = useState(false);
  const [funding, setFunding] = useState(false);
  const [collab, setCollab] = useState(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setDone(true);
    toast.success("Submission received — Team1 will review shortly.");
  };

  if (done) {
    return (
      <div className="container py-24 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl font-semibold">Submission received</h1>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">Team1 Kenya will review your project and reach out within a few days. Keep shipping.</p>
        <Button variant="brand" className="mt-6" onClick={() => setDone(false)}>Submit another</Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-16 max-w-3xl">
      <SectionHeader eyebrow="Submit" title="Submit your project" description="Get listed in the Avalanche Team1 Kenya Talent Index." />
      <form onSubmit={onSubmit} className="rounded-3xl bg-gradient-card border-hairline p-6 md:p-8 space-y-6">
        <Field label="Project name *" name="name" placeholder="e.g. Exion Pay" />
        <Field label="One-line description *" name="tagline" placeholder="What does it do, in one line?" />
        <Field label="Full description *" name="description" type="textarea" placeholder="Problem, solution, traction, what's next..." />
        <div className="grid gap-4 md:grid-cols-2">
          <SelectField label="Track *" name="track" options={[...TRACKS]} />
          <SelectField label="Stage *" name="stage" options={[...STAGES]} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Team / Builder name *" name="team" />
          <Field label="Location *" name="location" placeholder="Nairobi, Kenya" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Email *" name="email" type="email" />
          <Field label="WhatsApp" name="whatsapp" placeholder="+254..." />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="GitHub" name="github" />
          <Field label="Demo URL" name="demo" />
          <Field label="X / LinkedIn" name="social" />
        </div>
        <Field label="Avalanche integration" name="avalanche" type="textarea" placeholder="C-Chain, Subnet, Core wallet, etc." />
        <Field label="Wallet address (optional)" name="wallet" />
        <Field label="What have you shipped recently?" name="shipped" type="textarea" />
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <ToggleRow label="Looking for grants" checked={funding} onChange={setFunding} />
          <ToggleRow label="Looking for collaborators" checked={collab} onChange={setCollab} />
        </div>
        <div>
          <Label className="text-sm">Logo / banner</Label>
          <div className="mt-2 rounded-xl border border-dashed border-border bg-surface-2 p-8 text-center text-sm text-muted-foreground">
            <Upload className="h-5 w-5 mx-auto mb-2" />
            Drop a logo here, or click to upload (mock)
          </div>
        </div>
        <Button type="submit" variant="brand" size="lg" className="w-full"><Send className="h-4 w-4" /> Submit project</Button>
      </form>
    </div>
  );
};

const Field = ({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) => (
  <div className="space-y-1.5">
    <Label htmlFor={name} className="text-sm">{label}</Label>
    {type === "textarea" ? (
      <Textarea id={name} name={name} placeholder={placeholder} rows={4} className="bg-surface-2 border-border" />
    ) : (
      <Input id={name} name={name} type={type} placeholder={placeholder} className="bg-surface-2 border-border h-11" />
    )}
  </div>
);
const SelectField = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <div className="space-y-1.5">
    <Label htmlFor={name} className="text-sm">{label}</Label>
    <Select name={name}>
      <SelectTrigger className="h-11 bg-surface-2 border-border"><SelectValue placeholder="Select..." /></SelectTrigger>
      <SelectContent>{options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
    </Select>
  </div>
);
const ToggleRow = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) => (
  <div className="flex items-center gap-2">
    <Switch checked={checked} onCheckedChange={onChange} />
    <Label className="text-sm text-muted-foreground">{label}</Label>
  </div>
);

export default SubmitProject;
