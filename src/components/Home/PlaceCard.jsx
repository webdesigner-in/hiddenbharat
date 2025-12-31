import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PlaceCard({ place }) {
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
        {/* Categories */}
        <div className="mb-2 flex flex-wrap gap-2">
          {place.categories.slice(0, 3).map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold">{place.name}</h3>
        <p className="text-sm text-muted-foreground">
          {place.region}, {place.state}
        </p>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
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
