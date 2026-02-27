"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

// --- DATA ---
const features = [
  "Graded Cards With Collector-Focused Display Quality",
  "Quick And Secure Slab Verification System",
  "Protection From Dust, Tampering, And UV Damage",
  "Aesthetic Value And Resale Potential",
  "Cards From Pokémon, Yu-Gi-Oh!, Magic, Sports, Lorcana, And More",
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-black py-10 md:py-16 px-4 lg:px-8">
      {/* Outer Container */}
      <div
        className="
          mx-auto w-full max-w-325
          min-h-auto lg:min-h-145
          rounded-xl
          border border-[#FFFFFF33]
          backdrop-blur-[5px]
          px-5 py-8
          md:px-8 md:py-10
          lg:pt-6.25 lg:pb-6.25 lg:pl-17.5 lg:pr-17.5
          flex items-center justify-center
        "
        style={{
          borderWidth: 1.52,
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.084) 0%, rgba(217, 217, 217, 0.042) 100%)",
        }}
      >
        {/* Inner Flex Container */}
        <div className="w-full max-w-290 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-12.5">
          {/* LEFT ELEMENT (Text Content) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-7.5 w-full lg:max-w-148"
          >
            {/* Heading: Gradual Scale 24px -> 34px -> 44px */}
            <motion.h2
              variants={itemVariants}
              className="text-[#00EFFE] font-semibold text-[24px] xs:text-[28px] md:text-[36px] lg:text-[44px] leading-tight lg:leading-12.5 tracking-tight capitalize text-center lg:text-left"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              What We Offer
            </motion.h2>

            {/* Bullet Points: Gradual Scale 14px -> 17px -> 20px */}
            <ul className="flex flex-col gap-4 md:gap-6 lg:gap-5">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 md:gap-4 lg:gap-5"
                >
                  {/* Icon: Scaled on mobile */}
                  <div className="shrink-0 w-6 h-6 md:w-7.5 md:h-7.5 rounded-full bg-[#00EFFE] flex items-center justify-center">
                    <FaCheck size={11} color="#000" className="md:scale-125" />
                  </div>

                  {/* Text */}
                  <span
                    className="font-normal text-[14px] xs:text-[15px] md:text-[18px] lg:text-[20px] leading-normal lg:leading-7.5 capitalize text-[#A1C7D6]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT ELEMENT (Image): Scaled on mobile to reduce scrolling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative w-full lg:flex-1 h-56 xs:h-75 md:h-100 lg:h-125"
          >
            <Image
              src="/Offer.png"
              alt="What We Offer - Card Diagram"
              fill
              className="object-contain scale-110 md:scale-125"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
