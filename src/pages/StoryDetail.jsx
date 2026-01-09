import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowBigUp, ArrowBigDown, MoveLeft } from "lucide-react";
import { getStoryBySlug } from "@/services/stories.service";

export default function StoryDetail() {
  const { slug } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getStoryBySlug(slug);
      setStory(data);
      setLoading(false);
    }
    load();
  }, [slug]);

  function voteLocal(type) {
    setStory((prev) =>
      prev
        ? {
            ...prev,
            votes: type === "up" ? prev.votes + 1 : prev.votes - 1,
          }
        : prev
    );
  }

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-muted-foreground">
        Loading story…
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-lg font-semibold">Story not found</p>
        <Link to="/stories" className="mt-4 text-sm text-primary">
          Back to stories
        </Link>
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden">
      {/* ---------- PREMIUM BACKGROUND ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-orange-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-amber-300/20 blur-[120px]" />
      </div>

      {/* ---------- HERO IMAGE ---------- */}
      <section className="relative h-[65vh]">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-0 left-0 w-full">
          <div className="mx-auto max-w-4xl px-6 pb-12">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <MoveLeft size={16} />
              Back to stories
            </Link>

            <h1 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
              {story.title}
            </h1>

            <p className="mt-4 max-w-2xl text-white/80">{story.excerpt}</p>

            {/* Votes */}
            <div className="mt-6 flex items-center gap-4 text-white">
              <VoteUI votes={story.votes} onVote={voteLocal} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STORY CONTENT ---------- */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {story.content?.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

/* ---------- VOTE UI ---------- */
function VoteUI({ votes, onVote }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        onClick={() => onVote("up")}
        className="rounded-full border border-white/30 p-2 hover:bg-white/10"
      >
        <ArrowBigUp size={18} />
      </button>

      <span className="font-medium">{votes}</span>

      <button
        onClick={() => onVote("down")}
        className="rounded-full border border-white/30 p-2 hover:bg-white/10"
      >
        <ArrowBigDown size={18} />
      </button>
    </div>
  );
}
