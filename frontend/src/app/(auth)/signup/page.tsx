"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    try {
      await api.post("/auth/signup", { email, password });
      window.location.href = "/auth/login";
    } catch (err) {
      alert("Signup failed");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen text-black">
      <h1 className="text-3xl font-bold">Signup</h1>

      <div className="mt-4 flex flex-col gap-3 w-80">
        <input
          className="border p-2 rounded"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleSignup} className="bg-green-600 text-white p-2 rounded">
          Signup
        </button>
      </div>
    </main>
  );
}
