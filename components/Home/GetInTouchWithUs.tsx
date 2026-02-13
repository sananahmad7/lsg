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
      // Logic: Check if err is an Error object to safely access .message
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setStatus({ type: "error", msg: errorMessage });
    } finally {
      setLoading(false);
    }
  };

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
      <div className="mx-auto w-full max-w-[1300px] rounded-[20px] bg-transparent border-[2.34px] border-white/15 p-6 sm:p-10 lg:p-[45px] ">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-10 xl:gap-[80px]">
          <div className="w-full xl:w-[500px] flex-shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2
                className="text-[#00E8FE] text-[32px] sm:text-[40px] lg:text-[44px] leading-[100%] font-semibold tracking-[-0.02em]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get in Touch with Us
              </h2>
              <p
                className="text-[#A1C7D6] text-[16px] lg:text-[18px] leading-[160%] font-normal"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Got a question about your LSG slab, grading details, or what’s
                in stock?
                <br />
                Reach out — we’re happy to help you get what you’re looking for.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
              {status.msg && (
                <div
                  className={`p-3 rounded text-sm ${status.type === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}
                >
                  {status.msg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className={`${inputStyles} h-[128px] resize-none`}
              />

              <div className="my-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[50px] cursor-pointer rounded-[5px] bg-[#00EFFE] text-[#062126] font-bold text-[18px] flex items-center justify-center transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:grayscale"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          <div className="w-full relative min-h-[300px] xl:left-13 sm:min-h-[400px] xl:min-h-0 xl:flex-1 xl:h-[589px] rounded-[12px] ">
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
