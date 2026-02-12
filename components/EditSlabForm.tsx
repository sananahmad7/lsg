"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define a type for your Slab data to avoid using 'any'
interface SlabData {
  id: number;
  certificationNumber: string;
  name: string;
  set: string;
  number: string;
  year: string;
  language: string;
  grade: string;
  subgrade?: string | null;
  variant?: string | null;
  imageUrl?: string | null;
  [key: string]: string | number | null | undefined; // Index signature for the mapping loop
}

export default function EditSlabForm({
  initialData,
}: {
  initialData: SlabData;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Removed unused 'file' state to fix the linter warning
  const [preview, setPreview] = useState<string | null>(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string | null>(
    initialData.imageUrl ?? null,
  );
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const [formData, setFormData] = useState<SlabData>(initialData);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
      setIsUploadingImage(true);
      try {
        const signRes = await fetch("/api/sign-cloudinary");
        const { signature, timestamp } = await signRes.json();
        const uploadData = new FormData();
        uploadData.append("file", selectedFile);
        uploadData.append("signature", signature);
        uploadData.append("timestamp", timestamp);
        uploadData.append(
          "api_key",
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
        );
        uploadData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
        );

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: uploadData },
        );
        const data = await res.json();
        setCloudinaryUrl(data.secure_url);
      } catch (err) {
        console.error("Image upload failed", err);
      } finally {
        setIsUploadingImage(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/editSlab", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, imageUrl: cloudinaryUrl }),
      });
      if (!res.ok) throw new Error("Update failed");
      setMessage({ type: "success", text: "Slab updated! Redirecting..." });
      setTimeout(() => router.push("/admin/allSlabs"), 1500);
    } catch (err: unknown) {
      // Fix: Check if err is an instance of Error to access .message safely
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "p-3 bg-black border border-white/10 rounded-lg text-white focus:border-[#00D0FF] outline-none w-full transition-all";
  const labelClass = "text-sm text-zinc-400 font-medium";

  return (
    <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
      {message.text && (
        <div
          className={`p-4 mb-6 rounded-lg border ${message.type === "success" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-red-500/10 text-red-500 border-red-500/20"}`}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "certificationNumber",
            "name",
            "set",
            "number",
            "year",
            "language",
            "grade",
            "subgrade",
            "variant",
          ].map((field) => (
            <div key={field} className="flex flex-col gap-2">
              <label className={labelClass}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                name={field}
                value={(formData[field] as string) || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className={inputClass}
              />
            </div>
          ))}

          {/* IMPROVED PHOTO UPLOAD SECTION */}
          <div className="md:col-span-2 flex flex-col gap-4 p-4 bg-black/40 rounded-xl border border-dashed border-white/10">
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Update Card Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-zinc-400
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#00D0FF] file:text-black
                  hover:file:bg-[#00D0FF]/80 cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-6">
              {(preview || cloudinaryUrl) && (
                <div className="relative w-32 h-44 rounded-lg overflow-hidden border border-[#00D0FF]/30 shadow-2xl">
                  <Image
                    src={(preview || cloudinaryUrl) ?? ""}
                    alt="Preview"
                    fill
                    className={`object-cover ${isUploadingImage ? "opacity-40" : "opacity-100"} transition-opacity`}
                    unoptimized
                  />
                  {isUploadingImage && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-[#00D0FF] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              )}
              {isUploadingImage && (
                <p className="text-[#00D0FF] text-sm font-medium animate-pulse">
                  Uploading to Cloudinary...
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          disabled={loading || isUploadingImage}
          className="w-full py-4 bg-[#00D0FF] text-black font-bold rounded-xl hover:bg-[#00D0FF]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUploadingImage
            ? "Wait for Image Upload..."
            : loading
              ? "Saving..."
              : "Update Slab Details"}
        </button>
      </form>
    </div>
  );
}
