"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Step = "landing" | "form" | "result";

type VerificationResult = {
  certificationNumber: string;
  set: string;
  name: string;
  number: string;
  language: string;
  variant: string;
  grade: string;
  subgrade: string;
  year: string;
};

function buildQuery(step: Step, cert?: string) {
  const params = new URLSearchParams();
  params.set("step", step);
  if (cert) params.set("cert", cert);
  return `?${params.toString()}`;
}

export default function VerifySlabFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState<Step>("landing");
  const [cert, setCert] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<VerificationResult | null>(null);

  // RESET LOGIC
  useEffect(() => {
    setStep("landing");
    setCert("");
    setResult(null);
    setError(null);
    router.replace("/verify-slab", { scroll: false });
  }, [router]);

  // Sync state changes to the URL
  useEffect(() => {
    if (step !== "landing" || cert !== "") {
      router.replace(buildQuery(step, cert || undefined), { scroll: false });
    }
  }, [step, cert, router]);

  const onGoToForm = () => {
    setError(null);
    setResult(null);
    setStep("form");
  };

  const onVerify = async () => {
    const trimmed = cert.trim();
    if (!trimmed) {
      setError("Please enter a certification number.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/getSlab?certificationNumber=${trimmed}`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Verification failed");
      }

      setResult(data);
      setStep("result");
    } catch (e: unknown) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Could not verify this number. Try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const onVerifyDifferent = () => {
    setCert("");
    setResult(null);
    setError(null);
    setStep("form");
  };

  return (
    <section className="relative isolate w-full min-h-screen bg-black overflow-x-hidden py-6 lg:py-10">
      <div className="absolute inset-0 z-0">
        <Image
          src={step === "result" ? "/result.png" : "/home1.webp"}
          alt="Verify slab background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.70]"
        />
      </div>

      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4">
        {step === "landing" && (
          <div
            className="w-full max-w-[788px] flex flex-col items-center gap-[16px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <h1 className="text-center font-semibold text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[44px] leading-[110%] text-[#00EFFE]">
              Verify your SLAB
            </h1>

            <p className="text-center font-medium text-[14px] xs:text-[16px] sm:text-[18px] lg:text-[22px] leading-[140%] lg:leading-[100%] text-[#A1C7D6] max-w-[788px]">
              Enter the unique number from your slab below to check its
              information.
            </p>

            <button
              type="button"
              onClick={onGoToForm}
              className="inline-flex cursor-pointer hover:bg-[#00EFFE]/30 transition-transform active:scale-[0.98] hover:scale-[1.02] font-bold bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] items-center justify-center h-[50px] lg:h-[60px] w-[200px] lg:w-[237px] rounded-[10px] lg:rounded-[12px] px-[25px] py-[11px] text-[15px] lg:text-[16px]"
              style={{
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
              }}
            >
              Verify Slab
            </button>

            <div className="relative w-[100px] h-[75px] lg:w-[149px] lg:h-[111px]">
              <Image
                src="/icon.png"
                alt="LSG icon"
                fill
                sizes="149px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}

        {step === "form" && (
          <div
            className="w-full max-w-[519px] rounded-[12px] border bg-[#262424] shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
            style={{
              fontFamily: "Poppins, sans-serif",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.14)",
              padding:
                typeof window !== "undefined" && window.innerWidth < 1024
                  ? 20
                  : 30,
            }}
          >
            <div className="w-full flex flex-col items-center gap-[12px] lg:gap-[16px]">
              <div className="w-full h-auto lg:h-[50px] flex items-center justify-center">
                <h2
                  className="text-center font-semibold text-[22px] xs:text-[28px] lg:text-[34px] leading-tight lg:leading-[50px] text-[#00EFFE] capitalize"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Card Verification
                </h2>
              </div>

              <div className="w-full flex justify-center">
                <div
                  className="relative w-full max-w-[461px] h-[100px] xs:h-[136px] rounded-[10px] overflow-hidden border"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                >
                  <Image
                    src="/serial.png"
                    alt="Slab label example"
                    fill
                    sizes="461px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-[15px] lg:gap-[20px]">
                <div className="w-full h-auto lg:h-[34px] flex items-center justify-center">
                  <p
                    className="text-center font-poppins font-semibold text-[16px] xs:text-[18px] lg:text-[24px] leading-[140%] text-white capitalize"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Enter Certification Number
                  </p>
                </div>

                <div className="w-full">
                  <input
                    value={cert}
                    onChange={(e) => setCert(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onVerify()}
                    placeholder="Certification Number"
                    aria-label="Certification Number"
                    className="w-full h-[45px] lg:h-[48.5px] rounded-[6px] bg-[#FFFFFF33] border outline-none text-white placeholder:text-[#FFFFFF99] px-4"
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(255,255,255,0.14)",
                      fontSize: 14,
                    }}
                  />

                  <div className="mt-1 min-h-[18px]">
                    {error && (
                      <p className="text-[12px] lg:text-[14px] font-medium text-red-400">
                        {error}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onVerify}
                  disabled={loading}
                  className="w-full h-[50px] lg:h-[60px] rounded-[10px] lg:rounded-[12px] cursor-pointer border bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_100.42%)] inline-flex items-center justify-center"
                  style={{
                    borderWidth: 1,
                    borderColor: "#00D0FF",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    lineHeight: "151%",
                    opacity: loading ? 0.7 : 1,
                    color: "#000000",
                  }}
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>

                <button
                  type="button"
                  onClick={() => setStep("landing")}
                  className="w-full text-center cursor-pointer text-[12px] lg:text-[13px] text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "result" && result && (
          <div
            className="w-full max-w-[904px] flex flex-col items-center gap-[30px] lg:gap-[60px] relative py-10"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-40 w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] 3xl:w-[300px] 3xl:h-[300px] transition-all">
              <Image
                src="/VerificationResultBg.png"
                alt="Background Glow"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative w-[140px] h-[50px] lg:w-[187px] lg:h-[65.74px]">
              <Image
                src="/logo.png"
                alt="LSG"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[426px] h-auto lg:h-[66px] flex items-center justify-center">
              <h2 className="text-[#00EFFE] font-semibold text-[24px] xs:text-[28px] lg:text-[44px] leading-[110%] text-center">
                Verification Result
              </h2>
            </div>

            <div
              className="w-full rounded-[10px] lg:rounded-[12px] overflow-hidden"
              style={{
                borderWidth:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? "1.2px"
                    : "1.6px",
                borderStyle: "solid",
                borderColor: "#00EFFE",
              }}
            >
              <TableRow
                label="Certification Number"
                value={result.certificationNumber}
              />
              <TableRow label="Set" value={result.set} />
              <TableRow label="Name" value={result.name} />
              <TableRow label="Number" value={result.number} />
              <TableRow label="Language" value={result.language} />
              <TableRow label="Variant" value={result.variant || "N/A"} />
              <TableRow label="Grade" value={result.grade} />
              <TableRow label="Subgrade" value={result.subgrade || "N/A"} />
              <TableRow label="Year" value={result.year} isLast />
            </div>

            <div
              className="w-full max-w-[904px] rounded-[12px] border"
              style={{
                backgroundColor: "#262424",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.14)",
                padding:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? 20
                    : 30,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <div className="flex flex-col items-center gap-[10px]">
                <div
                  className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 text-center"
                  style={{
                    fontWeight: 500,
                    fontSize:
                      typeof window !== "undefined" && window.innerWidth < 1024
                        ? 14
                        : 18,
                    lineHeight: "140%",
                  }}
                >
                  <Link
                    href="/grading-scale"
                    className="bg-gradient-to-r from-[#00F2FE] to-[#00D0FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity font-medium"
                  >
                    View Grading Scale
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    href="/grading-process"
                    className="bg-gradient-to-r from-[#00F2FE] to-[#00D0FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity font-medium"
                  >
                    Our Grading Process
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-[#00F2FE] to-[#00D0FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity font-medium"
                  >
                    Contact Us
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={onVerifyDifferent}
                  className="h-[45px] lg:h-[50px] cursor-pointer w-full max-w-[844px] bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] rounded-[10px] lg:rounded-[12px] transition-transform hover:scale-[1.01] active:scale-[0.98] inline-flex items-center justify-center"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize:
                      typeof window !== "undefined" && window.innerWidth < 1024
                        ? 14
                        : 16,
                    lineHeight: "151%",
                    color: "#000000",
                  }}
                >
                  Verify a Different Card
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TableRow({
  label,
  value,
  isLast = false,
}: {
  label: string;
  value: string | number;
  isLast?: boolean;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row w-full ${!isLast ? "border-b" : ""}`}
      style={{ borderColor: "#00EFFE" }}
    >
      <div
        className="w-full sm:w-[464px] h-[50px] lg:h-[87px] flex items-center justify-start pl-4 lg:pl-5 text-left font-semibold text-[13px] lg:text-[16px] text-[#FFFFFF] bg-black border-b sm:border-b-0 sm:border-r"
        style={{ borderColor: "#00EFFE" }}
      >
        {label}
      </div>

      <div className="w-full sm:w-[464px] h-[50px] lg:h-[87px] flex items-center justify-start pl-4 lg:pl-5 text-left text-[13px] lg:text-[16px] text-[#FFFFFF] bg-black">
        {value}
      </div>
    </div>
  );
}
