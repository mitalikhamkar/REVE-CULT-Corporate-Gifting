import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/data/site";
import { fadeUp, stagger, viewport } from "./motion";

export default function AboutReveCult() {
  return (
    <section id="about" className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14">
      <div className="max-w-[92rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="order-2 lg:order-1"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">About REVE CULT</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.1] font-semibold text-reve-charcoal"
          >
            A Women-First Brand, Built on Thoughtful Design.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-reve-brown text-base sm:text-lg leading-relaxed max-w-xl">
            REVE CULT creates premium technology and lifestyle products with a
            women-first perspective — pairing everyday function with considered,
            elegant design. That same sensibility now shapes our corporate
            gifting programme, helping companies give gifts that feel personal
            rather than generic.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] lg:rounded-[3rem] order-1 lg:order-2"
        >
          <Image
            src={IMAGES.branding}
            alt="REVE CULT premium product and packaging detail representing the brand's design identity"
            loading="lazy"
            className="w-full h-[22rem] lg:h-[30rem] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}