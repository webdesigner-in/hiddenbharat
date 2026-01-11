import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAllPackages } from "@/services/packages.service";

/* ---------- THEMES ---------- */
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

  /* ---------- SEARCH + FILTER ---------- */
  const filteredPackages = useMemo(() => {
    let result = packages;

    if (activeTheme !== "all") {
      result = result.filter(
        (p) => p.theme.toLowerCase() === activeTheme
      );
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((p) =>
        [p.title, p.description, p.theme]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    return result;
  }, [packages, query, activeTheme]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading packages…
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden">
      {/* ---------- PREMIUM BACKGROUND ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-orange-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-amber-300/20 blur-[140px]" />
      </div>

      {/* ---------- HEADER ---------- */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Curated Travel Packages
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Journeys designed to adapt to your pace, not rush it.
          </p>
        </div>
      </section>

      {/* ---------- SEARCH + FILTER ---------- */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search packages, experiences, themes…"
              className="w-full rounded-full border bg-background/70 pl-10 pr-4 py-2 text-sm backdrop-blur focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {THEMES.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTheme(t)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition backdrop-blur",
                  activeTheme === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/70 text-muted-foreground hover:bg-muted"
                )}
              >
                {t === "all"
                  ? "All"
                  : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PACKAGES GRID ---------- */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group overflow-hidden rounded-2xl border bg-background/70 backdrop-blur transition hover:shadow-xl"
            >
              {/* IMAGE GRID */}
              <div className="h-56 overflow-hidden">
                {pkg.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={pkg.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ))}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-xs text-muted-foreground">
                  {pkg.theme} • {pkg.days}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {pkg.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {pkg.description}
                </p>

                <div className="mt-6 flex justify-end">
                  <Button size="sm">Explore Package</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {!filteredPackages.length && (
          <div className="py-24 text-center text-muted-foreground">
            No packages match your search. Try adjusting filters.
          </div>
        )}
      </section>
    </main>
  );
}