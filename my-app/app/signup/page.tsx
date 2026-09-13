"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../FIREBASE/config";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email/Password signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful!");
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // GitHub signup/login
  const handleGitHubSignup = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("GitHub signup success:", result.user);
      router.push("/profile");
    } catch (error) {
      console.error("GitHub signup error:", error);
    }
  };

  // Google signup/login
  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google signup success:", result.user);
      router.push("/profile");
    } catch (error) {
      console.error("Google signup error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        {/* Email/Password form */}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border p-2 rounded"
          />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border p-2 rounded"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* GitHub signup button */}
        <button
          onClick={handleGitHubSignup}
          className="w-full mt-4 bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sign up with GitHub
        </button>

        {/* Google signup button */}
        <button
          onClick={handleGoogleSignup}
          className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
