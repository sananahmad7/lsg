"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

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

  const initialStep = (searchParams.get("step") as Step) || "landing";
  const initialCert = searchParams.get("cert") || "";

  const [step, setStep] = useState<Step>(initialStep);
  const [cert, setCert] = useState(initialCert);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<VerificationResult | null>(null);

  // keep URL in sync (so refresh/back works nicely)
  useEffect(() => {
    router.replace(buildQuery(step, cert || undefined), { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, cert]);

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
      // ✅ Replace this with your real API call
      // Example:
      // const res = await fetch(`/api/verify-slab?cert=${encodeURIComponent(trimmed)}`);
      // if (!res.ok) thTableRow new Error("Request failed");
      // const data = await res.json();

      // Dummy response (for UI wiring)
      const data: VerificationResult = {
        certificationNumber: trimmed,
        set: "00",
        name: "357642",
        number: "ioi",
        language: "dfsa",
        variant: "dsf",
        grade: "dsf",
        subgrade: "32323223",
        year: "32",
      };

      setResult(data);
      setStep("result");
    } catch (e) {
      setError("Could not verify this number. Try again.");
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
    <section className="relative isolate w-full min-h-screen bg-black overflow-x-hidden  py-10">
      {/* Background (EXACT same settings as HomeHero) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={step === "result" ? "/result.png" : "/home1.webp"}
          alt="Verify slab background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.27]"
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4">
        {step === "landing" && (
          <div
            className="w-full max-w-[788px] flex flex-col items-center gap-[16px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <h1 className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[100%] text-[#00D0FF]">
              Verify your SLAB
            </h1>

            <p className="text-center font-medium text-[16px] sm:text-[18px] lg:text-[22px] leading-[100%] text-white/70 max-w-[788px]">
              Enter the unique number from your slab below to check its
              information.
            </p>

            {/* IMPORTANT: Button changes state (no route change) */}
            <button
              type="button"
              onClick={onGoToForm}
              className="inline-flex items-center justify-center h-[60px] w-[237px] rounded-[12px] border px-[25px] py-[11px] font-semibold text-[16px]"
              style={{
                backgroundColor: "#00D0FF",
                borderColor: "#00D0FF",
                color: "#062126",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
              }}
            >
              Verify SLAB
            </button>

            <div className="relative w-[149px] h-[111px]">
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
            className="
      w-full max-w-[519px]
      rounded-[12px]
      border
      bg-[#3A3A3A]/90
      shadow-[0_18px_60px_rgba(0,0,0,0.55)]
    "
            style={{
              fontFamily: "Poppins, sans-serif",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.14)",
              padding: 30, // Figma padding: 30px
            }}
          >
            {/* Inner content container: 459 x 397, gap 16 */}
            <div className="w-full flex flex-col items-center gap-[16px]">
              {/* Header container: 459 x 50 */}
              <div className="w-full h-[50px] flex items-center justify-center">
                <h2
                  className="text-center font-semibold text-[34px] leading-[50px] text-[#00D0FF] capitalize"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Card Verification
                </h2>
              </div>

              {/* Image: 461 x 136 */}
              <div className="w-full flex justify-center">
                <div
                  className="relative w-[461px] h-[136px] rounded-[10px] overflow-hidden border"
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

              {/* cony: 459 x 179, gap 20 */}
              <div className="w-full flex flex-col items-center gap-[20px]">
                {/* cony header: 459 x 34 */}
                <div className="w-full h-[34px] flex items-center justify-center">
                  <p
                    className="text-center font-semibold text-[24px] leading-[140%] text-white capitalize"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Enter Certification Number
                  </p>
                </div>

                {/* Input: 459 x 48.5 */}
                <div className="w-full">
                  <input
                    value={cert}
                    onChange={(e) => setCert(e.target.value)}
                    placeholder="Certification Number"
                    aria-label="Certification Number"
                    className="
              w-full h-[48.5px]
              rounded-[6px]
              border
              outline-none
              text-white
              placeholder:text-white/40
            "
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(255,255,255,0.14)",
                      backgroundColor: "rgba(0,0,0,0.20)",
                      paddingTop: 14.05,
                      paddingBottom: 14.05,
                      paddingLeft: 16.4,
                      paddingRight: 16.4,
                    }}
                  />

                  {/* reserve space so layout doesn't jump */}
                  <div className="mt-2 min-h-[18px]">
                    {error && (
                      <p className="text-[13px] text-red-300">{error}</p>
                    )}
                  </div>
                </div>

                {/* Button: 459 x 60 */}
                <button
                  type="button"
                  onClick={onVerify}
                  disabled={loading}
                  className="
            w-full h-[60px]
            rounded-[12px]
            border
            inline-flex items-center justify-center
          "
                  style={{
                    borderWidth: 1,
                    borderColor: "#00D0FF",
                    backgroundColor: "#00D0FF",
                    color: "#062126",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "151%",
                    opacity: loading ? 0.7 : 1,
                    paddingTop: 11,
                    paddingBottom: 11,
                    paddingLeft: 25,
                    paddingRight: 25,
                  }}
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>

                {/* Back button (to landing) */}
                <button
                  type="button"
                  onClick={() => setStep("landing")}
                  className="w-full text-center text-[13px] text-white/70 hover:text-white transition-colors"
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
            className="w-full max-w-[904px] flex flex-col items-center gap-[60px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {/* Logo: 187 x 65.742 */}
            <div className="relative w-[187px] h-[65.7421875px]">
              <Image
                src="/logo.png"
                alt="LSG"
                fill
                className="object-contain"
              />
            </div>

            {/* Header: 426 x 66 */}
            <div className="w-full max-w-[426px] h-[66px] flex items-center justify-center">
              <h2 className="text-[#00D0FF] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[100%] text-center">
                Verification Result
              </h2>
            </div>

            {/* Table box: 903.795 x 783, radius 12, border 2 */}
            <div
              className="w-full rounded-[12px] overflow-hidden"
              style={{
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: "#00D0FF",
              }}
            >
              {/* Each row is 2 cells like Figma (each cell: padding 30, border 1) */}
              <TableRow
                label="Certification Number"
                value={result.certificationNumber}
              />
              <TableRow label="Set" value={result.set} />
              <TableRow label="Name" value={result.name} />
              <TableRow label="Number" value={result.number} />
              <TableRow label="Language" value={result.language} />
              <TableRow label="Variant" value={result.variant} />
              <TableRow label="Grade" value={result.grade} />
              <TableRow label="Subgrade" value={result.subgrade} />
              <TableRow label="Year" value={result.year} />
            </div>

            {/* Below table content (Figma: 904 x 155, bg #262424) */}
            <div
              className="w-full max-w-[904px] rounded-[12px] border"
              style={{
                backgroundColor: "#262424",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.14)",
                paddingTop: 30,
                paddingRight: 30,
                paddingBottom: 20,
                paddingLeft: 30,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <div className="flex flex-col items-center gap-[10px]">
                {/* Links row */}
                <div
                  className="flex flex-wrap items-center justify-center gap-3 text-center"
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    lineHeight: "140%",
                  }}
                >
                  <Link
                    href="/grading-scale"
                    className="text-[#00D0FF] hover:text-[#00D0FF]/80 transition-colors"
                  >
                    View Grading Scale
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    href="/grading-process"
                    className="text-[#00D0FF] hover:text-[#00D0FF]/80 transition-colors"
                  >
                    Our Grading Process
                  </Link>
                  <span className="text-white/30">|</span>
                  <Link
                    href="/contact"
                    className="text-[#00D0FF] hover:text-[#00D0FF]/80 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Button: 844 x 50 (kept as you said it's fine) */}
                <button
                  type="button"
                  onClick={onVerifyDifferent}
                  className="h-[50px] w-full max-w-[844px] rounded-[12px] border inline-flex items-center justify-center"
                  style={{
                    borderWidth: 1,
                    borderColor: "#00D0FF",
                    backgroundColor: "#00D0FF",
                    color: "#062126",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "151%",
                    paddingTop: 11,
                    paddingBottom: 11,
                    paddingLeft: 25,
                    paddingRight: 25,
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

function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[1fr_1fr] border-b border-[#00D0FF]/60 last:border-b-0">
      <div className="px-4 py-3 text-white/85 text-[13px] border-r border-[#00D0FF]/60">
        {label}
      </div>
      <div className="px-4 py-3 text-white/85 text-[13px]">{value}</div>
    </div>
  );
}
