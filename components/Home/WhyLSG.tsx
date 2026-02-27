"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
  index: number;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function FeatureCard({
  imageSrc,
  title,
  description,
  className,
  index,
}: CardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={[
        "rounded-[12px] bg-[#3A3A3A] px-[15px] py-[25px] lg:py-[35px]", // Reduced vertical padding on mobile
        "flex flex-col gap-[8px] lg:gap-[10px]",
        className ?? "",
      ].join(" ")}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="relative w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]">
        <Image src={imageSrc} alt={title} fill className="object-contain" />
      </div>
      <h3 className="font-semibold text-[18px] lg:text-[24px] leading-[140%] tracking-[-0.18px] text-[#FFFFFF]">
        {title}
      </h3>
      <p className="font-normal text-[15px] lg:text-[22px] leading-[140%] tracking-[-0.18px] text-[#A1C7D6]">
        {description}
      </p>
    </motion.div>
  );
}

export default function WhyLSG() {
  return (
    <section className="w-full bg-black py-12 lg:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-[1114px] px-4 lg:px-0">
        <div className="flex flex-col items-center gap-[20px] lg:gap-[26px] lg:h-[655px]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-semibold text-[24px] text-[#00EFFE] sm:text-[36px] lg:text-[44px] leading-[140%]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Why LSG Grading?
          </motion.h2>

          <div className="w-full flex flex-col gap-[16px] lg:gap-[26px]">
            <div className="w-full lg:h-[290px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
                <FeatureCard
                  index={0}
                  imageSrc="/WHYLsg1.png"
                  title="Affordable Pricing"
                  description="Pre-slabbed cards at an affordable price, without breaking the bank"
                />
                <FeatureCard
                  index={1}
                  imageSrc="/WHYLsg2.png"
                  title="Transparent & Trustworthy"
                  description="Our grading process is clear, consistent, and fully verifiable."
                />
                <FeatureCard
                  index={2}
                  imageSrc="/WHYLsg3.png"
                  title="Secure Handling"
                  description="All cards are safely and securely managed from start to finish."
                />
              </div>

              <div className="hidden lg:flex w-full h-full justify-between">
                <FeatureCard
                  index={0}
                  imageSrc="/WHYLsg1.png"
                  title="Affordable Pricing"
                  description="Pre-slabbed cards at an affordable price, without breaking the bank"
                  className="w-[342px] h-[290px]"
                />
                <FeatureCard
                  index={1}
                  imageSrc="/WHYLsg2.png"
                  title="Transparent & Trustworthy"
                  description="Our grading process is clear, consistent, and fully verifiable."
                  className="w-[396px] h-[290px]"
                />
                <FeatureCard
                  index={2}
                  imageSrc="/WHYLsg3.png"
                  title="Secure Handling"
                  description="All cards are safely and securely managed from start to finish."
                  className="w-[342px] h-[290px]"
                />
              </div>
            </div>

            <div className="w-full lg:h-[251px]">
              <div className="grid grid-cols-1 gap-4 lg:hidden">
                <FeatureCard
                  index={3}
                  imageSrc="/WHYLsg4.png"
                  title="Cleaned, Not Altered"
                  description="We gently clean and use careful magnification to remove surface dirt debris without modifying or restoring the card in any way"
                />
                <FeatureCard
                  index={4}
                  imageSrc="/WHYLsg5.png"
                  title="Modern, Protective Slabs"
                  description="UV-protected, tamper-proof slabs that preserve condition and elevate presentation"
                />
              </div>
              <div className="hidden lg:flex w-full h-full gap-[14px] justify-center">
                <FeatureCard
                  index={3}
                  imageSrc="/WHYLsg4.png"
                  title="Cleaned, Not Altered"
                  description="We gently clean and use careful magnification to remove surface dirt debris without modifying or restoring the card in any way"
                  className="w-[550px] h-[251px]"
                />
                <FeatureCard
                  index={4}
                  imageSrc="/WHYLsg5.png"
                  title="Modern, Protective Slabs"
                  description="UV-protected, tamper-proof slabs that preserve condition and elevate presentation"
                  className="w-[550px] h-[251px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
