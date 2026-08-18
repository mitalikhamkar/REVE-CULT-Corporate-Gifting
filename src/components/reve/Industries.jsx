import React from "react";
import { motion } from "framer-motion";
import { Users, Handshake, UserPlus, Sparkles, CalendarDays, Award, ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { fadeUp, stagger, viewport } from "./motion";

const icons = { Users, Handshake, UserPlus, Sparkles, CalendarDays, Award };

export default function Industries() {
  return (
    <section id="corporate" className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Corporate Gifting"
        title="Made for Every Team"
        subtitle="Gifting programmes shaped around the people and moments that matter to your business."
      />
      <motion.div
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 max-w-[92rem] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {INDUSTRIES.map((i) => {
          const Icon = icons[i.icon];
          return (
            <motion.div
              key={i.label}
              variants={fadeUp}
              className="group rounded-[1.5rem] bg-white border border-reve-border/70 p-6 sm:p-8 transition-all duration-300 hover:border-reve-terracotta/50 hover:-translate-y-1"
            >
              <Icon className="w-6 h-6 text-reve-terracotta transition-transform duration-300 group-hover:scale-110" strokeWidth={1.3} />
              <p className="mt-5 font-heading text-lg sm:text-xl font-semibold text-reve-charcoal leading-snug">
                {i.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 flex justify-center"
      >
        <Button as="a" href="#quote">
          Request a Corporate Gifting Quote <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </section>
  );
}