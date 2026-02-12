import { SignJWT, jwtVerify, type JWTPayload as JosePayload } from "jose";
import { cookies } from "next/headers";

// Define the structure of your user data in the token
interface JWTPayload extends JosePayload {
  id: number | string;
  email: string;
  name?: string | null;
}

const secretKey = process.env.JWT_SECRET || "your-secret-key-change-me";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });

  // Cast the payload to our specific interface
  return payload as JWTPayload;
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;

  try {
    return await decrypt(session);
  } catch (error) {
    console.error("Failed to decrypt session:", error);
    return null;
  }
}
