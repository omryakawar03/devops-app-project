"use client";
import { useState } from "react";
import { api } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen text-black">
      <h1 className="text-3xl font-bold">Login</h1>

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
        <button onClick={handleLogin} className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </main>
  );
}
