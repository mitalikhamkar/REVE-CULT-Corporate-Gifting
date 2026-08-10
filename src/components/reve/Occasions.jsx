import React from "react";
import { motion } from "framer-motion";
import { OCCASIONS } from "@/data/site";
import SectionHeading from "./SectionHeading";
import OccasionCard from "./OccasionCard";
import { stagger, viewport } from "./motion";

export default function Occasions() {
  return (
    <section id="occasions" className="py-20 lg:py-32">
      <div className="px-5 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="Occasions"
          title="Gifts for Every Occasion"
          subtitle="From festive celebrations to everyday appreciation, create gifting moments your people remember."
        />
      </div>

      <motion.div
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 lg:mt-16 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 sm:overflow-visible sm:px-8 lg:px-14 max-w-[92rem] mx-auto"
      >
        {OCCASIONS.map((o) => (
          <OccasionCard key={o.id} occasion={o} />
        ))}
      </motion.div>
    </section>
  );
}