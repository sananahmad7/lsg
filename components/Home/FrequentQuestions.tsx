"use client";

import React, { useMemo, useState } from "react";

type FAQ = {
  id: string;
  q: string;
  a: string;
};

// --- CUSTOM SVG ARROW ---
function CustomTriangle({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 27 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform cursor-pointer duration-300 ease-in-out ${
        isOpen ? "rotate-180 w-5 h-5" : "rotate-0 w-5 h-5"
      }`}
    >
      {/* Solid Triangle Pointing Down */}
      {/* Points logic: Top-Left(0,0) -> Top-Right(27,0) -> Bottom-Center(13.5,18) */}
      <path d="M13.5 18L0.5 0L26.5 0L13.5 18Z" />
    </svg>
  );
}

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        "w-full text-left rounded-[8px] bg-[#383838]",
        "transition-all duration-200",
        isOpen ? "border border-[#00D0FF]" : "border border-transparent",
      ].join(" ")}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Outer box: responsive padding */}
      <div className="w-full px-[24px] py-[24px] sm:px-[37px] sm:py-[33px]">
        <div className="flex w-full flex-col gap-3">
          {/* Question row */}
          <div className="flex items-center justify-between gap-6">
            <h3 className="font-semibold text-[16px] sm:text-[18px] leading-[1.5] text-white capitalize">
              {item.q}
            </h3>

            {/* Icon Container */}
            <span
              className="shrink-0 flex items-center justify-center"
              style={{ color: isOpen ? "#00D0FF" : "#FFFFFF" }}
            >
              <CustomTriangle isOpen={isOpen} />
            </span>
          </div>

          {/* Answer (only renders when open) */}
          {isOpen && (
            <p className="font-normal text-[14px] sm:text-[16px] leading-[1.6] text-[#A1C7D6] capitalize pt-2">
              {item.a}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

export default function FrequentQuestions() {
  const faqsLeft: FAQ[] = useMemo(
    () => [
      {
        id: "l-1",
        q: "What is lsg grading?",
        a: "legacy slabs grading (lsg) is a custom grading company. we don’t accept card submissions — we hand-pick and grade each card ourselves. every card comes from our own collection, chosen by us — not random or submitted by others.",
      },
      {
        id: "l-2",
        q: "What types of cards does lsg grade?",
        a: "we grade popular tcg and collectible cards such as pokemon, yugioh, sports, and other select collectibles depending on availability and condition standards.",
      },
      {
        id: "l-3",
        q: "How do i get my refund?",
        a: "refunds are available based on our refund policy and order status. once approved, refunds are returned to the original payment method within the processing window.",
      },
      {
        id: "l-4",
        q: "Why should i buy from lsg instead of grading cards myself?",
        a: "you skip the submission wait, grading uncertainty, and shipping risk. you get verified, ready-to-collect slabs with consistent presentation and transparent grading details.",
      },
    ],
    [],
  );

  const faqsRight: FAQ[] = useMemo(
    () => [
      {
        id: "r-1",
        q: "Can i send my own cards in for grading?",
        a: "not at this time. lsg only grades cards selected from our own inventory to ensure consistent handling, verification, and presentation standards.",
      },
      {
        id: "r-2",
        q: "What scale do you use for grading?",
        a: "we use a 1–10 scale and evaluate surface, corners, edges, and centering. sub-grades combine into an overall final score.",
      },
      {
        id: "r-3",
        q: "Is the slab 100% secure and durable?",
        a: "our slabs are tamper-resistant and designed for long-term protection with durable materials and uv-protection to preserve presentation.",
      },
      {
        id: "r-4",
        q: "Where can i buy the cards from?",
        a: "you can purchase directly through our collection listings. each slab includes a serial number for verification and full grading details.",
      },
    ],
    [],
  );

  const [openId, setOpenId] = useState<string | null>("l-1");

  return (
    <section className="w-full bg-black">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="w-full flex items-center justify-center">
            <h2
              className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[140%] text-[#00D0FF]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="w-full max-w-[1300px] flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-10">
            {/* LEFT COLUMN */}
            <div className="w-full lg:flex-1 flex flex-col gap-[24px]">
              {faqsLeft.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === item.id ? null : item.id))
                  }
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:flex-1 flex flex-col gap-[24px]">
              {faqsRight.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === item.id ? null : item.id))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
