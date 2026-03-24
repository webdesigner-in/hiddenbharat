import { Badge } from "@/components/ui/badge";

const steps = [
  {
    step: "01",
    title: "Discover hidden places",
    description:
      "Explore carefully researched destinations beyond crowded tourist routes.",
  },
  {
    step: "02",
    title: "Filter what fits you",
    description:
      "Choose based on season, pace, comfort, and travel intent instead of hype.",
  },
  {
    step: "03",
    title: "Plan thoughtfully",
    description:
      "Shape realistic journeys around your time, energy, and interests.",
  },
  {
    step: "04",
    title: "Travel with confidence",
    description:
      "Get clearer recommendations, calmer choices, and better stories afterward.",
  },
];

export default function HowWeWork() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            A calmer way to plan meaningful travel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            HiddenBharat keeps discovery simple, useful, and inspiring whether
            you browse on a phone or plan from a laptop.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <Step key={item.step} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ step, title, description }) {
  return (
    <article className="rounded-[1.75rem] border border-orange-100/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Badge
        variant="secondary"
        className="mb-4 rounded-full bg-orange-50 px-3 py-1 text-orange-700"
      >
        Step {step}
      </Badge>

      <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}
