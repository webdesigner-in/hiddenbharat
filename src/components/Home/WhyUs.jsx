import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Why Travelers Choose HiddenBharat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Not because we offer more options —
            but because we remove the confusion.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-16">
          <StoryBlock
            label="THE USUAL PROBLEM"
            title="Planning travel feels overwhelming"
            description="Too many destinations. Conflicting advice. Tourist traps disguised as must-see places. Travel planning often becomes stressful before the journey even begins."
          />

          <StoryBlock
            label="OUR APPROACH"
            title="We simplify travel decisions"
            description="HiddenBharat curates destinations through real research, filters out overcrowded routes, and designs trips around how people actually like to travel — calmly and meaningfully."
            highlight
          />

          <StoryBlock
            label="WHAT YOU EXPERIENCE"
            title="Travel that feels intentional"
            description="You move at the right pace, visit places with depth, and experience destinations without pressure, rush, or unnecessary luxury."
          />
        </div>

        {/* CENTERED IMAGE (PERFECTLY ALIGNED) */}
        <div className="my-24 flex justify-center">
          <img
            src="/whytochooseus.svg"
            alt="Why choose HiddenBharat"
            className="w-full max-w-md opacity-90"
          />
        </div>

        {/* Key Differentiators */}
        <div className="grid gap-10 md:grid-cols-3">
          <Point
            title="Less Crowded Places"
            text="We focus on destinations that feel calm, authentic, and worth your time."
          />
          <Point
            title="Personalized Planning"
            text="Every itinerary is shaped around your interests, comfort, and season."
          />
          <Point
            title="Honest Guidance"
            text="No upselling. No false urgency. Just clear, research-driven advice."
          />
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Button size="lg">Start Planning Your Trip</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function StoryBlock({ label, title, description, highlight }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-2 text-sm font-semibold tracking-wide text-primary">
        {label}
      </p>
      <h3 className={`text-2xl font-medium ${highlight ? "text-primary" : ""}`}>
        {title}
      </h3>
      <p className="mt-3 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function Point({ title, text }) {
  return (
    <div>
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground">
        {text}
      </p>
    </div>
  );
}
