"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FIREBASE/config";

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Firebase user object has displayName, email, uid
        setUserName(user.displayName || user.email || user.uid);
      } else {
        router.push("/login"); // redirect if not logged in
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {userName}</h1>
        <p className="mb-6">This is your profile page.</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
