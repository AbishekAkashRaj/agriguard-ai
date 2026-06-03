import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function GET() {
  const posts = await prisma.forumPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({
    success: true,
    posts,
  });
}

export async function POST(req: NextRequest) {
  const { title, content, author } = await req.json();

  const post = await prisma.forumPost.create({
    data: {
      title,
      content,
      author,
    },
  });

  return NextResponse.json({
    success: true,
    post,
  });
}