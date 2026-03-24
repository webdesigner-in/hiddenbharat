import { CheckCircle2, Sparkles } from "lucide-react";

const data = [
  "Carefully researched, less-crowded destinations",
  "Trips shaped around pace, season, and comfort",
  "No tourist-trap fluff or forced luxury",
  "Honest guidance from inspiration to planning",
];

function Points() {
  return (
    <ul className="mt-6 space-y-4">
      {data.map((point) => (
        <li
          key={point}
          className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white/80 px-4 py-4 text-sm text-stone-700 shadow-sm"
        >
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange-600" />
          <span className="leading-6">{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WhyUs() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="relative order-2 flex justify-center lg:order-1">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-orange-200/50 blur-3xl sm:h-80 sm:w-80" />
          </div>

       
            <img
              src="/whytochooseus.svg"
              alt="Why choose HiddenBharat"
              className="relative z-10 w-full max-w-xl"
            />
    
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
            <Sparkles className="size-4" />
            Why travelers choose us
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Better journeys come from better travel decisions
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
            HiddenBharat is designed for people who want India to feel deeper,
            calmer, and more memorable than another checklist itinerary.
          </p>
          <Points />
        </div>
      </div>
    </section>
  );
}
