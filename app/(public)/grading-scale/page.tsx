import GradingScaleHero from "@/components/gradingScale/GradingScaleHero";
import GradingTable from "@/components/gradingScale/GradingTable";
import { Suspense } from "react"; // [ADD THIS]
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Grading Scale | LSG Grading",
  description:
    " Each card is graded on a scale from LSG 10 to LSG 1 based on centering, corners, edges, and surface.",
};
export default function GradingScalePage() {
  return (
    <div>
      <Suspense fallback={<div className="bg-black min-h-screen" />}>
        <GradingScaleHero />
      </Suspense>
      <GradingTable />
    </div>
  );
}
