import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import StatusBadge from "./StatusBadge";
import { X, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const STATUSES = ["new", "contacted", "completed"];

function Field({ label, value }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.12em] text-reve-brown/70">{label}</p>
      <p className="mt-1 text-sm text-reve-charcoal break-words">{value || "—"}</p>
    </div>
  );
}

function formatDate(ts) {
  if (!ts?.toDate) return "—";
  return ts.toDate().toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function InquiryDetailModal({ inquiry, onClose }) {
  const [updating, setUpdating] = useState(false);
  const [current, setCurrent] = useState(inquiry.status || "new");

  if (!inquiry) return null;

  const handleStatusChange = async (status) => {
    setUpdating(true);
    try {
      await updateDoc(doc(db, "inquiries", inquiry.id), { status });
      setCurrent(status);
    } finally {
      setUpdating(false);
    }
  };

  const mailHref = inquiry.work_email ? "mailto:" + inquiry.work_email : null;
  const whatsappHref = inquiry.phone ? "https://wa.me/" + inquiry.phone.replace(/[^\d]/g, "") : null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-[1.75rem] sm:rounded-[1.75rem] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-5 border-b border-reve-border/70 sticky top-0 bg-white">
          <div>
            <p className="font-heading text-lg font-semibold text-reve-charcoal">{inquiry.full_name}</p>
            <p className="text-xs text-reve-brown mt-0.5">{formatDate(inquiry.submitted_at)}</p>
          </div>
          <button onClick={onClose} aria-label="Close">
            <X className="w-5 h-5 text-reve-brown" />
          </button>
        </div>

        <div className="px-6 py-6 grid grid-cols-2 gap-5">
          <Field label="Company Name" value={inquiry.company_name} />
          <Field label="Work Email" value={inquiry.work_email} />
          <Field label="Phone" value={inquiry.phone} />
          <Field label="Occasion" value={inquiry.occasion} />
          <Field label="Quantity" value={inquiry.quantity} />
          <Field label="Gift Preference" value={inquiry.gift_preference} />
          <div className="col-span-2">
            <Field label="Message" value={inquiry.message} />
          </div>
        </div>

        <div className="px-6 pb-6">
          <p className="text-[11px] uppercase tracking-[0.12em] text-reve-brown/70 mb-2">Status</p>
          <div className="flex flex-wrap gap-2">
            {STATUSES.map((s) => (
              <button key={s} disabled={updating} onClick={() => handleStatusChange(s)} className={cn("px-3 py-1.5 rounded-full text-xs font-medium border transition-colors disabled:opacity-60", current === s ? "bg-reve-charcoal text-white border-reve-charcoal" : "bg-transparent text-reve-brown border-reve-border hover:border-reve-terracotta hover:text-reve-terracotta")}>
                {s === "new" ? "New" : s === "contacted" ? "Contacted" : "Completed"}
              </button>
            ))}
            <StatusBadge status={current} />
          </div>
        </div>

        <div className="px-6 pb-7 flex flex-wrap gap-3 border-t border-reve-border/70 pt-5">
          {mailHref && <a href={mailHref} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-reve-peachcream text-reve-charcoal text-sm font-medium hover:bg-reve-peach/60 transition-colors"><Mail className="w-4 h-4" /> Email</a>}
          {whatsappHref && <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-reve-peachcream text-reve-charcoal text-sm font-medium hover:bg-reve-peach/60 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a>}
        </div>
      </div>
    </div>
  );
}