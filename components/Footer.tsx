"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

type LinkItem = { label: string; href: string };

function Col({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h4
        className="text-white font-semibold text-[15px] leading-[150%]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {title}
      </h4>

      <div className="flex flex-col gap-2">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="text-white/70 hover:text-white transition-colors text-[14px] leading-[150%]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-[100px] pt-[75px] pb-[37.5px]">
        <div className="flex flex-col gap-[75px]">
          <div className="mx-auto w-full max-w-[1240px] flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-4">
              <div className="relative h-[45px] w-[170px]">
                <Image
                  src="/logo.png"
                  alt="LSG Grading"
                  fill
                  sizes="170px"
                  className="object-contain"
                />
              </div>
            </div>

            <Col
              title="Navigation"
              links={[
                { label: "Home", href: "/" },
                { label: "Verify Slab", href: "/verify-slab" },
                { label: "Services", href: "/services" },
                { label: "Grading Process", href: "/grading-process" },
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "/contact" },
              ]}
            />

            <Col
              title="Privacy Policy"
              links={[
                { label: "Privacy Policy", href: "/privacy-policy" },
                {
                  label: "Data Usage",
                  href: "/privacy-policy#data-storage-security",
                },
                {
                  label: "Cookie Settings",
                  href: "/privacy-policy#cookies-tracking",
                },
                { label: "User Rights", href: "/privacy-policy#your-rights" },
              ]}
            />

            <Col
              title="Terms & Service"
              links={[
                {
                  label: "Terms of Use",
                  href: "/terms-and-conditions#acceptance",
                },
                {
                  label: "Grading Disclaimer",
                  href: "/terms-and-conditions#disclaimer",
                },
                {
                  label: "Site Access Terms",
                  href: "/terms-and-conditions#services",
                },
                {
                  label: "Legal Notice",
                  href: "/terms-and-conditions#intellectual-property",
                },
              ]}
            />

            <Col
              title="Support & FAQ"
              links={[
                { label: "Can I send in my own cards?", href: "/#r-1" },
                { label: "How do I verify a slab?", href: "/#r-4" },
                {
                  label: "What grading scale is used?",
                  href: "/#r-2",
                },
                {
                  label: "What types of cards do you grade?",
                  href: "/#l-2",
                },
                { label: "Need help? Contact Us", href: "/contact" },
              ]}
            />

            <div className="flex flex-col gap-3">
              <h4
                className="text-white font-semibold text-[15px] leading-[150%]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Connect With Us
              </h4>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="h-[40px] w-[40px] rounded-[8px] border border-white/15 bg-[#2F2F2F] flex items-center justify-center hover:border-[#00D0FF] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} className="text-white" />
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1240px]">
            <div className="border-t border-white/20" />
            <div className="pt-6 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center relative w-full">
              <p
                className="text-white/70 text-[13px] leading-[32px] text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                © 2025 LSG Grading. All Rights Reserved.
              </p>
              <div className="flex items-center justify-center gap-2 text-[13px]">
                <Link
                  href="/privacy-policy"
                  className="text-[#00D0FF] hover:text-[#00D0FF]/80 transition-colors whitespace-nowrap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Privacy Policy
                </Link>
                <span className="text-white/40">|</span>
                <Link
                  href="/terms-and-conditions"
                  className="text-[#00D0FF] hover:text-[#00D0FF]/80 transition-colors whitespace-nowrap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Terms & Services
                </Link>
                <span className="text-white/40">|</span>
                <Link
                  href="/#faqs"
                  className="text-[#00D0FF] hover:text-[#00D0FF]/80 transition-colors whitespace-nowrap"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Support & FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
