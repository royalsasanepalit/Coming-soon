import royalSasa from "@/assets/logo/logo-white.svg";
import Image from "next/image";

export const HeroHeader = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 sm:gap-8">
      <Image
        src={royalSasa}
        alt="Royal Sasa"
        width={116}
        height={119}
        className="h-auto w-[88px] sm:w-[455px]"
      />
      <div className="flex items-center gap-2 font-bahnschrift text-[clamp(16px,3.5vw,2.7084vw)] font-bold text-[#F8FBFD] uppercase">
        <h2>Coming Soon</h2>
      </div>
    </div>
  );
};
