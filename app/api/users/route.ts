import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find({})
      .select("name credibilityScore verifiedClaims totalClaims")
      .sort({ credibilityScore: -1 });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }
}
