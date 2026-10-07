import Image from "next/image";
import clouds from "@/assets/newcloud.png";
import { HeroHeader } from "./_components/Hero/HeroHeader";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1176C2] ">
      <div className="absolute inset-0 top-50 z-10 ">
        <Image
          src={clouds}
          alt=""
          priority
          className="object-cover ani-image hero-clouds w-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[15] bg-black/10"
      />

      <div className="relative z-20 top-28 sm:top-40">
        <HeroHeader />
      </div>
    </section>
  );
}
