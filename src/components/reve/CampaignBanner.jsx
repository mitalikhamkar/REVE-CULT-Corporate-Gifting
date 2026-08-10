import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/data/site";
import { viewport } from "./motion";

export default function CampaignBanner() {
  return (
    <section className="px-5 sm:px-8 lg:px-14">
      <div className="relative max-w-[92rem] mx-auto overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
        <Image
          src={IMAGES.banner}
          alt="Festive corporate gifting table with rows of ivory and peach gift boxes"
          loading="lazy"
          className="w-full h-[26rem] lg:h-[34rem] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-reve-charcoal/70 via-reve-charcoal/35 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 flex items-center px-7 sm:px-12 lg:px-20"
        >
          <h2 className="font-heading text-white text-[2.25rem] sm:text-5xl lg:text-[4rem] leading-[1.08] font-semibold max-w-2xl">
            Celebrate Relationships.
            <br />
            Inspire Connections.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}