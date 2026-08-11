import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/data/site";
import Button from "./Button";
import { fadeUp, stagger } from "./motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-[80vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Premium corporate gift hamper with wireless earbuds, dry fruits and chocolates in an ivory gift box"
          className="w-full h-full object-cover object-[65%_center] sm:object-center"
        />
      </div>

      {/* Readability scrim — vertical on mobile (stacked/centered text), horizontal on desktop (left-aligned text) */}
      <div className="absolute inset-0 bg-gradient-to-t from-reve-charcoal/75 via-reve-charcoal/35 to-reve-charcoal/10 lg:bg-gradient-to-r lg:from-reve-charcoal/75 lg:via-reve-charcoal/35 lg:to-transparent" />

      {/* Content */}
      <motion.div
        variants={stagger(0.08, 0.15)}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-14 py-28 lg:py-0 text-center lg:text-left"
      >
        <div className="max-w-2xl mx-auto lg:mx-0">
          <motion.p variants={fadeUp} className="eyebrow mb-6 text-reve-peach">
            Corporate Gifting, Reimagined
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading font-semibold text-white text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-[5.25rem]"
          >
            Thoughtful Gifts.
            <br />
            <span className="text-reve-peach">Lasting Impressions.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-lg mx-auto lg:mx-0 text-white/85 text-base sm:text-lg leading-relaxed"
          >
            Premium technology and lifestyle gifts designed for employees, clients
            and the moments that matter.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button as="a" href="#quote">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Button>
            <Button as="a" href="#gifts" variant="outline" className="border-white/70 text-white">
              Explore Gifting
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}