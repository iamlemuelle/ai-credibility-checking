import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#343541]">
      <div className="max-w-md w-full space-y-8 bg-[#3e3f4b] p-8 rounded-lg shadow-xl">
        <div>
          <h1 className="text-3xl font-bold text-center text-white">
            Sign in to ClaimVerify AI
          </h1>
          <p className="mt-2 text-center text-gray-300">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-[#2a2b32] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10a37f] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-[#2a2b32] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#10a37f] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-[#2a2b32] text-[#10a37f] focus:ring-[#10a37f]"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="text-[#10a37f] hover:text-[#0e916f]"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#10a37f] text-white px-6 py-3 rounded-lg text-center hover:bg-[#0e916f] transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-gray-300">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#10a37f] hover:text-[#0e916f]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
