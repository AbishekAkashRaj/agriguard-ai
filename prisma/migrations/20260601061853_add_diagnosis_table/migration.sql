-- CreateTable
CREATE TABLE "Diagnosis" (
    "id" TEXT NOT NULL,
    "diseaseName" TEXT NOT NULL,
    "confidence" INTEGER NOT NULL,
    "severity" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Diagnosis_pkey" PRIMARY KEY ("id")
);
