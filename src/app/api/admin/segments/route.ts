import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all segments for admin
export async function GET() {
  try {
    const segments = await prisma.segment.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(segments);
  } catch (error) {
    console.error("Failed to fetch segments:", error);
    return NextResponse.json(
      { message: "Failed to fetch segments" },
      { status: 500 }
    );
  }
}

// CREATE a new segment
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      description,
      rules,
      prizePool,
      category,
      type,
      difficulty,
      teamSize,
      fee,
      deadline,
      location,
      scheduleText,
      ruleBookUrl,
      highlights,
      status,
      imageUrl,
    } = body;

    if (!name || !description) {
      return NextResponse.json(
        { message: "Name and description are required" },
        { status: 400 }
      );
    }

    const segment = await prisma.segment.create({
      data: {
        name,
        description,
        rules: rules || "",
        prizePool: prizePool || "Not Specified",
        category: category || "General",
        type: type || "Team",
        difficulty: difficulty || "Medium",
        teamSize: teamSize || "TBA",
        fee: fee || "TBA",
        deadline: deadline || "TBA",
        location: location || "TBA",
        scheduleText: scheduleText || "TBA",
        ruleBookUrl: ruleBookUrl || null,
        highlights: Array.isArray(highlights)
          ? highlights
          : String(highlights || "")
              .split("\n")
              .map((item) => item.trim())
              .filter(Boolean),
        status: status || "active",
        imageUrl: imageUrl || null,
      },
    });

    return NextResponse.json(segment, { status: 201 });
  } catch (error) {
    console.error("Failed to create segment:", error);
    return NextResponse.json(
      { message: "Failed to create segment" },
      { status: 500 }
    );
  }
}
