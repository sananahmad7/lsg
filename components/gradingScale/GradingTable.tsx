"use client";

import React from "react";

export default function GradingTable() {
  const columns = [
    // FIXED: Adjusted lg grid spans to add up to exactly 12 (1+3+3+2+3 = 12)
    { header: "Grade", gridSpan: "col-span-2 lg:col-span-1" },
    { header: "Centering", gridSpan: "col-span-3 lg:col-span-3" },
    { header: "Corners", gridSpan: "col-span-3 lg:col-span-3" },
    { header: "Edges", gridSpan: "col-span-2 lg:col-span-2" },
    { header: "Surface", gridSpan: "col-span-2 lg:col-span-3" },
  ];

  const rows = [
    [
      "10",
      "Up to 65/35 or better",
      "All sharp or near-sharp",
      "All sharp or near-sharp",
      "Clean, glossy, no flaws under normal light",
    ],
    [
      "09",
      "Up to 70/30",
      "One slightly soft corner",
      "One slightly soft corner",
      "One light roller line or small speck",
    ],
    [
      "08",
      "Up to 75/25",
      "Two slightly soft tips",
      "Two slightly soft tips",
      "Slight scuff or light print line",
    ],
    [
      "07",
      "Up to 80/20",
      "Minor roundness on 2+ corners",
      "Minor roundness on 2+ corners",
      "Light marks or gloss dip",
    ],
    [
      "06",
      "Up to 85/15",
      "Rounded on two corners, soft on others",
      "Rounded on two corners, soft on others",
      "Light gloss loss or surface dullness",
    ],
    [
      "05",
      "Up to 90/10",
      "Noticeably soft tips",
      "Noticeably soft tips",
      "Surface fading, visible scratches",
    ],
    [
      "04",
      "Up to 95/5",
      "Soft or dull corners with minor bends",
      "Soft or dull corners with minor bends",
      "Light crease or major scuffing, still presentable",
    ],
    [
      "03",
      "Very off-center but full image present",
      "Very soft or visibly damaged corners",
      "Very soft or visibly damaged corners",
      "Obvious creases, dirt spots, or gloss loss",
    ],
    [
      "02",
      "Extremely off-center, image touches edge",
      "Major rounding or crushed tips",
      "Major rounding or crushed tips",
      "Deep scratches, fading, or major scuffing",
    ],
    [
      "01",
      "Miscut but no missing print",
      "Heavily worn, fully rounded, but no missing pap",
      "Heavily worn, fully rounded, but no missing pap",
      "Heavy surface wear, dirt, stains, or ink loss",
    ],
  ];

  return (
    <div className="flex justify-center w-full bg-black py-10 lg:py-20 px-2 sm:px-4">
      <div className="w-full max-w-[1200px]">
        <div
          className="relative grid grid-cols-12 overflow-hidden rounded-[8px] border-[1px] border-solid border-[#00EFFE]"
          style={{
            height: "auto",
            minHeight: "600px",
          }}
        >
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col h-full ${col.gridSpan} ${
                colIdx !== columns.length - 1
                  ? "border-r-[1px] border-[#00EFFE]"
                  : ""
              }`}
            >
              {/* Top Row Cell */}
              <div
                className="flex items-center justify-center bg-[#141414] px-1 lg:px-4 py-3 lg:py-5 border-b-[1px] border-[#00EFFE]"
                style={{ height: "50px" }}
              >
                <span className="font-poppins font-medium text-[9px] xs:text-[11px] sm:text-[14px] lg:text-[18px] leading-tight text-white text-center">
                  {col.header}
                </span>
              </div>

              {/* Body Cells */}
              <div className="flex flex-col flex-1 bg-black">
                {rows.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    className="flex items-center justify-center px-1 lg:px-4 py-2 lg:py-5 bg-black border-b-[1px] border-[#00EFFE] last:border-b-0"
                    style={{ height: "60px" }}
                  >
                    <span
                      className={`font-poppins text-center text-[8px] xs:text-[10px] sm:text-[13px] lg:text-[16px] leading-tight ${
                        colIdx === 0
                          ? "text-[#C9C9C9] font-bold"
                          : "text-[#FFFFFF]"
                      }`}
                    >
                      {row[colIdx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
