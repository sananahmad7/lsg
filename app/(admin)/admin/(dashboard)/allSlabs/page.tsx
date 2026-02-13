"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiExternalLink,
  FiSearch,
  FiRefreshCcw,
  FiEdit3,
  FiTrash2,
} from "react-icons/fi";

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
      console.error("Failed to load slabs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlabs();
  }, []);

  const onDelete = async (id: number) => {
    if (
      !confirm(
        "Are you sure you want to delete this slab? This action cannot be undone.",
      )
    )
      return;

    try {
      const res = await fetch(`/api/deleteSlab?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        // Optimistic UI update
        setSlabs((prev) => prev.filter((slab) => slab.id !== id));
      } else {
        alert("Failed to delete slab");
      }
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  const filteredSlabs = slabs.filter(
    (s) =>
      s.certificationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 lg:p-10 font-poppins">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-[#00D0FF]">Slab Inventory</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Manage, edit, and delete registered LSG graded cards.
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
                        {slab.imageUrl &&
                        slab.imageUrl.trim() !== "" &&
                        slab.imageUrl.startsWith("http") ? (
                          <Image
                            src={slab.imageUrl}
                            alt={slab.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-1 opacity-20">
                            <FiTrash2 className="w-5 h-5 text-zinc-500" />
                            <span className="text-[8px] uppercase font-bold text-zinc-500">
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
                    <td className="px-6 py-4">
                      <div className="flex justify-end items-center gap-3">
                        <Link
                          href={`/admin/editSlab/${slab.certificationNumber}`}
                          className="p-2 text-zinc-400 hover:text-[#00D0FF] hover:bg-[#00D0FF]/10 rounded-lg transition-all"
                          title="Edit Slab"
                        >
                          <FiEdit3 size={18} />
                        </Link>
                        <button
                          onClick={() => onDelete(slab.id)}
                          className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                          title="Delete Slab"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-20 text-center text-zinc-500"
                  >
                    No slabs found.
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
