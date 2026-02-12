"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function VerifyYourSlab() {
  const [serial, setSerial] = useState("");

  const onVerify = () => {
    console.log("Verify serial:", serial);
  };

  // Explicitly typed as Variants to fix the TypeScript 'Easing' error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const leftSlide: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightSlide: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black py-14 px-4 xl:px-0 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto w-full max-w-[1240px] rounded-[12px] border border-white/10 px-4 py-[25px] lg:px-[70px] bg-[#171717]"
      >
        <div className="w-full rounded-[12px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between px-4 py-6 lg:px-0 lg:py-0">
          <motion.div
            variants={leftSlide}
            className="w-full lg:w-[578.6654663085938px]"
          >
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[465.9911804199219px]">
              <Image
                src="/cards.png"
                alt="Graded cards"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 578px"
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={rightSlide}
            className="w-full lg:w-[578.6654663085938px] flex flex-col justify-center px-0 lg:pr-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <h2 className="text-center lg:text-left font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[140%] text-[#00D0FF]">
              Verify Your Slab
            </h2>

            <p className="mt-4 text-center lg:text-left font-normal text-[16px] sm:text-[18px] lg:text-[22px] leading-[160%] text-[#A1C7D6]">
              Quickly confirm the authenticity of your graded card using our
              verification tool. Enter the unique serial number below to access
              full grading details and verify it’s legit — straight from the
              source.
            </p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
              }}
              className="mt-6 flex w-full flex-col sm:flex-row gap-3 sm:gap-0"
            >
              <input
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                placeholder="Enter Slab Serial Number"
                className="h-[61px] w-full rounded-[12px] sm:rounded-r-none border border-[#00D0FF] bg-transparent px-4 text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-[#00D0FF] transition-all"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 16,
                  lineHeight: "151%",
                }}
              />

              <button
                type="button"
                onClick={onVerify}
                className="h-[61px] w-full sm:w-[179px] rounded-[12px] sm:rounded-l-none border px-[25px] py-[11px] font-bold font-poppins transition-all hover:brightness-110 active:scale-95 bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)]"
                style={{
                  borderColor: "#00D0FF",
                  color: "#062126",
                }}
              >
                Verify Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
