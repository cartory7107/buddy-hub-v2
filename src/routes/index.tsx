import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/luxe/Navbar";
import { Hero } from "@/components/luxe/Hero";
import { Marquee } from "@/components/luxe/Marquee";
import { Categories } from "@/components/luxe/Categories";
import { Products } from "@/components/luxe/Products";
import { Bento } from "@/components/luxe/Bento";
import { FlashSale } from "@/components/luxe/FlashSale";
import { Brands } from "@/components/luxe/Brands";
import { Reviews } from "@/components/luxe/Reviews";
import { Stats } from "@/components/luxe/Stats";
import { Newsletter } from "@/components/luxe/Newsletter";
import { Footer } from "@/components/luxe/Footer";
import { AIOrb } from "@/components/luxe/AIOrb";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière — A Members-only Archive of Slow-made Objects" },
      { name: "description", content: "Sixty pieces. Six houses. A cinematic, members-only archive of fragrance, atelier work and slow-made objects — released six times a year." },
      { property: "og:title", content: "Lumière · Maison 01" },
      { property: "og:description", content: "Cinematic, members-only archive of slow-made luxury objects." },
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
        <Categories />
        <Products />
        <Bento />
        <FlashSale />
        <Brands />
        <Reviews />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
      <AIOrb />
    </div>
  );
}
