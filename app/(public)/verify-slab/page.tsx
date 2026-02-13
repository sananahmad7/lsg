import { Suspense } from "react";
import VerifySlabFlow from "@/components/Verify/VerifySlabFlow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Verify Slab | LSG Grading",
  description: " Each slab includes the full LSG experience",
};
export default function VerifySlabPage() {
  return (
    <Suspense
      fallback={
        <section className="relative isolate w-full min-h-screen bg-black overflow-x-hidden" />
      }
    >
      <VerifySlabFlow />
    </Suspense>
  );
}
