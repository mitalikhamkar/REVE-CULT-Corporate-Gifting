//Home.jsx
import React from "react";
import Navbar from "@/components/reve/Navbar";
import Hero from "@/components/reve/Hero";
import TrustStrip from "@/components/reve/TrustStrip";
import Occasions from "@/components/reve/Occasions";
import FeaturedGifts from "@/components/reve/FeaturedGifts";
import SignatureHamper from "@/components/reve/SignatureHamper";
import CustomBranding from "@/components/reve/CustomBranding";
import HowItWorks from "@/components/reve/HowItWorks";
import WhyReveCult from "@/components/reve/WhyReveCult";
import Industries from "@/components/reve/Industries";
import CampaignBanner from "@/components/reve/CampaignBanner";
import InquiryForm from "@/components/reve/InquiryForm";
import FAQAccordion from "@/components/reve/FAQAccordion";
import FinalCta from "@/components/reve/FinalCta";
import Footer from "@/components/reve/Footer";
import WhatsAppButton from "@/components/reve/WhatsAppButton";
import MobileCtaBar from "@/components/reve/MobileCtaBar";

export default function Home() {
  return (
    <div className="bg-reve-ivory min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Occasions />
        <FeaturedGifts />
        <SignatureHamper />
        <CustomBranding />
        <HowItWorks />
        <WhyReveCult />
        <Industries />
        <CampaignBanner />
        <InquiryForm />
        <FAQAccordion />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </div>
  );
}