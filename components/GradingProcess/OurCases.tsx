"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function OurCases() {
  return (
    <section className="w-full flex bg-black justify-center">
      {/* --- Main Component --- 
          Width: 1200px
          Height: 1764px
          Gap: 40px
      */}
      <div
        className="w-full flex flex-col items-center"
        style={{
          maxWidth: "1200px",
          height: "1764px",
          gap: "40px",
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      >
        {/* --- Header Component --- */}
        <div
          className="w-full flex items-center justify-center"
          style={{
            height: "90px",
            maxWidth: "1200px",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
        >
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "60px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#00D0FF",
            }}
          >
            Our Cases
          </h2>
        </div>

        {/* --- Content Gradient Container --- */}
        <div
          className="w-full flex flex-col items-center border-white/10 "
          style={{
            maxWidth: "1200px",
            height: "1634px",
            gap: "30px",
            opacity: 1,
            transform: "rotate(0deg)",
            borderRadius: "12px",
            borderWidth: "1px",
            paddingTop: "45px",
            paddingRight: "70px",
            paddingBottom: "45px",
            paddingLeft: "70px",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.084) 0%, rgba(217, 217, 217, 0.042) 100%)",
          }}
        >
          {/* --- A1 (Inner Component) --- 
              Width: 1124px, Height: 1544px, Gap: 50px
          */}
          <div
            className="flex flex-col items-center justify-start border-yellow-900/0 "
            style={{
              maxWidth: "1124px",
              width: "100%",
              height: "1544px",
              gap: "50px",
              opacity: 1,
              transform: "rotate(0deg)",
              borderRadius: "12px",
            }}
          >
            {/* =========================================
                1. FRONT SLAB (Image Left)
               ========================================= */}
            <div
              className="flex flex-row items-center border-red-900/0"
              style={{
                maxWidth: "1078px",
                width: "100%",
                height: "656px",
                justifyContent: "space-between",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              {/* LEFT: Image */}
              <div
                className="relative"
                style={{
                  width: "354px",
                  height: "606px",
                  gap: "10px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  borderRadius: "6px",
                  padding: "10px 8px",
                }}
              >
                <div className="relative w-full h-full flex items-center justify-start">
                  <div className="relative w-full h-full">
                    <Image
                      src="/SlabDisplay.png"
                      alt="Front Slab Display"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Text */}
              <div
                className="flex flex-col justify-center"
                style={{
                  width: "602.47px",
                  height: "514.54px",
                  gap: "20.08px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                }}
              >
                <div
                  style={{
                    width: "602.47px",
                    height: "79px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: "44px",
                      lineHeight: "180%",
                      color: "#FFFFFF",
                    }}
                  >
                    Front Slab Display
                  </h3>
                </div>

                <div style={{ width: "602.47px", height: "132px" }}>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "100%",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    The front of the slab showcases your card and its overall
                    grade, providing a clear view of its condition. Each
                    custom-made banner matches the card perfectly for a premium
                    look.
                  </p>
                </div>

                <div
                  style={{
                    width: "585.83px",
                    height: "263.38px",
                    gap: "14.34px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "188%",
                      color: "#A1C7D6",
                    }}
                  >
                    Every Front Display includes:
                  </span>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Unique barcode for quick verification",
                      "Unique serial number for secure authentication.",
                      "Detailed card name, including language, expansion, and exact title.",
                      "Metallic silver-textured logo for authenticity",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#00D0FF] mt-1"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <FaCheck size={12} color="#000" />
                        </div>
                        <span
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* =========================================
                2. BACK SLAB (Text Left, Image Right)
               ========================================= */}
            <div
              className="flex flex-row items-center border-blue-900/0"
              style={{
                maxWidth: "1078px",
                width: "100%",
                height: "656px",
                justifyContent: "space-between",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              {/* LEFT: Text Content */}
              <div
                className="flex flex-col justify-center"
                style={{
                  width: "602.47px",
                  height: "514.54px",
                  gap: "20.08px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                }}
              >
                <div
                  style={{
                    width: "602.47px",
                    height: "79px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: "44px",
                      lineHeight: "180%",
                      color: "#FFFFFF",
                    }}
                  >
                    Back Slab Display
                  </h3>
                </div>

                <div style={{ width: "602.47px", height: "132px" }}>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "100%",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    The back of the slab is designed for easy verification and
                    maximum security.
                  </p>
                </div>

                <div
                  style={{
                    width: "585.83px",
                    height: "263.38px",
                    gap: "14.34px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "188%",
                      color: "#A1C7D6",
                    }}
                  >
                    It includes:
                  </span>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Silver-textured logo to signify authenticity",
                      "Embedded QR code for instant access to the card's details",
                      "Crystal-clear, UV-resistant sealed display to preserve the card's condition",
                      "Tamper-evident construction for added security",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#00D0FF] mt-1"
                          style={{ width: "24px", height: "24px" }}
                        >
                          <FaCheck size={12} color="#000" />
                        </div>
                        <span
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                            fontSize: "20px",
                            lineHeight: "100%",
                            color: "#FFFFFF",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: Image Content */}
              <div
                className="relative"
                style={{
                  width: "354px",
                  height: "606px",
                  gap: "10px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  borderRadius: "6px",
                  padding: "10px 8px",
                }}
              >
                <div className="relative w-full h-full flex items-center justify-end">
                  <div className="relative w-full h-full">
                    <Image
                      src="/BackSlabDisplay.png" // Assumed filename
                      alt="Back Slab Display"
                      fill
                      className="object-contain object-right"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================
                3. DISCLAIMER (Bottom Component)
               ========================================= */}
            <div
              style={{
                width: "1124px",
                height: "132px",
                opacity: 1,
                transform: "rotate(0deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#A1C7D6",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                Please Note: LSG Custom Grading is a collector-based,
                independent grading project and is not affiliated with
                professional third-party grading companies such as PSA, CGC,
                ACE, or others. The assigned grade is based on an independent
                evaluation, and is intended for display purposes. It should not
                be considered an official certification or compared to
                professional grading services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
