"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
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
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  if (images.length === 1) {
    return (
      <>
        <button
          onClick={() => setModalIndex(0)}
          className="group/zoom relative block w-full cursor-zoom-in"
          aria-label="View full size"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={2254}
            height={1393}
            className="rounded-lg border border-slate-700/50"
            {...(priority ? { priority: true } : {})}
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-900/0 transition group-hover/zoom:bg-slate-900/30">
            <ZoomIn className="h-8 w-8 text-white opacity-0 transition group-hover/zoom:opacity-100" />
          </div>
        </button>
        {modalIndex !== null && (
          <LightboxModal
            images={images}
            initialIndex={modalIndex}
            onClose={() => setModalIndex(null)}
          />
        )}
      </>
    );
  }

  return (
    <Carousel
      images={images}
      priority={priority}
      onImageClick={(index) => setModalIndex(index)}
      modalIndex={modalIndex}
      onModalClose={() => setModalIndex(null)}
    />
  );
}

function Carousel({
  images,
  priority,
  onImageClick,
  modalIndex,
  onModalClose,
}: {
  images: CarouselImage[];
  priority: boolean;
  onImageClick: (index: number) => void;
  modalIndex: number | null;
  onModalClose: () => void;
}) {
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
              <button
                onClick={() => onImageClick(index)}
                className="group/zoom relative block w-full cursor-zoom-in"
                aria-label={`View ${image.alt} full size`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={2254}
                  height={1393}
                  className="w-full h-auto"
                  {...(priority && index === 0 ? { priority: true } : {})}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition group-hover/zoom:bg-slate-900/30">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 transition group-hover/zoom:opacity-100" />
                </div>
              </button>
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

      {modalIndex !== null && (
        <LightboxModal
          images={images}
          initialIndex={modalIndex}
          onClose={onModalClose}
        />
      )}
    </div>
  );
}

function LightboxModal({
  images,
  initialIndex,
  onClose,
}: {
  images: CarouselImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) setCurrentIndex((i) => i - 1);
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) setCurrentIndex((i) => i + 1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, currentIndex, images.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-slate-800/80 p-2 text-slate-300 transition hover:bg-slate-700 hover:text-white"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={2254}
          height={1393}
          className="max-h-[90vh] w-auto rounded-lg object-contain"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((i) => i - 1);
            }}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/80 p-3 text-slate-200 transition hover:bg-slate-700 hover:text-teal-300",
              currentIndex === 0 && "opacity-0 pointer-events-none"
            )}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((i) => i + 1);
            }}
            disabled={currentIndex === images.length - 1}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/80 p-3 text-slate-200 transition hover:bg-slate-700 hover:text-teal-300",
              currentIndex === images.length - 1 && "opacity-0 pointer-events-none"
            )}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  index === currentIndex ? "bg-teal-300" : "bg-slate-500 hover:bg-slate-400"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-slate-400">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}
