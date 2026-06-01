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
import { Onboarding, type TourSection } from "@/components/onboarding/Onboarding";
import { NextArrow } from "@/components/onboarding/NextArrow";
import { useAuth } from "@/lib/auth-context";

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
  const { user, loading } = useAuth();
  const sections: TourSection[] = [
    { id: "tour-hero", label: "Welcome to Cartory" },
    { id: "tour-marquee", label: "Trusted Brands" },
    { id: "tour-journey", label: "Your 6-Step Journey" },
    { id: "tour-reseller", label: "Reseller Tools" },
    { id: "tour-reviews", label: "What Resellers Say" },
    { id: "tour-stats", label: "Platform Growth" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div id="tour-hero">
          <NextArrow targetId="tour-marquee" label="See trusted brands" />
          <Hero />
        </div>
        <div id="tour-marquee">
          <NextArrow targetId="tour-journey" label="Start your journey" />
          <Marquee />
        </div>
        <div id="tour-journey">
          <NextArrow targetId="tour-reseller" label="Explore reseller tools" />
          <Journey />
        </div>
        <div id="tour-reseller">
          <NextArrow targetId="tour-reviews" label="Read reviews" />
          <ResellerSections />
        </div>
        <div id="tour-reviews">
          <NextArrow targetId="tour-stats" label="View platform growth" />
          <Reviews />
        </div>
        <div id="tour-stats">
          <NextArrow targetId="tour-hero" label="Back to top" up />
          <Stats />
        </div>
      </main>
      <Footer />
      <AIOrb />
      {!loading && !user && <Onboarding sections={sections} />}
    </div>
  );
}
