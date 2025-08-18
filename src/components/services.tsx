"use client";

import { C } from "@/constants/services";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ServiceCard from "./service-card";

export default function Services() {
  const targetRef = useRef(null);

  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollY, "change", () => {
    console.log("Scroll Y:", scrollY.get());
  });

  const cardTimeline = C.services.map((_, i) => {
    const start = 500 + i * window.innerHeight;
    const end = 500 + (i + 1) * window.innerHeight;

    return [start, end];
  });

  const timeline = [[0, 500], ...cardTimeline];

  const animation = timeline.map((data) => ({
    scale: useTransform(scrollY, data, [1, 0.8]),
    opacity: useTransform(scrollY, data, [1, 0]),
  }));

  return (
    <section className="mt-20 flex flex-col gap-20 border border-red p-20" ref={targetRef}>
      <motion.div
        className="sticky top-0"
        style={{ scale: animation[0].scale, opacity: animation[0].opacity }}
      >
        <p className="text-8xl uppercase font-bold">Nossos</p>
        <p className="text-8xl uppercase ml-25">Serviços</p>
      </motion.div>

      {C.services.map((service, index) => (
        <motion.div
          style={{ scale: animation[index + 1].scale, opacity: animation[index + 1].opacity }}
          key={service.id}
          className="p-20 bg-white shadow-md flex justify-between items-center rounded-lg sticky top-0 h-dvh"
        >
          <ServiceCard
            index={index}
            title={service.title}
            description={service.description}
            scrollY={scrollY}
            vh={window.innerHeight}
          />
        </motion.div>
      ))}
    </section>
  );
}
