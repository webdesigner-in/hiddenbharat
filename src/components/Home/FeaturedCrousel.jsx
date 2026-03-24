"use client";

import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Compass, Sparkles } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PlaceCard from "./PlaceCard";
import { getFeaturedDestination } from "@/services/destination.service";

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
      <section className="px-4 py-16 text-center text-muted-foreground sm:px-6 lg:px-8">
        Loading featured destinations...
      </section>
    );
  }

  if (!featured.length) return null;

  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(180deg,rgba(255,247,237,0.85),rgba(255,255,255,0.95))] px-5 py-12 shadow-sm sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
              <Sparkles className="size-4" />
              Featured this season
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              Destinations travelers remember long after the trip
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
              Handpicked places for curious travelers seeking quieter routes,
              stronger local character, and a more intentional pace.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/80 px-4 py-2 text-sm text-stone-700">
            <Compass className="size-4 text-orange-600" />
            Built for mobile discovery too
          </div>
        </div>

        <div className="relative overflow-hidden px-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "ltr",
            }}
            plugins={[autoplayRef.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featured.map((place) => (
            <CarouselItem
              key={place.id}
              className="pl-4 pr-0 pb-8 basis-full sm:basis-1/2 lg:basis-1/3"
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
