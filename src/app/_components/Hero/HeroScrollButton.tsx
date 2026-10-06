"use client";

import { ArrowDown, Mouse } from "lucide-react";

export function HeroScrollButton() {
  return (
    <button
      type="button"
      aria-label="Scroll to About section"
      onClick={() =>
        document.getElementById("about")?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        })
      }
      className="absolute top-[calc(100svh-5rem)] left-1/2 z-30 -translate-x-1/2 rounded-full p-3 flex flex-col items-center text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:animate-bounce motion-reduce:animate-none"
    >
      Explore <ArrowDown className="size-4" />
    </button>
  );
}
