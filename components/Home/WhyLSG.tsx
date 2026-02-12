"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  imageSrc: string; // Changed from icon: ReactNode
  title: string;
  description: string;
  className?: string;
};

function FeatureCard({ imageSrc, title, description, className }: CardProps) {
  return (
    <div
      className={[
        "rounded-[12px] bg-[#3A3A3A] px-[15px] py-[35px]",
        "flex flex-col gap-[10px]",
        className ?? "",
      ].join(" ")}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Container for the image icon */}
      <div className="relative w-[40px] h-[40px]">
        <Image src={imageSrc} alt={title} fill className="object-contain" />
      </div>

      <h3 className="font-semibold text-[24px] leading-[140%] tracking-[-0.18px] text-white">
        {title}
      </h3>

      <p className="font-normal text-[22px] leading-[140%] tracking-[-0.18px] text-[#A1C7D6]">
        {description}
      </p>
    </div>
  );
}

export default function WhyLSG() {
  return (
    <section className="w-full bg-black py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1114px] px-4 lg:px-0">
        <div className="flex flex-col items-center gap-[26px] lg:h-[655px]">
          {/* Title */}
          <h2
            className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[140%]"
            style={{ fontFamily: "Poppins, sans-serif", color: "#00D0FF" }}
          >
            Why LSG Grading?
          </h2>

          <div className="w-full flex flex-col gap-[26px]">
            {/* Upper Inner Component (3 boxes) */}
            <div className="w-full lg:h-[290px]">
              {/* Mobile/tablet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
                <FeatureCard
                  imageSrc="/WHYLsg1.png"
                  title="Affordable Pricing"
                  description="Pre-slabbed cards at an affordable price, without breaking the bank"
                />
                <FeatureCard
                  imageSrc="/WHYLsg2.png"
                  title="Transparent & Trustworthy"
                  description="Our grading process is clear, consistent, and fully verifiable."
                />
                <FeatureCard
                  imageSrc="/WHYLsg3.png"
                  title="Secure Handling"
                  description="All cards are safely and securely managed from start to finish."
                />
              </div>

              {/* Desktop exact widths/heights */}
              <div className="hidden lg:flex w-full h-full justify-between">
                <FeatureCard
                  imageSrc="/WHYLsg1.png"
                  title="Affordable Pricing"
                  description="Pre-slabbed cards at an affordable price, without breaking the bank"
                  className="w-[342px] h-[290px]"
                />
                <FeatureCard
                  imageSrc="/WHYLsg2.png"
                  title="Transparent & Trustworthy"
                  description="Our grading process is clear, consistent, and fully verifiable."
                  className="w-[396px] h-[290px]"
                />
                <FeatureCard
                  imageSrc="/WHYLsg3.png"
                  title="Secure Handling"
                  description="All cards are safely and securely managed from start to finish."
                  className="w-[342px] h-[290px]"
                />
              </div>
            </div>

            {/* Lower Inner Component (2 boxes) */}
            <div className="w-full lg:h-[251px]">
              {/* Mobile/tablet */}
              <div className="grid grid-cols-1 gap-4 lg:hidden">
                <FeatureCard
                  imageSrc="/WHYLsg4.png"
                  title="Cleaned, Not Altered"
                  description="We gently clean and use careful magnification to remove surface dirt debris without modifying or restoring the card in any way"
                />
                <FeatureCard
                  imageSrc="/WHYLsg5.png"
                  title="Modern, Protective Slabs"
                  description="UV-protected, tamper-proof slabs that preserve condition and elevate presentation"
                />
              </div>

              {/* Desktop exact widths/heights/gap */}
              <div className="hidden lg:flex w-full h-full gap-[14px]">
                <FeatureCard
                  imageSrc="/WHYLsg4.png"
                  title="Cleaned, Not Altered"
                  description="We gently clean and use careful magnification to remove surface dirt debris without modifying or restoring the card in any way"
                  className="w-[550px] h-[251px]"
                />
                <FeatureCard
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
