"use client";

import { logout } from "@/lib/auth";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">DevOps App</h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1.5 rounded"
      >
        Logout
      </button>
    </nav>
  );
}
