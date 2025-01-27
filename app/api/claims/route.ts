import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY ||
    "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",
  baseURL: "https://api.perplexity.ai",
});

type ChatCompletionMessageParam = {
  role: "system" | "user";
  content: string;
  name?: string; // Optional "name" property
};

export async function POST(req: Request) {
  try {
    const { userId, claim } = await req.json();

    // Connect to the database
    await connectDB();

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Submit the claim to the database
    user.claims.push({
      content: claim,
      timestamp: new Date(),
      status: "unverified",
    });
    user.totalClaims += 1;
    await user.save();

    // Call OpenAI to verify the claim
    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are an artificial intelligence assistant tasked with fact-checking claims. Also, you need to provide a percentage of how much the claim is true. The percentage should be between 0 and 100. If the claim is false, you should return a percentage of 0. Calculate the percentage based on how much the information is credible. Also, return not more than one percentage",
      },
      {
        role: "user",
        content: claim,
      },
    ];

    // Get AI's feedback on the claim
    const aiResponse = await openai.chat.completions.create({
      model: "sonar", // Use an appropriate model like "gpt-4" or any other available model
      messages: messages,
    });

    const aiFeedback = aiResponse.choices[0].message.content; // Extract the feedback from the response

    const percentageMatch = aiFeedback.match(/\*\*(\d+(\.\d+)?)\s?%/);
    const claimAccuracy = percentageMatch
      ? parseFloat(percentageMatch[1])
      : null;

    if (isNaN(claimAccuracy)) {
      return NextResponse.json(
        { error: "Failed to extract valid truth percentage from AI response" },
        { status: 500 }
      );
    }

    user.claims[user.claims.length - 1].claimAccuracy = claimAccuracy;

    // Update claim status based on the accuracy
    const userVerificationStatus = (user.claims[user.claims.length - 1].status =
      claimAccuracy < 60 ? "unverified" : "verified");

    if (userVerificationStatus === "verified") {
      user.verifiedClaims += 1;
    }

    await user.save();

    // Compute the new credibility score based on all claims
    const totalAccuracy = user.claims.reduce(
      (acc, claim) => acc + claim.claimAccuracy,
      0
    );
    const averageAccuracy = totalAccuracy / user.totalClaims;

    // Update the credibility score (you can adjust the weighting if needed)
    user.credibilityScore = averageAccuracy;

    await user.save();

    // Return response with feedback from OpenAI
    return NextResponse.json(
      { message: "Claim submitted successfully", feedback: aiFeedback },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error submitting claim" },
      { status: 500 }
    );
  }
}
