import GradingWithCare from "@/components/Services/GradingWithCare";
import ServiceHero from "@/components/Services/ServiceHero";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Services | LSG Grading",
  description:
    " Each slab includes the full LSG experience — cleaning, authentication, grading, and sealing— all built into the product you receive. No subscriptions, no extra fees",
};
export default function ServicesPage() {
  return (
    <main className="w-full ">
      <ServiceHero />
      <GradingWithCare />
    </main>
  );
}
