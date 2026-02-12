"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiSearch, FiRefreshCcw } from "react-icons/fi";

type Slab = {
  id: number;
  certificationNumber: string;
  set: string;
  name: string;
  number: string;
  grade: string;
  year: string;
  imageUrl?: string;
};

export default function AllSlabsPage() {
  const [slabs, setSlabs] = useState<Slab[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSlabs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/allSlabs");
      const data = await res.json();
      setSlabs(data);
    } catch (err) {
      console.error("Failed to load slabs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlabs();
  }, []);

  const filteredSlabs = slabs.filter(
    (s) =>
      s.certificationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 lg:p-10 font-poppins">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-[#00D0FF]">Slab Inventory</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Manage and view all registered LSG graded cards.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by Cert # or Name..."
              className="w-full bg-zinc-900 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-[#00D0FF] outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={fetchSlabs}
            className="p-2 bg-zinc-900 border border-white/10 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <FiRefreshCcw className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-800/50 text-zinc-400 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Preview</th>
                <th className="px-6 py-4 font-semibold">Cert #</th>
                <th className="px-6 py-4 font-semibold">Card Details</th>
                <th className="px-6 py-4 font-semibold">Set / Year</th>
                <th className="px-6 py-4 font-semibold text-center">Grade</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={6} className="px-6 py-8 bg-zinc-900/20"></td>
                  </tr>
                ))
              ) : filteredSlabs.length > 0 ? (
                filteredSlabs.map((slab) => (
                  <tr
                    key={slab.id}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="relative w-12 h-16 rounded bg-[#1A1A1A] border border-white/5 overflow-hidden flex items-center justify-center">
                        {/* Validation: Checks if imageUrl exists, is not an empty string, 
       and starts with http to prevent 'Invalid URL' crashes.
    */}
                        {slab.imageUrl &&
                        slab.imageUrl.trim() !== "" &&
                        slab.imageUrl.startsWith("http") ? (
                          <Image
                            src={slab.imageUrl}
                            alt={slab.name}
                            fill
                            className="object-cover"
                            unoptimized // Useful for testing external Cloudinary links
                          />
                        ) : (
                          /* Fallback state when no image exists */
                          <div className="flex flex-col items-center gap-1 opacity-20">
                            <svg
                              className="w-5 h-5 text-zinc-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span className="text-[8px] uppercase tracking-tighter text-zinc-500 font-bold">
                              Empty
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-[#00D0FF] font-medium">
                      {slab.certificationNumber}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-white">
                        {slab.name}
                      </div>
                      <div className="text-xs text-zinc-500">
                        #{slab.number}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-300">{slab.set}</div>
                      <div className="text-xs text-zinc-500">{slab.year}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#00D0FF]/10 text-[#00D0FF] text-xs font-bold border border-[#00D0FF]/20">
                        {slab.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/verify?cert=${slab.certificationNumber}&step=result`}
                        className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        View <FiExternalLink />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-20 text-center text-zinc-500"
                  >
                    No slabs found in the database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
