import { useEffect, useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAllPackages } from "@/services/packages.service";

const THEMES = ["all", "mountains", "beach", "heritage", "spiritual"];

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [query, setQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getAllPackages();
      setPackages(data);
      setLoading(false);
    }
    load();
  }, []);

  const filteredPackages = useMemo(() => {
    let result = packages;

    if (activeTheme !== "all") {
      result = result.filter((p) => p.theme.toLowerCase() === activeTheme);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((p) =>
        [p.title, p.description, p.theme].join(" ").toLowerCase().includes(q)
      );
    }

    return result;
  }, [packages, query, activeTheme]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading packages...
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-[140px]" />
      </div>

      <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.96))] p-6 shadow-sm sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
            <Sparkles className="size-4" />
            Curated travel packages
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Packages designed around pace, not pressure
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Discover journeys built for atmosphere, comfort, and meaningful
            travel across India's quieter landscapes.
          </p>

          <div className="mt-8 space-y-4">
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search packages, experiences, themes..."
                className="w-full rounded-full border border-orange-100 bg-white pl-11 pr-4 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {THEMES.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition",
                    activeTheme === theme
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-orange-100 bg-white text-muted-foreground hover:bg-orange-50"
                  )}
                >
                  {theme === "all"
                    ? "All"
                    : theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="group overflow-hidden rounded-[1.75rem] border border-orange-100/80 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden bg-orange-50">
                {pkg.images?.[0] ? (
                  <img
                    src={pkg.images[0]}
                    alt={pkg.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    No image available
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-orange-700/70">
                  {pkg.theme} • {pkg.days}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-stone-900">
                  {pkg.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {pkg.description}
                </p>

                <div className="mt-6 flex justify-end">
                  <Button size="sm" className="rounded-full px-4">
                    Explore Package
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!filteredPackages.length && (
          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-orange-100 bg-white/85 px-6 py-20 text-center text-muted-foreground shadow-sm">
            No packages match your search. Try adjusting your filters.
          </div>
        )}
      </section>
    </main>
  );
}
