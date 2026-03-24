import { MapPin, Mountain, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PlaceCard({ place }) {
  return (
    <article className="  overflow-hidden rounded-[1.75rem] border border-orange-100/70 bg-white/90 shadow-sm transition">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

        

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
          <div>
            <h3 className="text-xl font-semibold">{place.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-white/80">
              <MapPin className="size-4" />
              {place.region}, {place.state}
            </p>
          </div>

         
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {place.tags.slice(0, 3).map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="rounded-full bg-orange-50 px-3 py-1 text-orange-700"
            >
              {cat}
            </Badge>
          ))}
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {place.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-orange-700/70">
              Ideal stay
            </p>
            <span className="text-sm font-semibold text-stone-900">
              {place.duration}
            </span>
          </div>
          <Button size="sm" className="rounded-full px-4">
            Explore Now
          </Button>
        </div>
      </div>
    </article>
  );
}
