import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/luxe/Navbar";
import { Hero } from "@/components/luxe/Hero";
import { Journey } from "@/components/luxe/Journey";
import { Marquee } from "@/components/luxe/Marquee";
import { Reviews } from "@/components/luxe/Reviews";
import { Stats } from "@/components/luxe/Stats";
import { Footer } from "@/components/luxe/Footer";
import { AIOrb } from "@/components/luxe/AIOrb";
import { ResellerSections } from "@/components/reseller/ResellerSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cartory Dropship — The Operating System for Modern Resellers" },
      { name: "description", content: "Build an online reselling business in Bangladesh with verified products, profit tools, training, leaderboards and rewards. Join 12,000+ resellers." },
      { property: "og:title", content: "Cartory Dropship · Reseller OS" },
      { property: "og:description", content: "The operating system for modern resellers in Bangladesh." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Journey />
        <ResellerSections />
        <Reviews />
        <Stats />
      </main>
      <Footer />
      <AIOrb />
    </div>
  );
}
