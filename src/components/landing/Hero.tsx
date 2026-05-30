import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Package } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      <div className="absolute inset-0 grid-pattern" aria-hidden />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Bangladesh's #1 Reseller Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Build your <span className="text-gradient">dropshipping empire</span> with Cartory
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Source winning products, set your own prices, and earn unlimited profit + 3% bonus
            commission on every order. Zero inventory. Daily payouts. Premium support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95">
              <a href="#register">
                Become a Reseller <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#products"><Package className="mr-2 h-4 w-4" /> Explore Products</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "12,400+", l: "Active Resellers" },
              { v: "৳8.2Cr", l: "Paid Out" },
              { v: "98%", l: "On-Time Delivery" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-gradient-hero rounded-3xl blur-2xl opacity-30" />
          <img
            src={heroImg}
            alt="Cartory reseller dashboard preview"
            width={1600}
            height={1200}
            className="relative rounded-3xl shadow-glow border border-border/50"
          />
        </div>
      </div>
    </section>
  );
}