import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I become a reseller?", a: "Click 'Become a Reseller', fill the form, upload your NID, and our admin team reviews within 24 hours." },
  { q: "How does pricing work?", a: "Each product has a base price. You set the selling price above the base. Profit = selling - base, plus a 3% bonus commission per delivered order." },
  { q: "When do I get paid?", a: "Daily payouts via bKash, Nagad, or bank transfer once the order is marked delivered." },
  { q: "Do I need to hold inventory?", a: "No. Cartory handles sourcing, packaging, and nationwide COD delivery." },
  { q: "Is there a joining fee?", a: "No. Registration and the entire platform are 100% free for verified resellers." },
];

export function FAQ() {
  return (
    <section id="help" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently asked</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}