"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCollectionSlabs } from "@/app/actions/slabActions";

interface CollectionSlab {
  certificationNumber: string;
  imageUrl: string | null;
  name: string;
}

export default function ExploreCollection() {
  const [slabs, setSlabs] = useState<CollectionSlab[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const data = await getCollectionSlabs();
      setSlabs(data as CollectionSlab[]);
      setLoading(false);
    }
    loadData();
  }, []);

  const handleViewDetails = async (certNumber: string) => {
    try {
      const response = await fetch(
        `/api/getSlab?certificationNumber=${certNumber}`,
      );
      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("lastVerificationResult", JSON.stringify(data));
        router.push("/verify-slab/result");
      }
    } catch (error) {
      console.error("Error fetching card details:", error);
    }
  };

  if (loading)
    return (
      <div className="w-full h-96 bg-black flex items-center justify-center text-[#00EFFE]">
        Loading Collection...
      </div>
    );

  return (
    <section className="w-full bg-black py-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-6 xl:px-0">
        <div className="flex flex-col items-center gap-[30px] lg:gap-[50px]">
          <div className="w-full max-w-[708px] flex items-center justify-center">
            <h2
              className="text-center font-semibold text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[44px] leading-[133%] tracking-[1px]"
              style={{ fontFamily: "Poppins, sans-serif", color: "#00EFFE" }}
            >
              Explore Our Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
            {slabs.map((item) => (
              <div
                key={item.certificationNumber}
                // Outer Card: Adjusted mobile height from 520px to 480px and reduced padding
                className="bg-[#303030] flex flex-col items-center box-border w-[260px] h-[480px] sm:w-[308px] sm:h-[628px] rounded-[20.91px] pt-3 pb-2 px-[9px] gap-3"
              >
                <div
                  // Content Wrapper: Tightened mobile height to remove empty bottom space
                  className="flex flex-col items-center w-full h-[460px] sm:h-[601px] gap-2 sm:gap-[10px]"
                >
                  <div className="relative flex-shrink-0 w-[100px] h-[35px] sm:w-[128px] sm:h-[45px]">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-center w-full flex-1 gap-2 sm:gap-[13px]">
                    <div className="relative overflow-hidden rounded-[12px] bg-black/20 w-full h-[360px] sm:h-[490px]">
                      <Image
                        src={item.imageUrl || "/placeholder.png"}
                        alt={item.name}
                        fill
                        className=" object-fit lg:object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 245px, 290px"
                      />
                    </div>

                    <div className="flex items-center justify-between w-full px-1 sm:px-2 mt-auto pb-2">
                      <span
                        className="text-white flex items-center font-semibold text-[14px] sm:text-[16px] leading-tight"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {item.name.split(" ")[0]}
                      </span>

                      <button
                        onClick={() =>
                          handleViewDetails(item.certificationNumber)
                        }
                        className="bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] shadow-[0px_13.71px_30.86px_0px_#008CFF40] text-black hover:brightness-110 hover:scale-101 transition-all flex items-center justify-center cursor-pointer w-[100px] h-[35px] sm:w-[113px] sm:h-[39px] rounded-[8px] sm:rounded-[10.29px]"
                      >
                        <span
                          className="font-bold text-[11px] sm:text-[13.71px] leading-normal sm:leading-[151%] text-center whitespace-nowrap"
                          style={{ fontFamily: "Sora, sans-serif" }}
                        >
                          View Details
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
