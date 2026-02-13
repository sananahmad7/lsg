import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch all emails from the database
    const emails = await prisma.insiderEmailList.findMany({
      orderBy: {
        createdAt: "desc", // Newest signups first
      },
    });

    return NextResponse.json(emails);
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch insider list" },
      { status: 500 },
    );
  }
}
