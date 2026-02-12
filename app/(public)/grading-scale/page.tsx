import GradingScaleHero from "@/components/gradingScale/GradingScaleHero";
import GradingTable from "@/components/gradingScale/GradingTable";
import { Suspense } from "react"; // [ADD THIS]

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
