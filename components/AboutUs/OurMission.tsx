"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurMission() {
  return (
    <section className="w-full bg-black py-16 px-4 lg:px-8">
      {/* Main Container:
        - Max Width: 1180px (Matches Figma)
        - Centered (mx-auto)
        - Flex Row on Desktop (lg:flex-row) with 100px gap
      */}
      <div className="mx-auto w-full max-w-[1180px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[100px]">
        {/* =========================================
            LEFT COMPONENT (Text Content)
            Desktop: 630px width
           ========================================= */}
        <div className="w-full lg:w-[630px] flex flex-col items-center lg:items-start gap-[30px] text-center lg:text-left">
          {/* Header */}
          <div className="flex flex-col gap-[12px]">
            <h2
              className="text-[#00D0FF] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] lg:leading-[60px] tracking-[-0.02em] capitalize"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Mission
            </h2>
          </div>

          {/* Description */}
          <div className="w-full">
            <p
              className="font-medium text-[16px] sm:text-[18px] lg:text-[22px] leading-[160%] lg:leading-[140%] tracking-[-0.01em] text-[#A1C7D6]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              At Legacy Slabs Grading, we believe every collectible card
              deserves to be shown in its best light. We set out to create a
              premium, collector-first grading experience that prioritizes
              display, durability, and trust — all without the long waits or
              complicated submissions. We’re here for collectors who want
              beautiful slabs, fair grades, and full transparency.
            </p>
          </div>

          {/* Button */}
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              w-full sm:w-[311px] h-[60px]
              rounded-[12px]
              text-[#062126] font-bold text-[16px] leading-[151%]
              transition-transform hover:scale-[1.02] active:scale-[0.98]
            "
            style={{
              background:
                "linear-gradient(93.95deg, #00F2FE 4.94%, #00D0FF 97.42%)",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Inquire now
          </Link>
        </div>

        {/* =========================================
            RIGHT ELEMENT (Image)
            Desktop: 450px width, 766px height
           ========================================= */}
        <div className="relative w-full max-w-[450px] aspect-[450/766] lg:h-[766px] flex-shrink-0">
          <Image
            src="/Rocket.png" // Ensure this image is in your public folder
            alt="Rocket's Mission Card Slab"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
