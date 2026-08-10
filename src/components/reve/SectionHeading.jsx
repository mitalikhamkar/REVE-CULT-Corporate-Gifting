import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, stagger, viewport } from "./motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className }) {
  return (
    <motion.div
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="eyebrow mb-4">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-heading text-reve-charcoal text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem] font-semibold"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-5 text-reve-brown text-base sm:text-lg leading-relaxed",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}