import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { BRANDING_CHIPS } from "@/data/site";
import { useActiveTheme } from "@/context/ThemeContext";
import Button from "./Button";
import { fadeUp, stagger, viewport } from "./motion";

export default function CustomBranding() {
  const theme = useActiveTheme();

  return (
    <section id="corporate" className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14 bg-white/60">
      <div className="max-w-[92rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] lg:rounded-[3rem]"
        >
          <Image
            src={theme.decorative}
            alt="Close-up of a terracotta vegan-leather pouch and matte ivory gift box showing premium packaging texture"
            loading="lazy"
            className="w-full h-[22rem] lg:h-[32rem] object-cover"
          />
        </motion.div>

        <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="eyebrow mb-4">Make It Yours</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.1] font-semibold text-reve-charcoal"
          >
            Your Brand. Their Moment.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-reve-brown text-base sm:text-lg leading-relaxed max-w-xl">
            Add your company's identity to thoughtfully curated gifts and packaging,
            creating a memorable experience for every recipient.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
            {BRANDING_CHIPS.map((c) => (
              <span key={c} className="px-5 py-2.5 rounded-full bg-reve-peach/50 text-[13px] font-medium text-reve-brown">
                {c}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10">
            <Button as="a" href="#quote">
              Discuss Your Requirements <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}