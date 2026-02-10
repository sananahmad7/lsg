import OurGradingProcess from "@/components/Home/AccentBracket";
import ExploreCollection from "@/components/Home/ExploreCollection";
import FrequentQuestions from "@/components/Home/FrequentQuestions";
import GetInTouchWithUs from "@/components/Home/GetInTouchWithUs";
import HomeHeroBackground from "@/components/Home/Hero";
import LSGInsider from "@/components/Home/LSGInsider";
import VerifyYourSlab from "@/components/Home/VerifyYourSlab";
import WhyLSG from "@/components/Home/WhyLSG";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <HomeHeroBackground />
      <WhyLSG />
      <VerifyYourSlab />
      <OurGradingProcess />
      <ExploreCollection />
      <FrequentQuestions />
      <LSGInsider />
      <GetInTouchWithUs />
    </div>
  );
}
