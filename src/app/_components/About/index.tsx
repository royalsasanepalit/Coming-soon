import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import factoryImage from "@/assets/gallery/IMG_3332.webp";

import { AboutStats } from "./about-stats";
import { Container } from "@/components/ui";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutUs() {
  return (
    <section
      id="about"
      aria-labelledby="about-us-heading"
      className="relative z-20 scroll-mt-24 bg-[#2867b2] px-5 pb-10 pt-28 font-sans text-white sm:px-8 sm:pb-14 sm:pt-36 lg:px-12"
    >
      <Container className="relative z-10">
        <SectionHeader
          id="about-us-heading"
          tag="About Royal Sasa Nepal"
          title="WHO-GMP certified company"
          subTitle="We make quality, affordable medicines that help communities live healthier lives."
          tone="dark"
        />

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:gap-14">
          <div
            data-scroll-reveal
            className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#eaf4fb] sm:min-h-[400px] lg:min-h-[510px]"
          >
            <Image
              src={factoryImage}
              alt="Royal Sasa Nepal pharmaceutical manufacturing facility"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-bottom"
            />
          </div>
          <div
            data-scroll-reveal
            className="flex flex-col justify-center gap-10 lg:py-2"
          >
            <AboutStats />
          </div>
        </div>
      </Container>
    </section>
  );
}
