import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PlaceCard({place}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {place.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold">{place.name}</h3>
        <p className="text-sm text-muted-foreground">{place.location}</p>

        {/* Description */}
        <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
          {place.description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-primary">
            {place.duration}
          </span>

          <Button size="sm">Explore Now</Button>
        </div>
      </div>
    </div>
  );
}
