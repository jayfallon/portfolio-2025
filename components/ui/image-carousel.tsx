"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  priority?: boolean;
}

export function ImageCarousel({ images, priority = false }: ImageCarouselProps) {
  if (images.length === 1) {
    return (
      <Image
        src={images[0].src}
        alt={images[0].alt}
        width={1200}
        height={675}
        className="rounded-lg border border-slate-700/50"
        {...(priority ? { priority: true } : {})}
      />
    );
  }

  return <Carousel images={images} priority={priority} />;
}

function Carousel({ images, priority }: { images: CarouselImage[]; priority: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      tabIndex={0}
    >
      <div className="overflow-hidden rounded-lg border border-slate-700/50" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={675}
                className="w-full h-auto"
                {...(priority && index === 0 ? { priority: true } : {})}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-slate-200 transition hover:bg-slate-900/80 hover:text-teal-300",
          !canScrollPrev && "opacity-0 pointer-events-none"
        )}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-slate-200 transition hover:bg-slate-900/80 hover:text-teal-300",
          !canScrollNext && "opacity-0 pointer-events-none"
        )}
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition",
              index === selectedIndex ? "bg-teal-300" : "bg-slate-600 hover:bg-slate-500"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
