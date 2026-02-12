import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const {
      id,
      certificationNumber,
      set,
      name,
      number,
      language,
      grade,
      year,
      variant,
      subgrade,
      imageUrl,
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Slab ID is missing" },
        { status: 400 },
      );
    }

    const updatedSlab = await prisma.slab.update({
      where: { id: Number(id) },
      data: {
        certificationNumber,
        set,
        name,
        number,
        language,
        grade,
        year,
        variant: variant || null,
        subgrade: subgrade || null,
        imageUrl: imageUrl || null,
      },
    });

    return NextResponse.json(updatedSlab, { status: 200 });
  } catch (error: unknown) {
    console.error("Update failed:", error);
    return NextResponse.json(
      { error: "Database update failed" },
      { status: 500 },
    );
  }
}
