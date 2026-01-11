import { useEffect, useState } from "react";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllStories, getTrendingStories } from "@/services/stories.service";
import { Link } from "react-router-dom";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [trending, setTrending] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [all, top] = await Promise.all([
        getAllStories(30),
        getTrendingStories(3),
      ]);
      setStories(all);
      setTrending(top);
      setLoading(false);
    }
    load();
  }, []);

  function voteLocal(id, type) {
    setStories((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, votes: type === "up" ? s.votes + 1 : s.votes - 1 }
          : s
      )
    );
  }

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading stories…
      </div>
    );
  }

  const hero = trending[0];
  const secondaryTrending = trending.slice(1);

  return (
    <main className="relative overflow-hidden">
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-orange-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-amber-300/20 blur-[120px]" />
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Stories from the Road
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Journeys, reflections, and moments that stay long after the road
            ends.
          </p>
        </div>
      </section>

      {/* Hero Trending */}
      {hero && (
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-[60vh] overflow-hidden rounded-3xl">
              <img
                src={hero.image}
                alt={hero.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-0 left-0 p-10 max-w-2xl">
                <span className="rounded-full bg-primary px-4 py-1 text-xs text-primary-foreground">
                  Trending Story
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  {hero.title}
                </h2>
                <p className="mt-4 text-white/80">{hero.excerpt}</p>

                <div className="mt-6 flex items-center gap-6">
                  <VoteUI story={hero} onVote={voteLocal} />

                  <Button>Read Story</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Secondary Trending */}
      {secondaryTrending.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
            {secondaryTrending.map((story) => (
              <StoryCard key={story.id} story={story} onVote={voteLocal} />
            ))}
          </div>
        </section>
      )}

      {/* All Stories */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-2xl font-semibold">More Stories</h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, visibleCount).map((story) => (
              <StoryJournalCard
                key={story.id}
                story={story}
                onVote={voteLocal}
              />
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

/* ---------------- UI COMPONENTS ---------------- */

function StoryCard({ story, onVote }) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-background/70 backdrop-blur">
      <div className="relative h-64">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{story.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{story.excerpt}</p>
        <div className="mt-6 flex items-center justify-between">
          <VoteUI story={story} onVote={onVote} />
          <Link to={story.slug}>
            <Button variant="link">Read →</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

function StoryJournalCard({ story, onVote }) {
  return (
    <article>
      <img
        src={story.image}
        alt={story.title}
        className="mb-4 h-52 w-full rounded-xl object-cover"
      />
      <h3 className="text-lg font-semibold">{story.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{story.excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <VoteUI story={story} onVote={onVote} />
        <Link to={`/stories/${story.slug}`}>
          <Button variant="link">Read →</Button>
        </Link>
      </div>
    </article>
  );
}

function VoteUI({ story, onVote }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => onVote(story.id, "up")}
        className="rounded-full border p-1 hover:bg-muted"
      >
        <ArrowBigUp size={16} />
      </button>
      <span className="font-medium">{story.votes}</span>
      <button
        onClick={() => onVote(story.id, "down")}
        className="rounded-full border p-1 hover:bg-muted"
      >
        <ArrowBigDown size={16} />
      </button>
    </div>
  );
}
