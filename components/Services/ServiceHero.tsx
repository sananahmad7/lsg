"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

type FeatureCard = {
  title: string;
  items: string[];
  highlighted?: boolean;
};

const featureCards: FeatureCard[] = [
  {
    title: "Raw to Ready",
    items: [
      "Light cleaning (dust/dirt only)",
      "Graded by the LSG team",
      "Verification page with sub-scores",
      "QR & serial code tracking",
    ],
  },
  {
    title: "Verified & Vaulted",
    highlighted: true,
    items: [
      "Ultrasonically sealed slab",
      "UV-protected casing",
      "Tamper-proof design",
    ],
  },
  {
    title: "Collector Display",
    items: [
      "Premium card selection from our own collection",
      "Collector-focused label design",
      "Great for display, resale, or long-term collecting",
    ],
  },
];

function ServiceFeatureCard({ card }: { card: FeatureCard }) {
  return (
    <div
      className={[
        "w-full mx-auto",
        "rounded-[12px] border",
        "flex flex-col gap-[18px]",
      ].join(" ")}
      style={{
        maxWidth: 362,
        minHeight: 516,
        padding: 20,
        borderWidth: 1.47,
        borderColor: "rgba(255,255,255,0.35)",
        backgroundColor: card.highlighted ? "#383838" : "rgba(0,0,0,0.45)",
        fontFamily: "Poppins, sans-serif",
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Card header */}
      <div className="w-full flex items-center justify-between">
        <h3 className="text-white font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[32px]">
          {card.title}
        </h3>

        <span
          className="inline-flex items-center justify-center rounded-full"
          style={{ width: 20, height: 20, backgroundColor: "#00EEFE" }}
        >
          <FaCheck size={12} color="#062126" />
        </span>
      </div>

      {/* Separator Line */}
      <div
        style={{
          width: "100%",
          height: 0,
          borderTop: "1px solid #CBD4E1",
          opacity: 1,
        }}
      />

      {/* Bullets */}
      <ul className="flex flex-col gap-[19px]">
        {card.items.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <FaCheckCircle
              size={16}
              className="mt-[3px] shrink-0"
              color="rgba(255,255,255,0.85)"
            />
            <span className="text-white/85 text-[14px] sm:text-[15px] leading-[20px]">
              {t}
            </span>
          </li>
        ))}
      </ul>

      {/* Push button to bottom */}
      <div className="flex-1" />

      <button
        type="button"
        className="w-full rounded-[8px] font-bold bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] border inline-flex items-center justify-center transition-transform active:scale-[0.98]"
        style={{
          height: 44,
          borderColor: "#00EEFE",

          fontWeight: 700,
          fontSize: 16,
          letterSpacing: "0.2px",
          fontFamily: "Sora, sans-serif",
        }}
      >
        Inquire Now
      </button>
    </div>
  );
}

export default function ServiceHero() {
  return (
    <section className="relative isolate w-full bg-black overflow-hidden">
      {/* Keep desktop height 920, but allow smaller screens to grow naturally */}
      <div className="relative w-full min-h-[720px] sm:min-h-[820px] lg:h-[920px]">
        {/* Background - Adjusted for visibility and scale */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-[150%] h-[150%] sm:w-[120%] sm:h-[120%] lg:w-[110%] lg:h-[110%]">
              <Image
                src="/result.png"
                alt="Services hero background"
                fill
                priority
                sizes="100vw"
                className="object-contain opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          <div className="w-full max-w-[1132px] flex flex-col items-center gap-[50px] py-10 lg:py-0">
            {/* A1 Header Section */}
            <div className="w-full max-w-[923px] flex flex-col items-center gap-[22px] sm:gap-[31px]">
              <h1
                className="text-center text-[#00EEFE] font-semibold px-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <span className="block text-[26px] sm:text-[34px] lg:text-[44px] leading-[120%] lg:leading-[88.32px]">
                  Everything That Comes with an LSG Slab
                </span>
              </h1>

              <p
                className="text-center text-[#A1C7D6] font-medium px-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="block text-[15px] sm:text-[18px] lg:text-[22px] leading-[140%] lg:leading-[30.8px]">
                  Each slab includes the full LSG experience — cleaning,
                  authentication, grading, and sealing— all built into the
                  product you receive. No subscriptions, no extra fees
                </span>
              </p>

              {/* Buttons */}
              <div className="w-full flex flex-col  sm:flex-row items-center justify-center gap-4 sm:gap-[25px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] rounded-[12px] border w-full sm:w-[237px] h-[60px]"
                  style={{
                    borderWidth: 1,
                    borderColor: "#00EEFE",

                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "151%",
                  }}
                >
                  Request Slab
                </Link>

                <Link
                  href="/verify-slab"
                  className="inline-flex items-center justify-center rounded-[12px] border w-full sm:w-[237px] h-[60px]"
                  style={{
                    borderWidth: 1,
                    borderColor: "#00EEFE",
                    backgroundColor: "transparent",
                    color: "#00EEFE",
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "151%",
                  }}
                >
                  Verify Your Slab
                </Link>
              </div>
            </div>

            {/* A2: Feature Cards Grid */}
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
                {featureCards.map((card) => (
                  <ServiceFeatureCard key={card.title} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
