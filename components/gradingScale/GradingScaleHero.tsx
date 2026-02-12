"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function GradingScaleHero() {
  const bulletPoints = [
    { label: "Corners", value: "Up to 1 soft tip allowed" },
    { label: "Edges", value: "Slight edge touch on one side" },
    { label: "Surface", value: "Minor gloss variation or a light roller line" },
    { label: "Centering", value: "Acceptable up to 60/40 front, 80/20 back" },
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden font-poppins">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative opacity-100"
          style={{ width: "1097.12px", height: "1097.12px" }}
        >
          <Image
            src="/result.png"
            alt="Background rings"
            fill
            priority
            className="object-contain opacity-[0.27]"
          />
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full flex flex-col items-center pt-[50px] pb-[100px] px-4">
        {/* Topmost Logo */}
        <div
          className="relative mb-[23.34px]"
          style={{ width: "231px", height: "95.66px" }}
        >
          <Image
            src="/logo.png"
            alt="LSG Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Header & Description */}
        <div
          className="flex flex-col items-center gap-4 text-center mb-[80px]"
          style={{ maxWidth: "1195px" }}
        >
          <h1 className="font-semibold text-[#00EEFE] leading-[140%] text-[44px]">
            LegacySlabsGrading (LSG) – Official Score Definitions
          </h1>
          <p className="text-[#C9C9C9] text-[18px] font-normal">
            Each card is graded on a scale from LSG 10 to LSG 1 based on
            centering, corners, edges, and surface.
          </p>
        </div>

        {/* Main Content Container */}
        <div
          className="flex items-center justify-center"
          style={{ width: "100%", maxWidth: "1292px", height: "697.89px" }}
        >
          {/* Inner Container - Adjusted to allow overlapping */}
          <div
            className="flex flex-row items-center justify-center relative"
            style={{ width: "1072px", height: "697.89px" }}
          >
            {/* LEFT: Beta Component 
                z-0 ensures it stays behind the image.
            */}
            <div
              className="flex flex-col bg-[#141414] border-[1px] border-solid border-[#00EFFE] rounded-[12px] justify-between p-8 z-0 relative"
              style={{ width: "675px", height: "557.38px" }}
            >
              {/* Beta Top Header */}
              <h2 className="font-semibold text-[#00EFFE] leading-[130%] text-[44px]">
                LSG 10 – Flawless
              </h2>

              {/* Beta Description */}
              <p className="font-medium text-[#C9C9C9] text-[22px] leading-[130%]">
                A high-end card with near-perfect visual appeal. May have one or
                two minor, non-distracting imperfections such as soft corner,
                print speck, or slight off-centering.
              </p>

              {/* Beta Bullet Points */}
              <div className="flex flex-col gap-[14.34px]">
                <h3 className="font-medium text-[#A1C7D6] text-[22px] leading-[188%]">
                  Our streamlined process includes:
                </h3>
                <div className="flex flex-col gap-[14.34px]">
                  {bulletPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-[14.34px]"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center bg-[#00EFFE] rounded-full w-[35px] h-[35px]">
                        <FaCheck size={16} className="text-black" />
                      </div>
                      <span className="text-white text-[20px]">
                        <span className="font-semibold">{point.label}:</span>{" "}
                        {point.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beta Last Component */}
              <p className="font-medium text-[#A1C7D6] text-[22px]">
                A card with slight natural wear that still looks pristine in any
                case or display.{" "}
              </p>
            </div>

            {/* RIGHT: Image container
                ml-[-11px] pushes the image over the left component's border.
                z-10 ensures the image sits on top of the border.
            */}
            <div
              className="relative rounded-[9.2px] overflow-hidden ml-[-11px] z-10 bg-black"
              style={{
                width: "408px",
                height: "697.89px",
                padding: "15.34px 12.27px",
              }}
            >
              <Image
                src="/Hero3.png"
                alt="LSG 10 Card Display"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
