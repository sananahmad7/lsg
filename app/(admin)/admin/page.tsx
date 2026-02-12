"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/admin/addCards");
        router.refresh();
      } else {
        const { error } = await res.json();
        setError(error || "Access Denied");
      }
    } catch (err) {
      setError("Network authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black font-sans antialiased">
      {/* Subtle Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-[440px] px-6">
        <div className="mb-12 text-center space-y-2">
          <h1 className="text-4xl font-light tracking-[0.2em] text-white">
            LSG<span className="font-bold">CORE</span>
          </h1>
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
            Management Interface v1.0
          </p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800/50 rounded-lg p-10 shadow-[0_20px_50px_rgba(0,0,0,1)]">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="group space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">
                  Identity
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="admin@lsg.com"
                  required
                  className="w-full bg-black border-b border-zinc-800 p-3 text-white placeholder-zinc-700 outline-none focus:border-white transition-colors duration-500"
                />
              </div>

              <div className="group space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">
                  Credential
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full bg-black border-b border-zinc-800 p-3 text-white placeholder-zinc-700 outline-none focus:border-white transition-colors duration-500"
                />
              </div>
            </div>

            {error && (
              <p className="text-center text-xs text-red-500 font-medium tracking-wide bg-red-500/5 py-2 border border-red-500/10">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 flex items-center justify-center bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#00D0FF] hover:text-white transition-all duration-300 disabled:opacity-20"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full animate-ping" />
                  Authenticating
                </div>
              ) : (
                "Authorize"
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-12 flex items-center justify-between px-2">
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-zinc-600 uppercase tracking-tighter">
              System Online
            </span>
          </div>
          <span className="text-[10px] text-zinc-700 uppercase tracking-tighter italic">
            Encrypted Connection
          </span>
        </div>
      </div>
    </div>
  );
}
