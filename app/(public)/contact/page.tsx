import GetInTouchWithUs from "@/components/Home/GetInTouchWithUs";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Contact | LSG Grading",
  description:
    "Got a question about your LSG slab, grading details, or what’s in stock? Reach out — we’re happy to help you get what you’re looking for.",
};
function Contact() {
  return (
    // Relative container with black background
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center">
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/result.png"
            alt="Background"
            fill
            className="object-cover opacity-20" // Adjust opacity as needed (0.27 matches hero)
            priority
          />
        </div>
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 w-full">
        <GetInTouchWithUs />
      </div>
    </div>
  );
}

export default Contact;
