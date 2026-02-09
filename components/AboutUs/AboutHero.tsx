"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className="relative isolate w-full bg-black overflow-hidden font-poppins">
      <div className="relative w-full min-h-[720px] sm:min-h-[820px] lg:h-[920px]">
        {/* --- BACKGROUND LAYER --- */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-8 bottom-8 sm:top-10 sm:bottom-10 lg:top-[70px] lg:bottom-[70px]">
            <Image
              src="/result.png"
              alt="About hero background"
              fill
              priority
              sizes="100vw"
              className="object-contain opacity-[0.27]"
            />
          </div>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          {/* Main Container: 1170.47px width */}
          <div className="w-full max-w-[1170.47px] lg:h-[849.97px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[117px] opacity-100 rotate-0">
            {/* =========================================
                LEFT ELEMENT
               ========================================= */}
            <div className="flex border border-yellow-500 flex-col w-full max-w-[602.47px]  h-[840.97px] gap-[20.08px] opacity-100 rotate-0">
              {/* --- LEFT TOP HEADER --- */}
              <div className="flex flex-col gap-[20.08px]">
                <div className="flex items-center w-[145px] h-[10px] opacity-100 rotate-0">
                  <span className="text-[#00D0FF] font-semibold text-[16px] uppercase tracking-wider font-poppins">
                    What We Do
                  </span>
                </div>

                <h1 className="text-white w-full max-w-[630px] font-poppins font-semibold text-[44px] leading-[60px] tracking-[-0.02em] capitalize opacity-100 rotate-0">
                  Inspection, Protection & Presentation
                </h1>
              </div>

              {/* --- LEFT DESCRIPTION --- */}
              <div className="w-full max-w-[602.47px] opacity-100 rotate-0">
                <p className="font-poppins font-medium text-[22px] leading-[100%] tracking-normal text-[#A1C7D6]">
                  At LSG, we grade, authenticate, and encapsulate collectible
                  trading cards with a focus on clarity, protection, and display
                  value. Each card is hand-picked, inspected, and slabbed by our
                  team — no public submissions, ever.
                </p>
              </div>

              {/* --- LEFT BULLETS --- */}
              <div className="flex flex-col w-full max-w-[585.83px] gap-[14.34px] opacity-100 rotate-0">
                <span className="font-poppins font-medium text-[22px] leading-[188%] tracking-normal text-[#A1C7D6]">
                  Our streamlined process includes:
                </span>

                <ul className="flex flex-col gap-[14.34px]">
                  {[
                    "Sourcing from trusted channels",
                    "Light cleaning (no alterations)",
                    "Detailed grading of centering, surface, edges, and corners",
                    "Tamper-evident ultrasonic sealing",
                    "QR and serial-based verification",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 w-full max-w-[536.49px] min-h-[60px] opacity-100 rotate-0"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#00D0FF] w-[24px] h-[24px]">
                        <FaCheck size={12} color="#000" />
                      </div>
                      <span className="font-poppins font-normal text-[20px] leading-[100%] tracking-normal text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- LEFT BOTTOM TEXT --- */}
              <div className="w-full max-w-[602.47px] opacity-100 rotate-0 mt-auto">
                <p className="font-poppins font-medium text-[22px] leading-[100%] tracking-normal text-[#A1C7D6]">
                  We focus on cards that deserve the spotlight — from vintage
                  classics to modern hits — delivering ready-to-display slabs,
                  sealed with care and graded with transparency.
                </p>
              </div>
            </div>

            {/* =========================================
                RIGHT ELEMENT (Image)
                Width: 450px
                Height: 840px (Requested)
               ========================================= */}
            <div className="relative w-full max-w-[450px] h-[840px] opacity-100 rotate-0 border border-red-900">
              <Image
                src="/after.png"
                alt="After Inspection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
