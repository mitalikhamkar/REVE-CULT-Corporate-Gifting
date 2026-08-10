import React from "react";
import { WHATSAPP_LINK } from "@/data/site";

export default function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed z-40 inset-x-0 bottom-0 bg-reve-ivory/95 backdrop-blur-xl border-t border-reve-border px-4 py-3 flex gap-3">
      <a
        href="#quote"
        className="flex-1 min-h-[48px] inline-flex items-center justify-center rounded-full bg-reve-terracotta text-white text-[13px] font-medium uppercase tracking-[0.1em]"
      >
        Request a Quote
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[48px] inline-flex items-center justify-center rounded-full bg-white border border-reve-terracotta/60 text-reve-terracotta text-[13px] font-medium uppercase tracking-[0.1em]"
      >
        WhatsApp
      </a>
    </div>
  );
}