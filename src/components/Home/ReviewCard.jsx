import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewCard({ review }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="h-full rounded-2xl border bg-card p-6">
      {/* Review text */}
      <p className="text-muted-foreground leading-relaxed">
        “{review.text}”
      </p>

      {/* User */}
      <div className="mt-6 flex items-center gap-4">
        <Avatar className="h-10 w-10">
          {/* If later you add real images, just pass review.avatar */}
          <AvatarImage src={review.avatar} alt={review.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium leading-none">{review.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {review.location}
          </p>
        </div>
      </div>
    </div>
  );
}
