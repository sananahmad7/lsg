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
  } catch (error: unknown) {
    // Handle unique constraint violation for certificationNumber
    // We check if error is an object with a 'code' property
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Certification number already exists" },
        { status: 409 },
      );
    }

    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
