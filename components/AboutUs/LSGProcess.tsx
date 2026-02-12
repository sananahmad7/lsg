"use client";

import React from "react";

// --- DATA ---
const steps = [
  {
    id: "01",
    title: "Authentication",
    description: "Visual checks to verify originality and release",
    color: "#7C3AED", // Purple
    position: "top", // Row 1 Top
  },
  {
    id: "02",
    title: "Cleaning",
    description: "Light surface dust removal (no tampering)",
    color: "#D946EF", // Magenta
    position: "bottom", // Row 1 Bottom (Offset)
  },
  {
    id: "03",
    title: "Surface Evaluation",
    description: "Scans for damage, print flaws, and dirt",
    color: "#EC4899", // Pink
    position: "top", // Row 1 Top
  },
  {
    id: "04",
    title: "Corners, Edges, Centering",
    description: "Scored individually with subgrades",
    color: "#EF4444", // Red
    position: "bottom", // Row 2 Bottom (Visual flow: 3 -> 4)
  },
  {
    id: "05",
    title: "Final Grade",
    description: "An averaged result based on all four areas",
    color: "#22C55E", // Green
    position: "top", // Row 2 Top (Visual flow: 4 -> 5)
  },
  {
    id: "06",
    title: "Encapsulation",
    description: "Ultrasonically sealed, UV-protected, and tamper-proof slabs",
    color: "#3B82F6", // Blue
    position: "bottom", // Row 2 Bottom (Visual flow: 5 -> 6)
  },
];

export default function LSGProcess() {
  return (
    <section className="w-full bg-black py-20 px-4 lg:px-8 overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] flex flex-col gap-16 lg:gap-[60px]">
        {/* --- HEADER --- */}
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2
            className="text-[#00EFFE] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.3] tracking-[-0.01em]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The LSG Process
          </h2>
          <div className="w-full max-w-[763px] border-b border-white/10 pb-4">
            <p
              className="font-medium text-[18px] lg:text-[22px] leading-[140%] text-[#A1C7D6]"
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
              {/* Arrow 1 -> 2 */}
              <path
                d="M 250 120 Q 380 180 450 180"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              {/* Arrow 2 -> 3 */}
              <path
                d="M 750 180 Q 820 180 950 120"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              {/* Arrow 3 -> 4 */}
              <path
                d="M 1050 200 Q 1080 300 1050 400"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              {/* Arrow 4 -> 5 */}
              <path
                d="M 950 480 Q 820 420 750 420"
                fill="none"
                stroke="#A1C7D6"
                strokeWidth="1"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
              {/* Arrow 5 -> 6 */}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-[40px] lg:gap-x-10 relative z-10">
            {/* 1. Authentication (Col 1, Top) */}
            <div className="flex justify-center lg:justify-start lg:items-start">
              <StepItem step={steps[0]} />
            </div>

            {/* 2. Cleaning (Col 2, Middle) - Pushed down */}
            <div className="flex justify-center lg:items-center lg:pt-[120px]">
              <StepItem step={steps[1]} />
            </div>

            {/* 3. Surface (Col 3, Top) */}
            <div className="flex justify-center lg:justify-end lg:items-start">
              <StepItem step={steps[2]} />
            </div>

            {/* 6. Encapsulation (Col 1, Bottom) - Order swapped in code for visual grid placement */}
            <div className="flex justify-center lg:justify-start lg:items-end lg:pt-[120px] order-6 lg:order-4">
              <StepItem step={steps[5]} />
            </div>

            {/* 5. Final Grade (Col 2, Bottom) - Pushed up slightly relative to bottom row? No, centered. */}
            <div className="flex justify-center lg:items-center order-5 lg:order-5">
              <StepItem step={steps[4]} />
            </div>

            {/* 4. Corners (Col 3, Bottom) - Pushed down */}
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
    <div className="flex flex-col items-center gap-[12px] w-full max-w-[290px] text-center">
      {/* Icon Circle */}
      <div
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg"
        style={{ backgroundColor: step.color }}
      >
        <span
          className="text-white font-bold text-[20px] leading-none"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {step.id}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-white font-semibold text-[21.57px] leading-[100%]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-[#A1C7D6] font-normal text-[20px] leading-[32px]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {step.description}
      </p>
    </div>
  );
}
