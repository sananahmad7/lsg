"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function GradingWithCare() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto w-full px-4 lg:px-0">
        <div
          className="w-full relative overflow-hidden flex items-center justify-center rounded-[12px] border border-white/10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.084) 0%, rgba(217, 217, 217, 0.042) 100%)",
            paddingTop: "75px",
            paddingBottom: "75px",
          }}
        >
          <motion.div
            className="w-full max-w-[1179.52px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-[40px] px-6 lg:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Increased width from 715px to 850px to fit heading in one line */}
            <div className="w-full lg:w-[850px]  flex flex-col my-auto gap-10">
              <motion.div variants={itemVariants}>
                <h2
                  className="font-semibold text-[#00EEFE] leading-[110%] -tracking-[0.01em]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "44px",
                  }}
                >
                  <span className="block text-[28px] sm:text-[36px] lg:text-[44px] whitespace-pre-wrap">
                    Grading With Care & Protection
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="w-full lg:max-w-[678px]"
                variants={itemVariants}
              >
                <p
                  className="text-[#A1C7D6] font-medium leading-[140%] -tracking-[0.01em]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "22px",
                  }}
                >
                  <span className="block text-[16px] sm:text-[18px] lg:text-[22px]">
                    At LSG, we grade cards using our own scale, and we only work
                    with cards from our own collection. Every slab is sealed and
                    secured for long-term preservation, with attention to
                    condition, presentation, and collector value. We clean the
                    card moderately (no tampering), seal it with tamper-proof
                    slabs, and display it in its best form — ready for any
                    collection.
                  </span>
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/services"
                  className="inline-flex hover:scale-[1.01] bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] items-center justify-center transition-all active:scale-95 rounded-[12px] border border-[#00EEFE]"
                  style={{
                    width: "237px",
                    height: "60px",
                    padding: "11px 25px",
                  }}
                >
                  <span className="font-sora font-bold text-[16px] leading-[151%] text-black text-center">
                    Learn More
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div className="relative shrink-0" variants={imageVariants}>
              <div className="relative w-[280px] sm:w-[360px] lg:w-[433.7px] h-[300px] sm:h-[390px] lg:h-[468.8px]">
                <Image
                  src="/pika.png"
                  alt="Pokemon Cards Collage"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 434px"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
