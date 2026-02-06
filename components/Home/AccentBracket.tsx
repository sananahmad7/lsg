"use client";

import React from "react";
import {
  MdOutlineFactCheck,
  MdOutlineSearch,
  MdOutlineCenterFocusStrong,
  MdOutlineAssignmentTurnedIn,
  MdOutlineCleaningServices,
  MdOutlineCropFree,
  MdOutlineCropDin,
  MdOutlineInventory2,
} from "react-icons/md";

type Step = {
  side: "left" | "right";
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
};

const steps: Step[] = [
  {
    side: "left",
    title: "Card Authentication",
    description:
      "We inspect the card to confirm it’s authentic and from an original release. While we do our best, we do not guarantee 100% authenticity.",
    icon: <MdOutlineFactCheck size={28} color="#fff" />,
    iconBg: "#F5B000",
  },
  {
    side: "right",
    title: "Cleaning",
    description:
      "We gently clean the card to remove dust and light particles— no tampering or surface changes involved. The goal is to preserve the card’s original state.",
    icon: <MdOutlineCleaningServices size={28} color="#fff" />,
    iconBg: "#2F80FF",
  },
  {
    side: "left",
    title: "Surface Evaluation",
    description:
      "We check the surface for scratches, dents, stains, or printing flaws that affect visual appeal and grade.",
    icon: <MdOutlineSearch size={28} color="#fff" />,
    iconBg: "#FF3B30",
  },
  {
    side: "right",
    title: "Corners Assessment",
    description:
      "We examine each corner to make sure they’re sharp, clean, and free from whitening or damage.",
    icon: <MdOutlineCropFree size={28} color="#fff" />,
    iconBg: "#22C55E",
  },
  {
    side: "left",
    title: "Centering Analysis",
    description:
      "We analyze front and back alignment to ensure the design is centered and balanced — a key part of grading.",
    icon: <MdOutlineCenterFocusStrong size={28} color="#fff" />,
    iconBg: "#FF4D4D",
  },
  {
    side: "right",
    title: "Edges",
    description:
      "We inspect the card’s edges for chipping, dings, or wear that might affect its presentation and protection.",
    icon: <MdOutlineCropDin size={28} color="#fff" />,
    iconBg: "#FF4DCC",
  },
  {
    side: "left",
    title: "Final Grade Assignment",
    description:
      "We assign individual sub-grades (1–10) for surface, corners, edges, and centering — which combine into your card’s overall score.",
    icon: <MdOutlineAssignmentTurnedIn size={28} color="#fff" />,
    iconBg: "#2F80FF",
  },
  {
    side: "right",
    title: "Encapsulation",
    description:
      "Once graded, the card is sealed in a tamper-proof slab with UV protection — ready for long-term collecting or display.",
    icon: <MdOutlineInventory2 size={28} color="#fff" />,
    iconBg: "#7C3AED",
  },
];

function AccentBracket({ side }: { side: "left" | "right" }) {
  const GAP_X = 14; // distance from the card
  const EXT_Y = 14; // extends above/below card
  const THICK = 4; // cyan thickness
  const SEG_W = 240; // how far it runs along top/bottom (over the card)
  const R = 26; // rounded outer corner

  const glow =
    "pointer-events-none absolute bg-[#00D0FF] shadow-[0_0_16px_rgba(0,208,255,0.6)]";

  if (side === "right") {
    // bracket sits OUTSIDE right edge, segments extend LEFT (toward the card)
    return (
      <>
        {/* Vertical */}
        <span
          className={glow}
          style={{
            right: -GAP_X,
            top: -EXT_Y,
            bottom: -EXT_Y,
            width: THICK,
            borderRadius: R,
          }}
        />

        {/* Top */}
        <span
          className={glow}
          style={{
            right: -GAP_X, // align to vertical
            top: -EXT_Y,
            height: THICK,
            width: SEG_W, // extends LEFT from right edge
            borderTopRightRadius: R,
            borderBottomRightRadius: R,
          }}
        />

        {/* Bottom */}
        <span
          className={glow}
          style={{
            right: -GAP_X, // align to vertical
            bottom: -EXT_Y,
            height: THICK,
            width: SEG_W, // extends LEFT from right edge
            borderTopRightRadius: R,
            borderBottomRightRadius: R,
          }}
        />
      </>
    );
  }

  // side === "left"
  // bracket sits OUTSIDE left edge, segments extend RIGHT (toward the card)
  return (
    <>
      {/* Vertical */}
      <span
        className={glow}
        style={{
          left: -GAP_X,
          top: -EXT_Y,
          bottom: -EXT_Y,
          width: THICK,
          borderRadius: R,
        }}
      />

      {/* Top */}
      <span
        className={glow}
        style={{
          left: -GAP_X, // align to vertical
          top: -EXT_Y,
          height: THICK,
          width: SEG_W, // extends RIGHT from left edge
          borderTopLeftRadius: R,
          borderBottomLeftRadius: R,
        }}
      />

      {/* Bottom */}
      <span
        className={glow}
        style={{
          left: -GAP_X, // align to vertical
          bottom: -EXT_Y,
          height: THICK,
          width: SEG_W, // extends RIGHT from left edge
          borderTopLeftRadius: R,
          borderBottomLeftRadius: R,
        }}
      />
    </>
  );
}

function DottedArrow({ dir }: { dir: "toRight" | "toLeft" }) {
  const dotsStyle: React.CSSProperties = {
    backgroundImage:
      "radial-gradient(circle, rgba(0,208,255,1) 1.4px, transparent 1.6px)",
    backgroundSize: "10px 2px",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "left center",
    filter: "drop-shadow(0 0 10px rgba(0,208,255,0.45))",
  };

  return (
    <div className="relative w-full h-[2px]">
      <div className="absolute inset-0" style={dotsStyle} />

      {/* Arrow head points to center line */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          dir === "toRight" ? "right-0" : "left-0"
        }`}
        style={{
          width: 0,
          height: 0,
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
          ...(dir === "toRight"
            ? { borderLeft: "10px solid #00D0FF" }
            : { borderRight: "10px solid #00D0FF" }),
          filter: "drop-shadow(0 0 10px rgba(0,208,255,0.45))",
        }}
      />
    </div>
  );
}

function StepCard({
  title,
  description,
  icon,
  iconBg,
  accentSide,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  accentSide: "left" | "right";
}) {
  return (
    <div
      className="
        relative h-[237px] w-[505px]
        rounded-[12px] bg-[#3A3A3A]
        px-[28px] py-[17px]
        flex flex-col gap-[10px]
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        overflow-visible
      "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <AccentBracket side={accentSide} />

      <div
        className="h-[60px] w-[60px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <h3 className="font-semibold text-[24px] leading-[130%] tracking-[0px] text-white">
        {title}
      </h3>

      <p className="font-normal text-[16px] leading-[150%] text-white/70">
        {description}
      </p>
    </div>
  );
}

export default function OurGradingProcess() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[70px] py-20 lg:py-24">
        <div className="flex flex-col items-center gap-[50px]">
          <h2
            className="text-center font-bold text-[32px] sm:text-[40px] lg:text-[44px] leading-[140%]"
            style={{ fontFamily: "Poppins, sans-serif", color: "#00D0FF" }}
          >
            Our Grading Process
          </h2>

          {/* Desktop timeline */}
          <div className="hidden lg:block w-full max-w-[1236px] mx-auto">
            <div className="relative">
              {/* Center vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[30px] flex justify-center">
                <div className="w-[4px] rounded-full bg-[#00D0FF] shadow-[0_0_18px_rgba(0,208,255,0.55)]" />
              </div>

              <div className="flex flex-col gap-[60px]">
                {steps.map((s, idx) => (
                  <div
                    key={`${s.title}-${idx}`}
                    className="grid items-center grid-cols-[505px_98px_30px_98px_505px] relative"
                  >
                    {/* LEFT SLOT */}
                    <div className="flex justify-end">
                      {s.side === "left" ? (
                        <StepCard
                          title={s.title}
                          description={s.description}
                          icon={s.icon}
                          iconBg={s.iconBg}
                          accentSide="right"
                        />
                      ) : (
                        <div className="w-[505px]" />
                      )}
                    </div>

                    {/* LEFT CONNECTOR (dotted + arrow to center) */}
                    <div className="flex items-center justify-center">
                      {s.side === "left" ? (
                        <DottedArrow dir="toRight" />
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* CENTER NODE */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="h-[16px] w-[16px] rounded-full bg-[#00D0FF] shadow-[0_0_18px_rgba(0,208,255,0.65)]" />
                    </div>

                    {/* RIGHT CONNECTOR (dotted + arrow to center) */}
                    <div className="flex items-center justify-center">
                      {s.side === "right" ? (
                        <DottedArrow dir="toLeft" />
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* RIGHT SLOT */}
                    <div className="flex justify-start">
                      {s.side === "right" ? (
                        <StepCard
                          title={s.title}
                          description={s.description}
                          icon={s.icon}
                          iconBg={s.iconBg}
                          accentSide="left"
                        />
                      ) : (
                        <div className="w-[505px]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / Tablet timeline (unchanged) */}
          <div className="lg:hidden w-full max-w-[720px] mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-[10px] top-0 bottom-0 w-[4px] rounded-full bg-[#00D0FF] shadow-[0_0_18px_rgba(0,208,255,0.55)]" />
              <div className="flex flex-col gap-6">
                {steps.map((s, idx) => (
                  <div key={`${s.title}-m-${idx}`} className="relative">
                    <div className="absolute left-[-2px] top-[26px] h-[16px] w-[16px] rounded-full bg-[#00D0FF] shadow-[0_0_18px_rgba(0,208,255,0.65)]" />
                    <div
                      className="rounded-[12px] bg-[#3A3A3A] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <div
                        className="h-[60px] w-[60px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: s.iconBg }}
                      >
                        {s.icon}
                      </div>

                      <h3 className="mt-3 font-semibold text-[20px] leading-[130%] text-white">
                        {s.title}
                      </h3>

                      <p className="mt-2 font-normal text-[15px] leading-[150%] text-white/70">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
