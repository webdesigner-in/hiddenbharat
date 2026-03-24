import { Compass, MapPinned, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const highlights = [
  "Curated escapes beyond crowded tourist circuits",
  "Slow travel experiences rooted in story and culture",
  "Thoughtful routes that feel premium on every screen",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/35 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-10 top-28 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-orange-500/15 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-medium text-orange-700 shadow-sm backdrop-blur">
            <Sparkles className="size-4" />
            Hidden journeys. Real India. Better travel stories.
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Travel India through
            <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-700 bg-clip-text text-transparent">
              hidden places worth feeling
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg lg:mx-0">
            HiddenBharat helps curious travelers discover quieter destinations,
            soulful local experiences, and journeys that feel personal instead
            of packaged.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/destinations" className="inline-flex items-center gap-2">
                Explore Destinations
                <Compass className="size-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link to="/stories">Read Travel Stories</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur"
              >
                <p className="text-sm font-medium leading-6 text-foreground/90">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(160deg,rgba(255,247,237,0.96),rgba(255,255,255,0.92))] p-4 shadow-[0_20px_70px_rgba(180,83,9,0.18)] sm:p-5">
            <div className="rounded-[1.6rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.22),transparent_55%),linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-orange-700/80">
                    Featured Mood
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-stone-900 sm:text-3xl">
                    Dawn in Ziro
                  </h2>
                </div>
                <div className="rounded-2xl bg-white/90 p-3 shadow-sm">
                  <MapPinned className="size-6 text-orange-600" />
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-stone-600 sm:text-base">
                Mist over valley farms, local homestays, and a slower pace that
                lets the journey breathe.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/90 p-3 text-center shadow-sm">
                  <p className="text-lg font-semibold text-stone-900">48+</p>
                  <p className="text-xs text-stone-500">Curated spots</p>
                </div>
                <div className="rounded-2xl bg-white/90 p-3 text-center shadow-sm">
                  <p className="text-lg font-semibold text-stone-900">12</p>
                  <p className="text-xs text-stone-500">States mapped</p>
                </div>
                <div className="rounded-2xl bg-white/90 p-3 text-center shadow-sm">
                  <p className="text-lg font-semibold text-stone-900">100%</p>
                  <p className="text-xs text-stone-500">Story-first</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-orange-100 bg-white/85 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-orange-700/75">
                    Why travelers stay
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    Less checklist tourism, more meaningful moments with the
                    landscape and people.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200/80 bg-stone-950 p-4 text-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-orange-300">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Couples, slow travelers, creators, and explorers seeking
                    underrated India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
