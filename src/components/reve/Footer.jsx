import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS, SUPPORT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-reve-ivory border-t border-reve-border px-5 sm:px-8 lg:px-14 pt-16 pb-28 lg:pb-14">
      <div className="max-w-[92rem] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <p className="font-heading text-xl font-semibold tracking-[0.12em] text-reve-charcoal">
            REVE CULT GIFTS
          </p>
          <p className="mt-4 text-sm text-reve-brown leading-relaxed max-w-sm">
            Thoughtful Gifts. Lasting Impressions. Celebrate Relationships.
            Inspire Connections.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="REVE CULT Gifts on Instagram"
              className="w-10 h-10 rounded-full border border-reve-border flex items-center justify-center text-reve-brown hover:text-reve-terracotta hover:border-reve-terracotta transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="REVE CULT Gifts on LinkedIn"
              className="w-10 h-10 rounded-full border border-reve-border flex items-center justify-center text-reve-brown hover:text-reve-terracotta hover:border-reve-terracotta transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] uppercase tracking-[0.2em] text-reve-terracotta">Explore</p>
          <ul className="mt-5 space-y-3">
            {[...NAV_LINKS, { label: "Contact", href: "#quote" }].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-reve-brown hover:text-reve-terracotta transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-reve-terracotta">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-reve-brown">
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-reve-terracotta transition-colors">
                {SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-reve-terracotta transition-colors">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[92rem] mx-auto mt-14 pt-6 border-t border-reve-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p className="text-xs text-reve-brown">
          © {new Date().getFullYear()} REVE CULT Gifts. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#quote" className="text-xs text-reve-brown hover:text-reve-terracotta transition-colors">Privacy Policy</a>
          <a href="#quote" className="text-xs text-reve-brown hover:text-reve-terracotta transition-colors">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}