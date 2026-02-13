import AboutHero from "@/components/AboutUs/AboutHero";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import OurMission from "@/components/AboutUs/OurMission";
import React from "react";
import WhatMakesLSGDifferent from "@/components/AboutUs/WhatMakesLSGDifferent";
import LSGProcess from "@/components/AboutUs/LSGProcess";
import WhatWeOffer from "@/components/AboutUs/WhatWeOffer";
import GetInTouchWithUs from "@/components/Home/GetInTouchWithUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | LSG Grading",
  description:
    " At LSG, we grade, authenticate, and encapsulate collectible trading cards with a focus on clarity, protection, and display value. Each card is hand-picked, inspected, and slabbed by our team — no public submissions, ever.",
};
function AboutUs() {
  return (
    <div className="bg-black">
      <AboutHero />
      <WhoWeAre />
      <OurMission />
      <WhatMakesLSGDifferent />
      <LSGProcess />
      <WhatWeOffer />
      <GetInTouchWithUs />
    </div>
  );
}

export default AboutUs;
