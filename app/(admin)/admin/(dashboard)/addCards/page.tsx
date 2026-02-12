"use client";

import { useState } from "react";
import Image from "next/image";

export default function AddCardsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // PERFORMANCE STATES: To store the URL as soon as upload finishes
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));

      // OPTIMIZATION: Start upload immediately after selection
      setIsUploadingImage(true);
      try {
        const url = await startEarlyUpload(selectedFile);
        setCloudinaryUrl(url);
      } catch (err) {
        console.error("Early upload failed", err);
      } finally {
        setIsUploadingImage(false);
      }
    } else {
      setPreview(null);
      setCloudinaryUrl(null);
    }
  };

  const startEarlyUpload = async (fileToUpload: File) => {
    // 1. Get Signature from API
    const signRes = await fetch("/api/sign-cloudinary");
    const { signature, timestamp } = await signRes.json();

    // 2. Prepare Data
    const formData = new FormData();
    formData.append("file", fileToUpload);
    formData.append("signature", signature);
    formData.append("timestamp", timestamp);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
    );

    // 3. Upload to Cloudinary
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData },
    );
    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    const rawFormData = new FormData(e.currentTarget);
    const data = Object.fromEntries(rawFormData.entries());

    try {
      // If image is still uploading because the user is super fast, wait for it
      let finalImageUrl = cloudinaryUrl;
      if (file && !finalImageUrl) {
        finalImageUrl = await startEarlyUpload(file);
      }

      // Step 2: Combine image URL with ALL form data
      const finalPayload = {
        ...data,
        imageUrl: finalImageUrl || data.imageUrl || null,
      };

      const response = await fetch("/api/addSlab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Failed to save slab");

      setMessage({
        type: "success",
        text: "Slab and Image registered successfully!",
      });

      // Reset state
      setFile(null);
      setPreview(null);
      setCloudinaryUrl(null);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      // SOLUTION: Check if err is an instance of Error to safely access .message
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "p-3 bg-black border border-white/10 rounded-lg text-white focus:border-[#00D0FF] outline-none transition-all w-full";
  const labelClass = "text-sm text-zinc-400 font-medium";

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10 px-4">
      <div className="border-b border-white/10 pb-4">
        <h1 className="text-3xl font-bold text-white">Add New Slabs</h1>
        <p className="text-zinc-400">
          Register new cards into the LSG database.
        </p>
      </div>

      {message.text && (
        <div
          className={`p-4 rounded-lg border ${
            message.type === "success"
              ? "bg-green-500/10 text-green-500 border-green-500/20"
              : "bg-red-500/10 text-red-500 border-red-500/20"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className={labelClass}>Variant (Optional)</label>
              <input
                name="variant"
                className={inputClass}
                placeholder="1st Edition, Holo, etc."
              />
            </div>

            {/* Photo Upload Section */}
            <div className="md:col-span-2 flex flex-col gap-4 p-5 bg-black/40 rounded-xl border border-dashed border-white/10">
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Card Photo Upload</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00D0FF] file:text-black hover:file:bg-[#00D0FF]/80 cursor-pointer"
                />
              </div>

              {preview && (
                <div className="relative w-32 h-44 rounded-lg border border-[#00D0FF]/30 overflow-hidden shadow-lg">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className={labelClass}>
                Manual Image URL (Optional Fallback)
              </label>
              <input
                name="imageUrl"
                className={inputClass}
                placeholder="Or paste a link directly..."
              />
            </div>
          </div>

          <button
            disabled={loading || isUploadingImage}
            className="w-full py-4 bg-[#00D0FF] text-black font-bold rounded-xl hover:bg-[#00D0FF]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploadingImage
              ? "Finishing Image Upload..."
              : loading
                ? "Saving Slab..."
                : "Save Card to Database"}
          </button>
        </form>
      </div>
    </div>
  );
}
