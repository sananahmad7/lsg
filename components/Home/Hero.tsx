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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // --- TOUCH HANDLERS ---
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  // --- CARD PROPS CALCULATOR ---
  const getCardProps = (index: number) => {
    const length = images.length;
    let offset = (index - activeIndex + length) % length;
    if (offset > 2) offset -= length;

    const baseClasses =
      "absolute transition-all duration-500 ease-in-out top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-2xl";

    // --- CENTER CARD ---
    if (offset === 0) {
      return {
        // Base: 160px width (fits 330px screens)
        // SM: 220px
        // LG: 266px
        className: `${baseClasses} z-30 opacity-100 left-1/2 
          w-[160px] h-[274px] 
          sm:w-[220px] sm:h-[376px] rounded-xl
          lg:w-[266px] lg:h-[446px]`,
        style: {
          // Updated Shadow
          boxShadow:
            "0px 0px 31px 0px #00D5FFD9, 0px 0px 52.3px 3px #00D5FF80, 0px 0px 4.8px 0px #00D5FFA6, 0px 0px 1px 0px #00D5FF05",
        },
      };
    }

    // --- INNER NEIGHBORS (Offset ±1) ---
    if (Math.abs(offset) === 1) {
      const isLeft = offset === -1;
      // Base Offset: 90px (keeps cards tight on small screens)
      // SM Offset: 140px
      // LG Offset: 240px
      const leftClass = isLeft
        ? "left-[calc(50%-90px)] sm:left-[calc(50%-140px)] lg:left-[calc(50%-240px)]"
        : "left-[calc(50%+90px)] sm:left-[calc(50%+140px)] lg:left-[calc(50%+240px)]";

      return {
        className: `${baseClasses} z-20 opacity-100 
          w-[130px] h-[222px] 
          sm:w-[190px] sm:h-[320px] 
          lg:w-[229px] lg:h-[390px] 
          ${leftClass}`,
        style: {},
      };
    }

    // --- OUTER NEIGHBORS (Offset ±2) ---
    if (Math.abs(offset) === 2) {
      const isLeft = offset === -2;
      const leftClass = isLeft
        ? "lg:left-[calc(50%-445px)]"
        : "lg:left-[calc(50%+445px)]";

      return {
        // Hidden on mobile/tablet, visible on desktop
        className: `${baseClasses} z-10 
          w-[195px] h-[332px] 
          opacity-0 lg:opacity-100 
          pointer-events-none lg:pointer-events-auto 
          left-1/2 ${leftClass}`,
        style: {},
      };
    }

    return { className: "hidden", style: {} };
  };

  return (
    // Changed min-h for mobile to accommodate content better without excessive whitespace
    <section className="relative isolate w-full bg-black box-border min-h-[650px] lg:h-[806px] py-10 lg:py-0 overflow-visible z-20">
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

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center lg:justify-between pt-4 sm:pt-10 lg:pt-0">
        {/* --- TOP CONTENT --- */}
        <div className="mx-auto w-full max-w-[1235px] px-4 lg:pt-[87px] flex flex-col items-center gap-[20px] sm:gap-[24px]">
          <h1
            className="text-center font-semibold text-[28px] text-[#00EFFE] xs:text-[32px] sm:text-[36px] lg:text-[44px] leading-[110%] sm:leading-[100%]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Card Grading You Can Count On
          </h1>
          <p
            className="max-w-[980px] text-center font-normal text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[22px] leading-[150%] sm:leading-[100%] text-[#A1C7D6]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            At LSG, we focus on quality, consistency, and presentation, sealing
            each card with the care and clarity it deserves — built to collect
            for the long run.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-2 sm:mt-4 w-full px-4 sm:px-0">
            <Link
              href="/services"
              className="inline-flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98] hover:bg-[#00D0FF]/90 justify-center font-sora font-bold h-[50px] sm:h-[60px] w-full sm:w-[237px] rounded-[12px] border border-[#00D0FF] bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] text-[#062126] font-semibold text-[16px] hover:bg-[#00D0FF]/90 transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/verify-slab"
              className="inline-flex items-center justify-center font-sora font-bold h-[50px] sm:h-[60px] w-full sm:w-[237px] rounded-[12px] border border-[#00D0FF] bg-transparent text-[#00D0FF] font-semibold text-[16px] hover:bg-[#00D0FF]/10 transition-colors"
            >
              Verify Your Slab
            </Link>
          </div>
        </div>

        {/* --- BOTTOM CAROUSEL SECTION --- */}
        <div
          className="flex items-center justify-center w-full mt-10 lg:mt-0 px-4 gap-2 lg:translate-y-[30px]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden sm:block z-50 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex-shrink-0"
            aria-label="Previous card"
          >
            <Image src="/left.png" alt="Previous" width={38} height={38} />
          </button>

          {/* Cards Container */}
          {/* Adjusted height for mobile ratio */}
          <div className="relative w-full max-w-[1114px] h-[300px] sm:h-[380px] lg:h-[455px] flex items-center justify-center touch-pan-y">
            {images.map((src, index) => {
              const { className, style } = getCardProps(index);
              return (
                <div key={index} className={className} style={style}>
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Hero card ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 300px"
                      priority={index === activeIndex}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden sm:block z-50 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer flex-shrink-0"
            aria-label="Next card"
          >
            <Image src="/right.png" alt="Next" width={38} height={38} />
          </button>
        </div>
      </div>
    </section>
  );
}
