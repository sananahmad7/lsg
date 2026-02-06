import Image from "next/image";
import Link from "next/link";

export default function GradingWithCare() {
  return (
    <section className="w-full bg-black">
      {/* Whole component frame: 1440 x 607, padding 25/70, radius 12, border 1 */}
      <div className="mx-auto w-full max-w-[1440px] px-0">
        <div
          className="w-full   bg-black"
          style={{
            height: 607,

            paddingTop: 25,
            paddingRight: 70,
            paddingBottom: 25,
            paddingLeft: 70,
          }}
        >
          {/* Inner content container: 1179.525 x 488, gap 97 */}
          <div
            className="mx-auto flex items-center justify-between"
            style={{
              width: 1179.5250244140625,
              height: 488,
              gap: 97,
            }}
          >
            {/* LEFT: 715 x 423 */}
            <div
              className="flex flex-col"
              style={{
                width: 715,
                height: 423,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {/* Heading wrapper: 715 x 66 */}
              <div
                className="flex items-center"
                style={{
                  width: 715,
                  height: 66,
                }}
              >
                <h2
                  className="text-[#00D0FF] capitalize font-semibold text-left"
                  style={{
                    width: 678,
                    fontSize: 44,
                    lineHeight: "100%",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Grading With Care &amp; Protection
                </h2>
              </div>

              {/* Description: 678 x 217 */}
              <div
                className="mt-[18px]"
                style={{
                  width: 678,
                  height: 217,
                }}
              >
                <p
                  className="text-white/70 font-medium"
                  style={{
                    fontSize: 22,
                    lineHeight: "140%",
                    letterSpacing: "-0.01em",
                  }}
                >
                  At LSG, we grade cards using our own scale, and we only work
                  with cards from our own collection. Every slab is sealed and
                  secured for long-term preservation, with attention to
                  condition, presentation, and collector value.
                  <br />
                  <br />
                  We clean the card moderately (no tampering), seal it with
                  tamper-proof slabs, and display it in its best form — ready
                  for any collection.
                </p>
              </div>

              {/* Button sits lower like screenshot */}
              <div className="mt-auto">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-[12px] border"
                  style={{
                    width: 237,
                    height: 60,
                    paddingTop: 11,
                    paddingBottom: 11,
                    paddingLeft: 25,
                    paddingRight: 25,
                    borderWidth: 1,
                    borderColor: "#00D0FF",
                    backgroundColor: "#00D0FF",
                    color: "#062126",
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "151%",
                    textAlign: "center",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* RIGHT: 433.712 x 468.847 (image only) */}
            <div
              className="relative"
              style={{
                width: 433.7119445800781,
                height: 468.84661865234375,
              }}
            >
              <Image
                src="/pika.png"
                alt="Pikachu slab"
                fill
                priority
                sizes="434px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
