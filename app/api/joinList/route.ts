import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export async function POST(request: Request) {
  // Safely parse JSON
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const emailRaw = (body as any)?.email;

  // Validate type + basic presence
  if (typeof emailRaw !== "string") {
    return NextResponse.json(
      { error: "A valid email string is required" },
      { status: 400 },
    );
  }

  // Normalize + validate format
  const email = emailRaw.trim().toLowerCase();
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 },
    );
  }

  try {
    // Check for existing email
    const existing = await prisma.insiderEmailList.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: "This email is already in the list" },
        { status: 409 },
      );
    }

    // Create new entry
    await prisma.insiderEmailList.create({
      data: { email },
    });

    return NextResponse.json(
      { message: "Email added to Insider List successfully" },
      { status: 201 },
    );
  } catch (err) {
    // Extra safety: handle race-condition unique constraint collision
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      return NextResponse.json(
        { message: "This email is already in the list" },
        { status: 409 },
      );
    }

    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
