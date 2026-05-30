import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Package, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      <div className="absolute inset-0 grid-pattern" aria-hidden />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float"
        aria-hidden
      />

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
            <Button
              size="lg"
              asChild
              className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95"
            >
              <a href="#register">
                Become a Reseller <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#products">
                <Package className="mr-2 h-4 w-4" /> Explore Products
              </a>
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
          <div
            className="absolute inset-x-4 top-12 h-56 rounded-full bg-gradient-hero blur-3xl opacity-35"
            aria-hidden
          />
          <div className="relative mx-auto max-w-lg rotate-[-2deg] rounded-[2rem] bg-gradient-hero p-[2px] shadow-glow">
            <div className="rounded-[calc(2rem-2px)] bg-background/95 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                    Cartory
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                    Seller growth <span className="text-gradient">sticker</span>
                  </h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShoppingBag className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-3xl bg-muted/70 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">This week</p>
                      <p className="text-2xl font-black">৳72,450</p>
                    </div>
                  </div>
                  <div
                    className="mt-5 flex h-28 items-end gap-2"
                    aria-label="Stylized weekly sales chart"
                  >
                    {[38, 54, 45, 70, 60, 88, 76].map((height, index) => (
                      <div key={index} className="flex flex-1 items-end rounded-full bg-primary/10">
                        <div
                          className="w-full rounded-full bg-gradient-hero"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl bg-secondary/10 p-5 text-secondary">
                    <Package className="h-6 w-6" />
                    <p className="mt-4 text-2xl font-black">1,248</p>
                    <p className="text-sm text-muted-foreground">Products ready</p>
                  </div>
                  <div className="rounded-3xl bg-accent/15 p-5 text-accent-foreground">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <p className="mt-4 text-2xl font-black">+34%</p>
                    <p className="text-sm text-muted-foreground">Profit lift</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                  No inventory
                </span>
                <span className="rounded-full bg-secondary/10 px-4 py-2 text-secondary">
                  Daily payouts
                </span>
                <span className="rounded-full bg-muted px-4 py-2 text-foreground">3% bonus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
