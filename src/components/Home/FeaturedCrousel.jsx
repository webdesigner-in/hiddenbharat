"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PlaceCard from "./PlaceCard";
import { getFeaturedDestination } from "@/services/destination.service";
import { useEffect, useRef, useState } from "react";

export default function MustVisitCarousel() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const autoplayRef = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    async function loadFeatured() {
      setLoading(true);
      const data = await getFeaturedDestination();
      setFeatured(data);
      setLoading(false);
    }

    loadFeatured();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        Loading featured destinations…
      </section>
    );
  }

  if (!featured.length) return null;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Must Visit Places
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Handpicked destinations worth your time and attention.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true, // REQUIRED for smooth autoplay
              direction: "ltr", // LEFT → RIGHT (IMPORTANT)
            }}
            plugins={[autoplayRef.current]}
            className="w-full"
          >
            <CarouselContent className="gap-4">
              {featured.map((place) => (
                <CarouselItem
                  key={place.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <PlaceCard place={place} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
