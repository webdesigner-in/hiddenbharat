"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlaceCard from "../Home/PlaceCard";

export default function PlaceCarousel({ data }) {
  if (!data?.length) return null;

  return (
    <div className="relative group overflow-hidden">
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselPrevious
          className="z-20 left-2 md:left-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
        />

        <CarouselNext
          className="z-20 right-2 md:right-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
        />

        <CarouselContent className="gap-4">
          {data.map((place) => (
            <CarouselItem
              key={place.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
            >
              <PlaceCard place={place} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
