"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation"; // [ADD THIS]
import { FaCheck } from "react-icons/fa";

export default function GradingScaleHero() {
  const searchParams = useSearchParams(); // [ADD THIS]

  // Get the 'img' parameter from URL, fallback to Hero3 if null
  const cardImage = searchParams.get("img") || "/Hero3.png";

  const bulletPoints = [
    { label: "Corners", value: "Up to 1 soft tip allowed" },
    { label: "Edges", value: "Slight edge touch on one side" },
    { label: "Surface", value: "Minor gloss variation or a light roller line" },
    { label: "Centering", value: "Acceptable up to 60/40 front, 80/20 back" },
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden font-poppins">
      {/* ... BACKGROUND LAYER REMAINS SAME ... */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative opacity-100 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[1097.12px] lg:h-[1097.12px]">
          <Image
            src="/result.png"
            alt="Background rings"
            fill
            priority
            className="object-contain opacity-[0.77]"
          />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center pt-[50px] pb-[50px] lg:pb-[100px] px-4">
        {/* ... LOGO AND HEADER REMAIN SAME ... */}
        <div className="relative mb-[23.34px] w-[150px] h-[62px] lg:w-[231px] lg:h-[95.66px]">
          <Image
            src="/logo.png"
            alt="LSG Logo"
            fill
            className="object-contain "
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-center mb-10 lg:mb-[80px] w-full max-w-[1195px]">
          <h1 className="font-semibold text-[#00EEFE] leading-[120%] lg:leading-[140%] text-[28px] sm:text-[36px] lg:text-[44px]">
            LegacySlabsGrading (LSG) – Official Score Definitions
          </h1>
          <p className="text-[#C9C9C9] text-[15px] sm:text-[18px] font-normal px-4">
            Each card is graded on a scale from LSG 10 to LSG 1 based on
            centering, corners, edges, and surface — while maintaining more
            flexible, collector-friendly standards.
          </p>
        </div>

        <div className="flex items-center justify-center w-full max-w-[1292px] lg:h-[697.89px]">
          <div className="flex flex-col lg:flex-row items-center justify-center relative w-full lg:w-[1072px] lg:h-[697.89px] gap-10 lg:gap-0">
            {/* LEFT COMPONENT REMAINS SAME */}
            <div className="flex flex-col bg-[#141414] border-[1px] border-solid border-[#00EFFE] rounded-[12px] justify-between p-6 sm:p-8 z-0 relative w-full lg:w-[675px] h-auto lg:h-[557.38px] gap-6 lg:gap-0">
              <h2 className="font-semibold text-[#00EFFE] leading-[130%] text-[32px] lg:text-[44px]">
                LSG 10 – Flawless
              </h2>
              <p className="font-medium text-[#C9C9C9] text-[18px] lg:text-[22px] leading-[140%] lg:leading-[130%]">
                A high-end card with near-perfect visual appeal. May have one or
                two minor, non-distracting imperfections such as soft corner,
                print speck, or slight off-centering.
              </p>
              <div className="flex flex-col gap-[14.34px] w-full lg:w-[585.83px]">
                <h3 className="font-medium text-[#A1C7D6] text-[18px] lg:text-[22px] leading-[140%] lg:leading-[188%]">
                  Our streamlined process includes:
                </h3>
                <div className="flex flex-col gap-[14.34px]">
                  {bulletPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start lg:items-center gap-[14.34px] w-full"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center bg-[#00EFFE] rounded-full w-[28px] h-[28px] lg:w-[35px] lg:h-[35px] mt-1 lg:mt-0">
                        <FaCheck
                          size={12}
                          className="text-black lg:text-[16px]"
                        />
                      </div>
                      <span className="text-white text-[16px] lg:text-[20px] leading-[140%] lg:leading-[100%]">
                        <span className="font-semibold">{point.label}:</span>{" "}
                        {point.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-medium text-[#A1C7D6] text-[18px] lg:text-[22px] leading-[140%] lg:leading-normal">
                A card with slight natural wear that still looks pristine in any
                case or display.
              </p>
            </div>

            {/* RIGHT: DYNAMIC Image container */}
            <div
              className="relative rounded-[9.2px] overflow-hidden lg:ml-[-11px] z-10 bg-black w-[280px] h-[480px] sm:w-[350px] sm:h-[600px] lg:w-[408px] lg:h-[697.89px]"
              style={{ padding: "15.34px 12.27px" }}
            >
              <Image
                src={cardImage} // [MODIFIED: Uses variable from URL]
                alt="Selected Graded Card"
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
