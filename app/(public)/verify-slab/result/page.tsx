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
      router.replace("/verify-slab");
    }
  }, [router]);

  if (!result) return null;

  return (
    <section className="relative isolate w-full min-h-screen bg-black overflow-x-hidden py-10 lg:py-20 flex flex-col items-center justify-center px-4">
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
        className="relative z-10 flex w-full max-w-226 flex-col items-center gap-7.5 lg:gap-15"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="relative h-12.5 w-35 lg:h-[65.74px] lg:w-[187px]">
          <Image src="/logo.png" alt="LSG" fill className="object-contain" />
        </div>

        <div className="flex h-auto w-full max-w-106.5 items-center justify-center lg:h-16.5">
          <h2 className="text-center text-[24px] font-semibold leading-[110%] text-[#00EFFE] xs:text-[28px] sm:text-[36px] lg:text-[44px]">
            Verification Result
          </h2>
        </div>

        {/* --- Table Wrapper --- */}
        <div className="w-full overflow-hidden rounded-[10px] border-[1.2px] border-solid border-[#00EFFE] lg:rounded-xl lg:border-[1.6px]">
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

        <div className="w-full max-w-226 rounded-xl border border-white/15 bg-[#262424] p-5 lg:p-[30px]">
          <div className="flex flex-col items-center gap-2.5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[14px] font-medium leading-[140%] sm:gap-3 lg:text-[18px]">
              <Link
                href="/grading-scale"
                className="bg-linear-to-r from-[#00F2FE] to-[#00D0FF] bg-clip-text font-medium text-transparent transition-opacity hover:opacity-80"
              >
                View Grading Scale
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/grading-process"
                className="bg-linear-to-r from-[#00F2FE] to-[#00D0FF] bg-clip-text font-medium text-transparent transition-opacity hover:opacity-80"
              >
                Our Grading Process
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/contact"
                className="bg-linear-to-r from-[#00F2FE] to-[#00D0FF] bg-clip-text font-medium text-transparent transition-opacity hover:opacity-80"
              >
                Contact Us
              </Link>
            </div>
            <button
              onClick={() => router.push("/verify-slab")}
              className="inline-flex h-11.25 w-full max-w-211 cursor-pointer items-center justify-center rounded-[10px] bg-linear-to-r from-[#00F2FE] to-[#00D0FF] px-6 py-2.5 text-[14px] font-bold text-[#062126] transition-transform hover:scale-[1.01] active:scale-[0.98] lg:h-12.5 lg:rounded-xl lg:text-[16px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
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
        className="flex h-12.5 w-full items-center justify-start border-b border-[#00EFFE] bg-black px-4 pl-4 font-semibold text-[13px] text-white sm:w-116 sm:border-b-0 sm:border-r lg:h-21.75 lg:pl-5 lg:text-[16px]"
        style={{ borderColor: "#00EFFE" }}
      >
        {label}
      </div>
      <div className="flex h-12.5 w-full items-center justify-start bg-black px-4 pl-4 text-[13px] text-white sm:w-116 lg:h-21.75 lg:pl-5 lg:text-[16px]">
        {value}
      </div>
    </div>
  );
}
