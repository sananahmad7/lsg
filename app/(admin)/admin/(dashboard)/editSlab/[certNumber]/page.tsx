import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditSlabForm from "../../../../../../components/EditSlabForm";

export default async function EditSlabPage({
  params,
}: {
  params: Promise<{ certNumber: string }>;
}) {
  const { certNumber } = await params;

  // Fetch data on the server
  const slab = await prisma.slab.findUnique({
    where: { certificationNumber: certNumber },
  });

  if (!slab) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 lg:p-10 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Edit Slab:{" "}
          <span className="text-[#00D0FF]">{slab.certificationNumber}</span>
        </h1>
        <p className="text-zinc-400 mb-8">
          Update the details for this graded card.
        </p>

        {/* Pass the server-fetched data to the client form */}
        <EditSlabForm initialData={JSON.parse(JSON.stringify(slab))} />
      </div>
    </div>
  );
}
