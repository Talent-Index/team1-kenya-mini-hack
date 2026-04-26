import { useState } from "react";
import { Star, Check, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SectionHeader } from "@/components/SectionHeader";
import { submissions as initial } from "@/data/mock";
import { Submission } from "@/types";
import { MetricCard } from "@/components/MetricCard";

const statusColor: Record<Submission["status"], string> = {
  pending: "bg-secondary text-foreground",
  approved: "bg-brand-blue/20 text-brand-blue border border-brand-blue/30",
  rejected: "bg-destructive/20 text-destructive border border-destructive/30",
  featured: "bg-gradient-brand text-primary-foreground",
};

const Admin = () => {
  const [rows, setRows] = useState<Submission[]>(initial);
  const update = (id: string, patch: Partial<Submission>) =>
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  const counts = {
    pending: rows.filter((r) => r.status === "pending").length,
    approved: rows.filter((r) => r.status === "approved").length,
    featured: rows.filter((r) => r.status === "featured").length,
    rejected: rows.filter((r) => r.status === "rejected").length,
  };

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader eyebrow="Admin" title="Review submissions" description="Approve, reject, feature and assign visibility scores." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <MetricCard label="Pending" value={counts.pending} accent="orange" />
        <MetricCard label="Approved" value={counts.approved} accent="blue" />
        <MetricCard label="Featured" value={counts.featured} accent="red" />
        <MetricCard label="Rejected" value={counts.rejected} accent="purple" />
      </div>
      <div className="rounded-2xl bg-gradient-card border-hairline overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border/60 hover:bg-transparent">
              <TableHead>Project</TableHead>
              <TableHead className="hidden md:table-cell">Submitter</TableHead>
              <TableHead className="hidden lg:table-cell">Notes</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} className="border-border/60">
                <TableCell>
                  <div className="font-medium">{r.projectName}</div>
                  <div className="text-xs text-muted-foreground line-clamp-1">{r.description}</div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="text-sm">{r.submitterName}</div>
                  <div className="text-xs text-muted-foreground">{r.email}</div>
                </TableCell>
                <TableCell className="hidden lg:table-cell text-xs text-muted-foreground max-w-[220px] truncate">{r.adminNotes ?? "—"}</TableCell>
                <TableCell>
                  <Badge className={`${statusColor[r.status]} capitalize border-0`}>{r.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="inline-flex gap-1">
                    <Button size="icon" variant="ghost" title="Approve" onClick={() => update(r.id, { status: "approved" })}><Check className="h-4 w-4 text-brand-blue" /></Button>
                    <Button size="icon" variant="ghost" title="Feature" onClick={() => update(r.id, { status: "featured" })}><Star className="h-4 w-4 text-brand-orange" /></Button>
                    <Button size="icon" variant="ghost" title="Reject" onClick={() => update(r.id, { status: "rejected" })}><X className="h-4 w-4 text-destructive" /></Button>
                    <Button size="icon" variant="ghost" title="Notes"><FileText className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;
