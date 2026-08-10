import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function FAQAccordion() {
  return (
    <section className="py-20 lg:py-32 px-5 sm:px-8 lg:px-14">
      <SectionHeading eyebrow="FAQ" title="Questions, Answered." />
      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-reve-border">
              <AccordionTrigger className="text-left font-heading text-lg sm:text-xl font-medium text-reve-charcoal hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-reve-brown text-[15px] leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}