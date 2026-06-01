import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  try {
    const diagnoses = await prisma.diagnosis.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      diagnoses,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch diagnoses",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

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