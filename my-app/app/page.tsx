// app/page.tsx
"use client";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My DSA Platform</h1>
        <p className="text-gray-600 mb-6">
          Please sign in or create an account to continue.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}
