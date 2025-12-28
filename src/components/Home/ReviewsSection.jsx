"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/data";

export default function ReviewsSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What Travelers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Honest experiences from people who traveled with HiddenBharat.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
