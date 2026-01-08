import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------------- MOCK DATA (REPLACE WITH APPWRITE LATER) ---------------- */
const PACKAGES = [
  {
    id: 1,
    title: "Himalayan Slow Escape",
    description:
      "A mindful journey through quiet Himalayan villages, forest trails, and slow-paced mountain life.",
    days: "3–8 days",
    theme: "Mountains",
    images: [
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5",
      "https://images.unsplash.com/photo-1548013146-72479768bada",
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    ],
  },
  {
    id: 2,
    title: "Coastal Calm Getaway",
    description:
      "Secluded beaches, coastal villages, and peaceful sunsets away from tourist crowds.",
    days: "4–7 days",
    theme: "Beach",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
  },
  {
    id: 3,
    title: "Hidden Heritage Trail",
    description:
      "Lesser-known forts, historic towns, and stories rooted deep in Indian heritage.",
    days: "3–6 days",
    theme: "Heritage",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      "https://images.unsplash.com/photo-1617469165786-8007eda3caa7",
      "https://images.unsplash.com/photo-1588096344356-9b497f03a08a",
    ],
  },
];

/* ---------------- FILTERS ---------------- */
const THEMES = ["all", "mountains", "beach", "heritage"];

/* ---------------- PAGE ---------------- */
export default function Packages() {
  const [query, setQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("all");

  /* ---------------- SEARCH + FILTER ---------------- */
  const filteredPackages = useMemo(() => {
    let result = PACKAGES;

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
  }, [query, activeTheme]);

  return (
    <main className="relative overflow-hidden">
      {/* ---------- DUSTY PREMIUM BACKGROUND ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-orange-400/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-amber-300/20 blur-[120px]" />
      </div>

      {/* ---------- HEADER ---------- */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Curated Travel Packages
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Thoughtfully designed journeys that adapt to your pace, interests,
            and time.
          </p>
        </div>
      </section>

      {/* ---------- SEARCH + FILTER ---------- */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search packages, themes, experiences…"
              className="w-full rounded-full border bg-background/70 pl-10 pr-4 py-2 text-sm backdrop-blur focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Theme Filter */}
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
                {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PACKAGES GRID ---------- */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group overflow-hidden rounded-2xl border bg-background/70 backdrop-blur transition hover:shadow-xl"
            >
              {/* IMAGE GRID */}
              <div className="grid grid-cols-2 grid-rows-2 h-56 overflow-hidden">
                {pkg.images.slice(0, 4).map((img, i) => (
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

                <h3 className="mt-2 text-xl font-semibold">{pkg.title}</h3>

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
