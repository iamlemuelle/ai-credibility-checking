'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  _id: string;
  name: string;
  credibilityScore: number;
  verifiedClaims: number;
  totalClaims: number;
}

export default function Rankings() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // TODO: Fetch users from API
    // For now, using mock data
    setUsers([
      { _id: '1', name: 'John Doe', credibilityScore: 95, verifiedClaims: 45, totalClaims: 50 },
      { _id: '2', name: 'Jane Smith', credibilityScore: 88, verifiedClaims: 35, totalClaims: 42 },
      { _id: '3', name: 'Bob Johnson', credibilityScore: 76, verifiedClaims: 22, totalClaims: 35 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-[#343541] p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">User Credibility Rankings</h1>
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
                        {user.verifiedClaims} verified of {user.totalClaims} total claims
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#10a37f] font-bold text-xl">
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