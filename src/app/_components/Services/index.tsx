import Image from "next/image";
import formulationDevelopment from "@/assets/services/formulation_development.jpg";
import contractManufacturing from "@/assets/services/contract_manifacuring.jpg";
import qualityControl from "@/assets/services/quality_control.jpg";
import regulatorySupport from "@/assets/services/regulatory_support.jpg";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    title: "Formulation Development",
    description:
      "We specialize in safe, effective medicine development using advanced pharmaceutical research and formulation techniques.",
    image: formulationDevelopment,
  },
  {
    title: "Contract Manufacturing",
    description:
      "We offer reliable, GMP-compliant manufacturing services for domestic and international pharmaceutical companies.",
    image: contractManufacturing,
  },
  {
    title: "Quality Control & Assurance",
    description:
      "Strict testing ensures every product meets national and international pharmaceutical quality and safety standards.",
    image: qualityControl,
  },
  {
    title: "Regulatory Support",
    description:
      "We assist with document preparation, approvals, and compliance to meet all regulatory and export requirements.",
    image: regulatorySupport,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white pt-20 font-sans md:pt-28"
    >
      <div className="px-5 sm:px-8 lg:px-12">
        <SectionHeader
          id="services-heading"
          tag="Our services"
          title="Expertise at every step."
          subTitle="From formulation to manufacturing and quality assurance, our work supports dependable medicines."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service, index) => (
        <article
          key={service.title}
          data-scroll-reveal
          className="relative isolate flex aspect-[3/4] overflow-hidden bg-black"
        >
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
            className="z-0 object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black/65" aria-hidden="true" />

          <div className="relative z-20 px-[7vw] pt-[max(6.5vh,6rem)] text-white sm:px-[4vw] xl:px-[3.6vw]">
            <span
              aria-hidden="true"
              className="flex size-12 items-center justify-center rounded-full border border-dotted border-white/60 text-base font-normal"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-8 text-[clamp(1.3rem,1.6vw,2rem)] font-normal leading-[1.2] tracking-[-0.025em] text-white">
              {service.title}
            </h2>
            <p className="mt-6 max-w-[34ch] text-[clamp(1rem,1.2vw,1.5rem)] font-normal leading-[1.35] tracking-[-0.025em] text-white/90">
              {service.description}
            </p>
          </div>
        </article>
      ))}
      </div>
    </section>
  );
}
