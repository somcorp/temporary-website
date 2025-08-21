"use client";

import { Card } from "@/components/card";
import Header from "@/components/header";
import HeroContent from "@/components/hero-content";
import PulsingCircle from "@/components/pulse-circle";
import ShaderBackground from "@/components/shader-background";
import { services } from "@/constants/services";
import Lenis from "lenis";
import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <section ref={containerRef} className="mt-[50vh] mb-[100vh]">
        {services.map((project, index) => {
          const targetScale = 1 - (services.length - index) * 0.05;
          return (
            <Card
              index={index}
              key={index}
              color={project.color}
              title={project.title}
              description={project.description}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </section>
    </>
  );
}
