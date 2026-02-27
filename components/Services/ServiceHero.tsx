"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion"; // Added for animations

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

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function ServiceFeatureCard({
  card,
  index,
}: {
  card: FeatureCard;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={[
        "w-full mx-auto",
        "rounded-[12px] border",
        "flex flex-col gap-[18px]",
      ].join(" ")}
      style={{
        maxWidth: 362,
        minHeight: 516,
        padding: 20,
        borderWidth: 1.52,
        borderColor: "#CBD4E1",
        backgroundColor: card.highlighted ? "#383838" : "rgba(0,0,0,0.45)",
        fontFamily: "Poppins, sans-serif",
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Card header */}
      <div className="w-full flex items-center justify-between">
        <h3 className="text-[#FFFFFF] font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[32px]">
          {card.title}
        </h3>

        <span
          className="inline-flex items-center justify-center rounded-full"
          style={{ width: 32, height: 32, backgroundColor: "#00EEFE" }}
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
              size={20}
              className="mt-[3px] shrink-0"
              color="#FFFFFF"
            />
            <span className="text-[#FFFFFF] text-[14px] sm:text-[15px] leading-[130%]">
              {t}
            </span>
          </li>
        ))}
      </ul>

      {/* Push button to bottom */}
      <div className="flex-1" />

      <Link
        href={"/contact"}
        type="button"
        className="w-full rounded-[8px] text-[#000000] hover:scale-[1.01] font-bold bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] border inline-flex items-center justify-center transition-transform active:scale-[0.98]"
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
      </Link>
    </motion.div>
  );
}

export default function ServiceHero() {
  return (
    <section className="relative isolate w-full bg-black overflow-hidden">
      <div className="relative w-full min-h-[720px] sm:min-h-[820px] lg:h-[920px]">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 1.5 }}
              className="relative w-[150%] h-[150%] sm:w-[120%] sm:h-[120%] lg:w-[110%] lg:h-[110%]"
            >
              <Image
                src="/result.png"
                alt="Services hero background"
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
          <div className="w-full max-w-[1132px] flex flex-col items-center gap-[50px] py-10 lg:py-0">
            {/* Header Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full max-w-[923px] flex flex-col items-center gap-[22px] sm:gap-[31px]"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-center text-[#00EEFE] font-semibold px-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <span className="block text-[26px] sm:text-[34px] lg:text-[44px] leading-[120%] lg:leading-[88.32px]">
                  Everything That Comes with an LSG Slab
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-center text-[#A1C7D6] font-medium px-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="block text-[15px] sm:text-[18px] lg:text-[22px] leading-[140%] lg:leading-[30.8px]">
                  Each slab includes the full LSG experience — cleaning,
                  authentication, grading, and sealing— all built into the
                  product you receive. No subscriptions, no extra fees
                </span>
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={fadeInUp}
                className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[25px]"
              >
                <Link
                  href="/contact"
                  className="inline-flex hover:scale-[1.01] active:scale-[0.98] items-center justify-center bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] rounded-[12px] w-full sm:w-[237px] h-[60px] transition-transform"
                  style={{
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
                  className="inline-flex items-center justify-center font-sora font-bold h-[50px] sm:h-[60px] w-full sm:w-[237px] rounded-[12px] border border-[#00D0FF] bg-transparent text-[#00D0FF] font-semibold text-[16px] hover:bg-[#00D0FF]/10 transition-colors"
                >
                  Verify Your Slab
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature Cards Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="w-full flex justify-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
                {featureCards.map((card, index) => (
                  <ServiceFeatureCard
                    key={card.title}
                    card={card}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
