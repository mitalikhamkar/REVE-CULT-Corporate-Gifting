import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { OCCASIONS, PRODUCT_CATEGORIES, WHATSAPP_LINK } from "@/data/site";
import Button from "./Button";
import { fadeUp, stagger, viewport } from "./motion";

const EMPTY = {
  full_name: "",
  company_name: "",
  work_email: "",
  phone: "",
  occasion: "",
  quantity: "",
  gift_preference: "",
  message: "",
};

const fieldClass =
  "w-full bg-transparent border-0 border-b border-reve-brown/25 py-3 text-[15px] text-reve-charcoal placeholder:text-reve-brown/50 focus:border-reve-terracotta focus:outline-none transition-colors";

export default function InquiryForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // No backend is wired up yet — store the inquiry locally so nothing
      // is lost, and surface the same success state to the user.
      const stored = JSON.parse(localStorage.getItem("reve_inquiries") || "[]");
      stored.push({ ...form, status: "new", submitted_at: new Date().toISOString() });
      localStorage.setItem("reve_inquiries", JSON.stringify(stored));
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14">
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-[80rem] mx-auto rounded-[2rem] lg:rounded-[3rem] bg-reve-peachcream/80 px-6 py-12 sm:px-12 lg:px-20 lg:py-20"
      >
        <div className="max-w-2xl">
          <motion.p variants={fadeUp} className="eyebrow mb-4">Request a Quote</motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[2rem] sm:text-5xl lg:text-[3.25rem] leading-[1.1] font-semibold text-reve-charcoal"
          >
            Let's Create Something They'll Remember.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-reve-brown text-base sm:text-lg leading-relaxed">
            Tell us what you're planning and our team will help you build the right
            corporate gifting experience.
          </motion.p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 rounded-3xl bg-white p-10 text-center"
          >
            <span className="mx-auto w-14 h-14 rounded-full bg-reve-peach/60 text-reve-terracotta flex items-center justify-center">
              <Check className="w-6 h-6" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-reve-charcoal">
              Thank you — your request is with us.
            </h3>
            <p className="mt-3 text-sm text-reve-brown">
              Our team will get in touch shortly to build your gifting proposal.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-medium text-reve-terracotta hover:text-reve-brown transition-colors"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
            <div>
              <label htmlFor="full_name" className="eyebrow">Full Name</label>
              <input id="full_name" required value={form.full_name} onChange={set("full_name")} className={fieldClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="company_name" className="eyebrow">Company Name</label>
              <input id="company_name" value={form.company_name} onChange={set("company_name")} className={fieldClass} placeholder="Company" />
            </div>
            <div>
              <label htmlFor="work_email" className="eyebrow">Work Email</label>
              <input id="work_email" type="email" required value={form.work_email} onChange={set("work_email")} className={fieldClass} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="phone" className="eyebrow">Phone Number</label>
              <input id="phone" type="tel" value={form.phone} onChange={set("phone")} className={fieldClass} placeholder="+91" />
            </div>
            <div>
              <label htmlFor="occasion" className="eyebrow">Occasion</label>
              <select id="occasion" value={form.occasion} onChange={set("occasion")} className={fieldClass}>
                <option value="">Select an occasion</option>
                {OCCASIONS.map((o) => (
                  <option key={o.id} value={o.title}>{o.title}</option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="eyebrow">Approximate Quantity</label>
              <input id="quantity" value={form.quantity} onChange={set("quantity")} className={fieldClass} placeholder="e.g. 250" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="gift_preference" className="eyebrow">Gift Preference</label>
              <select id="gift_preference" value={form.gift_preference} onChange={set("gift_preference")} className={fieldClass}>
                <option value="">Select a preference</option>
                {PRODUCT_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="eyebrow">Message</label>
              <textarea id="message" rows={3} value={form.message} onChange={set("message")} className={`${fieldClass} resize-none`} placeholder="Tell us about your gifting plans" />
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
              <Button type="submit" disabled={status === "submitting"} className="disabled:opacity-60">
                {status === "submitting" ? "Sending…" : "Request a Quote"}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="light">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </Button>
              {status === "error" && (
                <p className="text-sm text-red-600">Something went wrong. Please try WhatsApp or email us.</p>
              )}
            </div>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}