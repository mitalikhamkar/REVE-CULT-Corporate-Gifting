import React from "react";
import { motion } from "framer-motion";
import { Gem, PenTool, Truck, ShieldCheck, Headset, Users } from "lucide-react";
import { BENEFITS } from "@/data/site";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger, viewport } from "./motion";

const icons = { Gem, PenTool, Truck, ShieldCheck, Headset, Users };

export default function WhyReveCult() {
  return (
    <section id="why" className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14 bg-white/60">
      <SectionHeading eyebrow="Why REVE CULT" title="Thoughtful Beyond Compare." />
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 lg:mt-20 max-w-[92rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12"
      >
        {BENEFITS.map((b) => {
          const Icon = icons[b.icon];
          return (
            <motion.div key={b.title} variants={fadeUp}>
              <Icon className="w-7 h-7 text-reve-terracotta" strokeWidth={1.3} />
              <h3 className="mt-5 font-heading text-xl font-semibold text-reve-charcoal">{b.title}</h3>
              <p className="mt-2.5 text-sm text-reve-brown leading-relaxed">{b.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}