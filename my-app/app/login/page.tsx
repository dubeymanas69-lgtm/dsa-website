"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../FIREBASE/config";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email/Password login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // GitHub login
  const handleGitHubLogin = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("GitHub login success:", result.user);
      router.push("/profile");
    } catch (error) {
      console.error("GitHub login error:", error);
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google login success:", result.user);
      router.push("/profile");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {/* Email/Password form */}
        <form onSubmit={handleLogin} className="space-y-4">
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
            Sign In
          </button>
        </form>

        {/* GitHub login button */}
        <button
          onClick={handleGitHubLogin}
          className="w-full mt-4 bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sign in with GitHub
        </button>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
