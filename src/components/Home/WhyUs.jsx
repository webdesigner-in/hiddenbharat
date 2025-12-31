import { CheckCircle } from "lucide-react";

const data = [
  "Carefully researched, less-crowded destinations",
  "Trips planned around pace, season, and comfort",
  "No tourist traps or unnecessary luxury",
  "Honest guidance from start to finish",
];

const Points = () => {
  return (
    <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
      {data.map((p, index) => (
        <div key={index} className="flex gap-2">
          <CheckCircle className="text-green-800" size={16}/> <li>{p}</li>
        </div>
      ))}
    </ul>
  );
};

export default function WhyUs() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: CONTENT */}
          <div>
            <h2 className="text-2xl  font-semibold md:text-5xl">
              Why choose HiddenBharat
            </h2>

            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Travel doesn’t need more options. It needs better decisions.
            </p>
            <Points />
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative flex justify-center">
            {/* Subtle blur background */}
            <div className="absolute inset-0 flex justify-center">
              <div className="h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            </div>

            <img
              src="/whytochooseus.svg"
              alt="Why choose HiddenBharat"
              className="relative z-10 w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
