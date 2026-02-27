"use client";

import React from "react";

// --- DATA ---
const steps = [
  {
    id: "01",
    title: "Authentication",
    description: "Visual checks to verify originality and release",
    color: "#8A00E6", // Purple
    position: "top",
  },
  {
    id: "02",
    title: "Cleaning",
    description: "Light surface dust removal (no tampering)",
    color: "#CB00E6", // Magenta
    position: "bottom",
  },
  {
    id: "03",
    title: "Surface Evaluation",
    description: "Scans for damage, print flaws, and dirt",
    color: "#E600D6", // Pink
    position: "top",
  },
  {
    id: "04",
    title: "Corners, Edges, Centering",
    description: "Scored individually with subgrades",
    color: "#E60004", // Red
    position: "bottom",
  },
  {
    id: "05",
    title: "Final Grade",
    description: "An averaged result based on all four areas",
    color: "#00E645", // Green
    position: "top",
  },
  {
    id: "06",
    title: "Encapsulation",
    description: "Ultrasonically sealed, UV-protected, and tamper-proof slabs",
    color: "#0060E6", // Blue
    position: "bottom",
  },
];

export default function LSGProcess() {
  return (
    <section className="w-full bg-black py-10 md:py-16 lg:py-20 px-4 lg:px-8 overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] flex flex-col gap-10 md:gap-14 lg:gap-[60px]">
        {/* --- HEADER --- */}
        <div className="w-full flex flex-col items-center gap-2 md:gap-3 lg:gap-4 text-center">
          <h2
            className="text-[#00EFFE] font-semibold text-[24px] xs:text-[32px] md:text-[38px] lg:text-[44px] leading-[1.3] tracking-[-0.01em]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The LSG Process
          </h2>
          <div className="w-full max-w-[763px] pb-2 lg:pb-4">
            <p
              className="font-medium text-[15px] md:text-[18px] lg:text-[22px] leading-[22px] md:leading-[28px] lg:leading-[32px] text-[#A1C7D6]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We’ve built a full in-house system for careful, consistent
              grading:
            </p>
          </div>
        </div>

        {/* --- PROCESS GRID --- */}
        <div className="relative w-full">
          {/* Desktop Curved Arrows Layer (SVG) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#A1C7D6" />
                </marker>
              </defs>
              <path
                d="M 250 120 Q 380 180 450 180"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              <path
                d="M 750 180 Q 820 180 950 120"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              <path
                d="M 1050 200 Q 1080 300 1050 400"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              <path
                d="M 950 480 Q 820 420 750 420"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              <path
                d="M 450 420 Q 380 420 250 480"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 md:gap-y-12 lg:gap-y-[40px] lg:gap-x-10 relative z-10">
            {/* 1. Authentication */}
            <div className="flex justify-center lg:justify-start lg:items-start">
              <StepItem step={steps[0]} />
            </div>

            {/* 2. Cleaning */}
            <div className="flex justify-center lg:items-center lg:pt-[120px]">
              <StepItem step={steps[1]} />
            </div>

            {/* 3. Surface */}
            <div className="flex justify-center lg:justify-end lg:items-start">
              <StepItem step={steps[2]} />
            </div>

            {/* 6. Encapsulation */}
            <div className="flex justify-center lg:justify-start lg:items-end lg:pt-[120px] order-6 lg:order-4">
              <StepItem step={steps[5]} />
            </div>

            {/* 5. Final Grade */}
            <div className="flex justify-center lg:items-center order-5 lg:order-5">
              <StepItem step={steps[4]} />
            </div>

            {/* 4. Corners */}
            <div className="flex justify-center lg:justify-end lg:items-end lg:pt-[120px] order-4 lg:order-6">
              <StepItem step={steps[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT ---

function StepItem({ step }: { step: (typeof steps)[0] }) {
  return (
    <div className="flex flex-col items-center gap-[8px] md:gap-[10px] lg:gap-[12px] w-full max-w-[290px] text-center">
      {/* Icon Circle: Gradual scale 45 -> 52 -> 60 */}
      <div
        className="w-[45px] h-[45px] md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: step.color }}
      >
        <span
          className="text-white font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-none"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {step.id}
        </span>
      </div>

      {/* Title: Gradual scale 17 -> 19 -> 21.57 */}
      <h3
        className="text-white font-semibold text-[17px] md:text-[19px] lg:text-[21.57px] leading-[1.2] lg:leading-[100%]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {step.title}
      </h3>

      {/* Description: Gradual scale 14 -> 17 -> 20 */}
      <p
        className="text-[#A1C7D6] font-normal text-[14px] md:text-[17px] lg:text-[20px] leading-[20px] md:leading-[26px] lg:leading-[32px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {step.description}
      </p>
    </div>
  );
}
