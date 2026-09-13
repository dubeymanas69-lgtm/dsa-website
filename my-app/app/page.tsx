"use client";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">DSA Platform</h1>
        <nav className="space-x-4">
          <a href="/login" className="hover:underline">Login</a>
          <a href="/signup" className="hover:underline">Signup</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-bold mb-4">Master DSA with Confidence</h1>
        <p className="text-lg max-w-2xl mb-6">
          Learn, practice, and compete with peers. Track your progress and climb the leaderboard while building strong foundations in Data Structures & Algorithms.
        </p>
        <div className="space-x-4">
          <a
            href="/signup"
            className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-200"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="bg-transparent border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-700"
          >
            Sign In
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">dY"s Structured Learning</h2>
          <p className="text-gray-600">
            Follow curated sheets and guided paths to strengthen your fundamentals step by step.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">dY"^ Progress Tracking</h2>
          <p className="text-gray-600">
            Monitor solved problems, streaks, and analytics to stay motivated and consistent.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">dY?+ Competitive Ranking</h2>
          <p className="text-gray-600">
            Join contests, compare with peers, and showcase your skills on the leaderboard.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to start your DSA journey?</h2>
        <a
          href="/signup"
          className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Sign Up Now
        </a>
      </section>
    </main>
  );
}
