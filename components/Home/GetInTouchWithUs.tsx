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
    <section className="w-full bg-black py-16 px-4 lg:px-0">
      {/* Outer: 1300 x 691, radius 20, border 2.34, padding 23 */}
      <div
        className="
          mx-auto w-full max-w-[1300px]
          rounded-[20px]
          bg-black
        "
        style={{
          borderWidth: "2.34px",
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.15)",
          padding: 23,
        }}
      >
        {/* Two inner parts: left + right, gap 35 */}
        <div className="flex flex-col gap-[35px] lg:flex-row lg:h-[600px]">
          {/* LEFT */}
          <div className="w-full lg:w-[499px] flex flex-col gap-[16.4px]">
            {/* Top block: 499 x 184.37, gap 9.37 */}
            <div className="w-full lg:w-[499px] flex flex-col gap-[9.37px]">
              <h2
                className="text-[#00D0FF] text-[32px] sm:text-[40px] lg:text-[44px] leading-[100%]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Get in Touch with Us
              </h2>

              <p
                className="text-white/60 text-[16px] lg:text-[18.74px]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  lineHeight: "30.45px",
                }}
              >
                Got a question about your LSG slab, grading details,
                <br />
                or what&apos;s in stock?
                <br />
                Reach out — we&apos;re happy to help you get what
                <br />
                you&apos;re looking for.
              </p>
            </div>

            {/* Bottom form area: 499 x 390, gap 16.4 */}
            <form
              onSubmit={onSubmit}
              className="w-full lg:w-[499px] flex flex-col gap-[16.4px]"
            >
              {/* First/Last row */}
              <div className="flex flex-col sm:flex-row gap-[16.4px]">
                <input
                  aria-label="First Name"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={onChange("firstName")}
                  className="
                    w-full sm:w-[241.3018px]
                    h-[49.1081px]
                    rounded-[6px]
                    border
                    bg-white/[0.03]
                    text-white
                    placeholder:text-white/35
                    outline-none
                  "
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.12)",
                    paddingTop: 14.05,
                    paddingBottom: 14.05,
                    paddingLeft: 16.4,
                    paddingRight: 16.4,
                    fontFamily: "Poppins, sans-serif",
                  }}
                />

                <input
                  aria-label="Last Name"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={onChange("lastName")}
                  className="
                    w-full sm:w-[241.3018px]
                    h-[49.1081px]
                    rounded-[6px]
                    border
                    bg-white/[0.03]
                    text-white
                    placeholder:text-white/35
                    outline-none
                  "
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.12)",
                    paddingTop: 14.05,
                    paddingBottom: 14.05,
                    paddingLeft: 16.4,
                    paddingRight: 16.4,
                    fontFamily: "Poppins, sans-serif",
                  }}
                />
              </div>

              {/* Email */}
              <input
                aria-label="Email"
                placeholder="Email"
                value={form.email}
                onChange={onChange("email")}
                className="
                  w-full lg:w-[499px]
                  h-[49px]
                  rounded-[6px]
                  border
                  bg-white/[0.03]
                  text-white
                  placeholder:text-white/35
                  outline-none
                "
                style={{
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.12)",
                  paddingTop: 14.05,
                  paddingBottom: 14.05,
                  paddingLeft: 16.4,
                  paddingRight: 16.4,
                  fontFamily: "Poppins, sans-serif",
                }}
              />

              {/* Phone */}
              <input
                aria-label="Phone (optional)"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={onChange("phone")}
                className="
                  w-full lg:w-[499px]
                  h-[49px]
                  rounded-[6px]
                  border
                  bg-white/[0.03]
                  text-white
                  placeholder:text-white/35
                  outline-none
                "
                style={{
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.12)",
                  paddingTop: 14.05,
                  paddingBottom: 14.05,
                  paddingLeft: 16.4,
                  paddingRight: 16.4,
                  fontFamily: "Poppins, sans-serif",
                }}
              />

              {/* Message */}
              <textarea
                aria-label="Message"
                placeholder="Message"
                value={form.message}
                onChange={onChange("message")}
                className="
                  w-full lg:w-[499px]
                  h-[128px]
                  rounded-[6px]
                  border
                  bg-white/[0.03]
                  text-white
                  placeholder:text-white/35
                  outline-none
                  resize-none
                "
                style={{
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.12)",
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 16,
                  paddingRight: 16,
                  fontFamily: "Poppins, sans-serif",
                }}
              />

              {/* Send button: 499 x 49, radius 5 */}
              <button
                type="submit"
                className="
                  w-full lg:w-[499px]
                  h-[49px]
                  rounded-[5px]
                  flex items-center justify-center
                  transition-transform hover:scale-[1.01] active:scale-[0.99]
                "
                style={{
                  backgroundColor: "#00D0FF",
                  paddingTop: 14,
                  paddingBottom: 14,
                  paddingLeft: 12,
                  paddingRight: 12,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "17.57px",
                  lineHeight: "100%",
                  letterSpacing: "-0.01em",
                  color: "#062126",
                }}
              >
                Send
              </button>
            </form>
          </div>

          {/* RIGHT (image) */}
          <div className="flex-1 relative w-full min-h-[280px] lg:min-h-0 lg:h-[586px]">
            {/* right-side art image */}
            <div className="relative w-full h-full">
              <Image
                src="/touch.png"
                alt="Cards artwork"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
