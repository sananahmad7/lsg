"use client";

import React, { useState } from "react";

type Status = { type: "success" | "error" | "info"; message: string } | null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function LSGInsider() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const onJoin = async () => {
    if (loading) return; // prevent double-submits

    const normalized = email.trim().toLowerCase();

    if (!normalized) {
      setStatus({ type: "error", message: "Please enter an email address." });
      return;
    }

    // Optional client-side format check (server still validates)
    if (!EMAIL_REGEX.test(normalized)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/joinList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalized }),
      });

      const result = await response.json().catch(() => ({}) as any);

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            result?.error || result?.message || "Failed to join the list.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: result?.message || "You’re in! 🎉",
      });
      setEmail("");
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-black py-10 lg:py-16 px-4 lg:px-8">
      {/* Main Container */}
      <div
        className="
          mx-auto w-full max-w-[1272px]
          rounded-[22px] bg-[#323232]
          px-6 py-8 
          sm:px-10 sm:py-12
          lg:px-[55px] lg:py-[55px]
        "
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:max-w-[700px] text-center lg:text-left">
            <h2
              className="font-semibold text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[44px] leading-[130%] tracking-[1px]"
              style={{ color: "#00EFFE" }}
            >
              Join the LSG Insider List
            </h2>

            <p className="font-normal text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[22px] leading-[22px] xs:leading-[26px] lg:leading-[32px] text-[#A1C7D6]">
              Want to stay ahead in the world of collecting? Subscribe to get
              early access to new graded card drops, exclusive deals you won’t
              find anywhere else, and instant notifications when fresh slabs hit
              the shop. Don’t miss your chance to grab the next standout piece
              for your collection.
            </p>
          </div>

          {/* --- RIGHT SIDE: EMAIL FORM --- */}
          <div className="w-full lg:w-auto flex flex-col justify-center items-center lg:items-end lg:h-full lg:self-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onJoin();
              }}
              className="w-full flex flex-col items-center lg:items-end gap-3"
            >
              <div
                className="
                  w-full max-w-[400px] h-[50px] lg:h-[62px]
                  rounded-[10px] border-[2px] border-[#00EFFE]
                  flex items-stretch overflow-hidden
                  bg-[#383838]
                  grid grid-cols-3 sm:flex
                "
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  disabled={loading}
                  className="
                    col-span-2
                    flex-1 h-full 
                    px-[15px] sm:px-[20px]
                    text-white placeholder:text-white/40
                    outline-none text-[13px] xs:text-[14px] sm:text-[16px]
                    focus:bg-white/5 transition-colors
                    min-w-0
                    disabled:opacity-60
                    bg-[#242424]
                  "
                  style={{
                    fontWeight: 400,
                    lineHeight: "151%",
                  }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    col-span-1
                    h-full w-full sm:w-[120px] 
                    bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] hover:bg-[#00D0FF]/90 transition-colors
                    text-[#062126] font-bold text-[13px] xs:text-[14px] sm:text-[16px]
                    flex items-center cursor-pointer justify-center
                    disabled:opacity-70 disabled:cursor-not-allowed
                  "
                >
                  {loading ? "..." : "Join"}
                </button>
              </div>

              {/* Status Message */}
              {status && (
                <p
                  aria-live="polite"
                  className={`w-full max-w-[400px] text-xs xs:text-sm sm:text-base text-center lg:text-left ${
                    status.type === "success"
                      ? "text-green-300"
                      : status.type === "error"
                        ? "text-red-300"
                        : "text-white/80"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
