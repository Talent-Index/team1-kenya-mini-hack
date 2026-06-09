import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the Team1 Kenya Mini-Hack?",
    a: "A 3-month builder program (June–August 2026) where Kenyan developers, founders, and teams build real products on Avalanche. Each month focuses on a specific track: Payments, Gamification, and Agentic Systems — culminating in a hackathon on August 28.",
  },
  {
    q: "Who can apply?",
    a: "Any developer, designer, founder, or team based in or connected to Kenya. Whether you're a student, indie hacker, or startup — if you're building on Avalanche, you're welcome.",
  },
  {
    q: "Do I need to know Solidity or Avalanche?",
    a: "No. We onboard builders of all levels. If you know JavaScript, Python, or any programming language, you can start. We provide workshops, mentorship, and starter templates.",
  },
  {
    q: "Is there funding or prizes?",
    a: "Yes. Top projects from each track are eligible for Avalanche ecosystem grants, prizes at the hackathon, and ongoing support from Team1 Kenya for go-to-market.",
  },
  {
    q: "What happens after I apply?",
    a: "You'll receive a confirmation, then get added to our builder community. You'll get access to workshops, mentorship, and resources for your chosen track.",
  },
  {
    q: "Can I participate remotely?",
    a: "Yes. All tracks support remote builders. Live events and the hackathon kickoff will be hybrid — both in-person in Nairobi and streamed online.",
  },
];

export const FAQ = () => (
  <Accordion type="single" collapsible className="w-full">
    {faqs.map((f, i) => (
      <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
        <AccordionTrigger className="text-left font-display font-medium tracking-tight hover:no-underline py-5">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm pb-5">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
