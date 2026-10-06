"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const heroSlides = [
  {
    tagline: "Trusted Healthcare Partner",
    title: "Innovating For A Healthier Tomorrow",
    description:
      "Royal Sasa Nepal Pharmaceuticals is committed to producing high-quality, affordable medicines that improve lives across communities.",
    buttonText: "Read More",
  },
  {
    tagline: "Quality You Can Rely On",
    title: "Excellence In Every Dose",
    description:
      "With advanced facilities and strict quality control, we ensure every product meets international pharmaceutical standards.",
    buttonText: "Read More",
  },
  {
    tagline: "Serving Nepal And Beyond",
    title: "Expanding Healthcare Horizons",
    description:
      "We strive to make essential medicines accessible nationwide while building a stronger, healthier Nepal.",
    buttonText: "Read More",
  },
];

export function HeroCarousel() {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 6500, playOnInit: false, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      autoplay.play();
    }

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [autoplay, emblaApi]);

  return (
    <div className="absolute bottom-12 left-[3%] z-20 w-[min(1040px,94%)] sm:bottom-[6%]">
      <div
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Royal Sasa highlights"
        className="overflow-hidden"
      >
        <div className="flex touch-pan-y" aria-live="off">
          {heroSlides.map((slide) => (
            <article
              key={slide.title}
              role="group"
              aria-roledescription="slide"
              aria-label={slide.title}
              className="min-w-0 flex-[0_0_100%] pb-2"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white drop-shadow-md sm:text-sm">
                {slide.tagline}
              </p>
              <h1 className="mt-3 w-full text-[clamp(2rem,4.7vw,3.75rem)] font-bold leading-[1] tracking-[-0.055em] text-white drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="mt-4 w-full text-sm leading-relaxed text-white drop-shadow-md sm:text-base">
                {slide.description}
              </p>
              <a
                href="#about"
                className="mt-5 inline-flex items-center gap-3 rounded-lg bg-[#064bff] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003dd8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {slide.buttonText}
                <span aria-hidden="true" className="text-xl leading-none">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-3 flex gap-1.5">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`size-8 rounded-full border p-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              selectedIndex === index
                ? "border-white"
                : "border-white/60 hover:border-white"
            }`}
          >
            <span
              className={`block size-full rounded-full ${
                selectedIndex === index ? "bg-[#064bff]" : "bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
