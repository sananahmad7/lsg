import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- CONTENT DATA ---
const termsContent = [
  {
    title: "1. Acceptance Of Terms",
    content:
      "By accessing or using the Legacy Slabs Grading (“LSG”) website, services, or products, you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, you may not access or use our services.",
  },
  {
    title: "2. Services Provided",
    content:
      "LSG is an independent, collector-driven grading company. We do not accept outside submissions. All cards graded by LSG are from our own private collection and are slabbed, authenticated, and graded based on our internal standards. Our slabs are intended for display and collection purposes only.",
  },
  {
    title: "3. Grading Disclaimer",
    content:
      "LSG provides subjective grading opinions based on in-house evaluation criteria. Grades assigned by LSG are not equivalent to those assigned by third-party professional grading companies such as PSA, BGS, CGC, or others. Our grades should not be used for official certification, valuation, or investment purposes.",
  },
  {
    title: "4. No Submissions Policy",
    content:
      "We do not accept card submissions from customers. All cards sold or listed as graded by LSG have been sourced, evaluated, and slabbed exclusively by our team. This ensures consistency and authenticity across every LSG product.",
  },
  {
    title: "5. Ownership & Intellectual Property",
    content:
      "All content on the LSG website, including logos, images, slab designs, and grading formats, are the intellectual property of LSG and may not be copied, replicated, or used without express written permission.",
  },
  {
    title: "6. Purchase Terms",
    content:
      "By purchasing from LSG, you acknowledge and agree to the following:",
    bullets: [
      "You are buying a card graded by an independent, non-affiliated collector grading service.",
      "The grade assigned is a subjective opinion and not a guarantee of authenticity or value.",
      "All sales are final. We do not offer refunds, returns, or exchanges under any circumstances.",
      "LSG is not liable for any damage, loss, or dissatisfaction after the product has been shipped.",
      "You are purchasing products as-is, for personal, display, or collection purposes only.",
      "LSG reserves the right to refuse service or cancel transactions at its sole discretion.",
    ],
  },
  {
    title: "7. Verification & Serial Lookup",
    content:
      "LSG offers a slab verification feature to look up cards by their unique serial number. This tool links to our internal records and is provided for transparency only. It does not confirm third-party authenticity and should not be used as legal proof or certification.",
  },
  {
    title: "8. Limitation Of Liability",
    content:
      "To the fullest extent permitted by law, LSG disclaims all liability for:",
    bullets: [
      "Any damage, loss, or tampering during shipping or transit",
      "Claims relating to the accuracy or reliability of assigned grades",
      "Any financial loss, depreciation, or valuation issues post-sale",
      "Any assumptions regarding authenticity, certification, or investment viability",
    ],
    footer: "Use of our products and services is entirely at your own risk.",
  },
  {
    title: "9. Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless LSG, its affiliates, team members, and partners from any claims, damages, or liabilities arising out of your use of our products, services, or website.",
  },
  {
    title: "10. Changes To Terms",
    content:
      "LSG reserves the right to update these Terms at any time without notice. Continued use of the website or services after changes constitutes your acceptance of the revised Terms.",
  },
  {
    title: "11. Contact Information",
    content:
      "For questions regarding these Terms, please contact us via the Contact Us page on our website.",
  },
];

export default function TermsAndConditions() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex justify-center py-20 px-4">
      {/* --- BACKGROUND LAYER --- */}
      {/* Only extends 1000px down (approx 4 points) and fades out at the bottom */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] z-0 pointer-events-none">
        <Image
          src="/home1.webp"
          alt="Background Texture"
          fill
          className="object-cover opacity-40" // Adjusted opacity for visibility
          priority
        />
        {/* Gradient mask to fade the image into the black background at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[1300px] flex flex-col gap-[30px]">
        {/* HEADER */}
        <h1
          className="text-center font-bold text-[32px] sm:text-[40px] lg:text-[44px] leading-[150%] text-[#00D0FF]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Terms and Conditions
        </h1>

        {/* POINTS LIST */}
        <div className="flex flex-col gap-[30px]">
          {termsContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[12px] w-full max-w-[1300px] mx-auto"
            >
              {/* Alpha Header */}
              <h2
                className="font-semibold text-[18px] lg:text-[20px] leading-[100%] tracking-[-0.02em] capitalize text-[#00D0FF]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h2>

              {/* Alpha Description - FIXED LEADING TO 140% */}
              <div
                className="font-medium text-[16px] lg:text-[18px] leading-[140%] tracking-[-0.01em] text-[#A1C7D6]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <p>{item.content}</p>

                {/* Optional Bullets */}
                {item.bullets && (
                  <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                    {item.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="pl-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional Footer Text */}
                {item.footer && <p className="mt-2">{item.footer}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER AREA */}
        <div className="w-full max-w-[1300px] mx-auto mt-10 flex flex-col items-start gap-8">
          <p
            className="text-white font-medium text-[18px] leading-[100%]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Last updated: April 2025
          </p>

          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              w-[140px] h-[50px]
              rounded-[8px]
              bg-[#00D0FF] text-black
              font-bold text-[16px]
              transition-transform hover:scale-[1.02] active:scale-[0.98]
            "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
