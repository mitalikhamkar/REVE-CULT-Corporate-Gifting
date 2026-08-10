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
      className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32 px-5 sm:px-8 lg:px-14"
    >
      <div className="pointer-events-none absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-reve-peach/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[28rem] h-[28rem] rounded-full bg-reve-peachcream/70 blur-3xl" />

      <div className="relative max-w-[92rem] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
        <motion.div variants={stagger(0.08, 0.15)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            Corporate Gifting, Reimagined
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading font-semibold text-reve-charcoal text-[2.75rem] leading-[1.06] sm:text-6xl lg:text-[5.25rem]"
          >
            Thoughtful Gifts.
            <br />
            <span className="text-reve-terracotta">Lasting Impressions.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-lg text-reve-brown text-base sm:text-lg leading-relaxed"
          >
            Premium technology and lifestyle gifts designed for employees, clients
            and the moments that matter.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button as="a" href="#quote">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Button>
            <Button as="a" href="#gifts" variant="outline">
              Explore Gifting
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-[0_40px_80px_-40px_rgba(138,90,74,0.45)]">
            <Image
              src={IMAGES.hero}
              alt="Premium corporate gift hamper with wireless earbuds, dry fruits and chocolates in an ivory gift box"
              className="w-full h-[22rem] sm:h-[28rem] lg:h-[34rem] object-cover"
            />
          </div>
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-reve-peach/70 blur-[2px]"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 right-8 w-16 h-16 rounded-full border border-reve-terracotta/40"
          />
        </motion.div>
      </div>
    </section>
  );
}