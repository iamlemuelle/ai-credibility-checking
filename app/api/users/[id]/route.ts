import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const user = await User.findById(params.id).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
  }
}
