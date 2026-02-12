import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic server-side validation
    const { certificationNumber, set, name, number, language, grade, year } =
      body;
    if (
      !certificationNumber ||
      !set ||
      !name ||
      !number ||
      !language ||
      !grade ||
      !year
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const newSlab = await prisma.slab.create({
      data: {
        certificationNumber,
        set,
        name,
        number,
        language,
        grade,
        year,
        variant: body.variant || null,
        subgrade: body.subgrade || null,
        imageUrl: body.imageUrl || null,
      },
    });

    return NextResponse.json(newSlab, { status: 201 });
  } catch (error: any) {
    // Handle unique constraint violation for certificationNumber
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Certification number already exists" },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
