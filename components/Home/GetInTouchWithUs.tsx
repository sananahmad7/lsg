"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function GetInTouchWithUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your API
    console.log("Contact form:", form);
  };

  return (
    <section className="w-full bg-black py-16 px-4 xl:px-8">
      {/* Outer Container:
        - Replaced fixed width with max-w-[1300px]
        - Added padding that scales from mobile (p-6) to desktop (p-10)
      */}
      <div
        className="
          mx-auto w-full max-w-[1300px]
          rounded-[20px] bg-black
          border-[2.34px] border-white/15
          p-6 sm:p-10 lg:p-[45px]
        "
      >
        {/* Inner Flex Layout:
          - Stack vertical on mobile (flex-col)
          - Side-by-side on desktop (lg:flex-row)
          - Removed fixed height to prevent empty space
        */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-[80px]">
          {/* --- LEFT SIDE: TEXT & FORM --- */}
          <div className="w-full lg:w-[500px] flex-shrink-0 flex flex-col gap-8">
            {/* Header Text */}
            <div className="flex flex-col gap-4">
              <h2
                className="text-[#00D0FF] text-[32px] sm:text-[40px] lg:text-[44px] leading-[100%] font-semibold tracking-[-0.02em]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get in Touch with Us
              </h2>

              <p
                className="text-white/60 text-[16px] lg:text-[18px] leading-[160%] font-normal"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Got a question about your LSG slab, grading details, or
                what&apos;s in stock? Reach out — we&apos;re happy to help you
                get what you&apos;re looking for.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
              {/* First Name / Last Name Row - Uses Grid for auto-stacking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  aria-label="First Name"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={onChange("firstName")}
                  className="
                    w-full h-[50px]
                    rounded-[6px] border border-white/10
                    bg-white/[0.03] text-white
                    placeholder:text-white/35
                    px-4 py-3 outline-none
                    focus:border-[#00D0FF]/50 transition-colors
                  "
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />

                <input
                  aria-label="Last Name"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={onChange("lastName")}
                  className="
                    w-full h-[50px]
                    rounded-[6px] border border-white/10
                    bg-white/[0.03] text-white
                    placeholder:text-white/35
                    px-4 py-3 outline-none
                    focus:border-[#00D0FF]/50 transition-colors
                  "
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>

              {/* Email */}
              <input
                aria-label="Email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                className="
                  w-full h-[50px]
                  rounded-[6px] border border-white/10
                  bg-white/[0.03] text-white
                  placeholder:text-white/35
                  px-4 py-3 outline-none
                  focus:border-[#00D0FF]/50 transition-colors
                "
                style={{ fontFamily: "Poppins, sans-serif" }}
              />

              {/* Phone */}
              <input
                aria-label="Phone (optional)"
                placeholder="Phone (optional)"
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                className="
                  w-full h-[50px]
                  rounded-[6px] border border-white/10
                  bg-white/[0.03] text-white
                  placeholder:text-white/35
                  px-4 py-3 outline-none
                  focus:border-[#00D0FF]/50 transition-colors
                "
                style={{ fontFamily: "Poppins, sans-serif" }}
              />

              {/* Message */}
              <textarea
                aria-label="Message"
                placeholder="Message"
                value={form.message}
                onChange={onChange("message")}
                className="
                  w-full h-[128px]
                  rounded-[6px] border border-white/10
                  bg-white/[0.03] text-white
                  placeholder:text-white/35
                  px-4 py-3 outline-none resize-none
                  focus:border-[#00D0FF]/50 transition-colors
                "
                style={{ fontFamily: "Poppins, sans-serif" }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full h-[50px]
                  rounded-[5px]
                  bg-[#00D0FF] text-[#062126]
                  font-medium text-[18px]
                  flex items-center justify-center
                  transition-transform hover:scale-[1.01] active:scale-[0.99]
                "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Send
              </button>
            </form>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          {/* - Mobile: Fixed height or aspect ratio so it shows up
             - Desktop: Flex-1 to fill remaining space 
          */}
          <div className="w-full relative min-h-[300px] sm:min-h-[400px] lg:min-h-0 lg:flex-1 lg:h-auto rounded-[12px] overflow-hidden">
            <Image
              src="/touch.png"
              alt="Cards artwork"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain lg:object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
