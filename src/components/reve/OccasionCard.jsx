import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { fadeUp } from "./motion";

export default function OccasionCard({ occasion }) {
  return (
    <motion.a
      variants={fadeUp}
      href="#quote"
      className="group relative block shrink-0 w-[78vw] sm:w-auto snap-start overflow-hidden rounded-[1.75rem] bg-white"
      aria-label={`${occasion.title} — request a quote`}
    >
      <div className="relative overflow-hidden rounded-[1.75rem]">
        <Image
          src={occasion.image}
          alt={occasion.alt}
          loading="lazy"
          className="w-full h-[22rem] lg:h-[26rem] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-reve-charcoal/70 via-reve-charcoal/10 to-transparent" />
        <div className="absolute inset-0 bg-reve-terracotta/0 group-hover:bg-reve-terracotta/20 transition-colors duration-500" />
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
          <div className="transition-transform duration-500 group-hover:-translate-y-1">
            <h3 className="font-heading text-2xl lg:text-[1.75rem] font-semibold text-white">
              {occasion.title}
            </h3>
            <p className="mt-1.5 text-sm text-white/85 leading-relaxed max-w-[22rem]">
              {occasion.subtitle}
            </p>
          </div>
        </div>
        <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 text-reve-terracotta flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </motion.a>
  );
}