"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerificationResultPage() {
  const [result, setResult] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const data = sessionStorage.getItem("lastVerificationResult");
    if (data) {
      setResult(JSON.parse(data));
      window.scrollTo(0, 0);
    } else {
      // Redirect back if no data is found (e.g. direct URL access)
      router.replace("/verify-slab");
    }
  }, [router]);

  if (!result) return null;

  return (
    <section className="relative isolate w-full min-h-screen bg-black overflow-x-hidden py-20 flex flex-col items-center justify-center px-4">
      {/* Background image logic from VerifySlabFlow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/result.png"
          alt="bg"
          fill
          priority
          className="object-cover opacity-[0.70]"
        />
      </div>

      <div
        className="w-full max-w-[904px] flex flex-col items-center gap-[60px] relative z-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* --- Adjusted Background Image for Sharpness and 3xl Scaling --- */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-40 w-[400px] h-[400px] 3xl:w-[300px] 3xl:h-[300px] transition-all">
          <Image
            src="/VerificationResultBg.png"
            alt="Glow"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        <div className="relative w-[187px] h-[65.74px]">
          <Image src="/logo.png" alt="LSG" fill className="object-contain" />
        </div>

        <div className="w-full max-w-[426px] h-[66px] flex items-center justify-center">
          <h2 className="text-[#00EFFE] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[100%] text-center">
            Verification Result
          </h2>
        </div>

        {/* --- Table Wrapper --- */}
        <div
          className="w-full rounded-[12px] overflow-hidden"
          style={{
            borderWidth: "1.6px",
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
            padding: 30,
          }}
        >
          <div className="flex flex-col items-center gap-[10px]">
            <div
              className="flex flex-wrap items-center justify-center gap-3 text-center"
              style={{ fontWeight: 500, fontSize: 18, lineHeight: "140%" }}
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
              onClick={() => router.push("/verify-slab")}
              className="h-[50px] cursor-pointer w-full max-w-[844px] bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] rounded-[12px] transition-transform hover:scale-[1.01] active:scale-[0.98] inline-flex items-center justify-center"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: "151%",
                color: "#000000",
              }}
            >
              Verify a Different Card
            </button>
          </div>
        </div>
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
        className="w-full sm:w-[464px] h-[87px] flex items-center justify-start pl-5 text-left px-4 font-semibold text-[#FFFFFF] bg-black border-b sm:border-b-0 sm:border-r"
        style={{ borderColor: "#00EFFE" }}
      >
        {label}
      </div>
      <div className="w-full sm:w-[464px] h-[87px] flex items-center justify-start pl-5 text-left px-4 text-[#FFFFFF] bg-black">
        {value}
      </div>
    </div>
  );
}
