"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

export default function VerifyYourSlab() {
  const [serial, setSerial] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onVerify = async () => {
    const trimmed = serial.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/getSlab?certificationNumber=${trimmed}`,
      );
      const data = await response.json();

      if (response.ok) {
        // Save the fetched data to sessionStorage to pass it as an "argument"
        sessionStorage.setItem("lastVerificationResult", JSON.stringify(data));
        // Navigate to the dedicated result page
        router.push("/verify-slab/result");
      } else {
        setError(data.error || "No card found with this certification number.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const leftSlide: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightSlide: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-black py-10 lg:py-14 px-4 xl:px-0 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto w-full max-w-[1240px] rounded-[12px] border border-white/10 px-4 py-[20px] lg:px-[70px] lg:py-[25px] bg-[#171717]"
      >
        <div className="w-full rounded-[12px] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between px-2 py-4 lg:px-0 lg:py-0">
          <motion.div
            variants={leftSlide}
            className="w-full lg:w-[578.6654663085938px]"
          >
            <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[340px] lg:h-[465.9911804199219px]">
              <Image
                src="/cards.png"
                alt="Graded cards"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 578px"
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={rightSlide}
            className="w-full lg:w-[578.6654663085938px] flex flex-col justify-center px-0 lg:pr-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <h2 className="text-center lg:text-left font-semibold text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[44px] leading-[130%] lg:leading-[140%] text-[#00EFFE]">
              Verify Your Slab
            </h2>
            <p className="mt-3 lg:mt-4 text-center lg:text-left font-normal text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[22px] leading-[150%] lg:leading-[160%] text-[#A1C7D6]">
              Quickly confirm the authenticity of your graded card...
            </p>

            {/* JOINED INPUT AND BUTTON */}
            <div className="mt-5 lg:mt-6 flex w-full flex-row">
              <input
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onVerify()}
                placeholder="Enter Slab Serial Number"
                className="h-[50px] lg:h-[61px] w-full rounded-l-[10px] lg:rounded-l-[13px] border border-[#00D0FF] bg-[#242424] px-4 text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-[#00D0FF] transition-all"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 15,
                  lineHeight: "151%",
                }}
              />
              <button
                type="button"
                onClick={onVerify}
                disabled={loading}
                className="h-[50px] lg:h-[61px] w-[120px] sm:w-[179px] rounded-r-[10px] lg:rounded-r-[12px] cursor-pointer border-t border-b border-r px-[10px] lg:px-[25px] py-[10px] lg:py-[11px] font-bold font-poppins transition-all hover:brightness-110 active:scale-95 bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] disabled:opacity-50 flex-shrink-0"
                style={{ borderColor: "#00D0FF", color: "#062126" }}
              >
                {loading ? "..." : "Verify Now"}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-red-400 text-sm text-center lg:text-left">
                {error}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
