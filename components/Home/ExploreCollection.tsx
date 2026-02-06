"use client";

import Image from "next/image";

export default function ExploreCollection() {
  return (
    <section className="w-full bg-black">
      {/* Main component: 1320 x 737, gap 50, equal vertical padding (estimated) */}
      <div className="mx-auto w-full max-w-[1320px] px-4 lg:px-0 py-20">
        <div className="flex flex-col items-center gap-[50px]">
          {/* Top Header component: 708 x 59 */}
          <div className="w-full max-w-[708px] lg:h-[59px] flex items-center justify-center">
            <h2
              className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[133%] tracking-[1px]"
              style={{ fontFamily: "Poppins, sans-serif", color: "#00D0FF" }}
            >
              Explore Our Collection
            </h2>
          </div>

          {/* Bottom inner container: 1300 x 628 (image) */}
          <div className="w-full max-w-[1300px]">
            <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[628px] overflow-hidden rounded-[12px]">
              <Image
                src="/collection.png"
                alt="Collection"
                fill
                priority
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
