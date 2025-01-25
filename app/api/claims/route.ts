import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";

export async function POST(req: Request) {
  try {
    const { userId, claim } = await req.json();

    await connectDB();

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.claims.push({
      content: claim,
      timestamp: new Date(),
      status: "unverified",
    });
    user.totalClaims += 1;
    await user.save();

    return NextResponse.json(
      { message: "Claim submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error submitting claim" },
      { status: 500 }
    );
  }
}
