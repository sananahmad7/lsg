"use client";

import React, { useState } from "react";

export default function LSGInsider() {
  const [email, setEmail] = useState("");

  const onJoin = () => {
    console.log("Join:", email);
  };

  return (
    <section className="w-full bg-black py-16 px-4 lg:px-8">
      {/* Main Container:
        - Max width constrained for large screens
        - Background dark gray
        - Rounded corners
        - Responsive padding
      */}
      <div
        className="
          mx-auto w-full max-w-[1272px]
          rounded-[22px] bg-[#383838]
          px-6 py-10 
          sm:px-10 sm:py-12
          lg:px-[55px] lg:py-[55px]
        "
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Content Wrapper:
          - Flex column on mobile (stack vertical)
          - Flex row on large screens (side-by-side)
          - Gap handles spacing between text and form
        */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[700px] text-center lg:text-left">
            <h2
              className="font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[130%] tracking-[1px]"
              style={{ color: "#00D0FF" }}
            >
              Join the LSG Insider List
            </h2>

            <p className="font-normal text-[16px] sm:text-[18px] lg:text-[22px] leading-[160%] text-[#A1C7D6]">
              Want to stay ahead in the world of collecting? Subscribe to get
              early access to new graded card drops, exclusive deals you won’t
              find anywhere else, and instant notifications when fresh slabs hit
              the shop. Don’t miss your chance to grab the next standout piece
              for your collection.
            </p>
          </div>

          {/* --- RIGHT SIDE: EMAIL FORM --- */}
          {/* Centered vertically relative to the text block on desktop */}
          <div className="w-full lg:w-auto flex flex-col justify-center items-center lg:items-end lg:h-full lg:self-center">
            <div
              className="
                w-full max-w-[400px] h-[62px]
                rounded-[10px] border border-white/20
                flex items-stretch overflow-hidden
                bg-[#383838]
              "
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="
                  flex-1 h-full bg-transparent
                  px-[20px]
                  text-white placeholder:text-white/40
                  outline-none text-[16px]
                  focus:bg-white/5 transition-colors
                "
                style={{
                  fontWeight: 400,
                  lineHeight: "151%",
                }}
              />

              <button
                type="button"
                onClick={onJoin}
                className="
                  h-full w-[90px] sm:w-[120px] 
                  bg-[#00D0FF] hover:bg-[#00D0FF]/90 transition-colors
                  text-[#062126] font-bold text-[16px]
                  flex items-center justify-center
                "
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
