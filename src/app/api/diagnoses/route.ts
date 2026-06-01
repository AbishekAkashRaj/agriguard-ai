import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function POST() {
  try {
    const diagnosis = await prisma.diagnosis.create({
      data: {
        diseaseName: "Leaf Blight",
        confidence: 92,
        severity: "Medium",
        imageUrl: null,
      },
    });

    return NextResponse.json({
      success: true,
      diagnosis,
    });
  } catch (error) {
    console.error("DIAGNOSIS_SAVE_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save diagnosis",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Diagnosis API is working. Use POST to save data.",
  });
}