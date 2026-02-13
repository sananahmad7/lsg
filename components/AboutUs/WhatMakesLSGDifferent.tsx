"use client";

import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatMakesLSGDifferent() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black py-16 px-4 lg:px-8 overflow-hidden">
      <div className="mx-auto w-full max-w-[1300px] flex flex-col gap-10 lg:gap-[50px]">
        {/* --- TOP HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <h2
            className="text-[#00EFFE] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.3] lg:leading-[60px] tracking-[-0.02em] text-center capitalize"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            What Makes LSG Different?
          </h2>
        </motion.div>

        {/* --- GRID SECTION (4 Boxes) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-[50px] lg:gap-x-[100px]"
        >
          <InfoBox
            title="No Submissions – Only Premium Picks"
            description="We Don't Grade Outside Cards. Every Slabbed Card Comes From Our Collection, Meaning You Never Have To Wonder If Something Was Rushed Or Unfairly Graded."
          />
          <InfoBox
            title="Custom LSG Grading Scale"
            description="Our Cards Are Graded On Four Criteria — Centering, Surface, Edges, And Corners — Each Scored From 1 To 10, Then Averaged For A Final Grade. These Scores Are Fully Viewable Via Our Online Verification Tool."
          />
          <InfoBox
            title="Silver-Textured Slabs"
            description="Forget Overdone Holographics — LSG Slabs Use A Clean, Metallic Silver Texture Across All Label Elements. It's Modern, Minimal, And Made To Stand Out."
          />
          <InfoBox
            title="Display-First Design"
            description="We Focus On Presentation. From Our Bold Labels To The Slab Materials Themselves, Everything Is Built With Display Collectors In Mind."
          />
        </motion.div>

        {/* --- BOTTOM WIDE BOX --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full bg-[#0B0B0B] rounded-[16px] border-l-[4px] border-[#00EFFE] p-6 lg:py-[20px] lg:px-[39px]"
        >
          <div className="flex flex-col gap-6 lg:gap-4">
            <div className="flex flex-col gap-[10px]">
              <h3
                className="text-[#FFFFFF] font-semibold text-[24px] leading-[1.2] capitalize"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Verification Made Easy
              </h3>
              <p
                className="text-[#AAAAAA] font-normal text-[16px] leading-[1.5] capitalize"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Every Slab Includes:
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8 w-full mt-2">
              <CheckItem text="Serial Number Next To Our Logo" delay={0.4} />
              <CheckItem text="Scannable QR Code On The Back" delay={0.5} />
              <CheckItem
                text="Exclusive Verification Page For Each Slab"
                delay={0.6}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function InfoBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      }}
      className="
        w-full lg:max-w-[599px] h-auto lg:h-[167px]
        bg-[#0B0B0B]
        border-l-[4px] border-[#00EFFE]
        rounded-[16px]
        p-6 lg:py-[20px] lg:px-[39px]
        flex flex-col justify-center gap-[10px]
      "
    >
      <h3
        className="text-[#FFFFFF] font-semibold text-[20px] lg:text-[22px] leading-[1.3] capitalize"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-[#AAAAAA] font-normal text-[14px] lg:text-[16px] leading-[1.6] capitalize"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

function CheckItem({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-[8px]"
    >
      <div className="flex-shrink-0 flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#00EFFE]">
        <FaCheck size={12} color="#000" />
      </div>
      <span
        className="text-white font-normal text-[16px] leading-[1.5] capitalize"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {text}
      </span>
    </motion.div>
  );
}
