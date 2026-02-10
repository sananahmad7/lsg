"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-black py-16 px-4 lg:px-8">
      {/* Outer Component: 
        - Max Width: 1300px
        - Responsive Padding
        - Gradient Background
        - Border & Radius
      */}
      <div
        className="
          mx-auto w-full max-w-[1300px]
          rounded-[20px] border border-white/10
          flex flex-col lg:flex-row items-center
          gap-10 lg:gap-[133px]
          px-6 py-12 
          lg:pl-[130px] lg:pr-[100px] lg:pb-[50px] lg:pt-[50px]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.084) 0%, rgba(217, 217, 217, 0.042) 100%)",
        }}
      >
        {/* =========================================
            LEFT ELEMENT (Logo Image)
            Desktop: ~427px width
           ========================================= */}
        <div className="relative w-full max-w-[300px] lg:max-w-[427.46px] aspect-[427/524] flex-shrink-0">
          <Image
            src="/LogoTransparent.png" // Ensure this file exists in your public folder (add .png/.jpg as needed)
            alt="LSG Grading Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* =========================================
            RIGHT ELEMENT (Text Content)
            Desktop: ~630px width
           ========================================= */}
        <div className="flex flex-col gap-[30px] w-full max-w-[630px] text-center lg:text-left">
          {/* Header */}
          <div className="flex flex-col gap-[12px]">
            <h2
              className="text-[#00D0FF] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.3] lg:leading-[60px] tracking-[-0.02em] capitalize"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who We Are
            </h2>
          </div>

          {/* Description */}
          <div className="w-full">
            <p
              className="font-medium text-[16px] sm:text-[18px] lg:text-[22px] leading-[160%] lg:leading-[140%] tracking-[-0.01em] text-white/90"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              LSG is a custom card grading company, run by collectors — for
              collectors. Every card we grade is hand-picked from our own
              collection, carefully selected for its display potential, rarity,
              and condition. We don’t accept submissions. That means every slab
              you see has been curated, evaluated, and slabbed entirely by the
              LSG team.
              <br />
              <br />
              We grade only what we trust, and we stand behind each piece.
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
              mx-auto lg:mx-0
            "
            style={{
              background:
                "linear-gradient(93.95deg, #00F2FE 4.94%, #00D0FF 97.42%)",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}
