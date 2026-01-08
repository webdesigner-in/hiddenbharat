import { useMemo, useState } from "react";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------------- MOCK DATA ---------------- */
const STORIES = [
  {
    id: 1,
    title: "Finding Silence in the Himalayas",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    excerpt:
      "In a remote Himalayan village, silence becomes a companion and time slows down.",
    votes: 124,
    trending: true,
  },
  {
    id: 2,
    title: "Why Slow Travel Matters",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    excerpt:
      "Travel isn’t about ticking destinations — it’s about staying long enough to feel a place.",
    votes: 98,
    trending: true,
  },
  {
    id: 3,
    title: "A Walk Through Forgotten Forts",
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
    excerpt:
      "Some forts are quiet, forgotten — yet they whisper stories of the past.",
    votes: 76,
    trending: false,
  },
  {
    id: 4,
    title: "Living With Locals Changed My Journey",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    excerpt:
      "Staying with locals taught me more than any itinerary ever could.",
    votes: 54,
    trending: false,
  },
  {
    id: 5,
    title: "Mountains That Heal",
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5",
    excerpt:
      "Cold winds, high altitudes, and a clarity you don’t find elsewhere.",
    votes: 61,
    trending: false,
  },
  {
    id: 6,
    title: "The Art of Staying Longer",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    excerpt:
      "Slow travel begins when you stop rushing experiences.",
    votes: 33,
    trending: false,
  },
];

/* ---------------- PAGE ---------------- */
export default function Stories() {
  const [stories, setStories] = useState(STORIES);
  const [visibleCount, setVisibleCount] = useState(4);

  const trending = useMemo(
    () => stories.filter((s) => s.trending),
    [stories]
  );

  const heroStory = trending[0];
  const secondaryTrending = trending.slice(1);

  function vote(id, type) {
    setStories((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, votes: type === "up" ? s.votes + 1 : s.votes - 1 }
          : s
      )
    );
  }

  return (
    <main className="relative overflow-hidden">
      {/* ---------- PREMIUM BACKGROUND ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-300/20 blur-[120px]" />
      </div>

      {/* ---------- HEADER ---------- */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Stories from the Road
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Journeys, reflections, and moments that stay long after the road ends.
          </p>
        </div>
      </section>

      {/* ---------- HERO STORY ---------- */}
      {heroStory && (
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-[60vh] overflow-hidden rounded-3xl">
              <img
                src={heroStory.image}
                alt={heroStory.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
                <span className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-xs text-primary-foreground">
                  Trending Story
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                  {heroStory.title}
                </h2>
                <p className="mt-4 text-sm text-white/80">
                  {heroStory.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-6">
                  <VoteUI className={" text-white"} story={heroStory} onVote={vote} />
                  <Button>Read Story</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- SECONDARY TRENDING ---------- */}
      {secondaryTrending.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {secondaryTrending.map((story) => (
                <article
                  key={story.id}
                  className="group overflow-hidden rounded-2xl border bg-background/70 backdrop-blur"
                >
                  <div className="relative h-64">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {story.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <VoteUI  story={story} onVote={vote} />
                      <Button variant="link">Read →</Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- STORY JOURNAL ---------- */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-semibold">
            More Stories
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, visibleCount).map((story) => (
              <article key={story.id}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="mb-4 h-52 w-full rounded-xl object-cover"
                />
                <h3 className="text-lg font-semibold">
                  {story.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {story.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <VoteUI story={story} onVote={vote} />
                  <Button variant="link">Read →</Button>
                </div>
              </article>
            ))}
          </div>

          {visibleCount < stories.length && (
            <div className="mt-16 text-center">
              <Button
                variant="secondary"
                onClick={() => setVisibleCount((c) => c + 3)}
              >
                Load More Stories
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* ---------------- VOTE UI (SUBTLE) ---------------- */
function VoteUI({ story, onVote ,className }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => onVote(story.id, "up")}
        className={`rounded-full border p-1 hover:bg-muted bg-white`}
      >
        <ArrowBigUp size={16} />
      </button>
      <span className={`font-medium ${className}`}>{story.votes}</span>
      <button
        onClick={() => onVote(story.id, "down")}
        className={`rounded-full border p-1 hover:bg-muted  bg-white`}
      >
        <ArrowBigDown size={16} />
      </button>
    </div>
  );
}
