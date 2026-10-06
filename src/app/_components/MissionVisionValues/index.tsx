"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import qualityImage from "@/assets/services/quality_control.jpg";
import formulationImage from "@/assets/services/formulation_development.jpg";
import manufacturingImage from "@/assets/services/contract_manifacuring.jpg";

const cards = [
  {
    title: "Our Mission",
    description:
      "To improve the health and well-being of communities by manufacturing and delivering high-quality, affordable medicines through ethical and sustainable practices.",
    src: qualityImage,
    alt: "Pharmaceutical quality testing",
    color: "#2867B2",
  },
  {
    title: "Our Vision",
    description:
      "To be a leading pharmaceutical company in Nepal recognized for innovation, affordability, and uncompromised quality.",
    src: formulationImage,
    alt: "Pharmaceutical research and formulation development",
    color: "#2867B2",
  },
  {
    title: "Our Values",
    description:
      "At Royal Sasa Nepal Pharmaceuticals, we are committed to adhering to Good Manufacturing Practices (GMP), Maintaining strict quality control at every production stage, Continuously improving processes and products, Meeting national and international regulatory standards and Ensuring customer satisfaction through safety, efficacy, and reliability.",
    src: manufacturingImage,
    alt: "Pharmaceutical manufacturing operations",
    color: "#2867B2",
  },
];

export function MissionVisionValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      id="mission-vision-values"
      aria-labelledby="mission-vision-values-heading"
      className="relative isolate bg-[#f3f8fc] px-5 pt-10 font-sans text-[#10263d] sm:px-8 md:pt-14 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          id="mission-vision-values-heading"
          tag="Our Code of conduct"
          title="Guided by purpose."
          subTitle="Our mission, vision, and values shape the care behind every medicine we make."
        />
        <div>
          {cards.map((card, index) => {
            const i = index;
            return (
              <Card
                key={card.title}
                {...card}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={1 - (cards.length - index - 1) * 0.045}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
