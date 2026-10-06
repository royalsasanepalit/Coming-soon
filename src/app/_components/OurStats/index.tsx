"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, Globe2 } from "lucide-react";
import { Counter } from "@/components/motion";
import { Container } from "@/components/ui";
import { statistics } from "@/data/site";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger, useGSAP);

export const OurStats = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    {
      icon: BookOpen,
      title: "Practical skills that matter",
      text: "Learn tax, PAN, banking, billing and bookkeeping for real work.",
      tone: "rose",
    },
    {
      icon: Globe2,
      title: "A national platform",
      text: "Connect with learners and compete through opportunities across Nepal.",
      tone: "lime",
    },
    {
      icon: Award,
      title: "Pathways with purpose",
      text: "Earn recognition and access professional CA or ACCA scholarship routes.",
      tone: "violet",
    },
  ] as const;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set("[data-stats-card]", { clearProps: "all" });
        return;
      }

      const centerCard = "[data-stats-card='center']";
      const leftCard = "[data-stats-card='left']";
      const rightCard = "[data-stats-card='right']";

      gsap.set([leftCard, rightCard, centerCard], {
        opacity: 0,
        willChange: "transform, opacity",
      });
      gsap.set(centerCard, { zIndex: 3 });
      gsap.set([leftCard, rightCard], { zIndex: 1 });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "10% top",
            end: "+=900",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
          },
        });

        timeline
          .fromTo(
            centerCard,
            { y: 140, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45 }
          )
          .fromTo(
            leftCard,
            { xPercent: 106, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.55 },
            ">0.1"
          )
          .fromTo(
            rightCard,
            { xPercent: -106, opacity: 0 },
            { xPercent: 0, opacity: 1, duration: 0.55 },
            "<"
          );
      });

      mm.add("(max-width: 900px)", () => {
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        });

        timeline
          .fromTo(
            centerCard,
            { y: 90, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45 }
          )
          .fromTo(
            [leftCard, rightCard],
            { y: 44, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0 },
            ">0.05"
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="our-stats-section page-container">
      <Container className="our-stats-container">
        <div className="title">
          <h2>
            Practical learning opens doors,
            <br />
            creates confidence, and builds brighter futures.
          </h2>
        </div>

        <div className="our-stats-highlights">
          {highlights.map(({ icon: Icon, title, text, tone }, index) => (
            <article
              className={`our-stats-card our-stats-card-${tone}`}
              data-stats-card={
                index === 0 ? "left" : index === 1 ? "center" : "right"
              }
              key={title}
            >
              <Icon className="our-stats-icon" size={48} strokeWidth={1.5} />
              <div className="our-stats-card-copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
