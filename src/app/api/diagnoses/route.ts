import { NextRequest, NextResponse } from "next/server";
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

export async function POST(req: NextRequest) {
  try {
    const { diseaseName, confidence, severity, imageUrl } = await req.json();

    const diagnosis = await prisma.diagnosis.create({
      data: {
        diseaseName,
        confidence,
        severity,
        imageUrl: imageUrl || null,
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