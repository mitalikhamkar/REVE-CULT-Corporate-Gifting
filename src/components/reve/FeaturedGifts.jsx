import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/site";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { stagger, viewport } from "./motion";
import { cn } from "@/lib/utils";

export default function FeaturedGifts() {
  const [active, setActive] = useState("All");
  const categories = ["All", ...PRODUCT_CATEGORIES];

  const representatives = useMemo(
    () =>
      PRODUCT_CATEGORIES.map((cat) => PRODUCTS.find((p) => p.category === cat)).filter(
        Boolean
      ),
    []
  );

  const items =
    active === "All" ? representatives : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="gifts" className="py-20 lg:py-32 bg-white/60">
      <div className="px-5 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="The Collection"
          title="Explore Our Corporate Gift Collection"
          subtitle="Premium technology and lifestyle essentials, curated for modern teams and meaningful relationships."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-5 py-2.5 rounded-full text-[13px] font-medium transition-colors border",
                active === c
                  ? "bg-reve-charcoal text-white border-reve-charcoal"
                  : "bg-transparent text-reve-brown border-reve-border hover:border-reve-terracotta hover:text-reve-terracotta"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 px-5 sm:px-8 lg:px-14 max-w-[92rem] mx-auto">
        <motion.div
          key={active}
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="reve-scrollbar flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
        >
          {items.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}