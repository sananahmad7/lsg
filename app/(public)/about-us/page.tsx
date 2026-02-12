import AboutHero from "@/components/AboutUs/AboutHero";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import OurMission from "@/components/AboutUs/OurMission";
import React from "react";
import WhatMakesLSGDifferent from "@/components/AboutUs/WhatMakesLSGDifferent";
import LSGProcess from "@/components/AboutUs/LSGProcess";
import WhatWeOffer from "@/components/AboutUs/WhatWeOffer";
import GetInTouchWithUs from "@/components/Home/GetInTouchWithUs";

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
