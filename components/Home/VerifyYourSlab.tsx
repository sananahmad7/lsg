"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

type SlabDetails = {
  certificationNumber: string;
  set: string;
  name: string;
  number: string;
  language: string;
  variant?: string;
  grade: string;
  subgrade?: string;
  year: string;
  imageUrl?: string;
};

export default function VerifyYourSlab() {
  const [serial, setSerial] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SlabDetails | null>(null);
  const [error, setError] = useState("");

  const onVerify = async () => {
    const trimmed = serial.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");
    setIsOpen(true); // Open modal immediately to show loading state

    try {
      const response = await fetch(
        `/api/getSlab?certificationNumber=${trimmed}`,
      );
      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "No card found with this certification number.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setResult(null);
    setError("");
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
    <section className="w-full bg-black py-14 px-4 xl:px-0 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto w-full max-w-[1240px] rounded-[12px] border border-white/10 px-4 py-[25px] lg:px-[70px] bg-[#171717]"
      >
        <div className="w-full rounded-[12px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between px-4 py-6 lg:px-0 lg:py-0">
          <motion.div
            variants={leftSlide}
            className="w-full lg:w-[578.6654663085938px]"
          >
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[465.9911804199219px]">
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
            <h2 className="text-center lg:text-left font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[140%] text-[#00EFFE]">
              Verify Your Slab
            </h2>
            <p className="mt-4 text-center lg:text-left font-normal text-[16px] sm:text-[18px] lg:text-[22px] leading-[160%] text-[#A1C7D6]">
              Quickly confirm the authenticity of your graded card using our
              verification tool. Enter the unique serial number below to access
              full grading details and verify it’s legit — straight from the
              source.
            </p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
              }}
              className="mt-6 flex w-full flex-col sm:flex-row gap-3 sm:gap-0"
            >
              <input
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onVerify()}
                placeholder="Enter Slab Serial Number"
                className="h-[61px] w-full rounded-[12px] sm:rounded-r-none border border-[#00D0FF] bg-transparent px-4 text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-[#00D0FF] transition-all"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 16,
                  lineHeight: "151%",
                }}
              />
              <button
                type="button"
                onClick={onVerify}
                disabled={loading}
                className="h-[61px] w-full sm:w-[179px] rounded-[12px] cursor-pointer sm:rounded-l-none border px-[25px] py-[11px] font-bold font-poppins transition-all hover:brightness-110 active:scale-95 bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] disabled:opacity-50"
                style={{ borderColor: "#00D0FF", color: "#062126" }}
              >
                {loading ? "Checking..." : "Verify Now"}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- VERIFICATION MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[800px] max-h-[90vh] overflow-y-auto bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 lg:p-10 shadow-2xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>

              {loading ? (
                <div className="flex flex-col items-center py-12 gap-4">
                  <div className="w-12 h-12 border-4 border-[#00D0FF] border-t-transparent rounded-full animate-spin" />
                  <p className="text-[#A1C7D6] animate-pulse">
                    Fetching slab data...
                  </p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <h3 className="text-red-400 text-xl font-semibold mb-2">
                    Oops!
                  </h3>
                  <p className="text-zinc-400">{error}</p>
                  <button
                    onClick={closeModal}
                    className="mt-6 px-6 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-white"
                  >
                    Try Another Number
                  </button>
                </div>
              ) : (
                result && (
                  <div className="flex flex-col lg:flex-row gap-10">
                    {/* Card Image */}
                    <div className="w-full lg:w-1/3">
                      <div className="relative aspect-[3/4] w-full rounded-xl border border-[#00D0FF]/20 overflow-hidden bg-black/40">
                        {result.imageUrl ? (
                          <Image
                            src={result.imageUrl}
                            alt={result.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full opacity-20">
                            <Image
                              src="/icon.png"
                              alt="LSG"
                              width={60}
                              height={60}
                            />
                            <span className="text-[10px] uppercase mt-2">
                              No Image
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Data Table */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">
                      <div>
                        <h3 className="text-[#00D0FF] text-2xl font-bold leading-tight">
                          {result.name}
                        </h3>
                        <p className="text-zinc-400">
                          Card #{result.number} • {result.year}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
                        <DataRow
                          label="Cert Number"
                          value={result.certificationNumber}
                        />
                        <DataRow label="Set Name" value={result.set} />
                        <DataRow label="Language" value={result.language} />
                        <DataRow
                          label="Variant"
                          value={result.variant || "N/A"}
                        />
                        <DataRow label="Grade" value={result.grade} isGrade />
                        <DataRow
                          label="Subgrades"
                          value={result.subgrade || "N/A"}
                        />
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DataRow({
  label,
  value,
  isGrade,
}: {
  label: string;
  value: string;
  isGrade?: boolean;
}) {
  return (
    <div className="flex justify-between items-center px-5 py-3.5 bg-[#1A1A1A]">
      <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
        {label}
      </span>
      <span
        className={`${isGrade ? "text-[#00D0FF] font-bold text-lg" : "text-white font-medium"}`}
      >
        {value}
      </span>
    </div>
  );
}
