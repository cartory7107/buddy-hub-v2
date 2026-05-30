import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, PlayCircle, MessageCircle } from "lucide-react";

export function HelpCenter() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Help Center</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to grow your reseller business.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            { Icon: BookOpen, title: "Knowledge Base", desc: "200+ articles covering every feature." },
            { Icon: PlayCircle, title: "Video Tutorials", desc: "Step-by-step walkthroughs in Bangla." },
            { Icon: MessageCircle, title: "Common Questions", desc: "Quick answers to popular topics." },
          ].map((c) => (
            <Card key={c.title} className="p-6 hover:shadow-soft transition-shadow">
              <c.Icon className="h-8 w-8 text-primary mb-3" />
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-[#25D366] hover:bg-[#1eb558] text-white shadow-soft"
          >
            <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Contact Cartory Support
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}