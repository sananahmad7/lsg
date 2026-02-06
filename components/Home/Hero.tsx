"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      className="
        relative isolate w-full bg-black
        overflow-hidden box-border
        lg:h-[806px]
        py-10 lg:py-0
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home1.webp"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.27]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {/* Inner Frame wrapper */}
        <div className="mx-auto w-full max-w-[1235px] px-4 lg:px-0 lg:pt-[47px]">
          {/* Inner Frame: 1235 x 759 */}
          <div className="flex flex-col items-center gap-[64px] lg:h-[759px] lg:justify-between">
            {/* TOP CONTENT */}
            <div
              className="w-full flex flex-col items-center gap-[24px] lg:h-[240px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <h1
                className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[100%]"
                style={{ color: "#00D0FF" }}
              >
                Card Grading You Can Count On
              </h1>

              <p className="max-w-[980px] text-center font-normal text-[16px] sm:text-[18px] lg:text-[22px] leading-[100%] text-white/75">
                At LSG, we focus on quality, consistency, and presentation,
                sealing each card with the care and clarity it deserves — built
                to collect for the long run.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center h-[60px] w-[237px] rounded-[12px] border px-[25px] py-[11px] font-semibold text-[16px]"
                  style={{
                    backgroundColor: "#00D0FF",
                    borderColor: "#00D0FF",
                    color: "#062126",
                  }}
                >
                  View Services
                </Link>

                <Link
                  href="/verify-slab"
                  className="inline-flex items-center justify-center h-[60px] w-[237px] rounded-[12px] border px-[25px] py-[11px] font-semibold text-[16px]"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#00D0FF",
                    color: "#00D0FF",
                  }}
                >
                  Verify Your Slab
                </Link>
              </div>
            </div>

            {/* BOTTOM IMAGE */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-[1114px] h-[220px] sm:h-[280px] md:h-[360px] lg:h-[455px]">
                <Image
                  src="/hero.png"
                  alt="Hero cards"
                  fill
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1114px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
