"use client";

import React, { useEffect, useState } from "react";

type Insider = {
  id: number;
  email: string;
  createdAt: string;
};

export default function InsiderListPage() {
  const [emails, setEmails] = useState<Insider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmails() {
      try {
        const res = await fetch("/api/getInsiderList");
        const data = await res.json();
        if (res.ok) setEmails(data);
      } catch (err) {
        console.error("Failed to load emails", err);
      } finally {
        setLoading(false);
      }
    }
    fetchEmails();
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Insider Email List</h1>
        <p className="text-zinc-400">Total Subscribers: {emails.length}</p>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 text-[#00D0FF] border-b border-white/10">
              <th className="p-4 font-semibold">Email Address</th>
              <th className="p-4 font-semibold">Date Joined</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            {loading ? (
              <tr>
                <td colSpan={2} className="p-10 text-center animate-pulse">
                  Loading subscribers...
                </td>
              </tr>
            ) : emails.length === 0 ? (
              <tr>
                <td colSpan={2} className="p-10 text-center">
                  No subscribers found.
                </td>
              </tr>
            ) : (
              emails.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4">{item.email}</td>
                  <td className="p-4">
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
