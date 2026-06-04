import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  try {
    const totalUsers = await prisma.user.count();
    const totalDiagnoses = await prisma.diagnosis.count();
    const totalForumPosts = await prisma.forumPost.count();

    return NextResponse.json({
      success: true,
      totalUsers,
      totalDiagnoses,
      totalForumPosts,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to load dashboard stats",
      },
      { status: 500 }
    );
  }
}