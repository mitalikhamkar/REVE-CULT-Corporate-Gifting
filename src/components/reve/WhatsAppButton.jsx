import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with REVE CULT Gifts on WhatsApp"
      className="fixed z-40 right-5 bottom-[6.5rem] lg:bottom-8 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_12px_30px_-10px_rgba(37,211,102,0.9)] hover:scale-105 transition-transform duration-200"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}