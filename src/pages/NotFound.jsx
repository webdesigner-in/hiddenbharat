import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-semibold md:text-6xl">
          Oops, you’re off the map
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          The page you’re looking for doesn’t exist or may have moved.
          Let’s get you back on track.
        </p>

        {/* Illustration */}
        <div className="mx-auto my-10 max-w-sm md:max-w-md">
          <img
            src="/NotFound.svg"
            alt="Page not found"
            className="w-full object-contain"
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link to="/">
            <Button
              variant="secondary"
              className="flex items-center gap-2 px-6 py-5 text-sm"
            >
              <MoveLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
