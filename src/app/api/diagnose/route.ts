import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { success: false, message: "No image uploaded" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      diseaseName: "Tomato Leaf Blight",
      confidence: 92,
      severity: "Medium",
      recommendation:
        "Remove infected leaves, avoid overhead watering, improve air circulation, and apply a copper-based fungicide if symptoms continue.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Diagnosis failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}