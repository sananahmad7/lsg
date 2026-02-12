"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

// --- DATA ---
const features = [
  "Graded Cards With Collector-Focused Display Quality",
  "Quick And Secure Slab Verification System",
  "Protection From Dust, Tampering, And UV Damage",
  "Aesthetic Value And Resale Potential",
  "Cards From Pokémon, Yu-Gi-Oh!, Magic, Sports, Lorcana, And More",
];

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-black py-16 px-4 lg:px-8">
      {/* Outer Container:
        - Max Width: 1300px
        - Fixed Height on Desktop (min-h-[580px])
        - Gradient Background & Blur
        - Border
      */}
      <div
        className="
          mx-auto w-full max-w-[1300px]
          min-h-auto lg:min-h-[580px]
          rounded-[12px]
          border border-[#FFFFFF33]
          backdrop-blur-[5px]
          px-6 py-10 
          lg:pt-[25px] lg:pb-[25px] lg:pl-[70px] lg:pr-[70px]
          flex items-center justify-center
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.084) 0%, rgba(217, 217, 217, 0.042) 100%)",
        }}
      >
        {/* Inner Flex Container (A1) */}
        <div className="w-full max-w-[1160px] flex flex-col lg:flex-row items-center gap-12 lg:gap-[50px]">
          {/* =========================================
              LEFT ELEMENT (Text Content)
              Desktop: ~592px width
             ========================================= */}
          <div className="flex flex-col justify-center gap-8 lg:gap-[30px] w-full lg:max-w-[592px]">
            {/* Heading */}
            <h2
              className="text-[#00EFFE] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] lg:leading-[50px] tracking-[-0.02em] capitalize text-center lg:text-left"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              What We Offer
            </h2>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-6 lg:gap-[20px]">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 lg:gap-[20px]"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-[#00EFFE] flex items-center justify-center ">
                    <FaCheck size={14} color="#000" />
                  </div>

                  {/* Text */}
                  <span
                    className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] lg:leading-[30px] capitalize text-[#A1C7D6]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              RIGHT ELEMENT (Image)
              Desktop: Takes remaining space (approx 500px+)
             ========================================= */}
          <div className="relative w-full lg:flex-1 h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/Offer.png" // Ensure this image is in your public folder
              alt="What We Offer - Card Diagram"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
