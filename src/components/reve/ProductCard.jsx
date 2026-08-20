import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import Button from "./Button";
import { fadeUp } from "./motion";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.article variants={fadeUp} className="group shrink-0 w-[70vw] sm:w-72 lg:w-80 snap-start bg-white rounded-[1.5rem] border border-reve-border/70 overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[0_24px_48px_-32px_rgba(138,90,74,0.5)]">
        <button type="button" onClick={() => setOpen(true)} className="relative block w-full p-0 border-0 bg-reve-peachcream/60 overflow-hidden text-left cursor-pointer" aria-label={`View details for ${product.name}`}>
          <Image src={product.image} alt={product.alt} loading="lazy" className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.16em] bg-white/90 text-reve-brown px-3 py-1.5 rounded-full">{product.feature}</span>
        </button>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-heading text-xl font-semibold text-reve-charcoal leading-snug">{product.name}</h3>
          <p className="mt-2 text-sm text-reve-brown leading-relaxed line-clamp-2">{product.description}</p>
          <button type="button" onClick={() => setOpen(true)} className="mt-2 self-start text-[13px] font-medium text-reve-terracotta hover:text-reve-brown transition-colors">Read more</button>

          <div className="flex-1" />

          <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-reve-terracotta">Enquire for Corporate Pricing</p>
          <a href="#quote" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-reve-charcoal hover:text-reve-terracotta transition-colors">
            Enquire Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.article>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5" role="dialog" aria-modal="true" aria-label={product.name}>
          <div className="absolute inset-0 bg-reve-charcoal/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="relative w-full max-w-lg bg-reve-ivory rounded-[1.75rem] overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto">
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-reve-charcoal hover:text-reve-terracotta transition-colors">
              <X className="w-4 h-4" />
            </button>
            <Image src={product.image} alt={product.alt} loading="lazy" className="w-full h-64 object-cover" />
            <div className="p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-[0.16em] text-reve-terracotta">{product.feature}</span>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-reve-charcoal leading-snug">{product.name}</h3>
              <p className="mt-4 text-sm sm:text-base text-reve-brown leading-relaxed">{product.description}</p>
              <Button as="a" href="#quote" onClick={() => setOpen(false)} className="mt-8">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}