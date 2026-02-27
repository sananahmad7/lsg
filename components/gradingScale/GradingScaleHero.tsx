"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GradingScaleHero() {
  const searchParams = useSearchParams();
  const cardImage = searchParams.get("img") || "/Hero3.png";

  const [activeIndex, setActiveIndex] = useState(0);

  const gradingLevels = [
    {
      title: "LSG 10 – Flawless",
      description:
        "A high-end card with near-perfect visual appeal. May have one or two minor, non-distracting imperfections such as soft corner, print speck, or slight off-centering.",
      footer:
        "A card with slight natural wear that still looks pristine in any case or display.",
      bullets: [
        { label: "Corners", value: "Up to 1 soft tip allowed" },
        { label: "Edges", value: "Slight edge touch on one side" },
        {
          label: "Surface",
          value: "Minor gloss variation or a light roller line",
        },
        {
          label: "Centering",
          value: "Acceptable up to 60/40 front, 80/20 back",
        },
      ],
    },
    {
      title: "LSG 9 – Prime",
      description:
        "A well-preserved card with minor visible wear across 1-2 areas. Doesn't meet 'Flawless' due to multiple small flaws, but still visually impressive.",
      footer: "A card stored loosely, but kept clean and rarely touched.",
      bullets: [
        { label: "Corners", value: "Slight wear on 1-2 tips" },
        { label: "Edges", value: "Minor whitening or nick" },
        { label: "Surface", value: "Small scuff or gloss fade" },
        { label: "Centering", value: "Up to 65/35 front, 85/15 back" },
      ],
    },
    {
      title: "LSG 8 – Excellent",
      description:
        "A clean card showing light but even wear across most subgrades. Slight fading, scratches, or edge rub may be visible without magnification.",
      footer: "A card kept in a binder for years, handled occasionally.",
      bullets: [
        { label: "Corners", value: "Slightly dull or softly rounded" },
        { label: "Edges", value: "Whitening along multiple sides" },
        { label: "Surface", value: "Light scratches, gloss loss" },
        { label: "Centering", value: "Up to 70/30" },
      ],
    },
    {
      title: "LSG 7 – Very Good",
      description:
        "Noticeable flaws, but the card is still fully intact and collectible. Common for older cards or lightly played ones.",
      footer:
        "A card played with sleeves or passed through multiple collectors.",
      bullets: [
        { label: "Corners", value: "Rounded or soft" },
        { label: "Edges", value: "Mild chipping or visible whitening" },
        { label: "Surface", value: "Minor print spots or faded colors" },
        { label: "Centering", value: "Up to 75/25" },
      ],
    },
    {
      title: "LSG 6 – Good",
      description:
        "Moderate wear in all categories. Surface loss, corner softness, and edge rub are obvious, but the card retains its shape and clarity.",
      footer:
        "A card from a childhood shoebox collection, handled with care but never protected.",
      bullets: [
        { label: "Corners", value: "Rounded or slightly bent" },
        { label: "Edges", value: "Fraying, edge wear" },
        { label: "Surface", value: "Surface fading, scuffs, or minor indent" },
        { label: "Centering", value: "Up to 80/20" },
      ],
    },
    {
      title: "LSG 5 – Moderate Play",
      description:
        "Significant wear is visible — not just aging, but true handling marks like dents or creases. Still fully intact.",
      footer: "A former deck card, shuffled and played but never trashed.",
      bullets: [
        { label: "Corners", value: "Blunt or folded" },
        { label: "Edges", value: "White, rough, or chipped" },
        { label: "Surface", value: "Gloss loss, light crease allowed" },
        { label: "Centering", value: "Very loose" },
      ],
    },
    {
      title: "LSG 4 – Heavy Play",
      description:
        "Widespread damage, including bent corners, rough edges, and surface abrasions. Still 100% complete and readable.",
      footer: "A beloved card from years of play, now worn but still complete.",
      bullets: [
        { label: "Corners", value: "Heavily rounded or worn" },
        { label: "Edges", value: "Peeling or chipped" },
        { label: "Surface", value: "Deep scratches or ink fade" },
        { label: "Centering", value: "Doesn't matter unless missing frame" },
      ],
    },
    {
      title: "LSG 3 – Poor",
      description:
        "Major flaws including creases, heavy surface wear, fraying, and fading. Not attractive, but still physically whole.",
      footer:
        "A beat-up survivor — nostalgic but not collectible in condition.",
      bullets: [
        { label: "Corners", value: "Crushed" },
        { label: "Edges", value: "Heavily frayed" },
        {
          label: "Surface",
          value: "May have partial ink lift or edge layer softening",
        },
      ],
    },
    {
      title: "LSG 2 – Damaged",
      description:
        "Major defects like stains, deep creasing, water damage, or full dulling of the surface. No missing parts.",
      footer: "A card exposed to the elements but still intact.",
      bullets: [
        { label: "Corners", value: "Collapsed or flattened" },
        { label: "Edges", value: "Warped or swollen" },
        { label: "Surface", value: "Delamination, ink wear, etc." },
      ],
    },
    {
      title: "LSG 1 – Unsatisfactory",
      description:
        "The lowest possible grade for a card that remains complete. May have extreme wear, but no tears, holes, or missing material.",
      footer:
        "A card you'd expect to find stuck to the bottom of a drawer — but it's still one whole piece.",
      bullets: [
        { label: "Corners", value: "Destroyed" },
        { label: "Edges", value: "Fully worn or bent" },
        { label: "Surface", value: "Large creases, grime, ink fade" },
        {
          label: "Centering",
          value: "Can be miscut to the edge or corner tab",
        },
      ],
    },
    {
      title: "EDC Category – Optional Tag",
      isTable: true,
      description:
        "This is a separate category, not a score reducer. It flags factory or print-related defects that are rare and may even increase collector interest.",
      footer:
        "Unique factory variations handled separately from condition grading.",
      tableData: [
        { code: "EDC-MC", name: "Miscut", desc: "Misaligned or shifted frame" },
        { code: "EDC-CR", name: "Crimped", desc: "Factory packaging mark" },
        {
          code: "EDC-PE",
          name: "Print Error",
          desc: "Roller lines, ink issues",
        },
        { code: "EDC-IC", name: "Ink shift", desc: "Out of register layers" },
        { code: "EDC-FS", name: "Foil Shift", desc: "Misaligned foil" },
        { code: "EDC-BF", name: "Back Flip", desc: "Swapped front/back" },
      ],
    },
  ];

  const handleNext = () =>
    setActiveIndex((p) => (p + 1) % gradingLevels.length);
  const handlePrev = () =>
    setActiveIndex(
      (p) => (p - 1 + gradingLevels.length) % gradingLevels.length,
    );

  const currentLevel = gradingLevels[activeIndex];

  return (
    <section className="relative w-full bg-black overflow-hidden font-poppins px-1 md:px-4">
      {/* --- BG --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[1097.12px] lg:h-[1097.12px]">
          <Image
            src="/result.png"
            alt="rings"
            fill
            className="object-contain opacity-[0.77]"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center pt-8 md:pt-12 lg:pt-[50px] pb-10 lg:pb-[100px]">
        {/* --- Logo --- */}
        <div className="relative mb-6 md:mb-8 w-[120px] h-[50px] lg:w-[231px] lg:h-[95.66px]">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* --- Header Text --- */}
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center mb-8 md:mb-12 lg:mb-[80px] w-full max-w-[1195px] px-4">
          <h1 className="font-semibold text-[#00EFFE] text-[22px] xs:text-[28px] sm:text-[36px] lg:text-[44px] leading-tight lg:leading-[140%]">
            LegacySlabsGrading (LSG) – Official Score Definitions
          </h1>
          <p className="text-[#C9C9C9] text-[13px] md:text-[16px] sm:text-[18px] font-normal px-2">
            Each card is graded on a scale from LSG 10 to LSG 1 based on
            centering, corners, edges, and surface.
          </p>
        </div>

        {/* --- Slider UI --- */}
        <div className="flex flex-col xl:flex-row items-center justify-center w-full max-w-[1400px] gap-6 xl:gap-0 relative px-6 md:px-12">
          <div className="flex flex-col xl:flex-row items-center justify-center relative w-full xl:w-[1072px] xl:h-[697.89px] gap-8 xl:gap-0 max-w-full md:max-w-[675px] xl:max-w-none">
            {/* Prev Btn */}
            <button
              onClick={handlePrev}
              className="absolute left-[-20px] md:left-[-60px] xl:left-[-100px] top-[25%] xl:top-[50%] -translate-y-1/2 z-20 text-[#00EFFE] hover:scale-110 cursor-pointer"
            >
              <FaChevronLeft size={20} className="md:w-[30px] md:h-[30px]" />
            </button>

            {/* Info Box */}
            <div className="flex flex-col bg-[#141414] border border-[#00EFFE] rounded-[12px] justify-between p-5 md:p-8 z-0 relative w-full xl:w-[675px] h-auto xl:min-h-[557.38px] gap-5 xl:gap-0 transition-all">
              <h2 className="font-semibold text-[#00EFFE] text-[24px] md:text-[34px] lg:text-[44px] leading-snug">
                {currentLevel.title}
              </h2>
              <p className="font-medium text-[#C9C9C9] text-[14px] md:text-[18px] lg:text-[22px] leading-relaxed">
                {currentLevel.description}
              </p>

              {currentLevel.isTable ? (
                <div className="overflow-hidden border border-[#00EFFE] rounded-[8px] mt-2 bg-black border-[1.6px]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-black text-[11px] md:text-[14px]">
                        <th className="p-2 md:p-3 text-white border-b border-r border-[#00EFFE]">
                          Code
                        </th>
                        <th className="p-2 md:p-3 text-white border-b border-r border-[#00EFFE]">
                          Name
                        </th>
                        <th className="p-2 md:p-3 text-white border-b border-[#00EFFE]">
                          Desc
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentLevel.tableData?.map((row, i) => (
                        <tr
                          key={i}
                          className="bg-black text-[10px] md:text-[13px]"
                        >
                          <td className="p-2 md:p-3 text-white border-b border-r border-[#00EFFE]">
                            {row.code}
                          </td>
                          <td className="p-2 md:p-3 text-white border-b border-r border-[#00EFFE]">
                            {row.name}
                          </td>
                          <td className="p-2 md:p-3 text-white border-b border-[#00EFFE]">
                            {row.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex flex-col gap-3 md:gap-[14.34px] w-full">
                  <h3 className="font-medium text-[#A1C7D6] text-[15px] md:text-[19px] lg:text-[22px]">
                    Process Criteria:
                  </h3>
                  <div className="flex flex-col gap-2 md:gap-[14.34px]">
                    {currentLevel.bullets?.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start md:items-center gap-3 w-full"
                      >
                        <div className="shrink-0 flex items-center justify-center bg-[#00EFFE] rounded-full w-[22px] h-[22px] md:w-[35px] md:h-[35px] mt-0.5 md:mt-0">
                          <FaCheck
                            size={10}
                            className="text-black md:size-[14px]"
                          />
                        </div>
                        <span className="text-white text-[13px] md:text-[17px] lg:text-[20px]">
                          <span className="">{point.label}:</span> {point.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="font-medium text-[#A1C7D6] text-[14px] md:text-[18px] lg:text-[22px] mt-4 lg:mt-0">
                {currentLevel.footer}
              </p>
            </div>

            {/* Slab Image */}
            <div
              className="relative rounded-[9.2px] overflow-hidden xl:ml-[-11px] z-10 bg-black w-[200px] h-[340px] xs:w-[260px] xs:h-[450px] md:w-[350px] md:h-[600px] xl:w-[408px] xl:h-[697.89px]"
              style={{ padding: "12px" }}
            >
              <Image
                src={cardImage}
                alt="Card"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next Btn */}
            <button
              onClick={handleNext}
              className="absolute right-[-20px] md:right-[-60px] xl:right-[-100px] top-[25%] xl:top-[50%] -translate-y-1/2 z-20 text-[#00EFFE] hover:scale-110 cursor-pointer"
            >
              <FaChevronRight size={20} className="md:w-[30px] md:h-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
