"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

// --- CONTENT DATA EXTRACTED FROM IMAGES ---
const privacyContent = [
  {
    id: "overview",
    title: "1. Overview",
    content:
      "At Legacy Slabs Grading (“LSG”), your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website or interact with our services.",
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: "We may collect the following types of information:",
    bullets: [
      "Personal Information: Name, email address, shipping address, and any other data you voluntarily provide through forms or purchases.",
      "Device Information: IP address, browser type, operating system, and usage data collected through cookies or analytics tools.",
    ],
  },
  {
    id: "how-we-use-information",
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
    id: "cookies-tracking",
    title: "4. Cookies & Tracking Technologies",
    content:
      "Our site uses cookies and similar technologies to enhance user experience and collect analytics data. You can adjust your browser settings to refuse cookies, but this may impact site functionality.",
  },
  {
    id: "data-storage-security",
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
    id: "third-party-services",
    title: "6. Third-Party Services",
    content:
      "We may use third-party services such as payment processors or analytics providers. These services have their own privacy policies and practices, which we do not control.",
  },
  {
    id: "your-rights",
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
    id: "childrens-privacy",
    title: "8. Children’s Privacy",
    content:
      "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    id: "changes-to-policy",
    title: "9. Changes To This Policy",
    content:
      "LSG may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
  {
    id: "contact",
    title: "10. Contact",
    content:
      "If you have questions about this Privacy Policy or your personal information, please contact us through the Contact Us form on our website.",
  },
];

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex justify-center py-10 lg:py-20 px-4">
      <div className="absolute top-0 left-0 right-0 h-[1000px] z-0 pointer-events-none">
        <Image
          src="/home1.webp"
          alt="Background Texture"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] flex flex-col gap-6 lg:gap-[30px]">
        {/* Responsive Heading: 24px -> 32px -> 44px */}
        <h1
          className="text-center font-bold text-[24px] xs:text-[32px] sm:text-[40px] lg:text-[44px] leading-tight lg:leading-[28px] text-[#00EFFE]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Privacy Policy | Legacy Slabs Grading (LSG)
        </h1>

        <div className="flex flex-col gap-6 lg:gap-[30px]">
          {privacyContent.map((item, index) => (
            <div
              key={index}
              id={item.id}
              className="flex flex-col gap-3 lg:gap-[20px] w-full max-w-[1300px] mx-auto scroll-mt-24"
            >
              <h2
                className="font-semibold text-[17px] lg:text-[20px] leading-snug lg:leading-[32px] tracking-[-0.02em] capitalize text-[#00EFFE]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </h2>

              <div
                className="font-medium text-[14px] lg:text-[18px] leading-relaxed lg:leading-[32px] tracking-[-0.01em] text-[#A1C7D6]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <p>{item.content}</p>

                {item.bullets && (
                  <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                    {item.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="pl-1 lg:pl-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {item.footer && <p className="mt-2">{item.footer}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[1300px] mx-auto mt-6 lg:mt-10 flex flex-col items-start gap-6 lg:gap-8">
          <p
            className="text-white font-medium text-[15px] lg:text-[18px] leading-[140%]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Last updated: April 2025
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="
              inline-flex items-center justify-center
              w-[160px] h-[45px] lg:w-[190px] lg:h-[50px]
              rounded-[8px]
              bg-[#00EFFE] text-black
              font-bold text-[15px] lg:text-[16px]
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
