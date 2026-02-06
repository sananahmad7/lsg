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
        "w-full",
        "rounded-[12px] border",
        "flex flex-col gap-[18px]",
      ].join(" ")}
      style={{
        padding: 20, // figma
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
          style={{ width: 20, height: 20, backgroundColor: "#00D0FF" }}
        >
          <FaCheck size={12} color="#062126" />
        </span>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2">
        {card.items.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <FaCheckCircle
              size={16}
              className="mt-[3px]"
              color="rgba(255,255,255,0.85)"
            />
            <span className="text-white/85 text-[14px] sm:text-[15px] leading-[20px]">
              {t}
            </span>
          </li>
        ))}
      </ul>

      {/* Push button to bottom without fixed card height */}
      <div className="flex-1" />

      <button
        type="button"
        className="w-full rounded-[8px] border inline-flex items-center justify-center"
        style={{
          height: 44,
          borderColor: "#00D0FF",
          backgroundColor: "#00D0FF",
          color: "#062126",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: "0.2px",
          fontFamily: "Poppins, sans-serif",
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
        {/* Background: smaller than container (more inset), no overflow into edges */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-8 bottom-8 sm:top-10 sm:bottom-10 lg:top-[70px] lg:bottom-[70px]">
            <Image
              src="/result.png"
              alt="Services hero background"
              fill
              priority
              sizes="100vw"
              className="object-contain opacity-[0.27]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          <div className="w-full max-w-[1132px] flex flex-col items-center gap-[50px] py-10 lg:py-0">
            {/* A1 */}
            <div className="w-full max-w-[923px] flex flex-col items-center gap-[22px] sm:gap-[31px]">
              <h1
                className="text-center text-[#00D0FF] font-semibold px-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <span className="block text-[26px] sm:text-[34px] lg:text-[44px] leading-[120%] lg:leading-[88.32px]">
                  Everything That Comes with an LSG Slab
                </span>
              </h1>

              <p
                className="text-center text-white/70 font-medium px-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="block text-[15px] sm:text-[18px] lg:text-[22px] leading-[140%] lg:leading-[30.8px]">
                  Each slab includes the full LSG experience — cleaning,
                  authentication, grading, and sealing— all built into the
                  product you receive. No subscriptions, no extra fees
                </span>
              </p>

              {/* Buttons (stack on mobile) */}
              <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[25px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[12px] border w-full sm:w-[237px] h-[60px]"
                  style={{
                    borderWidth: 1,
                    borderColor: "#00D0FF",
                    backgroundColor: "#00D0FF",
                    color: "#062126",
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "151%",
                    paddingTop: 11,
                    paddingBottom: 11,
                    paddingLeft: 25,
                    paddingRight: 25,
                    textAlign: "center",
                  }}
                >
                  Request Slab
                </Link>

                <Link
                  href="/verify-slab"
                  className="inline-flex items-center justify-center rounded-[12px] border w-full sm:w-[237px] h-[60px]"
                  style={{
                    borderWidth: 1,
                    borderColor: "#00D0FF",
                    backgroundColor: "transparent",
                    color: "#00D0FF",
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "151%",
                    paddingTop: 11,
                    paddingBottom: 11,
                    paddingLeft: 25,
                    paddingRight: 25,
                    textAlign: "center",
                  }}
                >
                  Verify Your Slab
                </Link>
              </div>
            </div>

            {/* A2: responsive grid instead of forced row */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[23px]">
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
