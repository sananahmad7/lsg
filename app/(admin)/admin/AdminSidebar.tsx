// app/(admin)/admin/AdminSidebar.tsx
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdAddCircle, MdListAlt, MdLogout, MdEmail } from "react-icons/md";

const menuItems = [
  { name: "Add Cards", href: "/admin/addCards", icon: MdAddCircle },
  { name: "View Inventory", href: "/admin/allSlabs", icon: MdListAlt },
  { name: "Insider List", href: "/admin/insiderList", icon: MdEmail },
];

// Added onClose prop
export default function AdminSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (res.ok) {
        if (onClose) onClose(); // Close sidebar on logout
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="flex flex-col h-full p-4 gap-2">
      <div className="text-[#00D0FF] font-bold text-xl px-4 mb-6">
        LSG ADMIN
      </div>

      <div className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => onClose?.()} // Close sidebar when link is clicked
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === item.href
                ? "bg-[#00D0FF]/10 text-[#00D0FF]"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </div>

      <div className="pt-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
        >
          <MdLogout size={20} />
          Logout
        </button>
      </div>
    </nav>
  );
}
