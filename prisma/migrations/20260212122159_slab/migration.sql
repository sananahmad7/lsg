-- CreateTable
CREATE TABLE "Slab" (
    "id" SERIAL NOT NULL,
    "certificationNumber" TEXT NOT NULL,
    "set" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "variant" TEXT,
    "grade" TEXT NOT NULL,
    "subgrade" TEXT,
    "year" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slab_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Slab_certificationNumber_key" ON "Slab"("certificationNumber");
