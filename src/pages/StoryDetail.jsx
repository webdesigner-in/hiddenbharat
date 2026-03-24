import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowBigDown, ArrowBigUp, MoveLeft } from "lucide-react";

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
        Loading story...
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
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-orange-400/18 blur-[140px]" />
      </div>

      <section className="relative">
        <div className="relative h-[55vh] min-h-[24rem] overflow-hidden sm:h-[62vh]">
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/35 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full">
            <div className="mx-auto max-w-5xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
              <Link
                to="/stories"
                className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/18 hover:text-white"
              >
                <MoveLeft size={16} />
                Back to stories
              </Link>

              <h1 className="mt-6 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
                {story.title}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                {story.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-4 text-white">
                <VoteUI votes={story.votes} onVote={voteLocal} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-orange-100/80 bg-white/92 p-6 shadow-sm sm:p-8 lg:p-10">
          <article className="prose prose-neutral max-w-none">
            {story.content?.split("\n\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

function VoteUI({ votes, onVote }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        onClick={() => onVote("up")}
        className="rounded-full border border-white/30 p-2 transition hover:bg-white/10"
      >
        <ArrowBigUp size={18} />
      </button>

      <span className="font-medium">{votes}</span>

      <button
        onClick={() => onVote("down")}
        className="rounded-full border border-white/30 p-2 transition hover:bg-white/10"
      >
        <ArrowBigDown size={18} />
      </button>
    </div>
  );
}
