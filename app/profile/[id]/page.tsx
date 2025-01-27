"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "../../../lib/api";

interface Claim {
  content: string;
  timestamp: string;
  status: "verified" | "false" | "unverified";
  verificationDetails?: string;
}

interface User {
  _id: string;
  name: string;
  credibilityScore: number;
  verifiedClaims: number;
  totalClaims: number;
  claims: Claim[];
}

const getCredibilityColor = (score: number) => {
  if (score < 30) return "text-red-500";
  if (score < 60) return "text-yellow-500";
  return "text-green-500";
};

export default function Profile() {
  const params = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const fetchedUser = await api.getUser(params.id as string);
        setUser(fetchedUser);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching the user");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#343541] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#343541] text-white flex items-center justify-center">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#343541] text-white flex items-center justify-center">
        User not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#343541] p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* User Stats */}
        <div className="bg-[#444654] rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-[#10a37f] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                {user.name}
              </h1>
              <p className="text-gray-400">Member</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-[#40414f] p-4 rounded-lg">
              <div
                className={`font-bold text-xl ${getCredibilityColor(
                  user.credibilityScore
                )}`}
              >
                {user.credibilityScore}%
              </div>
              <div className="text-gray-400">Credibility Score</div>
            </div>
            <div className="bg-[#40414f] p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">
                {user.verifiedClaims}
              </div>
              <div className="text-gray-400">Verified Claims</div>
            </div>
            <div className="bg-[#40414f] p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">
                {user.totalClaims}
              </div>
              <div className="text-gray-400">Total Claims</div>
            </div>
          </div>
        </div>

        {/* Claims History */}
        <div className="bg-[#444654] rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Claims History</h2>
          <div className="space-y-6">
            {user.claims.map((claim, index) => (
              <div
                key={index}
                className="border-b border-gray-700 last:border-b-0 pb-6 last:pb-0"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-white mb-2">{claim.content}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(claim.timestamp).toLocaleDateString()}
                    </p>
                    {claim.verificationDetails && (
                      <p className="mt-2 text-sm text-gray-300">
                        {claim.verificationDetails}
                      </p>
                    )}
                  </div>
                  <div
                    className={`ml-4 px-3 py-1 rounded-full text-sm ${
                      claim.status === "verified"
                        ? "bg-green-500/20 text-green-400"
                        : claim.status === "false"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {claim.status.charAt(0).toUpperCase() +
                      claim.status.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
