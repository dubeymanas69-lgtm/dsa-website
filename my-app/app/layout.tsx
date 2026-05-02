// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My DSA Platform",
  description: "University DSA platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Shared Navbar */}
        <header className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold">DSA Platform</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/profile" className="hover:underline">Profile</a>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/signup" className="hover:underline">Signup</a>
          </nav>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
