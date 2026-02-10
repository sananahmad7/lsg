"use client";

import { FaCheck } from "react-icons/fa";

export default function WhatMakesLSGDifferent() {
  return (
    <section className="w-full bg-black py-16 px-4 lg:px-8">
      {/* Outer Container:
        - Max Width: 1300px
        - Flex Column with 50px gap
      */}
      <div className="mx-auto w-full max-w-[1300px] flex flex-col gap-10 lg:gap-[50px]">
        {/* --- TOP HEADER --- */}
        <div className="w-full flex justify-center">
          <h2
            className="text-[#00D0FF] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.3] lg:leading-[60px] tracking-[-0.02em] text-center capitalize"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            What Makes LSG Different?
          </h2>
        </div>

        {/* --- GRID SECTION (4 Boxes) --- */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-[50px] lg:gap-x-[100px]">
          {/* Box 1 */}
          <InfoBox
            title="No Submissions – Only Premium Picks"
            description="We Don't Grade Outside Cards. Every Slabbed Card Comes From Our Collection, Meaning You Never Have To Wonder If Something Was Rushed Or Unfairly Graded."
          />
          {/* Box 2 */}
          <InfoBox
            title="Custom LSG Grading Scale"
            description="Our Cards Are Graded On Four Criteria — Centering, Surface, Edges, And Corners — Each Scored From 1 To 10, Then Averaged For A Final Grade. These Scores Are Fully Viewable Via Our Online Verification Tool."
          />
          {/* Box 3 */}
          <InfoBox
            title="Silver-Textured Slabs"
            description="Forget Overdone Holographics — LSG Slabs Use A Clean, Metallic Silver Texture Across All Label Elements. It's Modern, Minimal, And Made To Stand Out."
          />
          {/* Box 4 */}
          <InfoBox
            title="Display-First Design"
            description="We Focus On Presentation. From Our Bold Labels To The Slab Materials Themselves, Everything Is Built With Display Collectors In Mind."
          />
        </div>

        {/* --- BOTTOM WIDE BOX --- */}
        <div className="w-full bg-[#0B0B0B] rounded-[16px] border-l-[4px] border-[#00EFFE] p-6 lg:py-[20px] lg:px-[39px]">
          <div className="flex flex-col gap-6 lg:gap-4">
            {/* Title & Subtitle */}
            <div className="flex flex-col gap-[10px]">
              <h3
                className="text-white font-semibold text-[24px] leading-[1.2] capitalize"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Verification Made Easy
              </h3>
              <p
                className="text-white/70 font-normal text-[16px] leading-[1.5] capitalize"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Every Slab Includes:
              </p>
            </div>

            {/* Checkmark Items (Horizontal on Desktop, Stack on Mobile) */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8 w-full mt-2">
              <CheckItem text="Serial Number Next To Our Logo" />
              <CheckItem text="Scannable QR Code On The Back" />
              <CheckItem text="Exclusive Verification Page For Each Slab" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function InfoBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        w-full lg:max-w-[599px] h-auto lg:h-[167px]
        bg-[#0B0B0B]
        border-l-[4px] border-[#00EFFE]
        rounded-[16px]
        p-6 lg:py-[20px] lg:px-[39px]
        flex flex-col justify-center gap-[10px]
      "
    >
      <h3
        className="text-white font-semibold text-[20px] lg:text-[22px] leading-[1.3] capitalize"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-white/70 font-normal text-[14px] lg:text-[16px] leading-[1.6] capitalize"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="flex-shrink-0 flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#00EFFE]">
        <FaCheck size={12} color="#000" />
      </div>
      <span
        className="text-white font-normal text-[16px] leading-[1.5] capitalize"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
}
