"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function AboutHero() {
  const bulletPoints = [
    "Sourcing from trusted channels",
    "Light cleaning (no alterations)",
    "Detailed grading of centering, surface, edges, and corners",
    "Tamper-evident ultrasonic sealing",
    "QR and serial-based verification",
  ];

  return (
    <section className="relative isolate w-full bg-black overflow-hidden font-poppins">
      <div className="relative w-full min-h-[600px] sm:min-h-[820px] lg:h-[920px]">
        {/* --- BACKGROUND LAYER --- */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-4 bottom-4 sm:top-10 sm:bottom-10 lg:top-[70px] lg:bottom-[70px]">
            <Image
              src="/result.png"
              alt="About hero background"
              fill
              priority
              sizes="100vw"
              className="object-contain opacity-[0.67]"
            />
          </div>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 h-full w-full flex items-center justify-center py-8 lg:py-0">
          <div className="w-full max-w-[1170.47px] px-4 lg:px-0 lg:h-[859.97px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[117px]">
            {/* =========================================
                LEFT ELEMENT (Inner Content Area)
                ========================================= */}
            <div className="flex flex-col w-full lg:w-[602.47px] lg:h-[849.97px] gap-4 lg:gap-[20.08px]">
              {/* Left inner top div */}
              <div className="flex flex-col w-full lg:w-[630px] lg:h-[180px]">
                <span
                  className="text-[#FFFFFF] font-medium capitalize text-[18px] lg:text-[24px] lg:lineHeight-[60px]"
                  style={{
                    letterSpacing: "-2%",
                  }}
                >
                  What We Do
                </span>
                <h1
                  className="font-semibold capitalize text-[#00EFFE] w-full lg:w-[630px] lg:h-[120px] text-[26px] xs:text-[32px] lg:text-[44px] leading-tight"
                  style={{
                    letterSpacing: "-2%",
                  }}
                >
                  Inspection, Protection & Presentation
                </h1>
              </div>

              {/* Description Paragraph */}
              <div className="w-full lg:w-[602.47px] lg:h-[165px]">
                <p className="font-medium text-[#A1C7D6] text-[14px] xs:text-[16px] lg:text-[22px] leading-[1.4]">
                  At LSG, we grade, authenticate, and encapsulate collectible
                  trading cards with a focus on clarity, protection, and display
                  value. Each card is hand-picked, inspected, and slabbed by our
                  team — no public submissions, ever.
                </p>
              </div>

              {/* Bullet Points Section */}
              <div className="flex flex-col w-full lg:w-[585.83px] lg:min-h-[312.72px] gap-3 lg:gap-[14.34px]">
                <h3 className="font-medium text-[#A1C7D6] w-full lg:w-[384px] text-[14px] xs:text-[16px] lg:text-[22px] leading-[1.5]">
                  Our streamlined process includes:
                </h3>

                <div className="flex flex-col gap-3 lg:gap-[14.34px]">
                  {bulletPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start lg:items-center w-full lg:w-[599.34px] gap-3 lg:gap-[14.34px]"
                      style={{
                        minHeight: "28px",
                      }}
                    >
                      {/* Left Icon: Scaled on mobile */}
                      <div className="flex-shrink-0 flex items-center justify-center bg-[#00EFFE] rounded-full mt-0.5 lg:mt-0 w-[24px] h-[24px] lg:w-[35px] lg:h-[35px]">
                        <FaCheck
                          size={10}
                          className="text-black lg:size-[14px]"
                        />
                      </div>
                      {/* Right Text */}
                      <span className="font-normal text-[#FFFFFF] flex-1 lg:w-[585px] text-[13px] xs:text-[15px] lg:text-[20px] leading-tight">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Text Div */}
              <div className="w-full">
                <p className="font-medium text-[#A1C7D6] text-[14px] xs:text-[16px] lg:text-[22px] leading-[1.4]">
                  We focus on cards that deserve the spotlight — from vintage
                  classics to modern hits — delivering ready-to-display slabs,
                  sealed with care and graded with transparency.
                </p>
              </div>
            </div>

            {/* =========================================
                RIGHT ELEMENT (Image)
                ========================================= */}
            <div className="relative w-full max-w-[320px] xs:max-w-[400px] lg:max-w-[450px] h-[380px] xs:h-[480px] lg:h-[849px]">
              <Image
                src="/after.png"
                alt="After Inspection"
                fill
                className="object-contain lg:object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
