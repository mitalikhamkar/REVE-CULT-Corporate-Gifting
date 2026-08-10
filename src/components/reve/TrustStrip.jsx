import React from "react";
import { motion } from "framer-motion";
import { Gem, PenTool, Building2, ShieldCheck } from "lucide-react";
import { TRUST_ITEMS } from "@/data/site";
import { fadeUp, stagger, viewport } from "./motion";

const icons = { Gem, PenTool, Building2, ShieldCheck };

export default function TrustStrip() {
  return (
    <section className="px-5 sm:px-8 lg:px-14">
      <motion.ul
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-[92rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 border-y border-reve-border py-8 sm:py-10"
      >
        {TRUST_ITEMS.map((item) => {
          const Icon = icons[item.icon];
          return (
            <motion.li
              key={item.label}
              variants={fadeUp}
              className="flex items-center justify-center gap-3 text-center"
            >
              <Icon className="w-5 h-5 text-reve-terracotta shrink-0" strokeWidth={1.4} />
              <span className="text-[13px] sm:text-sm font-medium uppercase tracking-[0.12em] text-reve-charcoal">
                {item.label}
              </span>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}