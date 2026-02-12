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
    ["10", "50/50 - 60/40", "Sharp", "Clean", "Perfect"],
    ["09", "60/40 - 65/35", "Minor Wear", "Slight Chipping", "Minor Scratches"],
    ["08", "65/35 - 70/30", "Soft", "Notable Chipping", "Light Staining"],
    ["07", "70/30 - 75/25", "Rounded", "Heavy Wear", "Print Lines"],
    ["06", "75/25 - 80/20", "Damage", "Dings", "Scratches"],
    ["05", "80/20 - 85/15", "Heavy Damage", "Worn", "Creased"],
    ["04", "85/15 - 90/10", "Flaws", "Peeled", "Stained"],
    ["03", "90/10 - 100/0", "Poor", "Cracked", "Holes"],
    ["02", "Off-center", "Beaten", "Rough", "Multiple Flaws"],
    ["01", "Miscut", "Poor", "Poor", "Poor"],
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
