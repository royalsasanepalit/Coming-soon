"use client";

import { useEffect, useRef, useState } from "react";
import { RollingNumber } from "@kitlangton/rolling-number/react";

const stats = [
  { value: 100, suffix: "+", label: "Distribution partners" },
  { value: 7, suffix: "", label: "Total departments" },
  { value: 300, suffix: "+", label: "Team members" },
  { value: 50, suffix: "+", label: "Medical products" },
  { value: 3, suffix: "+", label: "Branch offices throughout the country" },
  { value: 50, suffix: "+", label: "Medical products" },
];

export function AboutStats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="grid grid-cols-2 gap-x-6 gap-y-7 pt-6 sm:gap-x-8"
    >
      {stats.map(({ value, suffix, label }) => (
        <div key={label} className="flex flex-col">
          <p className="text-[clamp(2.6rem,4vw,4rem)] font-semibold leading-none tracking-[-0.07em] text-white">
            <RollingNumber value={isVisible ? value : 0} duration={1100} />
            {suffix}
          </p>
          <p className="mt-2 max-w-[16ch] text-[11px] font-semibold uppercase leading-snug tracking-[0.1em] text-white/75">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
