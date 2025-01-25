"use client";

import { useState } from "react";
import { api } from "../../lib/api";

export default function Verify() {
  const [claim, setClaim] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null); // To store feedback after submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!claim.trim() || isLoading) return;

    setIsLoading(true);
    setFeedback(null); // Reset feedback before submission

    try {
      // Call the API to submit the claim and get feedback
      const response = await api.submitClaim("6794e670fa7b73ad6627cb81", claim); // Pass user id and claim data

      // Update feedback with the response from the API
      setFeedback(response.feedback || "Unable to verify claim at the moment.");
    } catch (error) {
      console.error("Error verifying claim:", error);
      setFeedback(
        "An error occurred while verifying the claim. Please try again."
      );
    } finally {
      setIsLoading(false);
    }

    setClaim("");
  };

  return (
    <div className="flex h-screen flex-col bg-[#343541]">
      <div className="flex-1 max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-white mb-4">
          Verify Your Claim
        </h1>
        <p className="text-gray-400 mb-6">
          Enter the claim you want to verify. Once submitted, you'll receive
          feedback on whether it's a verified fact.
        </p>

        {/* Form to submit a claim */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#40414f] p-4 rounded-lg shadow-md"
        >
          <textarea
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            className="w-full bg-[#505560] text-white rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#10a37f]"
            rows={4}
            placeholder="Enter your claim here..."
            disabled={isLoading}
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#10a37f] text-white py-2 px-6 rounded-lg font-medium disabled:bg-gray-600"
            >
              {isLoading ? "Verifying..." : "Verify Claim"}
            </button>
          </div>
        </form>

        {/* Feedback Section */}
        {feedback && (
          <div className="mt-6 p-4 bg-[#444654] text-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Feedback:</h3>
            <p className="mt-2">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}
