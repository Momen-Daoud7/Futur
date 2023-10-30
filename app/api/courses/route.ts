import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    // Check if the user is authenticated or not
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    // Create course
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.log("[COURSES]", error);
  }
}
