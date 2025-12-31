import { Badge } from "@/components/ui/badge";

export default function HowWeWork() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            How HiddenBharat Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            A simple, thoughtful approach to discovering and planning meaningful
            travel across India.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-4">
          <Step
            step="01"
            title="Discover Hidden Places"
            description="Explore carefully researched destinations beyond crowded tourist routes."
          />

          <Step
            step="02"
            title="Filter What Fits You"
            description="Choose based on season, pace, comfort, and travel intent — not hype."
          />

          <Step
            step="03"
            title="Plan Thoughtfully"
            description="We help shape realistic itineraries around your time and interests."
          />

          <Step
            step="04"
            title="Travel With Confidence"
            description="Clear guidance, honest recommendations, and calm travel experiences."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Component ---------- */

function Step({ step, title, description }) {
  return (
    <div className="rounded-xl border bg-background p-5">
      <Badge variant="secondary" className="mb-3">
        Step {step}
      </Badge>

      <h3 className="text-sm font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
