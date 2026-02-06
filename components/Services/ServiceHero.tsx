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
        "w-full max-w-[362px]",
        "rounded-[12px] border",
        "flex flex-col gap-[18px]",
      ].join(" ")}
      style={{
        height: 470, // reduced from 516
        padding: 20, // figma
        borderWidth: 1.47,
        borderColor: "rgba(255,255,255,0.35)",
        backgroundColor: card.highlighted ? "#383838" : "rgba(0,0,0,0.45)",
        fontFamily: "Poppins, sans-serif",
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Card header: 322 x 32, space-between */}
      <div
        className="w-full flex items-center justify-between"
        style={{ height: 32 }}
      >
        <h3 className="text-white font-semibold text-[24px] leading-[32px]">
          {card.title}
        </h3>

        {/* cyan check circle */}
        <span
          className="inline-flex items-center justify-center rounded-full"
          style={{
            width: 20,
            height: 20,
            backgroundColor: "#00D0FF",
          }}
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
            <span className="text-white/85 text-[14px] leading-[20px]">
              {t}
            </span>
          </li>
        ))}
      </ul>

      {/* Spacer to push button down */}
      <div className="flex-1" />

      {/* Inquire button */}
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
    <section className="relative isolate w-full h-[920px] bg-black overflow-hidden">
      {/* Background (same system as verify-slab result: opacity + bg, but no cropping) */}
      <div className="absolute left-0 right-0 top-[30px] bottom-[30px] z-0">
        <Image
          src="/result.png"
          alt="Services hero background"
          fill
          priority
          sizes="100vw"
          className="object-contain opacity-[0.27]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        {/* Inner component: 1132 x 839, gap 50 */}
        <div
          className="w-full max-w-[1132px] flex flex-col items-center gap-[50px]"
          style={{ height: 839, fontFamily: "Poppins, sans-serif" }}
        >
          {/* A1: 923 x 273, gap 31 */}
          <div className="w-full max-w-[923px] flex flex-col items-center gap-[31px]">
            {/* Heading area */}
            <div className="w-full flex items-center justify-center">
              <h1
                className="text-center text-[#00D0FF] font-semibold"
                style={{
                  fontSize: 44,
                  lineHeight: "88.32px",
                }}
              >
                Everything That Comes with an LSG Slab
              </h1>
            </div>

            {/* Description */}
            <div className="w-full max-w-[923px]">
              <p
                className="text-center text-white/70 font-medium"
                style={{
                  fontSize: 22,
                  lineHeight: "30.8px",
                  letterSpacing: "-0.3px",
                }}
              >
                Each slab includes the full LSG experience — cleaning,
                authentication, grading, and sealing— all built into the product
                you receive. No subscriptions, no extra fees
              </p>
            </div>

            {/* Buttons area: 499 x 60, gap 25 */}
            <div className="flex items-center justify-center gap-[25px]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[12px] border"
                style={{
                  width: 237,
                  height: 60,
                  paddingTop: 11,
                  paddingBottom: 11,
                  paddingLeft: 25,
                  paddingRight: 25,
                  borderWidth: 1,
                  borderColor: "#00D0FF",
                  backgroundColor: "#00D0FF",
                  color: "#062126",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "151%",
                  textAlign: "center",
                }}
              >
                Request Slab
              </Link>

              <Link
                href="/verify-slab"
                className="inline-flex items-center justify-center rounded-[12px] border"
                style={{
                  width: 237,
                  height: 60,
                  paddingTop: 11,
                  paddingBottom: 11,
                  paddingLeft: 25,
                  paddingRight: 25,
                  borderWidth: 1,
                  borderColor: "#00D0FF",
                  backgroundColor: "transparent",
                  color: "#00D0FF",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "151%",
                  textAlign: "center",
                }}
              >
                Verify Your Slab
              </Link>
            </div>
          </div>

          {/* A2: cards row (gap 23) */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[23px]">
            {featureCards.map((card) => (
              <ServiceFeatureCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
