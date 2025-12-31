import { useEffect, useState } from "react";
import PlaceCarousel from "@/components/Destinations/PlaceCrousel";
import {
  getAllDestinations,
  getFeaturedDestination,
  getByTag,
} from "@/services/destination.service";

function Section({ title, description, data }) {
  if (!data.length) return null;

  return (
    <section className="py-16">
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

export default function Destinations() {
  const [all, setAll] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [nature, setNature] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const [a, f, n] = await Promise.all([
        getAllDestinations(),
        getFeaturedDestination(),
        getByTag("Nature"),
      ]);

      setAll(a);
      setFeatured(f);
      setNature(n);

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading destinations…
      </div>
    );
  }

  return (
    <main>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold">Destinations</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Discover handpicked destinations across India.
          </p>
        </div>
      </section>

      <Section
        title="Nature & Landscapes"
        description="Mountains, valleys, beaches and forests"
        data={nature}
      />

      <Section
        title="Explore All Destinations"
        description="Browse all available destinations"
        data={all}
      />
    </main>
  );
}
