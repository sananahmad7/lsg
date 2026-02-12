"use client";

import React from "react";
import Image from "next/image";

// --- TYPES ---
type Step = {
  side: "left" | "right";
  title: string;
  description: string;
  imageSrc: string; // Updated from icon
};

const steps: Step[] = [
  {
    side: "left",
    title: "Card Authentication",
    description:
      "We inspect the card to confirm it’s authentic and from an original release. While we do our best, we do not guarantee 100% authenticity.",
    imageSrc: "/CardAuth.png",
  },
  {
    side: "right",
    title: "Cleaning",
    description:
      "We gently clean the card to remove dust and light particles— no tampering or surface changes involved. The goal is to preserve the card’s original state.",
    imageSrc: "/Cleaning.png",
  },
  {
    side: "left",
    title: "Surface Evaluation",
    description:
      "We check the surface for scratches, dents, stains, or printing flaws that affect visual appeal and grade.",
    imageSrc: "/Eval.png",
  },
  {
    side: "right",
    title: "Corners Assessment",
    description:
      "We examine each corner to make sure they’re sharp, clean, and free from whitening or damage.",
    imageSrc: "/Corners.png",
  },
  {
    side: "left",
    title: "Centering Analysis",
    description:
      "We analyze front and back alignment to ensure the design is centered and balanced — a key part of grading.",
    imageSrc: "/Centering.png",
  },
  {
    side: "right",
    title: "Edges",
    description:
      "We inspect the card’s edges for chipping, dings, or wear that might affect its presentation and protection.",
    imageSrc: "/Edges.png",
  },
  {
    side: "left",
    title: "Final Grade Assignment",
    description:
      "We assign individual sub-grades (1–10) for surface, corners, edges, and centering — which combine into your card’s overall score.",
    imageSrc: "/Assignment.png",
  },
  {
    side: "right",
    title: "Encapsulation",
    description:
      "Once graded, the card is sealed in a tamper-proof slab with UV protection — ready for long-term collecting or display.",
    imageSrc: "/Encapsulation.png",
  },
];

// --- COMPONENTS ---

function AccentBracket({ side }: { side: "left" | "right" }) {
  const GAP_X = 14;
  const EXT_Y = 14;
  const THICK = 4;
  const R = 26;
  const glow =
    "pointer-events-none absolute bg-[#00EEFE] shadow-[0_0_16px_rgba(0,208,255,0.6)]";

  const visibilityClass = "hidden xl:block";

  if (side === "right") {
    return (
      <div className={visibilityClass}>
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
        <span
          className={glow}
          style={{
            right: -GAP_X,
            top: -EXT_Y,
            height: THICK,
            width: "50%",
            maxWidth: 240,
            borderTopRightRadius: R,
            borderBottomRightRadius: R,
          }}
        />
        <span
          className={glow}
          style={{
            right: -GAP_X,
            bottom: -EXT_Y,
            height: THICK,
            width: "50%",
            maxWidth: 240,
            borderTopRightRadius: R,
            borderBottomRightRadius: R,
          }}
        />
      </div>
    );
  }
  return (
    <div className={visibilityClass}>
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
      <span
        className={glow}
        style={{
          left: -GAP_X,
          top: -EXT_Y,
          height: THICK,
          width: "50%",
          maxWidth: 240,
          borderTopLeftRadius: R,
          borderBottomLeftRadius: R,
        }}
      />
      <span
        className={glow}
        style={{
          left: -GAP_X,
          bottom: -EXT_Y,
          height: THICK,
          width: "50%",
          maxWidth: 240,
          borderTopLeftRadius: R,
          borderBottomLeftRadius: R,
        }}
      />
    </div>
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
    <div className="relative w-full h-0.5">
      <div className="absolute inset-0" style={dotsStyle} />
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${dir === "toRight" ? "right-0" : "left-0"}`}
        style={{
          width: 0,
          height: 0,
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
          ...(dir === "toRight"
            ? { borderLeft: "10px solid #00EEFE" }
            : { borderRight: "10px solid #00EEFE" }),
          filter: "drop-shadow(0 0 10px rgba(0,208,255,0.45))",
        }}
      />
    </div>
  );
}

function StepCard({
  title,
  description,
  imageSrc,
  accentSide,
}: {
  title: string;
  description: string;
  imageSrc: string;
  accentSide: "left" | "right";
}) {
  return (
    <div
      className="relative h-auto xl:h-[237px] w-full max-w-[505px] rounded-xl bg-[#3A3A3A] px-7 py-6 flex flex-col gap-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] overflow-visible mx-auto"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <AccentBracket side={accentSide} />

      {/* 60x60 Image Container - No Background */}
      <div className="relative h-[60px] w-[60px] flex items-center justify-center shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>

      <h3 className="font-semibold text-[24px] leading-[130%] tracking-[0px] text-white">
        {title}
      </h3>

      <p className="font-normal text-[16px] leading-[150%] text-[#A1C7D6]">
        {description}
      </p>
    </div>
  );
}

export default function OurGradingProcess() {
  return (
    <section className="relative isolate w-full bg-black overflow-hidden">
      <div className="relative w-full min-h-[1200px] lg:min-h-[2000px] pb-20">
        <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
          <div className="relative w-full max-w-[1440px] h-full">
            <div
              className="absolute"
              style={{
                width: "1097.12px",
                height: "1097.12px",
                top: "183.94px",
                left: "183.94px",
              }}
            >
              <div className="relative w-full h-full lg:block hidden">
                <Image
                  src="/result.png"
                  alt="Background"
                  fill
                  priority
                  className="object-contain opacity-[0.27]"
                />
              </div>
              <div className="lg:hidden absolute inset-0 -translate-x-1/4 -translate-y-1/4 w-[150%] h-[150%]">
                <Image
                  src="/result.png"
                  alt="Background"
                  fill
                  priority
                  className="object-contain opacity-[0.27]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full h-full flex justify-center px-4 lg:px-[70px] pt-20 lg:pt-24">
          <div className="w-full max-w-[1440px] flex flex-col items-center gap-[50px]">
            <h2 className="text-center font-bold text-[32px] sm:text-[40px] lg:text-[44px] leading-[140%] font-poppins text-[#00EEFE]">
              Our Grading Process
            </h2>

            {/* DESKTOP TIMELINE */}
            <div className="hidden xl:block w-full max-w-[1236px] mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[30px] flex justify-center">
                  <div className="w-1 rounded-full bg-[#00EEFE] shadow-[0_0_18px_rgba(0,208,255,0.55)]" />
                </div>
                <div className="flex flex-col gap-[60px]">
                  {steps.map((s, idx) => (
                    <div
                      key={`${s.title}-${idx}`}
                      className="grid items-center grid-cols-[505px_98px_30px_98px_505px] relative"
                    >
                      <div className="flex justify-end">
                        {s.side === "left" ? (
                          <StepCard
                            title={s.title}
                            description={s.description}
                            imageSrc={s.imageSrc}
                            accentSide="right"
                          />
                        ) : (
                          <div className="w-[505px]" />
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        {s.side === "left" ? (
                          <DottedArrow dir="toRight" />
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="h-[30px] w-[30px] rounded-full bg-[#00EEFE] shadow-[0_0_18px_rgba(0,208,255,0.65)]" />
                      </div>
                      <div className="flex items-center justify-center">
                        {s.side === "right" ? (
                          <DottedArrow dir="toLeft" />
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="flex justify-start">
                        {s.side === "right" ? (
                          <StepCard
                            title={s.title}
                            description={s.description}
                            imageSrc={s.imageSrc}
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

            {/* MOBILE TIMELINE */}
            <div className="xl:hidden w-full max-w-[700px] mx-auto">
              <div className="relative pl-8 sm:pl-12">
                <div className="absolute left-[10px] sm:left-[14px] top-[20px] bottom-[20px] w-[4px] bg-[#00EEFE]/20 rounded-full">
                  <div className="w-full h-full bg-[#00EEFE] shadow-[0_0_12px_rgba(0,208,255,0.55)] rounded-full opacity-80" />
                </div>
                <div className="flex flex-col gap-8">
                  {steps.map((s, idx) => (
                    <div key={`${s.title}-m-${idx}`} className="relative">
                      <div className="absolute -left-[35px] sm:-left-[47px] top-[24px] h-[30px] w-[30px] rounded-full bg-[#00EEFE] shadow-[0_0_18px_rgba(0,208,255,0.65)] z-10" />
                      <div className="w-full flex justify-center sm:justify-start">
                        <StepCard
                          title={s.title}
                          description={s.description}
                          imageSrc={s.imageSrc}
                          accentSide="left"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
