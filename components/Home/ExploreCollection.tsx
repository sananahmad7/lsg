"use client";

import Image from "next/image";
import Link from "next/link";

// Data for the 4 cards
const collectionItems = [
  { id: 1, image: "/Hero1.png", name: "Disney Lorcana" },
  { id: 2, image: "/Hero2.png", name: "Pokémon" },
  { id: 3, image: "/Hero3.png", name: "Pokémon" },
  { id: 4, image: "/Hero4.png", name: "Yu-Gi-Oh!" },
];

export default function ExploreCollection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto w-full max-w-[1320px] px-6 xl:px-0">
        <div className="flex flex-col items-center gap-[50px]">
          {/* --- Section Header (Kept Same) --- */}
          <div className="w-full max-w-[708px] flex items-center justify-center">
            <h2
              className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[133%] tracking-[1px]"
              style={{ fontFamily: "Poppins, sans-serif", color: "#00EFFE" }}
            >
              Explore Our Collection
            </h2>
          </div>

          {/* --- Cards Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
            {collectionItems.map((item) => (
              // 1. OUTER CARD FIGMA
              // W: 308, H: 628, Radius: 20.91, Padding: 12px (Y) 9px (X)
              <div
                key={item.id}
                className="bg-[#111111] border border-gray-800 flex flex-col items-center box-border"
                style={{
                  width: "308px",
                  height: "628px",
                  borderRadius: "20.91px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "9px",
                  paddingRight: "9px",
                  gap: "12px",
                }}
              >
                {/* 2. INNER DIV (Content Wrapper) */}
                {/* W: 290, H: 601, Gap: 10 */}
                <div
                  className="flex flex-col items-center"
                  style={{
                    width: "290px",
                    height: "601px",
                    gap: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {/* 3. LOGO (Top) */}
                  {/* W: 128, H: 45 */}
                  <div
                    className="relative flex-shrink-0"
                    style={{ width: "128px", height: "45px" }}
                  >
                    {/* Placeholder for logo - center aligned */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                      <Image
                        src="/Logo.png"
                        alt="Logo"
                        width={128}
                        height={45}
                      />
                    </div>
                  </div>

                  {/* 4. IMAGE + INFO CONTAINER (Below Logo) */}
                  {/* W: 290, H: 542, Gap: 13 */}
                  <div
                    className="flex flex-col items-center"
                    style={{
                      width: "290px",
                      height: "542px",
                      gap: "13px",
                    }}
                  >
                    {/* 5. CARD IMAGE */}
                    {/* W: 290, H: 490 */}
                    <div
                      className="relative overflow-hidden rounded-[12px]"
                      style={{ width: "290px", height: "490px" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="290px"
                      />
                    </div>

                    {/* 6. FOOTER PARENT (Name + Button) */}
                    {/* W: 270, H: 39, Justify: Space-Between */}
                    <div
                      className="flex items-center justify-between"
                      style={{
                        width: "270px",
                        height: "39px",
                      }}
                    >
                      {/* Name Text */}
                      <span
                        className="text-white flex items-center"
                        style={{
                          width: "140px",
                          height: "30px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "29.04px",
                          letterSpacing: "1.16px",
                        }}
                      >
                        {item.name}
                      </span>

                      {/* View Detail Button */}
                      <button
                        className="bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] text-black hover:bg-[#00D0FF]/90 transition-colors flex items-center justify-center"
                        style={{
                          width: "113px",
                          height: "39px",
                          borderRadius: "10.29px",
                          borderWidth: "0.86px",
                          padding: "9.43px 21.43px",
                          gap: "2.57px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Sora, sans-serif",
                            fontWeight: 700,
                            fontSize: "13.71px",
                            lineHeight: "151%",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          View Details
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
