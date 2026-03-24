import { Quote, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewCard({ review }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <article className="h-full rounded-[1.75rem] border border-orange-100/80 bg-white/85 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-orange-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="size-4 fill-current" />
          ))}
        </div>
        <div className="rounded-full bg-orange-50 p-2 text-orange-600">
          <Quote className="size-4" />
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-stone-600">"{review.text}"</p>

      <div className="mt-6 flex items-center gap-4">
        <Avatar className="h-11 w-11 border border-orange-100">
          <AvatarImage src={review.avatar} alt={review.name} />
          <AvatarFallback className="bg-orange-50 text-orange-700">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium leading-none text-stone-900">{review.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{review.location}</p>
        </div>
      </div>
    </article>
  );
}
