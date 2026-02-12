import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const certNumber = searchParams.get("certificationNumber");

  if (!certNumber) {
    return NextResponse.json({ error: "Missing cert number" }, { status: 400 });
  }

  try {
    const slab = await prisma.slab.findUnique({
      where: { certificationNumber: certNumber },
    });

    if (!slab) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(slab);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
