import AdminSidebar from "../../admin/AdminSidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt } from "@/lib/auth"; // Use your existing decrypt function

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Check for session cookie
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  // 2. If no session, redirect to login immediately
  if (!session) {
    redirect("/admin");
  }

  // 3. Optional: Verify session content
  try {
    await decrypt(session);
  } catch (error) {
    redirect("/admin");
  }

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r border-white/10 bg-zinc-950">
        <AdminSidebar />
      </aside>
      <main className="flex-1 md:pl-64 flex flex-col h-full overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto w-full">{children}</div>
      </main>
    </div>
  );
}
