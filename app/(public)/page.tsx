import OurGradingProcess from "@/components/Home/AccentBracket";
import ExploreCollection from "@/components/Home/ExploreCollection";
import FrequentQuestions from "@/components/Home/FrequentQuestions";
import GetInTouchWithUs from "@/components/Home/GetInTouchWithUs";
import HomeHeroBackground from "@/components/Home/Hero";
import LSGInsider from "@/components/Home/LSGInsider";
import VerifyYourSlab from "@/components/Home/VerifyYourSlab";
import WhyLSG from "@/components/Home/WhyLSG";
import { Suspense } from "react"; // Import Suspense

export default function Home() {
  return (
    <div className="bg-black">
      <HomeHeroBackground />
      <WhyLSG />
      <VerifyYourSlab />
      <OurGradingProcess />
      <ExploreCollection />

      {/* Wrap FrequentQuestions in Suspense to fix build error */}
      <Suspense fallback={<div className="bg-black h-96" />}>
        <FrequentQuestions />
      </Suspense>

      <LSGInsider />
      <GetInTouchWithUs />
    </div>
  );
}
