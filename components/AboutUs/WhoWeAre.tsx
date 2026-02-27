"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-black py-10 lg:py-16 px-4 lg:px-8">
      {/* Outer Component */}
      <div
        className="
          mx-auto w-full max-w-[1300px]
          rounded-[20px] border border-white/10
          flex flex-col lg:flex-row items-center
          gap-8 lg:gap-[133px]
          px-6 py-10 
          lg:pl-[130px] lg:pr-[100px] lg:pb-[50px] lg:pt-[50px]
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.084) 0%, rgba(217, 217, 217, 0.042) 100%)",
        }}
      >
        {/* =========================================
            LEFT ELEMENT (Logo Image)
           ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[140px] xs:max-w-[200px] lg:max-w-[427.46px] aspect-[427/524] flex-shrink-0"
        >
          <Image
            src="/LogoTransparent.png"
            alt="LSG Grading Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* =========================================
            RIGHT ELEMENT (Text Content)
           ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:gap-[30px] w-full max-w-[630px] text-center lg:text-left"
        >
          {/* Header */}
          <div className="flex flex-col gap-[12px]">
            <h2
              className="text-[#00EFFE] font-semibold text-[24px] xs:text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] lg:leading-[60px] tracking-[-0.02em] capitalize"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who We Are
            </h2>
          </div>

          {/* Description */}
          <div className="w-full">
            <p
              className="font-medium text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[22px] leading-[22px] xs:leading-[28px] lg:leading-[32px] tracking-[-0.01em] text-[#A1C7D6]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              LSG is a custom card grading company, run by collectors — for
              collectors. Every card we grade is hand-picked from our own
              collection, carefully selected for its display potential, rarity,
              and condition. We don’t accept submissions. That means every slab
              you see has been curated, evaluated, and slabbed entirely by the
              LSG team.
              <br className="hidden lg:block" />
              <br className="hidden lg:block" />
              <span className="mt-4 block lg:inline">
                We grade only what we trust, and we stand behind each piece.
              </span>
            </p>
          </div>

          {/* Button */}
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              w-full xs:w-[260px] sm:w-[311px] h-[50px] lg:h-[60px]
              rounded-[10px] lg:rounded-[12px] bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)]
              text-[#062126] font-bold text-[14px] lg:text-[16px] leading-[151%]
              transition-all hover:scale-[1.02] active:scale-[0.98]
              mx-auto lg:mx-0 font-sora
              shadow-[0px_16px_36px_0px_#008CFF40]
            "
          >
            Inquire Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
