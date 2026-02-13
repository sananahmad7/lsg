import GradingHero from "@/components/GradingProcess/GradingHero";
import OurCases from "@/components/GradingProcess/OurCases";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Grading Process | LSG Grading",
  description:
    " Learn how we grade, authenticate, and encapsulate collectible trading cards",
};
function GradingProcess() {
  return (
    <div>
      <GradingHero />
      <OurCases />
    </div>
  );
}

export default GradingProcess;
