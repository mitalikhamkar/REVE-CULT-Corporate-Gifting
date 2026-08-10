import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/site";
import Button from "./Button";
import { fadeUp, stagger, viewport } from "./motion";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 px-5 sm:px-8 lg:px-14 bg-gradient-to-b from-reve-peach/60 via-reve-peachcream/70 to-reve-ivory">
      <motion.div
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-[2.25rem] sm:text-5xl lg:text-[3.75rem] leading-[1.08] font-semibold text-reve-charcoal"
        >
          Make Your Next Gift Memorable.
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 text-reve-brown text-base sm:text-lg leading-relaxed">
          From one thoughtful gesture to a complete corporate gifting program,
          we're here to help.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="a" href="#quote">Request a Quote</Button>
          <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="light">
            <MessageCircle className="w-4 h-4" /> Talk on WhatsApp
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}