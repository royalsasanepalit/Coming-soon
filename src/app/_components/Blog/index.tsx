import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import formulationImage from "@/assets/gallery/IMG_3332.webp";
import qualityImage from "@/assets/gallery/IMG_3329.webp";
import manufacturingImage from "@/assets/gallery/IMG_3330.webp";
import { SectionHeader } from "@/components/SectionHeader";

export const articles = [
  {
    slug: "holi-with-rsnp",
    category: "Festivals",
    title: "Holi with RSNP meeting",
    description:
      "Celebrating the festival of colors with our team, embracing diversity and unity.",
    image: qualityImage,
    alt: "Royal Sasa team celebration",
    content: "Holi is a time to come together and celebrate the connections that make a team. Sharing the festival of colors brings a sense of warmth and belonging to everyday working relationships.",
  },
  {
    slug: "annual-sales-meeting",
    category: "Meeting",
    title: "Annual sales meeting",
    description:
      "Gathering our sales team to strategize and plan for the upcoming year, ensuring we continue to deliver quality medicines.",
    image: formulationImage,
    alt: "Royal Sasa team gathering",
    content: "A sales meeting creates space to exchange ideas, reflect on shared priorities, and plan the work ahead. Listening to one another helps keep the team connected around a common purpose.",
  },
  {
    slug: "rafting-with-rsnp",
    category: "Inside Royal Sasa",
    title: "Rafting trip with RSNP team",
    description:
      "Team-building adventure on the rapids, strengthening bonds and fostering collaboration.",
    image: manufacturingImage,
    alt: "Royal Sasa team outing",
    content: "Time together outside the workplace offers a different way to connect. Rafting calls for communication and teamwork, with everyone contributing to the journey and sharing the experience.",
  },
];

export function BlogSection() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="bg-white px-5 py-20 font-sans text-[#10263d] sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          id="insights-heading"
          tag="News & insights"
          title="From our world."
          subTitle="Perspectives on medicine, quality, and the work behind healthier communities."
        />

        <div className="mb-8 flex justify-end">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2867b2] underline-offset-4 hover:underline">
            View all stories <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article, index) => (
            <article key={article.title} data-scroll-reveal className="group">
              <div className="relative aspect-[1.42] overflow-hidden rounded-xl bg-[#eaf4fb]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2867b2] backdrop-blur">
                  {article.category}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-[#dce7ef] py-5">
                <div>
                  <p className="text-xs text-[#718395]">
                    0{index + 1} / Insight
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
                    <Link href={`/blog/${article.slug}`} className="underline-offset-4 hover:underline">{article.title}</Link>
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[#52677a]">
                    {article.description}
                  </p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  size={19}
                  className="mt-1 shrink-0 text-[#2867b2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
