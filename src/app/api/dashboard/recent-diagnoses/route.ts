import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  try {
    const diagnoses = await prisma.diagnosis.findMany({
      take: 5,
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
        message: "Failed to load recent diagnoses",
      },
      { status: 500 }
    );
  }
}