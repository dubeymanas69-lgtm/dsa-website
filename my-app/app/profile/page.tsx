"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FIREBASE/config";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login"); // redirect if not logged in
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user?.email}</h1>
        <p>UID: {user?.uid}</p>
        <p>Provider: {user?.providerData[0]?.providerId}</p>
        <img
  src={user?.photoURL || "/default-avatar.png"}
  alt="Profile"
  className="w-16 h-16 rounded-full"
/>
<p>{user?.displayName}</p>
<p>{user?.email}</p>


        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
