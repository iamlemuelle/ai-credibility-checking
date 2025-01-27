"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "../../lib/api";

interface User {
  _id: string;
  name: string;
  credibilityScore: number;
  verifiedClaims: number;
  totalClaims: number;
}

export default function Rankings() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.getUsers();
        console.log(response);
        setUsers(response);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const getCredibilityColor = (score: number) => {
    if (score < 30) return "text-red-500";
    if (score < 60) return "text-yellow-500";
    return "text-green-500";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#343541] p-4">
        <div className="max-w-4xl mx-auto text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#343541] p-4">
        <div className="max-w-4xl mx-auto text-white">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#343541] p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">
          User Credibility Rankings
        </h1>
        <div className="bg-[#444654] rounded-lg shadow-lg overflow-hidden">
          {users.map((user, index) => (
            <Link
              href={`/profile/${user._id}`}
              key={user._id}
              className="block hover:bg-[#40414f] transition-colors border-b border-gray-700 last:border-b-0"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-[#10a37f] rounded-full flex items-center justify-center text-white font-bold">
                      #{index + 1}
                    </div>
                    <div>
                      <h2 className="text-white font-semibold">{user.name}</h2>
                      <p className="text-gray-400 text-sm">
                        {user.verifiedClaims} verified of {user.totalClaims}{" "}
                        total claims
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-bold text-xl ${getCredibilityColor(
                        user.credibilityScore
                      )}`}
                    >
                      {user.credibilityScore}%
                    </div>
                    <div className="text-gray-400 text-sm">
                      Credibility Score
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
