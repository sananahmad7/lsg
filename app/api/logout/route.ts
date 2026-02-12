import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Access the cookies and delete the "session" cookie
    const cookieStore = await cookies();
    cookieStore.set("session", "", {
      expires: new Date(0), // Sets expiration to the past to delete it
      path: "/",
    });

    return NextResponse.json({ message: "Logged out successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
  }
}
