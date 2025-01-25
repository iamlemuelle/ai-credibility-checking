import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#343541]">
      <div className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl font-bold text-center text-white">
          ClaimVerify AI
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          Submit claims for verification and see user credibility rankings based
          on the accuracy of their past claims.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            href="/verify"
            className="bg-[#10a37f] text-white px-6 py-3 rounded-lg text-center hover:bg-[#0e916f] transition-colors"
          >
            Post a claim
          </Link>
          <Link
            href="/rankings"
            className="border border-gray-600 text-white px-6 py-3 rounded-lg text-center hover:bg-gray-700 transition-colors"
          >
            View User Credibility Rankings
          </Link>
        </div>
      </div>
    </main>
  );
}
