"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

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
        "rounded-xl border",
        "flex flex-col gap-3.5 lg:gap-4.5",
        "min-h-[380px] lg:min-h-[516px]", // Moved mobile height logic here
      ].join(" ")}
      style={{
        maxWidth: 362,
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
        <h3 className="text-[#FFFFFF] font-semibold text-[18px] xs:text-[20px] lg:text-[24px] leading-[1.2] lg:leading-8">
          {card.title}
        </h3>

        <span
          className="inline-flex items-center justify-center rounded-full shrink-0"
          style={{ width: 28, height: 28, backgroundColor: "#00EEFE" }}
        >
          <FaCheck size={10} color="#062126" />
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
      <ul className="flex flex-col gap-3 lg:gap-4.75">
        {card.items.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <FaCheckCircle
              size={16}
              className="mt-0.5 lg:mt-0.75 shrink-0"
              color="#FFFFFF"
            />
            <span className="text-[#FFFFFF] text-[13px] xs:text-[14px] lg:text-[15px] leading-[130%]">
              {t}
            </span>
          </li>
        ))}
      </ul>

      {/* Push button to bottom */}
      <div className="flex-1" />

      <Link
        href={"/contact"}
        className="w-full rounded-lg text-[#000000] hover:scale-[1.01] font-bold bg-linear-to-r from-[#00F2FE] to-[#00D0FF] border inline-flex items-center justify-center transition-transform active:scale-[0.98]"
        style={{
          height: 40,
          borderColor: "#00EEFE",
          fontWeight: 700,
          fontSize: 14,
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
      <div className="relative w-full min-h-150 sm:min-h-205 lg:h-230">
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
          <div className="w-full max-w-283 flex flex-col items-center gap-7.5 lg:gap-12.5 py-10 lg:py-0">
            {/* Header Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full max-w-230.75 flex flex-col items-center gap-4.5 sm:gap-7.75"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-center text-[#00EEFE] font-semibold px-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <span className="block text-[22px] xs:text-[26px] sm:text-[34px] lg:text-[44px] leading-[110%] lg:leading-[88.32px]">
                  Everything That Comes with an LSG Slab
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-center text-[#A1C7D6] font-medium px-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="block text-[14px] xs:text-[15px] sm:text-[18px] lg:text-[22px] leading-[140%] lg:leading-[30.8px]">
                  Each slab includes the full LSG experience — cleaning,
                  authentication, grading, and sealing— all built into the
                  product you receive. No subscriptions, no extra fees
                </span>
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={fadeInUp}
                className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6.25"
              >
                <Link
                  href="/contact"
                  className="inline-flex hover:scale-[1.01] max-w-[362px] active:scale-[0.98] items-center justify-center bg-linear-to-r from-[#00F2FE] to-[#00D0FF] rounded-xl w-full sm:w-59.25 h-12 sm:h-15 transition-transform"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  Request Slab
                </Link>

                <Link
                  href="/verify-slab"
                  className="inline-flex items-center max-w-[362px] justify-center font-sora font-bold h-12 sm:h-15 w-full sm:w-59.25 lg:rounded-xl border border-[#00D0FF] bg-transparent text-[#00D0FF] text-[15px] lg:text-[16px] hover:bg-[#00D0FF]/10 transition-colors"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4.5">
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
