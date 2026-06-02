import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// UPDATE a segment
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const segmentId = parseInt(id);
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

    const segment = await prisma.segment.update({
      where: { id: segmentId },
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

    return NextResponse.json(segment);
  } catch (error) {
    console.error("Failed to update segment:", error);
    return NextResponse.json(
      { message: "Failed to update segment" },
      { status: 500 }
    );
  }
}

// DELETE a segment
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const segmentId = parseInt(id);

    // Check if segment has any registrations
    const registrationCount = await prisma.registration.count({
      where: { segmentId },
    });

    if (registrationCount > 0) {
      return NextResponse.json(
        { message: "Cannot delete segment with existing registrations" },
        { status: 400 }
      );
    }

    await prisma.segment.delete({
      where: { id: segmentId },
    });

    return NextResponse.json({ message: "Segment deleted successfully" });
  } catch (error) {
    console.error("Failed to delete segment:", error);
    return NextResponse.json(
      { message: "Failed to delete segment" },
      { status: 500 }
    );
  }
}
