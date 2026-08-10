import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { fadeUp } from "./motion";

export default function ProductCard({ product }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group shrink-0 w-[70vw] sm:w-auto snap-start bg-white rounded-[1.5rem] border border-reve-border/70 overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[0_24px_48px_-32px_rgba(138,90,74,0.5)]"
    >
      <div className="relative bg-reve-peachcream/60 overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.16em] bg-white/90 text-reve-brown px-3 py-1.5 rounded-full">
          {product.feature}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-semibold text-reve-charcoal leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-reve-brown leading-relaxed flex-1">
          {product.description}
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-reve-terracotta">
          Enquire for Corporate Pricing
        </p>
        <a
          href="#quote"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-reve-charcoal hover:text-reve-terracotta transition-colors"
        >
          Enquire Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}