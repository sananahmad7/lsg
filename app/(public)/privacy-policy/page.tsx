"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation"; // 1. Import the hook

// --- CONTENT DATA EXTRACTED FROM IMAGES ---
const privacyContent = [
  {
    title: "1. Overview",
    content:
      "At Legacy Slabs Grading (“LSG”), your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website or interact with our services.",
  },
  {
    title: "2. Information We Collect",
    content: "We may collect the following types of information:",
    bullets: [
      "Personal Information: Name, email address, shipping address, and any other data you voluntarily provide through forms or purchases.",
      "Device Information: IP address, browser type, operating system, and usage data collected through cookies or analytics tools.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: "We use the information we collect to:",
    bullets: [
      "Fulfill and manage purchases or inquiries",
      "Respond to your questions or support requests",
      "Improve our website and services",
      "Send important updates or notifications (if you’ve opted in)",
      "Detect and prevent fraud or unauthorized access",
    ],
    footer:
      "We do not sell, rent, or trade your personal information to third parties.",
  },
  {
    title: "4. Cookies & Tracking Technologies",
    content:
      "Our site uses cookies and similar technologies to enhance user experience and collect analytics data. You can adjust your browser settings to refuse cookies, but this may impact site functionality.",
  },
  {
    title: "5. Data Storage & Security",
    content:
      "We implement reasonable security measures to protect your data, including:",
    bullets: [
      "SSL encryption for data transmission",
      "Secure storage of contact form submissions and orders",
    ],
    footer:
      "However, no method of transmission or storage is 100% secure. By using our site, you acknowledge and accept this risk.",
  },
  {
    title: "6. Third-Party Services",
    content:
      "We may use third-party services such as payment processors or analytics providers. These services have their own privacy policies and practices, which we do not control.",
  },
  {
    title: "7. Your Rights",
    content: "Depending on your jurisdiction, you may have the right to:",
    bullets: [
      "Access or request a copy of your personal information",
      "Request correction or deletion of your data",
      "Withdraw consent or object to data processing",
    ],
    footer:
      "To exercise any of these rights, please contact us via the Contact Us page.",
  },
  {
    title: "8. Children’s Privacy",
    content:
      "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    title: "9. Changes To This Policy",
    content:
      "LSG may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
  {
    title: "10. Contact",
    content:
      "If you have questions about this Privacy Policy or your personal information, please contact us through the Contact Us form on our website.",
  },
];

export default function PrivacyPolicy() {
  const router = useRouter(); // 2. Initialize the router
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex justify-center py-20 px-4">
      {/* --- BACKGROUND LAYER --- */}
      {/* Only extends 1000px down and fades out at the bottom */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] z-0 pointer-events-none">
        <Image
          src="/home1.webp" // Using the same background texture
          alt="Background Texture"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Gradient mask to fade the image into the black background at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[1300px] flex flex-col gap-[30px]">
        {/* HEADER */}
        <h1
          className="text-center font-bold text-[32px] sm:text-[40px] lg:text-[44px] leading-[150%] text-[#00EFFE]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Privacy Policy | Legacy Slabs Grading (LSG)
        </h1>

        {/* POINTS LIST */}
        <div className="flex flex-col gap-[30px]">
          {privacyContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[12px] w-full max-w-[1300px] mx-auto"
            >
              {/* Alpha Header */}
              <h2
                className="font-semibold text-[18px] lg:text-[20px] leading-[100%] tracking-[-0.02em] capitalize text-[#00EFFE]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h2>

              {/* Alpha Description - FIXED LEADING TO 140% */}
              <div
                className="font-medium text-[16px] lg:text-[18px] leading-[150%] tracking-[-0.01em] text-[#A1C7D6]"
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
            className="text-white font-medium text-[18px] leading-[140%]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Last updated: April 2025
          </p>

          <button
            type="button"
            onClick={() => router.back()} // Trigger the back navigation
            className="
          inline-flex items-center justify-center
          w-[190px] h-[50px]
          rounded-[8px]
          bg-[#00EFFE] text-black
          font-bold text-[16px]
          transition-transform hover:scale-[1.02] active:scale-[0.98]
          cursor-pointer
        "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
