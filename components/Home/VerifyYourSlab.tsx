"use client";

import Image from "next/image";
import { useState } from "react";

export default function VerifyYourSlab() {
  const [serial, setSerial] = useState("");

  const onVerify = () => {
    // TODO: wire to your verify flow (route or API)
    // Example: router.push(`/verify-slab?serial=${encodeURIComponent(serial)}`)
    console.log("Verify serial:", serial);
  };

  return (
    <section className="w-full bg-black py-14">
      {/* Outer Component (1240 x 516, padding 25/70, radius 12, border 1) */}
      <div
        className="
          mx-auto w-full max-w-[1240px]
          rounded-[12px] border border-white/10
          px-4 py-[25px]
          lg:px-[70px] bg-[#171717]
        "
      >
        {/* Inner Component (bg #171717, 1159 x 466, space-between) */}
        <div
          className="
            w-full rounded-[12px] 
            flex flex-col gap-8
            lg:flex-row lg:items-center lg:justify-between
            px-4 py-6
            lg:px-0 lg:py-0
          "
        >
          {/* Left: Image (578.66 x 465.99) */}
          <div className="w-full lg:w-[578.6654663085938px]">
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[465.9911804199219px]">
              <Image
                src="/cards.png"
                alt="Graded cards"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 578px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="
              w-full lg:w-[578.6654663085938px]
              flex flex-col justify-center
              px-0 lg:pr-6
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {/* Heading */}
            <h2 className="text-center lg:text-left font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[140%] text-[#00D0FF]">
              Verify Your Slab
            </h2>

            {/* Description */}
            <p className="mt-4 text-center lg:text-left font-normal text-[16px] sm:text-[18px] lg:text-[22px] leading-[160%] text-white/70">
              Quickly confirm the authenticity of your graded card using our
              verification tool. Enter the unique serial number below to access
              full grading details and verify it’s legit — straight from the
              source.
            </p>

            {/* Input + Button Row */}
            <div className="mt-6 flex w-full flex-col sm:flex-row gap-3 sm:gap-0">
              {/* Input */}
              <input
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                placeholder="Enter Slab Serial Number"
                className="
                  h-[61px] w-full
                  rounded-[12px] sm:rounded-r-none
                  border border-white/20
                  bg-transparent
                  px-4
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-[#00D0FF]
                "
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 16,
                  lineHeight: "151%",
                }}
              />

              {/* Button (139 x 61) */}
              <button
                type="button"
                onClick={onVerify}
                className="
                  h-[61px]
                  w-full sm:w-[179px]
                  rounded-[12px] sm:rounded-l-none
                  border
                  px-[25px] py-[11px]
                  font-semibold
                  transition-transform hover:scale-[1.02] active:scale-[0.98]
                "
                style={{
                  backgroundColor: "#00D0FF",
                  borderColor: "#00D0FF",
                  color: "#062126",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Verify Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
