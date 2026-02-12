import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Prevents static caching of database results

export async function GET() {
  try {
    const slabs = await prisma.slab.findMany({
      orderBy: {
        createdAt: "desc", // Latest entries first
      },
    });

    return NextResponse.json(slabs, { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch slabs" },
      { status: 500 },
    );
  }
}
