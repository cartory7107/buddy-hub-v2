import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Clock } from "lucide-react";

const courses = [
  { title: "Dropshipping Mastery Bangladesh", instructor: "Rakib Hasan", duration: "4h 20m", color: "from-sky-500 to-blue-600" },
  { title: "Facebook Ads for E-commerce", instructor: "Nadia Khan", duration: "3h 10m", color: "from-cyan-500 to-sky-600" },
  { title: "Winning Product Research", instructor: "Tanvir Ahmed", duration: "2h 45m", color: "from-blue-600 to-indigo-600" },
  { title: "Customer Conversion Secrets", instructor: "Sumaiya R.", duration: "2h 05m", color: "from-cyan-400 to-blue-500" },
];

export function Courses() {
  return (
    <section id="courses" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Learn from the best</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Bangla-first courses to take your reseller business from zero to scale.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <Card key={c.title} className="overflow-hidden group hover:shadow-glow transition-all hover:-translate-y-1">
              <div className={`aspect-video bg-gradient-to-br ${c.color} relative grid place-items-center`}>
                <PlayCircle className="h-12 w-12 text-white/90 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold leading-tight">{c.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{c.instructor}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{c.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}