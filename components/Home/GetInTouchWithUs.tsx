"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function GetInTouchWithUs() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    msg: string;
  }>({
    type: "",
    msg: "",
  });

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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setStatus({ type: "error", msg: "Please complete the reCAPTCHA." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captchaToken }),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          msg: "Message sent! We will get back to you soon.",
        });
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        recaptchaRef.current?.reset();
      } else {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setStatus({ type: "error", msg: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = `
    w-full h-[45px] lg:h-[50px] rounded-[9px] 
    bg-gradient-to-b from-[#121212] to-[#080808]
    border border-white/[0.05] border-t-white/10
    text-white placeholder:text-[#FFFFFF99]
    px-4 py-3 outline-none
    shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]
    focus:border-[#00EFFE]/40 focus:from-[#151515]
    transition-all duration-300
    text-[14px] lg:text-[16px] font-poppins
  `;

  return (
    <section className="w-full bg-transparent py-10 lg:py-16 px-4 xl:px-8">
      {/* Container: Reduced p-4 on mobile */}
      <div className="mx-auto w-full max-w-[1300px] rounded-[20px] bg-transparent border-[2.34px] border-white/15 p-4 sm:p-10 lg:p-[45px]">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-8 xl:gap-[80px]">
          <div className="w-full xl:w-[500px] flex-shrink-0 flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-3 lg:gap-4">
              <h2
                className="text-[#00E8FE] text-[24px] xs:text-[32px] sm:text-[40px] lg:text-[44px] leading-[110%] font-semibold tracking-[-0.02em] text-center xl:text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Get in Touch with Us
              </h2>
              <p
                className="text-[#A1C7D6] text-[14px] lg:text-[18px] leading-[24px] lg:leading-[32px] font-normal text-center xl:text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Got a question about your LSG slab, grading details, or what’s
                in stock?
                <br className="hidden sm:block" />
                Reach out — we’re happy to help.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 lg:gap-4 w-full"
            >
              {status.msg && (
                <div
                  className={`p-3 rounded text-sm ${status.type === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}
                >
                  {status.msg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <input
                  required
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={onChange("firstName")}
                  className={inputStyles}
                />
                <input
                  required
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={onChange("lastName")}
                  className={inputStyles}
                />
              </div>

              <input
                required
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                className={inputStyles}
              />
              <input
                placeholder="Phone (optional)"
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                className={inputStyles}
              />
              <textarea
                required
                placeholder="Message"
                value={form.message}
                onChange={onChange("message")}
                className={`${inputStyles} h-[100px] lg:h-[128px] resize-none`}
              />

              {/* reCAPTCHA scaling for mobile */}
              <div className="my-1 flex  xl:justify-start overflow-hidden w-full">
                <div className="origin-left scale-[0.78] xs:scale-[0.85] sm:scale-100">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    theme="dark"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[45px] lg:h-[50px] cursor-pointer rounded-[5px] bg-[#00EFFE] text-[#062126] font-bold text-[16px] lg:text-[18px] flex items-center justify-center transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:grayscale"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          {/* Artwork: Scaled down height on mobile */}
          <div className="w-full relative min-h-[220px] xs:min-h-[300px] xl:left-15 sm:min-h-[400px] xl:min-h-0 xl:flex-1 xl:h-[589px] rounded-[12px]">
            <Image
              src="/touch.png"
              alt="Cards artwork"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 700px"
              className="object-contain xl:object-contain object-center overflow-visible"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
