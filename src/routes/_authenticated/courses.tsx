import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, PlayCircle } from "lucide-react";

export const Route = createFileRoute("/_authenticated/courses")({
  head: () => ({ meta: [{ title: "Academy — Cartory Dropship" }] }),
  component: Courses,
});

const courses = [
  { name: "Reseller Foundations", level: "Beginner", lessons: 12, desc: "From zero to your first order in 7 days." },
  { name: "Product Research Mastery", level: "Intermediate", lessons: 9, desc: "Find winning products before competitors do." },
  { name: "Facebook Marketing", level: "Intermediate", lessons: 14, desc: "Run profitable ads on a tiny budget." },
  { name: "Customer Closing Scripts", level: "Advanced", lessons: 8, desc: "Convert cold leads into paying customers." },
];

function Courses() {
  return (
    <div className="space-y-6">
      <div><div className="eyebrow text-[var(--neon-soft)]">Cartory Academy</div><h1 className="font-serif text-4xl md:text-5xl mt-2">Learn the craft of <em className="italic hybrid-text">modern reselling</em>.</h1></div>
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map(c => (
          <div key={c.name} className="glass-dark ring-luxe rounded-2xl p-6 card-3d">
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-[var(--neon)]/15 grid place-items-center"><GraduationCap className="h-5 w-5 text-[var(--neon-soft)]" /></div><div className="eyebrow">{c.level} · {c.lessons} lessons</div></div>
            <h3 className="font-serif text-2xl mt-3">{c.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            <button className="mt-4 inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-xs font-mono uppercase tracking-[0.22em] hover:bg-secondary/60"><PlayCircle className="h-4 w-4" /> Start course</button>
          </div>
        ))}
      </div>
    </div>
  );
}