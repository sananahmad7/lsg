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
      // Fetch full details for the specific card
      const response = await fetch(
        `/api/getSlab?certificationNumber=${certNumber}`,
      );
      const data = await response.json();

      if (response.ok) {
        // Match your VerificationResultPage's expectation
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
    <section className="w-full bg-black py-20">
      <div className="mx-auto w-full max-w-[1320px] px-6 xl:px-0">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="w-full max-w-[708px] flex items-center justify-center">
            <h2
              className="text-center font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[133%] tracking-[1px]"
              style={{ fontFamily: "Poppins, sans-serif", color: "#00EFFE" }}
            >
              Explore Our Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
            {slabs.map((item) => (
              <div
                key={item.certificationNumber}
                className="bg-[#303030] flex flex-col items-center box-border"
                style={{
                  width: "308px",
                  height: "628px",
                  borderRadius: "20.91px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "9px",
                  paddingRight: "9px",
                  gap: "12px",
                }}
              >
                <div
                  className="flex flex-col items-center"
                  style={{
                    width: "290px",
                    height: "601px",
                    gap: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    className="relative flex-shrink-0"
                    style={{ width: "128px", height: "45px" }}
                  >
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={128}
                      height={45}
                      className="object-contain"
                    />
                  </div>

                  <div
                    className="flex flex-col items-center"
                    style={{
                      width: "290px",
                      height: "542px",
                      gap: "13px",
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-[12px] bg-black/20"
                      style={{ width: "290px", height: "490px" }}
                    >
                      <Image
                        src={item.imageUrl || "/placeholder.png"}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="290px"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      style={{
                        width: "270px",
                        height: "39px",
                      }}
                    >
                      <span
                        className="text-white flex items-center"
                        style={{
                          height: "30px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "29.04px",
                          letterSpacing: "1.16px",
                        }}
                      >
                        {item.name.split(" ")[0]}{" "}
                        {/* Display first word to keep layout clean */}
                      </span>

                      <button
                        onClick={() =>
                          handleViewDetails(item.certificationNumber)
                        }
                        className="bg-[linear-gradient(93.95deg,#00F2FE_4.94%,#00D0FF_97.42%)] shadow-[0px_13.71px_30.86px_0px_#008CFF40] text-black hover:brightness-110 hover:scale-101 transition-all flex items-center justify-center cursor-pointer"
                        style={{
                          width: "113px",
                          height: "39px",
                          borderRadius: "10.29px",
                          padding: "9.43px 21.43px",
                          gap: "2.57px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Sora, sans-serif",
                            fontWeight: 700,
                            fontSize: "13.71px",
                            lineHeight: "151%",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
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
