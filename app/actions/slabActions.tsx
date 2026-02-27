"use server";

import { prisma } from "@/lib/prisma"; // Adjust this path based on your prisma client location

export async function getCollectionSlabs() {
  try {
    // Fetch only certificationNumber, imageUrl, and name (for alt text)
    const slabs = await prisma.slab.findMany({
      select: {
        certificationNumber: true,
        imageUrl: true,
        name: true,
      },
      take: 4, // Fetch the 4 cards for the section
      orderBy: { createdAt: "desc" },
    });
    return slabs;
  } catch (error) {
    console.error("Failed to fetch slabs:", error);
    return [];
  }
}
