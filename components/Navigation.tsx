"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Verify Slab", href: "/verify-slab" },
  { label: "Services", href: "/services" },
  { label: "Grading Process", href: "/grading-process" },
  { label: "About Us", href: "/about-us" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="w-full bg-[#383838]">
      <div className="mx-auto flex h-[80px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-[70px]">
        {/* Left Logo (128x45) */}
        <Link href="/" className="flex items-center gap-[10px]">
          <Image
            src="/logo.png"
            alt="Logo"
            width={128}
            height={45}
            priority
            className="h-[45px] w-[128px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex min-w-0 items-center gap-[40px]">
          <div className="flex h-[50px] items-center gap-[40px] min-w-0">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "whitespace-nowrap text-center align-middle font-medium text-[18px] leading-[140%] tracking-[0%] transition-colors",
                    active
                      ? "text-[#00D0FF]"
                      : "text-white/80 hover:text-white",
                  ].join(" ")}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="inline-flex h-[50px] w-[134px] items-center justify-center gap-[3px] rounded-[12px] border border-[#00D0FF] bg-[#00D0FF] px-[25px] py-[11px] text-center align-middle font-bold text-[20px] leading-[140%] tracking-[0%] text-[#383838] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/90 hover:text-white"
        >
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-full bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-current transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#383838]">
          <nav className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "rounded-lg px-3 py-2 text-left font-medium text-[18px] leading-[140%] transition-colors",
                      active
                        ? "text-[#00D0FF] bg-white/5"
                        : "text-white/80 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-[50px] items-center justify-center gap-[3px] rounded-[12px] border border-[#00D0FF] bg-[#00D0FF] px-[25px] py-[11px] text-center font-bold text-[20px] leading-[140%] text-[#383838]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
