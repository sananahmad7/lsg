"use client";

import { useState } from "react";

export default function AddCardsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/addSlab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to save slab");
      }

      setMessage({ type: "success", text: "Slab registered successfully!" });
      (e.target as HTMLFormElement).reset(); // Clear form on success
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "p-3 bg-black border border-white/10 rounded-lg text-white focus:border-[#00D0FF] outline-none transition-all";
  const labelClass = "text-sm text-zinc-400";

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      <div className="border-b border-white/10 pb-4">
        <h1 className="text-3xl font-bold text-white">Add New Slabs</h1>
        <p className="text-zinc-400">
          Register new cards into the LSG database.
        </p>
      </div>

      {message.text && (
        <div
          className={`p-4 rounded-lg ${message.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}
        >
          {message.text}
        </div>
      )}

      <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Essential Identifiers */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Certification Number *</label>
              <input
                name="certificationNumber"
                required
                className={inputClass}
                placeholder="990900"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Card Name *</label>
              <input
                name="name"
                required
                className={inputClass}
                placeholder="e.g. Charizard"
              />
            </div>

            {/* Set Details */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Set Name *</label>
              <input
                name="set"
                required
                className={inputClass}
                placeholder="Base Set"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Card Number *</label>
              <input
                name="number"
                required
                className={inputClass}
                placeholder="4/102"
              />
            </div>

            {/* Attributes */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Year *</label>
              <input
                name="year"
                required
                className={inputClass}
                placeholder="1999"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Language *</label>
              <input
                name="language"
                required
                className={inputClass}
                placeholder="English"
              />
            </div>

            {/* Grades */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Overall Grade *</label>
              <input
                name="grade"
                required
                className={inputClass}
                placeholder="10"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Subgrades (Optional)</label>
              <input
                name="subgrade"
                className={inputClass}
                placeholder="C:10, E:10, S:10, Cr:9.5"
              />
            </div>

            {/* Extra Info */}
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Variant (Optional)</label>
              <input
                name="variant"
                className={inputClass}
                placeholder="1st Edition, Holo, etc."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>
                Cloudinary Image URL (Optional)
              </label>
              <input
                name="imageUrl"
                className={inputClass}
                placeholder="https://cloudinary.com/..."
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full py-4 bg-[#00D0FF] text-black font-bold rounded-xl hover:bg-[#00D0FF]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Save Card to Database"}
          </button>
        </form>
      </div>
    </div>
  );
}
