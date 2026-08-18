import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES, HAMPER_INCLUSIONS, HAMPER_CUSTOM_OPTIONS } from "@/data/site";
import Button from "./Button";
import { fadeUp, stagger, viewport } from "./motion";

export default function SignatureHamper() {
  return (
    <section id="hampers" className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14">
      <div className="max-w-[92rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1"
        >
          <div className="overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
            <Image
              src={IMAGES.signatureHamper}
              alt="Signature corporate hamper with earbuds, luxe case bag, cloth pouch, dry fruits and chocolates"
              loading="lazy"
              className="w-full h-[24rem] lg:h-[36rem] object-cover object-[70%_center]"
            />
          </div>
          <div aria-hidden="true" className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-full bg-reve-peach/50 blur-2xl" />
        </motion.div>

        <motion.div variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={viewport} className="order-2">
          <motion.p variants={fadeUp} className="eyebrow mb-4">Signature Hamper</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.1] font-semibold text-reve-charcoal"
          >
            The Gift That Says More
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-reve-brown text-base sm:text-lg leading-relaxed max-w-xl">
            A thoughtful blend of technology, wellness and happiness — curated for
            employees, clients and special occasions.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {HAMPER_INCLUSIONS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-reve-charcoal">
                <Check className="w-4 h-4 text-reve-terracotta shrink-0" strokeWidth={2} />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 rounded-3xl bg-reve-peachcream/70 p-6 sm:p-7">
            <p className="font-heading text-xl font-semibold text-reve-charcoal">Customizable</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {HAMPER_CUSTOM_OPTIONS.map((o) => (
                <span key={o} className="px-4 py-2 rounded-full bg-white text-[13px] text-reve-brown border border-reve-border/70">
                  {o}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button as="a" href="#quote">
              Create Your Corporate Gift <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}