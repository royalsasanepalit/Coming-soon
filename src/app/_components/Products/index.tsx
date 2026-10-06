"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Pause, Play } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

// Names and dosage form are from Royal Sasa Nepal's published product catalogue.
const products = [
  { name: "ALLERZINE", monogram: "A", accent: "#83b7ff" },
  { name: "Karnamol", monogram: "K", accent: "#95dcda" },
  { name: "Merokast L", monogram: "M", accent: "#c7b8fa" },
  { name: "ROSAPAN DSR", monogram: "R", accent: "#a7c8ef" },
  { name: "ODIPAN 40", monogram: "O", accent: "#f0c39f" },
];

export function Products() {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 4800, playOnInit: false, stopOnInteraction: false }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true },
    [autoplay],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onPlay = () => setIsPlaying(true);
    const onStop = () => setIsPlaying(false);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("autoplay:play", onPlay);
    emblaApi.on("autoplay:stop", onStop);
    onSelect();

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      autoplay.play();
    }

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("autoplay:play", onPlay);
      emblaApi.off("autoplay:stop", onStop);
    };
  }, [emblaApi, autoplay]);

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="overflow-hidden bg-[#1b1b1e] px-5 py-10 font-sans text-white sm:px-8 md:py-14 lg:px-12"
    >
      <SectionHeader
        id="products-heading"
        tag="Our products"
        title="Made with precision."
        subTitle="Selected tablet brands from Royal Sasa Nepal Pharmaceuticals."
        tone="dark"
      />

      <div className="mx-auto max-w-7xl">
        <div
          ref={emblaRef}
          className="relative overflow-hidden before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[clamp(64px,8vw,140px)] before:backdrop-blur-[2px] before:bg-[linear-gradient(to_right,#1b1b1e_0%,#1b1b1e_10%,rgba(27,27,30,0.9)_35%,rgba(27,27,30,0.55)_65%,rgba(27,27,30,0.2)_84%,transparent_100%)] before:content-[''] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-[clamp(64px,8vw,140px)] after:backdrop-blur-[2px] after:bg-[linear-gradient(to_left,#1b1b1e_0%,#1b1b1e_10%,rgba(27,27,30,0.9)_35%,rgba(27,27,30,0.55)_65%,rgba(27,27,30,0.2)_84%,transparent_100%)] after:content-['']"
          role="region"
          aria-roledescription="carousel"
          aria-label="Royal Sasa products"
        >
          <div
            className="flex touch-pan-y"
            aria-live={isPlaying ? "off" : "polite"}
          >
            {products.map((product, index) => (
              <div
                key={product.name}
                className="min-w-0 flex-[0_0_88%] px-2 sm:flex-[0_0_76%] lg:flex-[0_0_760px]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${products.length}: ${product.name}`}
              >
                <article
                  className="relative h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090b0f] p-7 sm:h-[390px] sm:p-10 lg:p-12"
                  style={{
                    background: `radial-gradient(circle at 76% 50%, ${product.accent}24, transparent 42%), #090b0f`,
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 grid w-[60%] place-items-center"
                    aria-hidden="true"
                  >
                    <div className="absolute size-[240px] rounded-full border border-white/10 sm:size-[300px]" />
                    <div className="absolute size-[175px] rounded-full border border-white/10 sm:size-[220px]" />
                    <span
                      className="relative text-[clamp(10rem,21vw,17rem)] font-semibold leading-none tracking-[-0.12em] opacity-75"
                      style={{ color: product.accent }}
                    >
                      {product.monogram}
                    </span>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090b0f] via-[#090b0f]/85 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="relative flex h-full max-w-md flex-col justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                      {String(index + 1).padStart(2, "0")} / Tablet
                    </p>
                    <div>
                      <h3 className="text-[clamp(2.3rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
                        {product.name}
                      </h3>
                    </div>
                    <div
                      className="h-px w-16"
                      style={{ backgroundColor: product.accent }}
                    />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3">
            {products.map((product, index) => (
              <button
                key={product.name}
                type="button"
                aria-label={`Show ${product.name}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                  selectedIndex === index
                    ? "w-7 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            onClick={() => (isPlaying ? autoplay.stop() : autoplay.play())}
            className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {isPlaying ? (
              <Pause size={17} fill="currentColor" />
            ) : (
              <Play size={17} fill="currentColor" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
