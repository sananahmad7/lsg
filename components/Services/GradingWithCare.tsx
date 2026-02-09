"use client";

import Image from "next/image";
import Link from "next/link";

export default function GradingWithCare() {
  return (
    <section className="w-full bg-black py-10">
      {/* Outer Frame (Figma: Whole Component) 
        W: 1440 (max), H: 607
        Padding: 25px (Y), 70px (X)
        Border: 1px, Radius: 12px
      */}
      <div className="mx-auto w-full  px-4 lg:px-0">
        <div
          className="w-full relative overflow-hidden flex items-center justify-center"
          style={{
            // Exact Figma Gradient & Border
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.084) 0%, rgba(217, 217, 217, 0.042) 100%)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)", // Added slight opacity to border for realism
            paddingTop: "75px",
            paddingBottom: "75px",
          }}
        >
          {/* Desktop Padding Override to match Figma 70px */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none"
            style={{ paddingLeft: "70px", paddingRight: "70px" }}
          />

          {/* Inner Component "Beta" 
            W: 1179.52, H: 488, Gap: 97px
          */}
          <div className="w-full max-w-[1179px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-[97px] px-4 lg:px-[70px]">
            {/* LEFT INNER COMPONENT 
              W: 715, H: 423
            */}
            <div className="w-full lg:w-[715px] flex flex-col gap-[40px]">
              {/* Heading: H: 66px */}
              <div className="w-full">
                <h2
                  className="font-semibold text-[#00D0FF]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "44px", // Assumed based on height/style, adaptable for mobile
                    lineHeight: "110%",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span className="block text-[28px] sm:text-[36px] lg:text-[44px]">
                    Grading With Care & Protection
                  </span>
                </h2>
              </div>

              {/* Description Text 
                W: 678, H: 217
                Font: Poppins, 500 (Medium), 22px, 140% LH
              */}
              <div className="w-full lg:max-w-[678px]">
                <p
                  className="text-white/80"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "22px",
                    lineHeight: "140%",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span className="block text-[16px] sm:text-[18px] lg:text-[22px]">
                    At LSG, we grade cards using our own scale, and we only work
                    with cards from our own collection. Every slab is sealed and
                    secured for long-term preservation, with attention to
                    condition, presentation, and collector value.
                    <br />
                    <br />
                    We clean the card moderately (no tampering), seal it with
                    tamper-proof slabs, and display it in its best form — ready
                    for any collection.
                  </span>
                </p>
              </div>

              {/* Button 
                W: 237, H: 60, Radius: 12px
              */}
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center transition-transform hover:scale-105"
                  style={{
                    width: "237px",
                    height: "60px",
                    backgroundColor: "#00D0FF",
                    borderRadius: "12px",
                    border: "1px solid #00D0FF",
                    padding: "11px 25px",
                    gap: "3px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "151%",
                      color: "#062126",
                      textAlign: "center",
                    }}
                  >
                    Learn More
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT INNER COMPONENT (Image)
              W: 433.71, H: 468.84
            */}
            <div className="relative flex-shrink-0">
              <div className="relative w-[280px] sm:w-[360px] lg:w-[433.7px] h-[300px] sm:h-[390px] lg:h-[468.8px]">
                <Image
                  src="/pika.png"
                  alt="Pokemon Cards Collage"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 434px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
