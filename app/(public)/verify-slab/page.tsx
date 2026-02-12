import { Suspense } from "react";
import VerifySlabFlow from "@/components/Verify/VerifySlabFlow";

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
