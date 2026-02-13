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
        <div className="relative z-10 h-full w-full flex items-center justify-center py-10 lg:py-0">
          <div className="w-full max-w-[1170.47px] px-4 lg:px-0 lg:h-[859.97px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[117px] opacity-100 rotate-0">
            {/* =========================================
                LEFT ELEMENT (Inner Content Area)
                ========================================= */}
            <div
              className="flex flex-col opacity-100 rotate-0 w-full lg:w-[602.47px] lg:h-[849.97px]"
              style={{ gap: "20.08px" }}
            >
              {/* Left inner top div */}
              <div className="flex flex-col opacity-100 w-full lg:w-[630px] lg:h-[180px]">
                <span
                  className="text-[#FFFFFF] font-medium capitalize"
                  style={{
                    fontSize: "24px",
                    lineHeight: "60px",
                    letterSpacing: "-2%",
                  }}
                >
                  What We Do
                </span>
                <h1
                  className="font-semibold capitalize text-[#00EFFE] w-full lg:w-[630px] lg:h-[120px]"
                  style={{
                    fontSize: "clamp(32px, 5vw, 44px)", // Responsive font size
                    lineHeight: "1.2", // Dynamic line height for mobile
                    letterSpacing: "-2%",
                  }}
                >
                  Inspection, Protection & Presentation
                </h1>
              </div>

              {/* Description Paragraph */}
              <div className="opacity-100 w-full lg:w-[602.47px] lg:h-[165px]">
                <p
                  className="font-medium text-[#A1C7D6]"
                  style={{
                    fontSize: "clamp(18px, 4vw, 22px)",
                    lineHeight: "1.4",
                    letterSpacing: "0%",
                  }}
                >
                  At LSG, we grade, authenticate, and encapsulate collectible
                  trading cards with a focus on clarity, protection, and display
                  value. Each card is hand-picked, inspected, and slabbed by our
                  team — no public submissions, ever.
                </p>
              </div>

              {/* Bullet Points Section */}
              <div
                className="flex flex-col opacity-100 w-full lg:w-[585.83px] lg:min-h-[312.72px]"
                style={{
                  gap: "14.34px",
                }}
              >
                <h3
                  className="font-medium text-[#A1C7D6] w-full lg:w-[384px]"
                  style={{
                    fontSize: "clamp(18px, 4vw, 22px)",
                    lineHeight: "1.5",
                    letterSpacing: "0%",
                  }}
                >
                  Our streamlined process includes:
                </h3>

                <div className="flex flex-col gap-[14.34px]">
                  {bulletPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start lg:items-center opacity-100 w-full lg:w-[364.34px]"
                      style={{
                        minHeight: "35px",
                        gap: "14.34px",
                      }}
                    >
                      {/* Left Icon: 35x35 */}
                      <div
                        className="flex-shrink-0 flex items-center justify-center bg-[#00EFFE] rounded-full mt-1 lg:mt-0"
                        style={{ width: "35px", height: "35px" }}
                      >
                        <FaCheck className="text-black" />
                      </div>
                      {/* Right Text */}
                      <span
                        className="font-normal text-[#FFFFFF] flex-1 lg:w-[315px]"
                        style={{
                          fontSize: "clamp(16px, 4vw, 20px)",
                          lineHeight: "1.2",
                          letterSpacing: "0%",
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Text Div */}
              <div className="opacity-100 w-full">
                <p
                  className="font-medium text-[#A1C7D6]"
                  style={{
                    fontSize: "clamp(18px, 4vw, 22px)",
                    lineHeight: "1.4",
                    letterSpacing: "0%",
                  }}
                >
                  We focus on cards that deserve the spotlight — from vintage
                  classics to modern hits — delivering ready-to-display slabs,
                  sealed with care and graded with transparency.
                </p>
              </div>
            </div>

            {/* =========================================
                RIGHT ELEMENT (Image)
                ========================================= */}
            <div className="relative w-full max-w-[450px] h-[550px] lg:h-[849px] opacity-100 rotate-0">
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
