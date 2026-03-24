import { useEffect, useState } from "react";
import { ArrowBigDown, ArrowBigUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { getAllStories, getTrendingStories } from "@/services/stories.service";

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
      prev.map((story) =>
        story.id === id
          ? { ...story, votes: type === "up" ? story.votes + 1 : story.votes - 1 }
          : story
      )
    );
    setTrending((prev) =>
      prev.map((story) =>
        story.id === id
          ? { ...story, votes: type === "up" ? story.votes + 1 : story.votes - 1 }
          : story
      )
    );
  }

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading stories...
      </div>
    );
  }

  const hero = trending[0];
  const secondaryTrending = trending.slice(1);

  return (
    <main className="relative overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-orange-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-[120px]" />
      </div>

      <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700">
            <Sparkles className="size-4" />
            Stories from slower roads
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Journeys, reflections, and moments that stay with you
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Explore travel stories shaped by place, feeling, and the quieter
            side of discovery across India.
          </p>
        </div>
      </section>

      {hero && (
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={hero.image}
                alt={hero.title}
                className="h-[24rem] w-full object-cover sm:h-[28rem] lg:h-[34rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:max-w-3xl lg:p-10">
                <span className="rounded-full bg-primary px-4 py-1.5 text-xs text-primary-foreground">
                  Trending Story
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                  {hero.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                  {hero.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <VoteUI story={hero} onVote={voteLocal} dark />
                  <Button asChild className="rounded-full">
                    <Link to={`/stories/${hero.slug}`}>Read Story</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {secondaryTrending.length > 0 && (
        <section className="px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {secondaryTrending.map((story) => (
              <StoryCard key={story.id} story={story} onVote={voteLocal} />
            ))}
          </div>
        </section>
      )}

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl font-semibold text-stone-900">
            More stories
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {stories.slice(0, visibleCount).map((story) => (
              <StoryJournalCard key={story.id} story={story} onVote={voteLocal} />
            ))}
          </div>

          {visibleCount < stories.length && (
            <div className="mt-14 text-center">
              <Button
                variant="secondary"
                className="rounded-full"
                onClick={() => setVisibleCount((count) => count + 3)}
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

function StoryCard({ story, onVote }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-orange-100/80 bg-white/90 shadow-sm">
      <div className="relative h-72">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/15 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900">{story.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{story.excerpt}</p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <VoteUI story={story} onVote={onVote} />
          <Button asChild variant="link" className="px-0">
            <Link to={`/stories/${story.slug}`}>Read story</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function StoryJournalCard({ story, onVote }) {
  return (
    <article className="rounded-[1.75rem] border border-orange-100/80 bg-white/90 p-4 shadow-sm sm:p-5">
      <img
        src={story.image}
        alt={story.title}
        className="mb-4 h-56 w-full rounded-[1.25rem] object-cover"
      />
      <h3 className="text-lg font-semibold text-stone-900">{story.title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{story.excerpt}</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <VoteUI story={story} onVote={onVote} />
        <Button asChild variant="link" className="px-0">
          <Link to={`/stories/${story.slug}`}>Read story</Link>
        </Button>
      </div>
    </article>
  );
}

function VoteUI({ story, onVote, dark = false }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => onVote(story.id, "up")}
        className={
          dark
            ? "rounded-full border border-white/30 p-1.5 text-white transition hover:bg-white/10"
            : "rounded-full border border-orange-100 p-1.5 text-stone-700 transition hover:bg-orange-50"
        }
      >
        <ArrowBigUp size={16} />
      </button>
      <span className={dark ? "font-medium text-white" : "font-medium text-stone-900"}>
        {story.votes}
      </span>
      <button
        onClick={() => onVote(story.id, "down")}
        className={
          dark
            ? "rounded-full border border-white/30 p-1.5 text-white transition hover:bg-white/10"
            : "rounded-full border border-orange-100 p-1.5 text-stone-700 transition hover:bg-orange-50"
        }
      >
        <ArrowBigDown size={16} />
      </button>
    </div>
  );
}
