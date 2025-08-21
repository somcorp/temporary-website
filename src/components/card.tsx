"use client";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  color: string;
  title: string;
  description: string;
  index: number;
  progress: any; // Adjust type as needed
  range: [number, number];
  targetScale: number;
}

export function Card({
  index,
  color,
  title,
  description,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={`h-screen flex items-center justify-center sticky top-0`}>
      <motion.div
        className="w-[1000px] h-[500px] relative top-[-10%] rounded-3xl p-12"
        style={{ scale, backgroundColor: color, top: `calc(-5vh + ${index * 25}px)` }}
      >
        {/* <h1 className="text-center text-2xl m-0">{title}</h1> */}

        <div className="flex h-full  gap-12">
          {/* <div className="text-lg relative w-[40%] top-[10%]">
            <div>{description}</div>
          </div> */}
          <div className="relative w-[100%] h-full rounded-3xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image fill src="/teste.jpeg" alt={title} className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
