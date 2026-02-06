import Image from "next/image";
import Link from "next/link";

export default function GradingWithCare() {
  return (
    <section className="w-full bg-black">
      {/* Outer frame: keep desktop look, make responsive */}
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-0">
        <div
          className="w-full "
          style={{
            backgroundColor: "#000",
          }}
        >
          {/* Responsive padding: 70 on lg, smaller on mobile */}
          <div className="px-4 sm:px-8 lg:px-[70px] py-[25px]">
            {/* Inner container */}
            <div className="mx-auto w-full max-w-[1180px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[97px]">
              {/* LEFT */}
              <div
                className="w-full lg:w-[715px] flex flex-col"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <h2
                  className="text-[#00D0FF] capitalize font-semibold"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  <span className="block text-[26px] sm:text-[34px] lg:text-[44px] leading-[110%]">
                    Grading With Care &amp; Protection
                  </span>
                </h2>

                <p
                  className="mt-4 text-white/70 font-medium"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  <span className="block text-[15px] sm:text-[18px] lg:text-[22px] leading-[140%]">
                    At LSG, we grade cards using our own scale, and we only work
                    with cards from our own collection. Every slab is sealed and
                    secured for long-term preservation, with attention to
                    condition, presentation, and collector value.
                    <br />
                    <br />
                    We clean the card moderately (no tampering), seal it with
                    tamper-proof slabs, and display it in its best form — ready
                    for any collection.
                  </span>
                </p>

                {/* Button */}
                <div className="mt-6 lg:mt-auto">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-[12px] border w-full sm:w-[237px] h-[60px]"
                    style={{
                      borderWidth: 1,
                      borderColor: "#00D0FF",
                      backgroundColor: "#00D0FF",
                      color: "#062126",
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      lineHeight: "151%",
                      paddingTop: 11,
                      paddingBottom: 11,
                      paddingLeft: 25,
                      paddingRight: 25,
                      textAlign: "center",
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* RIGHT image */}
              <div className="w-full lg:w-auto flex justify-center">
                <div className="relative w-full max-w-[434px] h-[260px] sm:h-[360px] lg:h-[468.8466px]">
                  <Image
                    src="/pika.png"
                    alt="Pikachu slab"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 434px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional spacing below this section */}
        <div className="h-10" />
      </div>
    </section>
  );
}
