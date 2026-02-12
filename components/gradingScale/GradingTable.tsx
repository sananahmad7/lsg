"use client";

import React from "react";

export default function GradingTable() {
  const columns = [
    { header: "Grade", width: "w-[129px]" },
    { header: "Centering", width: "w-[267px]" },
    { header: "Corners", width: "w-[267px]" },
    { header: "Edges", width: "w-[267px]" },
    { header: "Surface", width: "w-[267px]" },
  ];

  // Updated rows based on definitions from your images
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
    <div className="flex justify-center w-full bg-black py-20">
      {/* FIXED: added 'overflow-hidden' to prevent scrollbar 
          FIXED: Removed 'bg-[#00EFFE]' from the main container to prevent the teal bar 
          on the far right, replaced with individual borders.
      */}
      <div
        className="relative flex flex-row overflow-hidden rounded-[8px] border-[1px] border-solid border-[#00EFFE]"
        style={{
          width: "1200px", // Adjusted to match exact column total (129 + 267*4)
          height: "907px",
        }}
      >
        {columns.map((col, colIdx) => (
          <div
            key={colIdx}
            className={`flex flex-col h-full ${col.width} ${
              colIdx !== columns.length - 1
                ? "border-r-[1px] border-[#00EFFE]"
                : ""
            }`}
          >
            {/* Top Row Cell */}
            <div
              className="flex items-center justify-center bg-[#141414] px-4 py-5 border-b-[1px] border-[#00EFFE]"
              style={{ height: "67px" }}
            >
              <span className="font-poppins font-medium text-[18px] leading-[150%] text-white text-center">
                {col.header}
              </span>
            </div>

            {/* Body Cells */}
            <div className="flex flex-col flex-1 bg-black">
              {rows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="flex items-center justify-center px-4 py-5 bg-black border-b-[1px] border-[#00EFFE] last:border-b-0"
                  style={{ height: "84px" }}
                >
                  <span
                    className={`font-poppins text-center text-[16px] leading-tight ${
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
  );
}
