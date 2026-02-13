// app/(admin)/admin/(dashboard)/layout.tsx
"use client"; // Change to client component to manage state, or move state to a wrapper
import AdminSidebar from "../../admin/AdminSidebar";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black overflow-hidden relative">
      {/* Mobile Header / Status Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-zinc-950 border-b border-white/10 flex items-center justify-between px-6 z-[60]">
        <div className="text-[#00D0FF] font-bold text-lg">LSG ADMIN</div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white p-2 hover:bg-white/5 rounded-lg"
        >
          {isSidebarOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Sidebar Overlay (Mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[70] md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Now dynamic for mobile */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-[80] w-64 bg-zinc-950 border-r border-white/10 flex flex-col transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:z-50
      `}
      >
        {/* Pass close function to sidebar so it closes when a link is clicked */}
        <AdminSidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto pt-16 md:pt-0">
        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">{children}</div>
      </main>
    </div>
  );
}
