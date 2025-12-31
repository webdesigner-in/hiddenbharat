"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PlaceCard from "./PlaceCard";
import { mustVisitPlaces } from "@/data";
import { useRef } from "react";

export default function MustVisitCarousel() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Section Header */}
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2
            className="
    text-2xl font-semibold tracking-tight
    md:text-4xl
  "
          >
            Must Visit Places
          </h2>

          <p
            className="
    mx-auto mt-3 max-w-2xl
    text-sm text-muted-foreground
    md:text-base
  "
          >
            Handpicked destinations worth your time and attention.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true, // REQUIRED for smooth autoplay
            direction: "ltr", // LEFT → RIGHT (IMPORTANT)
          }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {mustVisitPlaces.map((place) => (
              <CarouselItem
                key={place.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <PlaceCard place={place} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
