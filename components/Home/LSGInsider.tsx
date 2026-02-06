"use client";

import React, { useState } from "react";

export default function LSGInsider() {
  const [email, setEmail] = useState("");

  const onJoin = () => {
    console.log("Join:", email);
  };

  const desc = `Want To Stay Ahead In The World Of Collecting? Subscribe To
Get Early Access To New Graded Card Drops, Exclusive Deals You
Won’t Find Anywhere Else, And Instant Notifications When Fresh
Slabs Hit The Shop. Don’t Miss Your Chance To Grab The Next
Standout Piece For Your Collection.`;

  return (
    <section className="w-full bg-black py-16 px-4 lg:px-0">
      {/* Overall: 1272 x 377, radius 22, padding 55/32 */}
      <div
        className="
          mx-auto w-full max-w-[1272px]
          rounded-[22px] bg-[#383838]
          px-4 lg:px-[32px]
          py-10 lg:py-[55px]
          lg:h-[377px]
        "
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Inner box: 1191 x 267, gap 97 */}
        <div className="w-full lg:h-[267px] lg:max-w-[1191px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-[97px]">
          {/* Left: 713 x 267, gap 26 */}
          <div className="w-full lg:w-[713px] lg:h-[267px] flex flex-col justify-center gap-[36px]">
            {/* Header: 541 x 59 */}
            <div className="w-full lg:w-[551px] lg:h-[59px] flex items-center">
              <h2
                className="w-full font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[133%] tracking-[1px] text-center lg:text-left"
                style={{ color: "#00D0FF" }}
              >
                Join the LSG Insider List
              </h2>
            </div>

            {/* Description: 713 x 182 */}
            <p className="w-full lg:w-[713px] lg:h-[182px] font-normal text-[16px] sm:text-[18px] lg:text-[22px] leading-[100%] text-white/70 whitespace-pre-line">
              {desc}
            </p>
          </div>

          {/* Right: email input bar (381 x 62) vertically centered */}
          <div className="w-full lg:w-auto lg:h-[267px] flex lg:items-center justify-start lg:justify-end">
            <div
              className="
                w-full max-w-[381px] h-[62px]
                rounded-[10px] border border-white/20
                overflow-hidden flex items-stretch
              "
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="
                  flex-1 h-full bg-transparent
                  px-[20px] py-[19px]
                  text-white placeholder:text-white/40
                  outline-none rounded-l-[4px]
                  focus:border-[#00D0FF]
                "
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "151%",
                }}
              />

              <button
                type="button"
                onClick={onJoin}
                className="h-full w-[85px] rounded-r-[4px] border-l border-[#00D0FF] flex items-center justify-center"
                style={{
                  backgroundColor: "#00D0FF",
                  color: "#062126",
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "151%",
                }}
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
