import PlaceCarousel from "@/components/Destinations/PlaceCrousel";
import { hiddenPlaces } from "@/data";

function Section({ title, subtitle, data, tone = "default" }) {
  return (
    <section
      className={`py-16 ${
        tone === "warm"
          ? "bg-primary/5"
          : tone === "soft"
          ? "bg-muted/40"
          : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <PlaceCarousel data={data} />
      </div>
    </section>
  );
}

export default function Destinations() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="max-w-3xl text-4xl font-semibold md:text-6xl">
            Discover places
            <br />
            beyond the usual routes
          </h1>

          <p className="mt-6 max-w-xl text-muted-foreground">
            Thoughtfully curated destinations across India — chosen for
            calmness, culture, and authenticity.
          </p>
        </div>
      </section>

      {/* MOST LOVED */}
      <Section
        title="Most Loved by Travelers"
        subtitle="Destinations that travelers consistently connect with and recommend."
        data={hiddenPlaces.slice(0, 6)}
        tone="warm"
      />

      {/* HIDDEN GEMS */}
      <Section
        title="Hidden Gems of India"
        subtitle="Less crowded, culturally rich places you won’t find on typical travel lists."
        data={hiddenPlaces.slice(2, 8)}
      />

      {/* PACKAGES */}
      <Section
        title="Thoughtfully Designed Trips"
        subtitle="Curated journeys that balance comfort, discovery, and pace."
        data={hiddenPlaces.slice(1, 7)}
        tone="soft"
      />
    </main>
  );
}
