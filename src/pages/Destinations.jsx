import { useEffect, useMemo, useState } from "react";
import { Search, MapPinOff } from "lucide-react";

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

/* ---------------- Empty State ---------------- */
function EmptyState({ query, tag }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <MapPinOff className="mb-4 h-10 w-10 text-muted-foreground" />

      <h3 className="text-lg font-semibold">No destinations found</h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {query
          ? `We couldn’t find any destinations matching “${query}”.`
          : `No destinations available for the selected filter.`}
      </p>

      <p className="mt-1 text-sm text-muted-foreground">
        Try adjusting your search or selecting a different category.
      </p>
    </div>
  );
}

/* ---------------- Section ---------------- */
function Section({ title, description, data, query, tag }) {
  if (!data.length) {
    return <EmptyState query={query} tag={tag} />;
  }

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
        <p className="mb-6 max-w-xl text-sm text-muted-foreground">
          {description}
        </p>
        <PlaceCarousel data={data} />
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
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

  /* ---------------- Filter + Search Logic ---------------- */
  const filteredDestinations = useMemo(() => {
    let result = all;

    // Tag filter (tags are lowercase in DB)
    if (activeTag !== "all") {
      result = result.filter((d) =>
        d.tags?.map((t) => t.toLowerCase()).includes(activeTag)
      );
    }

    // Search filter
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter((d) =>
        [d.name, d.state, d.region, d.description]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    return result;
  }, [all, activeTag, query]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading destinations…
      </div>
    );
  }

  return (
    <main>
      {/* ---------- HEADER ---------- */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold">Destinations</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Discover handpicked destinations across India.
          </p>
        </div>
      </section>

      {/* ---------- SEARCH + FILTER ---------- */}
      <section className="pb-6">
        <div className="mx-auto max-w-7xl px-6 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search destinations, states, regions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                w-full rounded-full border
                bg-background pl-10 pr-4 py-2 text-sm
                outline-none
                focus:ring-2 focus:ring-primary/20
              "
            />
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition",
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted"
                )}
              >
                {tag === "all"
                  ? "All"
                  : tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <Section
        title={
          query
            ? `Search results for “${query}”`
            : activeTag === "all"
            ? "Explore All Destinations"
            : `${
                activeTag.charAt(0).toUpperCase() + activeTag.slice(1)
              } Destinations`
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
        tag={activeTag}
      />
    </main>
  );
}
