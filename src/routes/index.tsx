import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { TrustBar } from "@/components/landing/TrustBar";
import { Hero } from "@/components/landing/Hero";
import { Products } from "@/components/landing/Products";
import { Leaderboard } from "@/components/landing/Leaderboard";
import { Courses } from "@/components/landing/Courses";
import { Challenges } from "@/components/landing/Challenges";
import { Rewards } from "@/components/landing/Rewards";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { HelpCenter } from "@/components/landing/HelpCenter";
import { AIAssistant } from "@/components/landing/AIAssistant";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cartory Reseller Hub — Bangladesh's #1 Dropshipping Platform" },
      { name: "description", content: "Join 12,000+ Bangladeshi resellers. Source winning products, set your prices, earn unlimited profit + 3% bonus commission. Zero inventory, daily payouts." },
      { property: "og:title", content: "Cartory Reseller Hub" },
      { property: "og:description", content: "Bangladesh's premium reseller & dropshipping platform." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Leaderboard />
        <Courses />
        <Challenges />
        <Rewards />
        <Testimonials />
        <FAQ />
        <HelpCenter />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
