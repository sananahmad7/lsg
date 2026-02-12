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
    console.log("Contact form:", form);
  };

  // Reusable Tailwind Class string for the "Etched" input style
  const inputStyles = `
    w-full h-[50px] rounded-[6px] 
    bg-gradient-to-b from-[#121212] to-[#080808]
    border border-white/[0.05] border-t-white/10
    text-white placeholder:text-[#FFFFFF99]
    px-4 py-3 outline-none
    shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
    focus:border-[#00EFFE]/40 focus:from-[#151515]
    transition-all duration-300
  `;

  return (
    <section className="w-full bg-transparent py-16 px-4 xl:px-8">
      <div className="mx-auto w-full max-w-[1300px] rounded-[20px] bg-black/80 border-[2.34px] border-white/15 p-6 sm:p-10 lg:p-[45px]">
        {/* Changed from lg:flex-row to xl:flex-row to stack on lg screens */}
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-10 xl:gap-[80px]">
          {/* --- LEFT SIDE: TEXT & FORM --- */}
          <div className="w-full xl:w-[500px] flex-shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2
                className="text-[#00EFFE] text-[32px] sm:text-[40px] lg:text-[44px] leading-[100%] font-semibold tracking-[-0.02em]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get in Touch with Us
              </h2>
              <p
                className="text-[#A1C7D6] text-[16px] lg:text-[18px] leading-[160%] font-normal"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Got a question about your LSG slab, grading details, or
                what&apos;s in stock? Reach out — we&apos;re happy to help you
                get what you&apos;re looking for.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  aria-label="First Name"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={onChange("firstName")}
                  className={inputStyles}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
                <input
                  aria-label="Last Name"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={onChange("lastName")}
                  className={inputStyles}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                />
              </div>

              <input
                aria-label="Email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                className={inputStyles}
                style={{ fontFamily: "Poppins, sans-serif" }}
              />

              <input
                aria-label="Phone (optional)"
                placeholder="Phone (optional)"
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                className={inputStyles}
                style={{ fontFamily: "Poppins, sans-serif" }}
              />

              <textarea
                aria-label="Message"
                placeholder="Message"
                value={form.message}
                onChange={onChange("message")}
                className={`${inputStyles} h-[128px] resize-none`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              />

              <button
                type="submit"
                className="w-full h-[50px] rounded-[5px] bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] text-[#062126] font-bold text-[18px] flex items-center justify-center transition-transform hover:scale-[1.01] active:scale-[0.99]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Send
              </button>
            </form>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          {/* Adjusted width logic: w-full on lg, back to flex-1 on xl */}
          <div className="w-full relative min-h-[300px] sm:min-h-[400px] xl:left-13 xl:min-h-0 xl:flex-1 xl:h-[589px] rounded-[12px] ">
            <Image
              src="/touch.png"
              alt="Cards artwork"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 700px"
              className="object-contain xl:object-cover object-center overflow-visible"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
