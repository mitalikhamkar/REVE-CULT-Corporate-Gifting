import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/data/site";
import Button from "./Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-shadow duration-300 bg-reve-ivory/90 backdrop-blur-xl border-b border-reve-border/60",
        scrolled ? "shadow-[0_1px_20px_-4px_rgba(41,37,34,0.12)]" : "shadow-none"
      )}
    >
      <nav className="max-w-[92rem] mx-auto px-5 sm:px-8 lg:px-14 h-[72px] lg:h-20 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none" aria-label="REVE CULT Gifts home">
          <span className="font-heading text-lg sm:text-xl font-semibold tracking-[0.12em] text-reve-charcoal">
            REVE CULT
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.42em] text-reve-terracotta mt-0.5">
            Gifts
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-reve-brown hover:text-reve-terracotta transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-reve-terracotta after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </Button>
          <Button as="a" href="#quote" size="sm">Request a Quote</Button>
        </div>

        <button
          className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center text-reve-charcoal"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-reve-ivory/97 backdrop-blur-xl border-b border-reve-border px-5 pb-8 pt-2"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-heading text-2xl text-reve-charcoal py-3.5 border-b border-reve-border/60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-7">
              <Button as="a" href="#quote" onClick={() => setOpen(false)}>Request a Quote</Button>
              <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="outline">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}