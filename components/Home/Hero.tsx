"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/Hero1.png",
  "/Hero2.png",
  "/Hero3.png",
  "/Hero4.png",
  "/Hero5.png",
];

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCardStyle = (index: number) => {
    const length = images.length;
    let offset = (index - activeIndex + length) % length;
    if (offset > 2) offset -= length;

    // --- CENTER CARD (Hero3) ---
    // Width: 266px. Half-width is 133px.
    if (offset === 0) {
      return {
        zIndex: 30,
        width: "266px",
        height: "455px",
        opacity: 1,
        transform: "translateX(-50%) scale(1)",
        left: "50%",
        filter: "drop-shadow(0 0 20px rgba(0, 208, 255, 0.4))",
      };
    }

    // --- INNER NEIGHBORS (Hero2 & Hero4) ---
    // To touch the center card perfectly:
    // Center is at 50%.
    // Left Inner needs to be: 50% - (Half Center Width) - (Half Inner Width)
    // 50% - 133px - 115px = approx 250px offset.
    // I set it to 240px to ensure they slightly overlap/touch nicely.
    if (Math.abs(offset) === 1) {
      return {
        zIndex: 20,
        width: "229px",
        height: "390px",
        opacity: 1,
        // CHANGED: Reduced offset to make them touch the center card
        left: offset === -1 ? "calc(50% - 240px)" : "calc(50% + 240px)",
        transform: "translateX(-50%)",
      };
    }

    // --- OUTER NEIGHBORS (Hero1 & Hero5) ---
    // To touch the Inner neighbor:
    // Inner is at 240px offset.
    // Left Outer needs to be: 240px + (Half Inner Width) + (Half Outer Width)
    // 240px + 115px + 98px = approx 453px total offset.
    // I set it to 445px for a tight fit.
    if (Math.abs(offset) === 2) {
      return {
        zIndex: 10,
        width: "195px",
        height: "332px",
        opacity: 1,
        // CHANGED: Adjusted to touch the inner card
        left: offset === -2 ? "calc(50% - 445px)" : "calc(50% + 445px)",
        transform: "translateX(-50%)",
      };
    }

    return { display: "none" };
  };

  return (
    <section className="relative isolate w-full bg-black box-border lg:h-[806px] py-10 lg:py-0 overflow-visible z-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/home1.webp"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.27]"
        />
      </div>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-between">
        {/* --- TOP CONTENT --- */}
        <div className="mx-auto w-full max-w-[1235px] px-4 lg:pt-[87px] flex flex-col items-center gap-[24px]">
          <h1
            className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[100%]"
            style={{ fontFamily: "Poppins, sans-serif", color: "#00D0FF" }}
          >
            Card Grading You Can Count On
          </h1>
          <p
            className="max-w-[980px] text-center font-normal text-[16px] sm:text-[18px] lg:text-[22px] leading-[100%] text-white/75"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            At LSG, we focus on quality, consistency, and presentation, sealing
            each card with the care and clarity it deserves — built to collect
            for the long run.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-[60px] w-[237px] rounded-[12px] border border-[#00D0FF] bg-[#00D0FF] text-[#062126] font-semibold text-[16px] hover:bg-[#00D0FF]/90 transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/verify-slab"
              className="inline-flex items-center justify-center h-[60px] w-[237px] rounded-[12px] border border-[#00D0FF] bg-transparent text-[#00D0FF] font-semibold text-[16px] hover:bg-[#00D0FF]/10 transition-colors"
            >
              Verify Your Slab
            </Link>
          </div>
        </div>

        {/* --- BOTTOM CAROUSEL SECTION --- */}
        <div className="flex items-center justify-center w-full mt-10 lg:mt-0 px-4 gap-2 translate-y-[30px] ">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="z-50 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex-shrink-0"
            aria-label="Previous card"
          >
            <Image src="/left.png" alt="Previous" width={38} height={38} />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-[1114px] h-[455px] flex items-center justify-center">
            {images.map((src, index) => {
              const style = getCardStyle(index);
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-in-out top-1/2 -translate-y-1/2"
                  style={style}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Hero card ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 200px, 300px"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="z-50 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex-shrink-0"
            aria-label="Next card"
          >
            <Image src="/right.png" alt="Next" width={38} height={38} />
          </button>
        </div>
      </div>
    </section>
  );
}
