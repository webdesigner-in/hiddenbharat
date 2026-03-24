import { useEffect, useMemo, useState } from "react";
import { MapPinOff, Search, Sparkles } from "lucide-react";

import PlaceCarousel from "@/components/Destinations/PlaceCrousel";
import { getAllDestinations } from "@/services/destination.service";
import { cn } from "@/lib/utils";

const TAGS = [
  "all",
  "nature",
  "culture",
  "spiritual",
  "beach",
  "mountains",
  "heritage",
];

function EmptyState({ query }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[2rem] border border-orange-100 bg-white/85 px-6 py-20 text-center shadow-sm">
      <MapPinOff className="mb-4 h-10 w-10 text-muted-foreground" />
      <h3 className="text-lg font-semibold text-stone-900">No destinations found</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {query
          ? `We couldn't find any destinations matching "${query}".`
          : "No destinations are available for the current filter."}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Try a different search or switch categories.
      </p>
    </div>
  );
}

function Section({ title, description, data, query }) {
  if (!data.length) {
    return <EmptyState query={query} />;
  }

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-semibold text-stone-900">{title}</h2>
        <p className="mb-6 max-w-xl text-sm leading-7 text-muted-foreground">
          {description}
        </p>
        <PlaceCarousel data={data} />
      </div>
    </section>
  );
}

export default function Destinations() {
  const [all, setAll] = useState([]);
  const [activeTag, setActiveTag] = useState("all");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getAllDestinations();
      setAll(data);
      setLoading(false);
    }
    load();
  }, []);

  const filteredDestinations = useMemo(() => {
    let result = all;

    if (activeTag !== "all") {
      result = result.filter((d) =>
        d.tags?.map((t) => t.toLowerCase()).includes(activeTag)
      );
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((d) =>
        [d.name, d.state, d.region, d.description].join(" ").toLowerCase().includes(q)
      );
    }

    return result;
  }, [all, activeTag, query]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading destinations...
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden pb-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-200/35 blur-3xl" />
      </div>

      <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.96))] p-6 shadow-sm sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
            <Sparkles className="size-4" />
            Curated across India
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Discover hidden destinations that reward slower travel
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Browse places chosen for atmosphere, story, and local texture instead
            of tourist rush.
          </p>

          <div className="mt-8 space-y-4">
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search destinations, states, regions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-orange-100 bg-white pl-11 pr-4 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition",
                    activeTag === tag
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-orange-100 bg-white text-muted-foreground hover:bg-orange-50"
                  )}
                >
                  {tag === "all"
                    ? "All"
                    : tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        title={
          query
            ? `Search results for "${query}"`
            : activeTag === "all"
              ? "Explore all destinations"
              : `${activeTag.charAt(0).toUpperCase() + activeTag.slice(1)} destinations`
        }
        description={
          query
            ? `${filteredDestinations.length} destinations found`
            : activeTag === "all"
              ? "Browse all available destinations"
              : `Destinations tagged with ${activeTag}`
        }
        data={filteredDestinations}
        query={query}
      />
    </main>
  );
}
