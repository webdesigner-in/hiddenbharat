import { Compass, Heart, MapPinned, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const quickActions = [
  {
    title: "Browse destinations",
    description: "Explore quieter destinations worth your time.",
    to: "/destinations",
    icon: MapPinned,
  },
  {
    title: "Read travel stories",
    description: "Get inspired by real journeys and reflections.",
    to: "/stories",
    icon: Heart,
  },
  {
    title: "See curated packages",
    description: "Find packages designed for slower travel.",
    to: "/packages",
    icon: Compass,
  },
];

function Dashboard() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.96))] p-6 shadow-sm sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
            <Sparkles className="size-4" />
            Your HiddenBharat space
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            This area is still growing, so for now we've made it a clean launch
            point back into destinations, packages, and stories.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-orange-100/80 bg-white/90 p-6 shadow-sm"
              >
                <div className="inline-flex rounded-2xl bg-orange-50 p-3">
                  <Icon className="size-5 text-orange-600" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-stone-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <Button asChild variant="outline" className="mt-5 rounded-full">
                  <Link to={item.to}>Open</Link>
                </Button>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
