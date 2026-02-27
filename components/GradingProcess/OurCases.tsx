"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function OurCases() {
  const backSlabFeatures = [
    "Silver-textured logo to signify authenticity",
    "Embedded QR code for instant access to card's details",
    "Crystal-clear, UV-resistant sealed display to preserve the card’s condition",
    "Tamper-evident construction for added security",
  ];

  // Animation Variants
  const textVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="w-full flex bg-black justify-center font-poppins antialiased overflow-hidden">
      <div className="w-full flex flex-col items-center max-w-[1200px] gap-[20px] lg:gap-[40px] px-4 py-8 lg:py-10">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex items-center justify-center h-auto lg:h-[90px]"
        >
          <h2 className="font-bold text-[28px] sm:text-[48px] lg:text-[60px] leading-[110%] text-center text-[#00EFFE]">
            Our Cases
          </h2>
        </motion.div>

        {/* --- Content Container --- */}
        <div className="w-full flex flex-col items-center border-white/10 max-w-[1200px] gap-[25px] lg:gap-[30px] rounded-[12px] border p-5 sm:p-10 lg:pt-[45px] lg:pr-[70px] lg:pb-[45px] lg:pl-[70px] bg-gradient-to-b from-white/[0.084] to-zinc-400/[0.042]">
          <div className="flex flex-col items-center justify-start max-w-[1124px] w-full gap-[40px] lg:gap-[50px]">
            {/* =========================================
                1. FRONT SLAB
                ========================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col lg:flex-row items-center lg:items-center justify-between w-full max-w-[1078px] gap-6 lg:gap-0"
            >
              {/* IMAGE CONTAINER */}
              <motion.div
                variants={imageVariants}
                className="relative w-[220px] h-[376px] xs:w-[280px] xs:h-[480px] sm:w-[320px] sm:h-[548px] lg:w-[354px] lg:h-[606px] rounded-[6px] overflow-hidden flex-shrink-0"
              >
                <Image
                  src="/SlabDisplay.png"
                  alt="Front Slab Display"
                  fill
                  className="object-contain scale-103"
                  priority
                />
              </motion.div>

              {/* Text Side */}
              <motion.div
                variants={textVariants}
                className="flex flex-col justify-center w-full lg:w-[602.47px] gap-[15px] lg:gap-[20px]"
              >
                <h3 className="font-bold text-[22px] sm:text-[36px] lg:text-[44px] leading-[120%] lg:leading-[180%] text-[#FFFFFF] capitalize text-center lg:text-left">
                  Front Slab Display
                </h3>
                <p className="font-medium text-[14px] sm:text-[18px] lg:text-[22px] leading-[140%] lg:leading-[30px] text-[#A1C7D6] text-left">
                  The front of the slab showcases your card and its overall
                  grade, providing a clear view of its condition. Each
                  custom-made banner matches the card perfectly for a premium
                  look.
                </p>
                <div className="flex flex-col gap-[12px] lg:gap-[14px]">
                  <h4 className="font-medium text-[16px] lg:text-[22px] text-[#A1C7D6] text-left">
                    Every Front Display includes:
                  </h4>
                  <ul className="flex flex-col gap-[10px] lg:gap-[14px]">
                    {[
                      "Unique barcode for quick verification",
                      "Unique serial number for secure authentication.",
                      "Detailed card name, expansion, and exact title.",
                      "Metallic silver-textured logo for authenticity",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start lg:items-center gap-[10px] lg:gap-[14.34px]"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] lg:w-[29.17px] lg:h-[29.17px] rounded-full bg-[#00EFFE] mt-0.5 lg:mt-0">
                          <FaCheck
                            size={10}
                            className="text-black lg:size-[12px]"
                          />
                        </div>
                        <span className="text-[14px] lg:text-[20px] leading-tight text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* =========================================
                2. BACK SLAB
                ========================================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between w-full max-w-[1078px] gap-6 lg:gap-0"
            >
              {/* Text Side */}
              <motion.div
                variants={imageVariants}
                className="flex flex-col justify-center w-full lg:w-[602.47px] gap-[15px] lg:gap-[20px]"
              >
                <h3 className="font-bold text-[22px] sm:text-[36px] lg:text-[44px] leading-[120%] lg:leading-[180%] text-[#FFFFFF] capitalize text-center lg:text-left">
                  Back Slab Display
                </h3>
                <p className="font-medium text-[14px] sm:text-[18px] lg:text-[22px] leading-[140%] lg:leading-[32px] text-[#A1C7D6] text-left">
                  The back of the slab is designed for easy verification and
                  maximum security.
                </p>

                <div className="flex flex-col gap-[12px] lg:gap-[14px]">
                  <h4 className="font-medium text-[16px] lg:text-[22px] text-[#A1C7D6] text-left">
                    It includes:
                  </h4>
                  <ul className="flex flex-col gap-[10px] lg:gap-[14px]">
                    {backSlabFeatures.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start lg:items-center gap-[10px] lg:gap-[14.34px]"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-[#00EFFE] mt-0.5 lg:mt-0">
                          <FaCheck
                            size={10}
                            className="text-black lg:size-[12px]"
                          />
                        </div>
                        <span className="text-[14px] lg:text-[20px] leading-tight text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Image side */}
              <motion.div
                variants={textVariants}
                className="relative w-[220px] h-[376px] xs:w-[280px] xs:h-[480px] sm:w-[320px] sm:h-[548px] lg:w-[354px] lg:h-[606px] rounded-[6px] overflow-hidden flex-shrink-0"
              >
                <Image
                  src="/BackSlabDisplay.png"
                  alt="Back Slab Display"
                  fill
                  className="object-contain scale-103 "
                  priority
                />
              </motion.div>
            </motion.div>

            {/* --- DISCLAIMER --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-[1124px] lg:min-h-[132px] mt-2 lg:mt-4"
            >
              <p className="font-medium text-[12px] sm:text-[18px] lg:text-[22px] leading-[1.5] lg:leading-[32px] text-[#A1C7D6] text-center lg:text-left">
                <span className="font-bold text-white lg:text-[#A1C7D6]">
                  Please Note:
                </span>{" "}
                LSG Custom Grading is a collector-based, independent grading
                project and is not affiliated with professional third-party
                grading companies such as PSA, CGC, ACE, or others. The assigned
                grade is based on an independent evaluation, and is intended for
                display purposes. It should not be considered an official
                certification or compared to professional grading services
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
