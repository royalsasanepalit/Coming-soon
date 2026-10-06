import clouds from "@/assets/newcloud.png";
import heroImage from "@/assets/factory.png";
import Image from "next/image";
import { HeroCarousel } from "./HeroCarousel";
import { HeroHeader } from "./HeroHeader";

export const Hero = () => {
  return (
    <section className="relative min-h-[115svh] overflow-hidden bg-[#1176C2] sm:min-h-[125svh] lg:min-h-[180svh]">
      <Image
        src={clouds}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover lg:object-contain ani-image hero-clouds"
      />
      <Image
        src={heroImage}
        alt="Royal Sasa factory"
        priority
        sizes="(max-width: 639px) 145vw, (max-width: 1023px) 115vw, 100vw"
        className="absolute bottom-0 left-1/2 z-10 h-auto w-[145vw] max-w-none -translate-x-1/2 sm:w-[115vw] lg:left-0 lg:w-full lg:translate-x-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[15] bg-black/10"
      />
      <HeroCarousel />
      <div className="relative z-20 top-28 sm:top-40">
        <HeroHeader />
      </div>
    </section>
  );
};
