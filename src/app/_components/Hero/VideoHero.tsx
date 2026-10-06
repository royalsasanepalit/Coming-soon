import { SectionHeader } from "@/components/SectionHeader";
import { Factory, FlaskConical, PackageCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Research & Development",
    description:
      "Innovative research helps us develop effective, safe, and affordable medicines.",
    icon: FlaskConical,
  },
  {
    title: "Manufacturing & Formulation",
    description:
      "GMP-compliant facilities help us manufacture with precision, consistency, and care.",
    icon: Factory,
  },
  {
    title: "Quality Testing & Assurance",
    description:
      "Rigorous testing helps ensure every product meets quality and safety standards.",
    icon: ShieldCheck,
  },
  {
    title: "Packaging & Distribution",
    description:
      "Secure packaging and dependable distribution help medicines reach healthcare networks.",
    icon: PackageCheck,
  },
];

export function VideoHero() {
  return (
    <>
      <div className="bg-background px-5 pt-10 sm:px-8 md:pt-14 lg:px-12">
        <SectionHeader
          id="services-heading"
          tag="Our Working Process"
          title="A Step-by-Step Commitment to Quality Healthcare"
          subTitle="From research to manufacturing and quality assurance, our work supports dependable medicines."
        />
      </div>
      <section
        aria-labelledby="process-heading"
        className="relative isolate flex min-h-[100vh] min-h-[100svh] items-center justify-center overflow-hidden bg-[#071521] px-5 py-24 font-sans text-white sm:px-8 lg:px-12"
      >
        <video
          className="absolute inset-0 z-0 size-full object-cover"
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-black/20" aria-hidden="true" />
        <div className="relative z-20 mx-auto w-full max-w-7xl">
          <h2 id="process-heading" className="sr-only">
            From research to delivery
          </h2>
          <div className="relative grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-10">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-2 hidden h-28 w-full text-white/55 xl:block"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 60 C135 25 170 100 250 60 S410 18 500 60 S660 102 750 60 S910 20 1000 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="7 9"
              />
            </svg>
            {steps.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                data-scroll-reveal
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex size-24 items-center justify-center rounded-[2rem] border border-white/35 bg-white/10 shadow-lg backdrop-blur-sm sm:size-28">
                  <Icon aria-hidden="true" size={46} strokeWidth={1.5} />
                </div>
                <span className="mt-8 rounded-md border border-white/30 bg-white/10 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                  Step-{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 max-w-[15ch] text-2xl font-semibold leading-tight tracking-[-0.035em] drop-shadow-md">
                  {title}
                </h3>
                <p className="mt-4 max-w-[27ch] text-base leading-relaxed text-white/90 drop-shadow-md">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
