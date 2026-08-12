import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/site";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "./motion";

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="The Process"
        title="How It Works"
        subtitle="A simple, guided path from first conversation to delivered gifts."
      />
      <motion.ol
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mt-14 lg:mt-20 max-w-[92rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
      >
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-reve-terracotta/30"
        />
        {PROCESS_STEPS.map((s) => (
          <motion.li
            key={s.number}
            variants={fadeUp}
            className="relative lg:flex lg:flex-col lg:items-center lg:text-center"
          >
            <span className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-reve-ivory border border-reve-terracotta/40 font-heading text-base font-semibold text-reve-terracotta">
              {s.number}
            </span>
            <h3 className="mt-6 font-heading text-xl font-semibold text-reve-charcoal">{s.title}</h3>
            <p className="mt-2.5 text-sm text-reve-brown leading-relaxed max-w-xs lg:mx-auto">{s.text}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}